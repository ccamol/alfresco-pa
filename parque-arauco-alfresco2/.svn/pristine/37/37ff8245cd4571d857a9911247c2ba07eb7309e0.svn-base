package com.intellego.parquearauco.datalist.converters;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.alfresco.service.ServiceRegistry;
import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.service.cmr.repository.NodeService;
import org.alfresco.service.cmr.repository.StoreRef;
import org.alfresco.service.cmr.search.ResultSet;
import org.alfresco.service.cmr.search.SearchService;
import org.alfresco.service.cmr.security.AuthorityService;
import org.alfresco.service.cmr.security.AuthorityType;

import com.intellego.parquearauco.constants.Constants;
import com.intellego.parquearauco.datalist.dto.MetaDataDto;
import com.intellego.parquearauco.dto.Response;
import com.intellego.parquearauco.workflow.baseprocessorextension.FlowByDocuments;
import com.intellego.parquearauco.workflow.dto.FlowByDocument;

public class FlowByDocumentConvert implements Converter{

	private ServiceRegistry serviceRegistry;

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
		metadata.setId("idWorkFlow");
		metadata.setDescription("Tipo de flujo de trabajo");
		metadata.setListType(new String());
		metadata.setMandatory("true");
		metadata.setOrder(2);
		metadata.setMetadatas(getWorkflowTypes());
		fields.add(metadata);

		metadata = new MetaDataDto();
		metadata.setDataType("select");
		metadata.setId("idDocument");
		metadata.setDescription("Tipo de documento");
		metadata.setListType(new String());
		metadata.setMandatory("true");
		metadata.setOrder(3);
		metadata.setMetadatas(getDocumentTypes());
		fields.add(metadata);

		metadata = new MetaDataDto();
		metadata.setDataType("multiple");
		metadata.setId("approvers");
		metadata.setDescription("Aprobadores");
		metadata.setListType(new String());
		metadata.setMandatory("true");
		metadata.setOrder(4);
		metadata.setMetadatas(getApprovers());
		fields.add(metadata);

		metadata = new MetaDataDto();
		metadata.setDataType("select");
		metadata.setId("responsible");
		metadata.setDescription("Aprobar por responsable");
		metadata.setListType(new String());
		metadata.setMandatory("true");
		metadata.setOrder(5);
		metadata.setMetadatas(getYesOrNot());
		fields.add(metadata);


		return fields;
	}

	@Override
	public List<List<String>> getList() {
		List<List<String>> responseList = new ArrayList<List<String>>();
		List<String> item = new ArrayList<String>();
		FlowByDocuments checkList = new FlowByDocuments();
		
		Response<List<FlowByDocument>> response = checkList.getAll();
		
		if(response.getStatus()>-1){
			for(FlowByDocument each : response.getResult()){
				item = new ArrayList<String>();
				item.add(String.valueOf(each.getId()));
				item.add(String.valueOf(each.getId()));
				item.add(getWorkflowType(each.getIdWorkFlow()));
				item.add(getDocumentType(String.valueOf(each.getIdDocument())));
				item.add("[" + each.getApprovers() + "]");
				item.add(getResponsible(each.getResponsible()));
				responseList.add(item);
			}
		}
		return responseList;
	}

	@Override
	public boolean saveOrUpdate(String className, Map<String, String> properties) {
		boolean response = false;

		FlowByDocument checklist = new FlowByDocument();

		if(properties.get("id")!=null && properties.get("id").length()>0){
			checklist.setId(Integer.parseInt(properties.get("id")));
		}
		checklist.setIdDocument(Integer.parseInt(properties.get("idDocument")));
		checklist.setIdWorkFlow(Integer.parseInt(properties.get("idWorkFlow")));
		checklist.setApprovers(properties.get("approvers").replace("[", "").replace("]", ""));
		
		if(properties.get("responsible").equals("1")){
			checklist.setResponsible(true);
		}else{
			checklist.setResponsible(false);
		}
		

		FlowByDocuments checklistService = new FlowByDocuments();
		Response<FlowByDocument> responseCheckList = checklistService.addOrUpdate(checklist);
		
		if(responseCheckList.getStatus()>-1) response=true;
		
		return response;
	}

	@Override
	public void init(ServiceRegistry serviceRegistry) {
		this.serviceRegistry = serviceRegistry;
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

	private List<MetaDataDto> getWorkflowTypes(){

		List<MetaDataDto> subFields = new ArrayList<MetaDataDto>();
		MetaDataDto field = new MetaDataDto();

		field.setId("1");
		field.setDescription("Aprobación simple");
		subFields.add(field);

		field = new MetaDataDto();
		field.setId("2");
		field.setDescription("Aprobación multiple");
		subFields.add(field);

		return subFields;
	}	

	private String getWorkflowType(int id){

		String workflowType = new String();
		
		if(id==1) workflowType = "Aprobación simple";
		if(id==2) workflowType = "Aprobación múltiple";
		
		return workflowType;
	}	

	private String getResponsible(boolean responsible){

		String workflowType = new String();
		
		if(responsible){
			workflowType = "Si";
		}else{
			workflowType = "No";
		}
		
		return workflowType;
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

	private List<MetaDataDto> getApprovers(){

		List<MetaDataDto> subFields = new ArrayList<MetaDataDto>();
		MetaDataDto field = new MetaDataDto();
		AuthorityService authorityService = this.serviceRegistry.getAuthorityService();
		String userName = new String();
		
		Set<String> userList = authorityService.getAllAuthorities(AuthorityType.USER);
		Iterator<String> iterator = userList.iterator();
		
		while(iterator.hasNext()){
			userName = iterator.next();
			field = new MetaDataDto();
			field.setId(userName);
			field.setDescription(userName);
			subFields.add(field);
		}
		return subFields;
	}

	public ServiceRegistry getServiceRegistry() {
		return serviceRegistry;
	}

	public void setServiceRegistry(ServiceRegistry serviceRegistry) {
		this.serviceRegistry = serviceRegistry;
	}

}
