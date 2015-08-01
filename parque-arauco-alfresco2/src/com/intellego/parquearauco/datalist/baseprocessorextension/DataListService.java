package com.intellego.parquearauco.datalist.baseprocessorextension;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.alfresco.repo.processor.BaseProcessorExtension;
import org.alfresco.service.ServiceRegistry;
import org.alfresco.service.cmr.dictionary.AspectDefinition;
import org.alfresco.service.cmr.dictionary.DictionaryService;
import org.alfresco.service.cmr.dictionary.PropertyDefinition;
import org.alfresco.service.cmr.dictionary.TypeDefinition;
import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.service.cmr.repository.NodeService;
import org.alfresco.service.cmr.repository.StoreRef;
import org.alfresco.service.cmr.search.LimitBy;
import org.alfresco.service.cmr.search.ResultSet;
import org.alfresco.service.cmr.search.ResultSetRow;
import org.alfresco.service.cmr.search.SearchParameters;
import org.alfresco.service.cmr.search.SearchService;
import org.alfresco.service.namespace.NamespaceService;
import org.alfresco.service.namespace.QName;

import com.intellego.pa.utils.ConstantsPa;
import com.intellego.parquearauco.datalist.converters.CheckListConvert;
import com.intellego.parquearauco.datalist.converters.FlowByDocumentConvert;
import com.intellego.parquearauco.datalist.dto.DataListDto;
import com.intellego.parquearauco.datalist.dto.MetaDataDto;

public class DataListService extends BaseProcessorExtension{

	private static final String QUERY = "PATH:\"/app:company_home/st:sites//cm:dataLists//*\" AND ";
	private static final String QUERY_TYPE = QUERY + "TYPE:\"${prefix}:${listType}\" AND @${prefix}\\:available:\"true\"";
	private static final String QUERY_TYPE_VALUE = QUERY + "TYPE:\"${listType}\" AND @${prefix}\\:id:\"${id}\"";
	private static final String PREFIX_MODEL = "model";
	private static final StoreRef STORE_REF = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
	private static final String FIELD_SORT_NAME = "@{http://www.alfresco.org/model/content/1.0}name";

	private NodeService nodeService;
	private ServiceRegistry serviceRegistry;
	private DictionaryService dictionaryService;
	private NamespaceService namespaceService;

	private ResultSet getResultQuery(String prefix, String listType){		
		SearchParameters sp = new SearchParameters();
		sp.addStore(STORE_REF);
		sp.setLanguage(SearchService.LANGUAGE_LUCENE);
		sp.setQuery(QUERY_TYPE.replace("${prefix}", prefix).replace("${listType}", listType));
		sp.addSort(FIELD_SORT_NAME, true);
		sp.setLimitBy(LimitBy.UNLIMITED);
		sp.setLimit(0);
		sp.setMaxPermissionChecks(100000000);
		sp.setMaxPermissionCheckTimeMillis(100000000);
		sp.setMaxItems(-1);

		return serviceRegistry.getSearchService().query(sp);
	}

	private String getValueById(String listType, String id){		
		SearchParameters sp = new SearchParameters();
		sp.addStore(STORE_REF);
		sp.setLanguage(SearchService.LANGUAGE_LUCENE);
		sp.setQuery(QUERY_TYPE_VALUE.replace("${prefix}", listType.split(":")[0]).replace("${listType}", listType).replace("${id}", id));
		sp.addSort(FIELD_SORT_NAME, true);
		sp.setLimitBy(LimitBy.UNLIMITED);
		sp.setLimit(0);
		sp.setMaxPermissionChecks(100000000);
		sp.setMaxPermissionCheckTimeMillis(100000000);
		sp.setMaxItems(-1);

		NodeRef node = serviceRegistry.getSearchService().query(sp).getNodeRefs().get(0);

		return nodeService.getProperty(node, ConstantsPa.PROP_LIST_DESCRIPTION).toString();
	}


	public List<List<String>> getDataListByType(String prefix, String listType){
		try {
			@SuppressWarnings("unused")
			Class<?> maintainerClass = Class.forName(listType);
			return getDatalistByTypeFromDB(listType);
		} catch (ClassNotFoundException e) {
			return getDataListByTypeList(prefix, listType);
		}
	}

