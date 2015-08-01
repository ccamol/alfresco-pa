package com.intellego.parquearauco.workflow.baseprocessorextension;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import org.alfresco.model.ContentModel;
import org.alfresco.repo.processor.BaseProcessorExtension;
import org.alfresco.repo.security.authentication.AuthenticationUtil;
import org.alfresco.repo.workflow.activiti.ActivitiScriptNode;
import org.alfresco.service.cmr.model.FileExistsException;
import org.alfresco.service.cmr.model.FileFolderService;
import org.alfresco.service.cmr.model.FileInfo;
import org.alfresco.service.cmr.model.FileNotFoundException;
import org.alfresco.service.cmr.repository.ChildAssociationRef;
import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.service.cmr.repository.NodeService;
import org.alfresco.service.cmr.repository.StoreRef;
import org.alfresco.service.cmr.search.ResultSet;
import org.alfresco.service.cmr.search.SearchService;
import org.alfresco.service.cmr.workflow.WorkflowInstance;
import org.alfresco.service.cmr.workflow.WorkflowPath;
import org.alfresco.service.cmr.workflow.WorkflowService;
import org.alfresco.service.cmr.workflow.WorkflowTask;
import org.alfresco.service.namespace.NamespaceService;
import org.alfresco.service.namespace.QName;
import org.alfresco.util.ISO9075;

public class WorkflowUtils extends BaseProcessorExtension{

	private NodeService nodeService;
	private SearchService searchService;
	private WorkflowService workflowService;
	private FileFolderService fileFolderService;

	public String getPackageNodeRef(final String taskId, final String uuid){
		
		String id = new String();
		WorkflowTask task = workflowService.getTaskById(taskId);
		WorkflowPath path = task.getPath();
		WorkflowInstance instance = path.getInstance();
		
		NodeRef itemPackage = instance.getWorkflowPackage();
		
		if(itemPackage!=null){
			id="workspace://SpacesStore/" + itemPackage.getId();
		}

		System.out.println("Package: " + id);
		return id;
		
	}	
	public String getNodeList(final String taskId){
		
		String nodes = new String();
		WorkflowTask task = workflowService.getTaskById(taskId);
		WorkflowPath path = task.getPath();
		WorkflowInstance instance = path.getInstance();
		
		NodeRef itemPackage = instance.getWorkflowPackage();
		List<ChildAssociationRef> childs = nodeService.getChildAssocs(itemPackage);
		
		boolean first = true;
		for(ChildAssociationRef each : childs){
			if(first){
				nodes = nodes + "workspace://SpacesStore/" + each.getChildRef().getId();
				first=false;
			}else{
				nodes = nodes + ",workspace://SpacesStore/" + each.getChildRef().getId();
			}
		}
		
		System.out.println("Package: " + nodes);
		return nodes;
		
	}
	

	public String publishPackageNodes(final String taskId){

		WorkflowTask task = workflowService.getTaskById("activiti$" + taskId);
		WorkflowPath path = task.getPath();
		WorkflowInstance instance = path.getInstance();
		
		NodeRef itemPackage = instance.getWorkflowPackage();
		List<ChildAssociationRef> childs = nodeService.getChildAssocs(itemPackage);

		Map<QName, Serializable> properties = task.getProperties();
		String year = String.valueOf(properties.get(QName.createQName("http://www.info2000.cl/model/workflow/1.0", "year")));
		String month =String.valueOf(properties.get(QName.createQName("http://www.info2000.cl/model/workflow/1.0", "month")));
		NodeRef periodFolder = createPeridoFolder(month+year);
		
		for(ChildAssociationRef each : childs){
			try {
				fileFolderService.move(each.getChildRef(), periodFolder, null);
			} catch (FileExistsException e) {
				
				System.out.println(e.toString());
			} catch (FileNotFoundException e) {
				System.out.println(e.toString());
			}
		}

		return null;
		
	}

	public String addDocument(final String taskId, final String uuid){
		
		AuthenticationUtil.runAs(new AuthenticationUtil.RunAsWork<String>(){
			public String doWork(){
				try{

					StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
					ResultSet resultSet=searchService.query(storeRef,SearchService.LANGUAGE_LUCENE, "@sys\\:node-uuid:"+uuid);
					if(resultSet.length()>0){
						//QName associationName = QName.createQName("http://www.alfresco.org/model/bpm/1.0", "packageContains");
						NodeRef node = resultSet.getNodeRef(0);

						WorkflowTask task = workflowService.getTaskById(taskId);
						WorkflowPath path = task.getPath();
						WorkflowInstance instance = path.getInstance();
						NodeRef itemPackage = instance.getWorkflowPackage();
						
						 nodeService.addChild(itemPackage, node, ContentModel.ASSOC_CONTAINS,
								 QName.createQName(NamespaceService.CONTENT_MODEL_1_0_URI,
					             QName.createValidLocalName((String)getNodeService().getProperty(node, ContentModel.PROP_NAME))));
					}		
					
				}catch(Exception e){
					e.printStackTrace();
				}
				return null;
			}
		},"admin");
		
		return "Ok";
		
	}
	
