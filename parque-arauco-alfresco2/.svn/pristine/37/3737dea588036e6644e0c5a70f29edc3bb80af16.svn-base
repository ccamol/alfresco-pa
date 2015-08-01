package com.intellego.parquearauco.datalist.converters;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.alfresco.service.ServiceRegistry;
import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.service.cmr.repository.NodeService;
import org.alfresco.service.cmr.repository.StoreRef;
import org.alfresco.service.cmr.search.ResultSet;
import org.alfresco.service.cmr.search.SearchService;

import com.intellego.parquearauco.baseprocessorextension.CheckLists;
import com.intellego.parquearauco.baseprocessorextension.NodeTypes;
import com.intellego.parquearauco.baseprocessorextension.StageTypes;
import com.intellego.parquearauco.constants.Constants;
import com.intellego.parquearauco.datalist.dto.MetaDataDto;
import com.intellego.parquearauco.dto.CheckList;
import com.intellego.parquearauco.dto.NodeType;
import com.intellego.parquearauco.dto.Response;
import com.intellego.parquearauco.dto.StageType;

public class CheckListConvert implements Converter {

	private ServiceRegistry serviceRegistry;

	@Override
	public void init(ServiceRegistry serviceRegistry) {
		this.serviceRegistry = serviceRegistry;
	}


	@Override
	public List<MetaDataDto> convert() {

		List<MetaDataDto> fields = new ArrayList<MetaDataDto>();
		MetaDataDto metadata = null;

		metadata = new MetaDataDto();
		metadata.setDataType("text");
		metadata.setId("id");
		metadata.setDescription("Id");
		metadata.setListType(new String());
		metadata.setMandatory("false");
		metadata.setOrder(1);
		fields.add(metadata);

		metadata = new MetaDataDto();
		metadata.setDataType("select");
		metadata.setId("nodeType");
		metadata.setDescription("Tipo de nodo");
		metadata.setListType(new String());
		metadata.setMandatory("true");
		metadata.setOrder(3);
		metadata.setMetadatas(getNodeTypes());
		fields.add(metadata);

		metadata = new MetaDataDto();
		metadata.setDataType("select");
		metadata.setId("stageId");
		metadata.setDescription("Etapa");
		metadata.setListType(new String());
		metadata.setMandatory("true");
		metadata.setOrder(4);
		metadata.setMetadatas(getStages());
		fields.add(metadata);

		metadata = new MetaDataDto();
		metadata.setDataType("select");
		metadata.setId("idDocument");
		metadata.setDescription("Tipo de documento");
		metadata.setListType(new String());
		metadata.setMandatory("true");
		metadata.setOrder(2);
		metadata.setMetadatas(getDocumentTypes());
		fields.add(metadata);

		metadata = new MetaDataDto();
		metadata.setDataType("select");
		metadata.setId("external");
		metadata.setDescription("Ingresar por");
		metadata.setListType(new String());
		metadata.setMandatory("true");
		metadata.setOrder(5);
		metadata.setMetadatas(getExternal());
		fields.add(metadata);

		return fields;
	}

	private List<MetaDataDto> getYesOrNot(){

		List<MetaDataDto> subFields = new ArrayList<MetaDataDto>();
		MetaDataDto field = new MetaDataDto();

		field.setId("1");
		field.setDescription("Si");
		subFields.add(field);

		field = new MetaDataDto();
		field.setId("0");
		field.setDescription("No");
		subFields.add(field);

		return subFields;
	}	

	private List<MetaDataDto> getExternal(){

		List<MetaDataDto> subFields = new ArrayList<MetaDataDto>();
		MetaDataDto field = new MetaDataDto();

		field.setId("1");
		field.setDescription("Operador");
		subFields.add(field);

		field = new MetaDataDto();
		field.setId("0");
		field.setDescription("Interno");
		subFields.add(field);

		field = new MetaDataDto();
		field.setId("2");
		field.setDescription("Externo");
		subFields.add(field);

		return subFields;
	}
	private List<MetaDataDto> getNodeTypes(){

		List<MetaDataDto> subFields = new ArrayList<MetaDataDto>();
		MetaDataDto field = new MetaDataDto();

		NodeTypes nodeTypes = new NodeTypes();
		Response<List<NodeType>> response = nodeTypes.getAll();
		if(response.getStatus()>-1){
			for(NodeType each : response.getResult()){
				field = new MetaDataDto();
				field.setId(String.valueOf(each.getId()));
				field.setDescription(each.getName());
				subFields.add(field);
			}
		}

		return subFields;
	}

	private List<MetaDataDto> getStages(){

		List<MetaDataDto> subFields = new ArrayList<MetaDataDto>();
		MetaDataDto field = new MetaDataDto();

		StageTypes nodeTypes = new StageTypes();
		Response<List<StageType>> response = nodeTypes.getAll();
		if(response.getStatus()>-1){
			for(StageType each : response.getResult()){
				field = new MetaDataDto();
				field.setId(String.valueOf(each.getId()));
				field.setDescription(each.getName());
				subFields.add(field);
			}
		}

		return subFields;
	}

