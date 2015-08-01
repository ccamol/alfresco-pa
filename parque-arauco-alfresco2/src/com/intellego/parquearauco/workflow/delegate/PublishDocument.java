package com.intellego.parquearauco.workflow.delegate;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.activiti.engine.delegate.DelegateExecution;
import org.activiti.engine.delegate.Expression;
import org.activiti.engine.delegate.JavaDelegate;
import org.activiti.engine.impl.cfg.ProcessEngineConfigurationImpl;
import org.activiti.engine.impl.context.Context;
import org.alfresco.model.ContentModel;
import org.alfresco.repo.security.authentication.AuthenticationUtil;
import org.alfresco.repo.workflow.activiti.ActivitiConstants;
import org.alfresco.service.ServiceRegistry;
import org.alfresco.service.cmr.model.FileExistsException;
import org.alfresco.service.cmr.model.FileFolderService;
import org.alfresco.service.cmr.model.FileNotFoundException;
import org.alfresco.service.cmr.repository.AssociationRef;
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
import org.alfresco.service.namespace.QName;
import org.alfresco.util.ISO9075;

import com.ibm.icu.util.Calendar;
import com.intellego.pa.utils.ConstantsPa;
import com.intellego.parquearauco.classification.services.ClassificationService;
import com.intellego.parquearauco.constants.Constants;

public class PublishDocument implements JavaDelegate{

	DelegateExecution execution;
	ServiceRegistry serviceRegistry = getServiceRegistry();

	protected ServiceRegistry getServiceRegistry() {
		ProcessEngineConfigurationImpl config = Context.getProcessEngineConfiguration();
		if (config != null) {
			ServiceRegistry registry = (ServiceRegistry) config.getBeans().get(ActivitiConstants.SERVICE_REGISTRY_BEAN_KEY);
			if (registry == null) {
				throw new RuntimeException(
						"Service-registry not present in ProcessEngineConfiguration beans, expected ServiceRegistry with key" + 
								ActivitiConstants.SERVICE_REGISTRY_BEAN_KEY);
			}
			return registry;
		}
		throw new IllegalStateException("No ProcessEngineCOnfiguration found in active context");
	}

	public Expression idTask;
	public Expression classification;

	@Override
	public void execute(DelegateExecution execution) throws Exception {
		this.execution = execution;
		this.publish(idTask.getValue(execution).toString(), classification.getValue(execution).toString());
	}

	private Set<String> publish(final String taskId, final String classificationParameter){
		return AuthenticationUtil.runAs(new AuthenticationUtil.RunAsWork<Set<String>>() {
			public Set<String> doWork(){
				Set<String> group = null;
				WorkflowService workflowService = serviceRegistry.getWorkflowService();
				NodeService nodeService = serviceRegistry.getNodeService();
				try{
					
					WorkflowTask task = workflowService.getTaskById("activiti$" + taskId);

					WorkflowPath path = task.getPath();
					WorkflowInstance instance = path.getInstance();

					NodeRef itemPackage = instance.getWorkflowPackage();
					List<ChildAssociationRef> childs = nodeService.getChildAssocs(itemPackage);
					
					for(ChildAssociationRef each : childs){
						try {
							if(nodeService.getType(each.getChildRef()).equals(Constants.TYPE_PA_DOCUMENT)){
								moveMainDocument(each.getChildRef());
								classify(classificationParameter, each.getChildRef());
							}else{
								moveAttachment(each.getChildRef());
							}
						} catch (FileExistsException e) {
							System.out.println(e.toString());
						}
					}
				}catch(Exception e){
					e.printStackTrace();
				}
				return group;
			}

		}, "admin");
	}

	private void moveMainDocument(final NodeRef nodeRef){
		AuthenticationUtil.runAs(new AuthenticationUtil.RunAsWork<Boolean>() {
			public Boolean doWork(){

				NodeService nodeService = serviceRegistry.getNodeService();


				Map<QName, Serializable> properties = nodeService.getProperties(nodeRef);
				List<String> path = new ArrayList<String>();
				String mall =(String) properties.get(Constants.PROP_MALL);
				String suc =(String) properties.get(Constants.PROP_SUCNUMBER);
				String project =(String) properties.get(Constants.PROP_PROJECT);
				String documentType = (String) properties.get(Constants.PROP_DOCUMENTTYPE);

				if(mall!=null && mall.length()>0) path.add(mall);
				if(suc!=null && suc.length()>0) path.add(suc);
				if(project!=null && project.length()>0) path.add(project);
				if(documentType!=null && documentType.length()>0) path.add(documentType);
				moveDocument(nodeRef, path);

				return true;

			}
		}, "admin");
	}
	private void moveAttachment(final NodeRef nodeRef){
		AuthenticationUtil.runAs(new AuthenticationUtil.RunAsWork<Boolean>() {
			public Boolean doWork(){

				List<String> path = new ArrayList<String>();

				Calendar calendar = Calendar.getInstance();
				calendar.setTime(new Date());

				path.add(String.valueOf(calendar.get(Calendar.YEAR)));
				path.add(String.valueOf(calendar.get(Calendar.MONTH) + 1));
				path.add(String.valueOf(calendar.get(Calendar.DAY_OF_MONTH)));
				path.add(String.valueOf(calendar.get(Calendar.HOUR_OF_DAY)));
				path.add(String.valueOf(calendar.get(Calendar.MINUTE)));
				path.add(String.valueOf(calendar.get(Calendar.MINUTE)));
				

				moveDocument(nodeRef, path);

				return true;
			}
		}, "admin");

	}