	private NodeRef createPeridoFolder(String period) {
		
		StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
		NodeRef destination = null;

		try{
			//Emaresa folder
			ResultSet resultSet = searchService.query(storeRef , SearchService.LANGUAGE_LUCENE, "PATH:\"/app:company_home/cm:Emaresa\"");
			if(resultSet.length()==0){
				resultSet = searchService.query(storeRef , SearchService.LANGUAGE_LUCENE, "PATH:\"/app:company_home\"");				
				destination = resultSet.getNodeRef(0);
				fileFolderService.create(destination, "Emaresa", ContentModel.TYPE_FOLDER);
			}

			resultSet = searchService.query(storeRef , SearchService.LANGUAGE_LUCENE, "PATH:\"/app:company_home/cm:Emaresa/cm:CP\"");
			if(resultSet.length()==0){
				resultSet = searchService.query(storeRef , SearchService.LANGUAGE_LUCENE, "PATH:\"/app:company_home/cm:Emaresa\"");				
				destination = resultSet.getNodeRef(0);
				fileFolderService.create(destination, "CP", ContentModel.TYPE_FOLDER);
			}

			
			resultSet = searchService.query(storeRef , SearchService.LANGUAGE_LUCENE, "PATH:\"/app:company_home/cm:Emaresa/cm:CP" + ISO9075.encode(period) + "\"");
			if(resultSet.length()==0){
				resultSet = searchService.query(storeRef , SearchService.LANGUAGE_LUCENE, "PATH:\"/app:company_home/cm:Emaresa/cm:CP\"");				
				destination = resultSet.getNodeRef(0);
				FileInfo fileInfo = fileFolderService.create(destination, period, ContentModel.TYPE_FOLDER);
				destination = fileInfo.getNodeRef();
			}else{
				destination = resultSet.getNodeRef(0);
			}
		} catch(Exception e){ 
			System.out.println(e.toString());
		}
		return destination;

	}

	private NodeRef createTaskFolder(String taskId) {
		
		StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
		NodeRef destination = null;

		try{
			//Emaresa folder
			ResultSet resultSet = searchService.query(storeRef , SearchService.LANGUAGE_LUCENE, "PATH:\"/app:company_home/cm:CP\"");
			if(resultSet.length()==0){
				resultSet = searchService.query(storeRef , SearchService.LANGUAGE_LUCENE, "PATH:\"/app:company_home\"");				
				destination = resultSet.getNodeRef(0);
				fileFolderService.create(destination, "CP", ContentModel.TYPE_FOLDER);
			}

			
			resultSet = searchService.query(storeRef , SearchService.LANGUAGE_LUCENE, "PATH:\"/app:company_home/cm:CP/cm:" + ISO9075.encode(taskId) + "\"");
			if(resultSet.length()==0){
				resultSet = searchService.query(storeRef , SearchService.LANGUAGE_LUCENE, "PATH:\"/app:company_home/cm:CP\"");				
				destination = resultSet.getNodeRef(0);
				FileInfo fileInfo = fileFolderService.create(destination, taskId, ContentModel.TYPE_FOLDER);
				destination = fileInfo.getNodeRef();
			}else{
				destination = resultSet.getNodeRef(0);
			}
		} catch(Exception e){ 
			System.out.println(e.toString());
		}
		return destination;

	}

	
	public NodeService getNodeService() {
		return nodeService;
	}

	public void setNodeService(NodeService nodeService) {
		this.nodeService = nodeService;
	}

	public SearchService getSearchService() {
		return searchService;
	}

	public void setSearchService(SearchService searchService) {
		this.searchService = searchService;
	}

	public WorkflowService getWorkflowService() {
		return workflowService;
	}

	public void setWorkflowService(WorkflowService workflowService) {
		this.workflowService = workflowService;
	}

	public FileFolderService getFileFolderService() {
		return fileFolderService;
	}

	public void setFileFolderService(FileFolderService fileFolderService) {
		this.fileFolderService = fileFolderService;
	}



	
}