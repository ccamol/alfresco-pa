package com.intellego.parquearauco.baseprocessorextension;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.alfresco.model.ContentModel;
import org.alfresco.service.cmr.repository.NodeService;
import org.alfresco.service.cmr.repository.StoreRef;
import org.alfresco.service.cmr.search.ResultSet;
import org.alfresco.service.cmr.search.SearchService;

import com.intellego.parquearauco.constants.Constants;
import com.intellego.parquearauco.dto.CheckList;
import com.intellego.parquearauco.dto.CheckListComment;
import com.intellego.parquearauco.dto.CheckListResultSet;
import com.intellego.parquearauco.dto.ProjectStages;
import com.intellego.parquearauco.dto.Response;
import com.intellego.parquearauco.dto.SucProject;
import com.intellego.parquearauco.filters.CheckListCommentFilter;
import com.intellego.parquearauco.filters.CheckListFilter;
import com.intellego.parquearauco.security.filters.NumericFilter;
import com.intellego.parquearauco.security.interfaces.EntityManager;

public class CheckListsOperator extends EntityManager<CheckList>{

	public CheckListsOperator(){
		super(CheckList.class);
	}
	
	
	
	public Response<Boolean> checkComplete(Integer nodeType, Integer nodeId, Integer external){
		Response<Boolean> response = new Response<Boolean>();
		response.setResult(true);
		
		Response<List<CheckListResultSet>> list = checkDocuments(nodeType, nodeId, external);
		if(list.getStatus()>-1 && list.getResult()!=null && list.getResult().size()>0){
			for(CheckListResultSet each : list.getResult()){
				if(!each.getCheck()){
					response.setResult(false);
					response.setStatus(1);
					response.setMessage("Procesado con éxito");
				}
			}
		}
		
		response.setStatus(1);
		response.setMessage("Procesado con éxito");
		return response;
	}
	
	
	public Response<List<CheckListResultSet>> checkDocuments(Integer nodeType, Integer nodeId, Integer external){
		ResultSet resultSet = null;
		ResultSet listResultSet = null;
		String query = new String();
		Response<List<CheckListResultSet>> response = new Response<List<CheckListResultSet>>();
		List<CheckListResultSet> list = new ArrayList<CheckListResultSet>();
		response.setResult(list);
		CheckListResultSet item = new CheckListResultSet();
		Response<SucProject> sucProject = new Response<SucProject>();
		SucProjects sucService = new SucProjects();
		Response<List<CheckListComment>> comments = new Response<List<CheckListComment>>();
		CheckListCommentFilter commentFilter = new CheckListCommentFilter(); 
		
		NodeService nodeService = serviceRegistry.getNodeService();
		
		CheckListFilter filter = new CheckListFilter();
		Integer stageId = null;
		
		filter.getNodeType().exact(nodeType, NumericFilter.EQUALS_TO);
		if(nodeType==5 || nodeType==6 || nodeType==7){
			System.out.println("CTL 1: ");
			ProjectStage proyectStage = new ProjectStage();
			Response<ProjectStages> projectStageResponse = proyectStage.getById(nodeId);
			if(projectStageResponse.getStatus()>-1 && projectStageResponse.getResult()!=null){
				stageId = projectStageResponse.getResult().getStageType().getId();
			}
		}
		System.out.println("STAGE ID: " + stageId);
		System.out.println("NODETYPE: " + nodeType);
		System.out.println("EXTERNAL: " + external);
		
		if(stageId!=null && stageId>0 ){
			System.out.println("CTL 2: ");
			filter.getStageId().exact(stageId, NumericFilter.EQUALS_TO);
			filter.getExternal().exact(external, NumericFilter.EQUALS_TO);
		}
		
		CheckLists checkList = new CheckLists();
		List<CheckList> documentsToCheck = checkList.getListByFilter(filter).getResult();
		System.out.println("CTL 3: " + documentsToCheck.size());

		for(CheckList each : documentsToCheck){
			switch(nodeType){
			case 1: // Mall Ingenieering
				query = "@pa:\\sectionID:2 AND  @pa\\:documentTypeID:" + each.getIdDocument() + " AND @pa\\:mallID:" + nodeId;
				break;
			case 2: // Mall project Ingenieering
				query = "@pa:\\sectionID:2 AND  @pa\\:documentTypeID:" + each.getIdDocument() + " AND @pa\\:projectID:" + nodeId;
				break;
			case 3: // SUC
				query = "@pa:\\sectionID:1 AND  @pa\\:documentTypeID:" + each.getIdDocument() + " AND @pa\\:sucNumberID:" + nodeId;
				break;
			case 4: // Suc project
				sucProject = sucService.getById(nodeId);
				if(sucProject.getStatus()>-1){
					query = "@pa:\\sectionID:1 AND  @pa\\:documentTypeID:" + each.getIdDocument() + " AND @pa\\:sucNumberID:" + sucProject.getResult().getSucEntity().getId() + " AND @pa\\:projectID:" + nodeId;
				}
				break;
			case 5: // Stage engenieering project
				query = "@pa\\:documentTypeID:" + each.getIdDocument() + " AND @pa\\:stageID:" + nodeId;
				break;
			case 6: // Stage architecture project
				query = "@pa\\:documentTypeID:" + each.getIdDocument() + " AND @pa\\:stageID:" + nodeId;
				break;
			case 7: // Stage suc project
				query = "@pa\\:documentTypeID:" + each.getIdDocument() + " AND @pa\\:stageID:" + nodeId;
				break;
			case 8: // Stage purchase project
				query = "@pa\\:documentTypeID:" + each.getIdDocument() + " AND @pa\\:stageID:" + nodeId;
				break;
			case 9: // Mall Architecture
				query = "@pa:\\sectionID:2 AND  @pa\\:documentTypeID:" + each.getIdDocument() + " AND @pa\\:mallID:" + nodeId;
				break;
			case 10: // Mall project Ingenieering
				query = "@pa:\\sectionID:2 AND  @pa\\:documentTypeID:" + each.getIdDocument() + " AND @pa\\:projectID:" + nodeId;
				break;
			};
			
			item = new CheckListResultSet();
			resultSet = this.search(query);
			if(resultSet.length()>0){
				item.setCheck(true);
				commentFilter.getNodeType().exact(nodeType, NumericFilter.EQUALS_TO);
				commentFilter.getNodeId().exact(nodeId, NumericFilter.EQUALS_TO);
				commentFilter.getIdDocument().exact((Integer) nodeService.getProperty(resultSet.getNodeRef(0), Constants.PROP_DOCUMENTTYPEID), NumericFilter.EQUALS_TO);
				comments = new CheckListComments().getListByFilter(commentFilter);
				if(comments.getStatus()>-1 && comments.getResult()!=null && comments.getResult().size()>0){
					item.setComments(comments.getResult().get(0).getComment());
				}else{
					item.setComments(new String());
				}
				item.setDocumentTypeName((String) nodeService.getProperty(resultSet.getNodeRef(0), Constants.PROP_DOCUMENTTYPE));
				item.setDocumentType((Integer) nodeService.getProperty(resultSet.getNodeRef(0), Constants.PROP_DOCUMENTTYPEID));
				item.setLoadDate((Date) nodeService.getProperty(resultSet.getNodeRef(0), Constants.ALFRESCO_CREATED));
				item.setOwner((String) nodeService.getProperty(resultSet.getNodeRef(0), ContentModel.PROP_MODIFIER));
				item.setUuid(resultSet.getNodeRef(0).getId());
				item.setName((String) nodeService.getProperty(resultSet.getNodeRef(0), ContentModel.PROP_NAME));
				list.add(item);
			}else{
				query = "TYPE:\"paList:documentType\" AND @paList\\:id:" + each.getIdDocument();
				listResultSet = this.search(query);
				if(listResultSet.length()>0){
					item.setCheck(false);
					commentFilter.getNodeType().exact(nodeType, NumericFilter.EQUALS_TO);
					commentFilter.getNodeId().exact(nodeId, NumericFilter.EQUALS_TO);
					commentFilter.getIdDocument().exact(Integer.parseInt((String) nodeService.getProperty(listResultSet.getNodeRef(0), Constants.PROP_LIST_ID)), NumericFilter.EQUALS_TO);
					comments = new CheckListComments().getListByFilter(commentFilter);
					if(comments.getStatus()>-1 && comments.getResult()!=null && comments.getResult().size()>0){
						item.setComments(comments.getResult().get(0).getComment());
					}else{
						item.setComments(new String());
					}
					item.setDocumentTypeName((String) nodeService.getProperty(listResultSet.getNodeRef(0), Constants.PROP_LIST_DESCRIPTION));
					item.setDocumentType(Integer.parseInt((String) nodeService.getProperty(listResultSet.getNodeRef(0), Constants.PROP_LIST_ID)));
					item.setLoadDate(null);
					item.setOwner(new String());
					item.setUuid(new String());
					item.setName(new String());
					list.add(item);
				}
			}
			
		}
		
		response.setStatus(1);
		response.setMessage("Operación realizada con éxito");
		response.setResult(list);
		return response;
	}
	
	
	private ResultSet search(String query){
		SearchService searchService = serviceRegistry.getSearchService();
		ResultSet resultSet = null;
		
		StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
		resultSet=searchService.query(storeRef, SearchService.LANGUAGE_LUCENE,query);
		if(resultSet.length()>0){
			
			
		}
		
		return resultSet;
	}
}