	private void moveDocument(final NodeRef nodeRef, final List<String> path){

		AuthenticationUtil.runAs(new AuthenticationUtil.RunAsWork<Boolean>() {
			public Boolean doWork(){

				NodeService nodeService = serviceRegistry.getNodeService();
				FileFolderService filefolderService = serviceRegistry.getFileFolderService();
				SearchService searchService = serviceRegistry.getSearchService();
				NodeRef destination = null;
				NodeRef tempNode = null;
				String newName = null;
				String documentName = null;
				String documentType = null;
				String extension = null;

				Map<QName, Serializable> properties = nodeService.getProperties(nodeRef);
				String site = getSite(String.valueOf(properties.get(Constants.PROP_SECTIONID)));


				try {
					StoreRef storeRef = new StoreRef("workspace", "SpacesStore");
					ResultSet resultSet=searchService.query(storeRef,SearchService.LANGUAGE_LUCENE, "PATH:\"/app:company_home/st:sites/cm:" + ISO9075.encode(site) + "/cm:documentLibrary\"");
					if(resultSet.length()>0){
						destination=resultSet.getNodeRef(0);

						for(String each : path){
							tempNode = nodeService.getChildByName(destination, ContentModel.ASSOC_CONTAINS, each);
							if(tempNode==null){
								destination = filefolderService.create(destination, each, ContentModel.TYPE_FOLDER).getNodeRef();
							}else{
								destination = nodeService.getChildByName(destination, ContentModel.ASSOC_CONTAINS, each);
							}
						}

						documentName = (String) properties.get(ContentModel.PROP_NAME);
						extension = documentName.substring(documentName.lastIndexOf("."));
						documentType = (String) properties.get(Constants.PROP_DOCUMENTTYPE);
						newName = documentType + extension;
						int counter = 0;

						while(nodeService.getChildByName(destination, ContentModel.ASSOC_CONTAINS, newName)!=null){
							counter++;
							newName = "(" + counter + ") " + (String) properties.get(Constants.PROP_DOCUMENTTYPE) + extension;
						}
						filefolderService.move(nodeRef, destination, newName);
					}

				}catch (FileExistsException | FileNotFoundException e) {
					e.printStackTrace();
				}	
				return true;
			}
		}, "admin");

	}

	@SuppressWarnings("unchecked")
	private Boolean classify(final String uuid, final NodeRef node){

		return AuthenticationUtil.runAs(new AuthenticationUtil.RunAsWork<Boolean>() {
			public Boolean doWork(){

				Boolean response = false;

				NodeService nodeService = serviceRegistry.getNodeService();

				if(!nodeService.hasAspect(node, ClassificationService.ASPECT_CLASSIFIABLE)){
					nodeService.addAspect(node, ClassificationService.ASPECT_CLASSIFIABLE, null);
				}

				ArrayList<Serializable> parents = new ArrayList<Serializable>();
				Map<QName, Serializable> properties = nodeService.getProperties(node);

				parents = (ArrayList<Serializable>) properties.get(ClassificationService.PROP_PARENT);
				boolean classificationExists=false;
				if(parents!=null){
					for(Serializable each : parents){
						if(each.equals(uuid)){
							classificationExists=true;
							break;
						}
					}
				}else{
					parents = new ArrayList<Serializable>();
				}

				if(!classificationExists){
					parents.add(uuid);
					properties.put(ClassificationService.PROP_PARENT, parents);
					nodeService.addProperties(node, properties);

					SearchService searchService = serviceRegistry.getSearchService();
					StoreRef storeRef = new StoreRef("workspace", "SpacesStore");
					ResultSet resultSet=searchService.query(storeRef,SearchService.LANGUAGE_LUCENE, "@sys\\:node-uuid:" + uuid);
					if(resultSet.length()>0){
						AssociationRef assocRef = nodeService.createAssociation(resultSet.getNodeRef(0), node, ClassificationService.ASSOC_CLASSIFICATION);
						if(assocRef!=null && assocRef.getSourceRef()!=null){
							response = true;
						}else{
							response = false;
						}
					}
				}

				return response;

			}
		}, "admin");
	}


	private String getSite(final String section){

		return AuthenticationUtil.runAs(new AuthenticationUtil.RunAsWork<String>() {
			public String doWork(){

				String response = new String();

				SearchService searchService = serviceRegistry.getSearchService();
				NodeService nodeService = serviceRegistry.getNodeService();

				StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
				ResultSet resultSet=searchService.query(storeRef,SearchService.LANGUAGE_LUCENE, "TYPE:\"paList:section\" AND @paList\\:id:"+section);
				if(resultSet.length()>0){
					response = (String) nodeService.getProperty(resultSet.getNodeRef(0), Constants.PROP_LIST_DESCRIPTION);
					if(response.equalsIgnoreCase("ingenieria") || response.equalsIgnoreCase("ingeniería")){
						response = "arauco";
					}
					if(response.equalsIgnoreCase("arquitectura")){
						response = "arquitectura";
					}
				}

				return response;
			}
		}, "admin");

	}

}