	private List<MetaDataDto> getDocumentTypes(){

		List<MetaDataDto> subFields = new ArrayList<MetaDataDto>();
		MetaDataDto field = new MetaDataDto();
		SearchService searchService = this.serviceRegistry.getSearchService();
		NodeService nodeService = this.serviceRegistry.getNodeService();
		StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
		ResultSet resultSet=searchService.query(storeRef, SearchService.LANGUAGE_LUCENE,"TYPE:\"paList:documentType\"");
		if(resultSet.length()>0){
			for(NodeRef each : resultSet.getNodeRefs()){
				field = new MetaDataDto();
				field.setId((String) nodeService.getProperty(each, Constants.PROP_LIST_ID));
				field.setDescription((String) nodeService.getProperty(each, Constants.PROP_LIST_DESCRIPTION));
				subFields.add(field);
			}

		}
		return subFields;
	}

	@Override
	public List<List<String>> getList() {

		List<List<String>> responseList = new ArrayList<List<String>>();
		List<String> item = new ArrayList<String>();
		CheckLists checkList = new CheckLists();

		Response<List<CheckList>> response = checkList.getAll();

		if(response.getStatus()>-1){
			for(CheckList each : response.getResult()){
				item = new ArrayList<String>();
				item.add(String.valueOf(each.getId()));
				item.add(String.valueOf(each.getId()));
				item.add(getNodeType(each.getNodeType()));
				item.add(getStage(each.getStageId()));
				item.add(getDocumentType(String.valueOf(each.getIdDocument())));
				item.add(getExternal(each.getExternal()));
				responseList.add(item);
			}

		}
		return responseList;
	}

	private String getExternal(int external){

		String response = new String();

		if(external==1){
			response = "Operador";
		}else if(external==2){
			response = "Externo";
		}else{
			response = "Interno";
		}

		return response;
	}	

	private String getDocumentType(String id){

		String response = new String();
		SearchService searchService = this.serviceRegistry.getSearchService();
		NodeService nodeService = this.serviceRegistry.getNodeService();
		StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
		ResultSet resultSet=searchService.query(storeRef, SearchService.LANGUAGE_LUCENE,"TYPE:\"paList:documentType\" AND @paList\\:id:" + id);
		if(resultSet.length()>0){
			response = (String) nodeService.getProperty(resultSet.getNodeRef(0), Constants.PROP_LIST_DESCRIPTION);			
		}
		return response;
	}

	private String getNodeType(int id){

		String nodeType = new String();

		NodeTypes nodeTypes = new NodeTypes();
		Response<NodeType> response = nodeTypes.getById(id);
		if(response.getStatus()>-1){
			nodeType = response.getResult().getName();
		}

		return nodeType;
	}

	private String getStage(int id){

		String stage = new String();

		StageTypes nodeTypes = new StageTypes();
		Response<StageType> response = nodeTypes.getById(id);
		if(response.getStatus()>-1){
			stage = response.getResult().getName();
		}

		return stage;
	}


	@Override
	public boolean saveOrUpdate(String className, Map<String, String> properties) {
		boolean response = false;

		CheckList checklist = new CheckList();
		CheckLists checklistService = new CheckLists();

		if(properties.get("id")!=null && properties.get("id").length()>0 && properties.get("uuid")!=null && properties.get("uuid").length()>0){
			checklist.setId(Integer.parseInt(properties.get("id")));
			checklist.setIdDocument(Integer.parseInt(properties.get("idDocument")));
			checklist.setNodeType(Integer.parseInt(properties.get("nodeType")));
			checklist.setStageId(Integer.parseInt(properties.get("stageId")));
			checklist.setExternal(Integer.parseInt(properties.get("external")));
			Response<CheckList> responseCheckList = checklistService.addOrUpdate(checklist);
			if(responseCheckList.getStatus()>-1) response=true;
		}else{
			if(properties.get("uuid")!=null && properties.get("uuid").length()>0){
				if(properties.containsValue("idDocument") == false && properties.containsValue("nodeType") == false &&
						properties.containsValue("stageId") == false && properties.containsValue("external") == false){
					checklistService.remove(checklistService.getById(Integer.parseInt(properties.get("uuid"))).getResult());
					response = true;
				}
			}else{
				checklist.setIdDocument(Integer.parseInt(properties.get("idDocument")));
				checklist.setNodeType(Integer.parseInt(properties.get("nodeType")));
				checklist.setStageId(Integer.parseInt(properties.get("stageId")));
				checklist.setExternal(Integer.parseInt(properties.get("external")));
				Response<CheckList> responseCheckList = checklistService.addOrUpdate(checklist);
				if(responseCheckList.getStatus()>-1) response=true;
			}
		}

		return response;
	}

}