	private List<List<String>> getDatalistByTypeFromDB(String className){
		List<List<String>> listResponse = new ArrayList<List<String>>();
		
		if(className.equals("com.intellego.parquearauco.dto.CheckList")){
			CheckListConvert checklist = new CheckListConvert();
			checklist.init(serviceRegistry);
			listResponse = checklist.getList();
		}
		if(className.equals("com.intellego.parquearauco.workflow.dto.FlowByDocument")){
			FlowByDocumentConvert checklist = new FlowByDocumentConvert();
			checklist.init(serviceRegistry);
			listResponse = checklist.getList();
		}

		
		
		return listResponse;
	}
	
	public boolean saveOrUpdate(String className, Map<String, String> properties){
		boolean response = false;

		System.out.println("CLASSNAME: " + className);
		if(className.equals("com.intellego.parquearauco.dto.CheckList")){
			CheckListConvert convert = new CheckListConvert();
			response = convert.saveOrUpdate(className, properties);
		}
		if(className.equals("com.intellego.parquearauco.workflow.dto.FlowByDocument")){
			FlowByDocumentConvert convert = new FlowByDocumentConvert();
			response = convert.saveOrUpdate(className, properties);
		}

		
		return response;
	}
	
	public boolean checkClass(String listType){
		try {
			@SuppressWarnings("unused")
			Class<?> maintainerClass = Class.forName(listType);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
	
	private List<List<String>> getDataListByTypeList(String prefix, String listType){
		List<List<String>> listResponse = new ArrayList<List<String>>();
		List<String> list;
		List<MetaDataDto> metadataList = getAspect(prefix, listType);
		String propertyDto;
		NodeRef resultNodeRef;

		for(ResultSetRow row : getResultQuery(prefix, listType)){
			resultNodeRef = row.getNodeRef();
			list = new ArrayList<String>();

			// Para posicionar de los primeros el uuid
			for(Entry<QName, Serializable> prop : nodeService.getProperties(resultNodeRef).entrySet()){
				propertyDto = null;
				if(prop.getKey().getPrefixedQName(namespaceService).getPrefixString().equals("sys:node-uuid")){
					propertyDto = prop.getValue().toString();
					list.add(propertyDto);
				}
			}

			for(MetaDataDto data : metadataList){
				propertyDto = "";
				for(Entry<QName, Serializable> prop : nodeService.getProperties(resultNodeRef).entrySet()){
					if(prop.getKey().getPrefixedQName(namespaceService).getPrefixString().contains(prefix)){
						if(data.getId().equals(prop.getKey().getPrefixedQName(namespaceService).getPrefixString().split(":")[1])){
							// El valor contiene el id
							if(data.getDataType().equals("select")){
								propertyDto = getValueById(data.getListType(), prop.getValue().toString());
							}else{
								propertyDto = prop.getValue().toString();
							}							
						}
					}
				}				

				list.add(propertyDto);
			}			

			listResponse.add(list);
		}

		return listResponse;
	}

	public List<MetaDataDto> getSelectData(String listType){
		List<MetaDataDto> listResponse = new ArrayList<MetaDataDto>();
		NodeRef resultNodeRef;
		MetaDataDto metaDataDto;

		for(ResultSetRow row : getResultQuery(listType.split(":")[0], listType.split(":")[1])){
			resultNodeRef = row.getNodeRef();
			metaDataDto = new MetaDataDto();
			metaDataDto.setId((String) nodeService.getProperty(resultNodeRef, ConstantsPa.PROP_LIST_ID));
			metaDataDto.setDescription((String) nodeService.getProperty(resultNodeRef, ConstantsPa.PROP_LIST_DESCRIPTION));
			listResponse.add(metaDataDto);
		}

		return listResponse;
	}

	public List<DataListDto> getDataList(String prefix){
		List<DataListDto> list = new ArrayList<DataListDto>();
		DataListDto dataListDto;

		QName type = null;
		TypeDefinition properties = null;

		String nameSpace = serviceRegistry.getNamespaceService().getNamespaceURI(prefix);
		final QName TYPE_MODEL = QName.createQName(nameSpace, PREFIX_MODEL);       
		Collection<QName> types = dictionaryService.getTypes(TYPE_MODEL);

		for (QName typeModel : types){
			type  = typeModel.getPrefixedQName(namespaceService);
			properties =  dictionaryService.getType(type);

			if(properties.getDescription() != null && !Boolean.parseBoolean(getDescValue("data.sys", properties.getDescription()))){
				dataListDto = new DataListDto();
				dataListDto.setId(properties.getName().getLocalName());
				dataListDto.setTitle(properties.getTitle());
				dataListDto.setOrder(Integer.parseInt(getDescValue("data.order", properties.getDescription())));
				list.add(dataListDto);
			}			
		}

		dataListDto = new DataListDto();
		dataListDto.setId("com.intellego.parquearauco.dto.CheckList");
		dataListDto.setTitle("Documentos para CheckList");
		dataListDto.setOrder(0);
		dataListDto.setType(DataListDto.BD);
		list.add(dataListDto);
		
		dataListDto = new DataListDto();
		dataListDto.setId("com.intellego.parquearauco.workflow.dto.FlowByDocument");
		dataListDto.setTitle("Flujos por documento");
		dataListDto.setOrder(0);
		dataListDto.setType(DataListDto.BD);
		list.add(dataListDto);
		
		
		
		Collections.sort(list);

		return list;
	}
	
	public List<String> getProperties(String prefix, String type){
		List<String> propList = new ArrayList<String>();
		QName TYPE_MODEL = QName.createQName(serviceRegistry.getNamespaceService().getNamespaceURI(prefix), type);
		TypeDefinition typeDefinition = dictionaryService.getType(TYPE_MODEL);
		
		// Recorre las propiedades
		for (Map.Entry<QName, PropertyDefinition> property : typeDefinition.getProperties().entrySet()){
			if(property.getValue().getModel().getName().getPrefixString().contains(prefix)){
				if(property.getValue().getDescription() != null && Boolean.parseBoolean(getDescValue("data.show", property.getValue().getDescription()))){
					System.out.println(property.getValue().getName().getLocalName());
					propList.add(property.getValue().getName().getLocalName());
				}
			}
		}
		
		return propList;
	}

	public List<MetaDataDto> getAspect(String prefix, String type){
		try {
			@SuppressWarnings("unused")
			Class<?> maintainerClass = Class.forName(type);
			return getAspectFromDB(type);
		} catch (ClassNotFoundException e) {
			return getAspectFromList(prefix, type);
		}
		
	}

	private List<MetaDataDto> getAspectFromDB(String className){
		List<MetaDataDto> metadatas = new ArrayList<MetaDataDto>();

		if(className.equals("com.intellego.parquearauco.dto.CheckList")){
			CheckListConvert checklist = new CheckListConvert();
			checklist.init(serviceRegistry);
			metadatas = checklist.convert();
		}
		if(className.equals("com.intellego.parquearauco.workflow.dto.FlowByDocument")){
			FlowByDocumentConvert checklist = new FlowByDocumentConvert();
			checklist.init(serviceRegistry);
			metadatas = checklist.convert();
		}
		
		
		return metadatas;
	}
	
	private List<MetaDataDto> getAspectFromList(String prefix, String type){
		List<MetaDataDto> metadatas = new ArrayList<MetaDataDto>();
		List<MetaDataDto> complexList;
		MetaDataDto metaDataDto;
		MetaDataDto metaDataDtoValue;
		String description;
		Map<QName, PropertyDefinition> propertiesAspect = null;

		QName TYPE_MODEL = QName.createQName(serviceRegistry.getNamespaceService().getNamespaceURI(prefix), type);
		TypeDefinition typeDefinition = dictionaryService.getType(TYPE_MODEL);	
		List<AspectDefinition> aspects = typeDefinition.getDefaultAspects();

		for(AspectDefinition aspectsList : aspects){
			propertiesAspect = dictionaryService.getAspect(aspectsList.getName()).getProperties();			
			if(aspectsList.getModel().getName().getPrefixString().contains(prefix)){

				if(aspectsList.getDescription() != null){
						for (Map.Entry<QName, PropertyDefinition> property : propertiesAspect.entrySet()){
							if(property.getValue().getModel().getName().getPrefixString().contains(prefix)){						
								if(property.getValue().getDescription() != null){
									description = property.getValue().getDescription();

									if(Boolean.parseBoolean(getDescValue("data.show", description))){
										metaDataDto = new MetaDataDto();
										metaDataDto.setId(property.getValue().getName().getLocalName());
										metaDataDto.setDescription(property.getValue().getTitle());
										metaDataDto.setMandatory(Boolean.toString(property.getValue().isMandatory()));
										metaDataDto.setOrder(Integer.parseInt(getDescValue("data.order", description)));

										// Es una lista de datos
										if(Boolean.parseBoolean(getDescValue("data.list", description))){
											if(property.getValue().isMultiValued()){
												metaDataDto.setDataType("multiple");
											}else{
												metaDataDto.setDataType("select");
											}
											metaDataDto.setMetadatas(getSelectData(getDescValue("data.list.type", description)));
											metaDataDto.setListType(getDescValue("data.list.type", description));
										}else{						
											if(property.getValue().getDataType().getName().getLocalName().equals("text") || 
													property.getValue().getDataType().getName().getLocalName().equals("mltext")){
												metaDataDto.setDataType("text");
											}else{
												metaDataDto.setDataType(property.getValue().getDataType().getName().getLocalName());
											}
										}

										metadatas.add(metaDataDto);
									}							
								}											
							}
						}
				}

			} 
		}
		
		if(Boolean.parseBoolean(getDescValue("data.config", typeDefinition.getDescription()))){
			metaDataDto = new MetaDataDto();
			metaDataDto.setId("config");
			metaDataDto.setDescription("Configuración");
			metaDataDto.setMandatory("false");
			metaDataDto.setOrder(3);
			metaDataDto.setDataType("multiple");

			complexList = new ArrayList<MetaDataDto>();

			for (Map.Entry<QName, PropertyDefinition> property : typeDefinition.getProperties().entrySet()){						
				if(property.getValue().getModel().getName().getPrefixString().contains(prefix)){	
					if(property.getValue().getDescription() != null && Boolean.parseBoolean(getDescValue("data.show", property.getValue().getDescription()))){
						metaDataDtoValue = new MetaDataDto();
						metaDataDtoValue.setId(property.getValue().getName().getLocalName());
						metaDataDtoValue.setDescription(property.getValue().getTitle());
						complexList.add(metaDataDtoValue);
					}					
				}
			}

			metaDataDto.setMetadatas(complexList);
			metadatas.add(metaDataDto);
		}else{
			// Recorre las propiedades
			for (Map.Entry<QName, PropertyDefinition> property : typeDefinition.getProperties().entrySet()){			
				if(property.getValue().getModel().getName().getPrefixString().contains(prefix)){	
					if(property.getValue().getDescription() != null){
						description = property.getValue().getDescription();

						if(Boolean.parseBoolean(getDescValue("data.show", description))){
							metaDataDto = new MetaDataDto();
							metaDataDto.setId(property.getValue().getName().getLocalName());
							metaDataDto.setDescription(property.getValue().getTitle());
							metaDataDto.setMandatory(Boolean.toString(property.getValue().isMandatory()));
							metaDataDto.setOrder(Integer.parseInt(getDescValue("data.order", description)));

							// Es una lista de datos
							if(Boolean.parseBoolean(getDescValue("data.list", description))){
								if(property.getValue().isMultiValued()){
									metaDataDto.setDataType("multiple");
								}else{
									metaDataDto.setDataType("select");
								}
								metaDataDto.setMetadatas(getSelectData(getDescValue("data.list.type", description)));
								metaDataDto.setListType(getDescValue("data.list.type", description));
							}else{						
								if(property.getValue().getDataType().getName().getLocalName().equals("text") || 
										property.getValue().getDataType().getName().getLocalName().equals("mltext")){
									metaDataDto.setDataType("text");
								}else{
									metaDataDto.setDataType(property.getValue().getDataType().getName().getLocalName());
								}
							}

							metadatas.add(metaDataDto);
						}							
					}
				}
			}
		}

		

		Collections.sort(metadatas);

		return metadatas;
	}
	
	
	private String getDescValue(String key, String desc){
		String[] properties = desc.split(";");
		String[] propertyContent;

		try{
			for(String prop : properties){
				propertyContent = prop.split("=");
				if(propertyContent[0].equals(key)){
					return propertyContent[1];
				}
			}
		}catch (ArrayIndexOutOfBoundsException e) {
			// Ignorada
		}

		return "";
	}

	public NodeService getNodeService() {
		return nodeService;
	}

	public void setNodeService(NodeService nodeService) {
		this.nodeService = nodeService;
	}

	public ServiceRegistry getServiceRegistry() {
		return serviceRegistry;
	}

	public void setServiceRegistry(ServiceRegistry serviceRegistry) {
		this.serviceRegistry = serviceRegistry;
	}

	public DictionaryService getDictionaryService() {
		return dictionaryService;
	}

	public void setDictionaryService(DictionaryService dictionaryService) {
		this.dictionaryService = dictionaryService;
	}

	public NamespaceService getNamespaceService() {
		return namespaceService;
	}

	public void setNamespaceService(NamespaceService namespaceService) {
		this.namespaceService = namespaceService;
	}

}
