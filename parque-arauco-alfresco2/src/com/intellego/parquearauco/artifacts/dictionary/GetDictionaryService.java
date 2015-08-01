package com.intellego.parquearauco.artifacts.dictionary;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.alfresco.model.ContentModel;
import org.alfresco.repo.processor.BaseProcessorExtension;
import org.alfresco.repo.security.authentication.AuthenticationUtil;
import org.alfresco.service.cmr.dictionary.DictionaryService;
import org.alfresco.service.cmr.dictionary.PropertyDefinition;
import org.alfresco.service.cmr.repository.ContentService;
import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.service.cmr.repository.NodeService;
import org.alfresco.service.cmr.repository.StoreRef;
import org.alfresco.service.cmr.search.ResultSet;
import org.alfresco.service.cmr.search.SearchService;
import org.alfresco.service.namespace.NamespaceService;
import org.alfresco.service.namespace.QName;
import org.alfresco.service.ServiceRegistry;

import com.intellego.parquearauco.constants.Constants;





public class GetDictionaryService extends BaseProcessorExtension{

	private ContentService contentService;
	private SearchService searchService;
	private DictionaryService dictionaryService;
	private NamespaceService namespaceService;
	private ServiceRegistry serviceRegistry;
	private String titleAspect;
	private String aspect;
	private String name;
	private String dataType;
	private String mandatory;
	private String title;
	private String description;
	private NodeService nodeService;


	public List<ListProperties> service(final String varAspects, final String varDocumentId, final String varPrefix){

		return AuthenticationUtil.runAs(new AuthenticationUtil.RunAsWork<List<ListProperties>>() {
			public List<ListProperties> doWork(){
				List<String> listaAspect = new ArrayList<String>();
				listaAspect = getResultsAspects(varAspects,varDocumentId,varPrefix);
				List<ListProperties> lista = new ArrayList<ListProperties>();

				Iterator<String> iter = listaAspect.iterator();
				String varData[]=null;
				while (iter.hasNext()){
					varData = iter.next().toString().split(":");

					String nameSpace = serviceRegistry.getNamespaceService().getNamespaceURI(varData[0]);
					QName TYPE_MODEL_ASPECT = QName.createQName(nameSpace,varData[1]);       
					Map<QName, PropertyDefinition> properties = dictionaryService.getAspect(TYPE_MODEL_ASPECT).getProperties();
					String varTitleAspect = dictionaryService.getAspect(TYPE_MODEL_ASPECT).getTitle();
					varTitleAspect = varTitleAspect.replace(varData[0]+":", "");

					for (Map.Entry<QName, PropertyDefinition> property : properties.entrySet()){
						titleAspect = varTitleAspect;		
						aspect = varData[1];
						name = property.getValue().getName().getLocalName();
						dataType = property.getValue().getDataType().getName().getLocalName();
						if(property.getValue().isMandatory() == true){
							mandatory = "true";
						}else{
							mandatory = "false";
						}
						if(property.getValue().getTitle() != null){
							title = property.getValue().getTitle();
						}else{
							title = "";
						}
						if(property.getValue().getDescription() != null){
							description = property.getValue().getDescription();
						}else{
							description = "";
						}
						ListProperties listProperties = new ListProperties(titleAspect, aspect, name, dataType, mandatory, title, description); 
						lista.add(listProperties);
					}
					varData[0]="";
					varData[1]="";
				}
				return lista;
			}
		},"admin");

	}



	public DictionaryService getDictionaryService() {
		return dictionaryService;
	}

	public void setDictionaryService(DictionaryService dictionaryService) {
		this.dictionaryService = dictionaryService;
	}

	public ContentService getContentService() {
		return contentService;
	}
	public void setContentService(ContentService contentService) {
		this.contentService = contentService;
	}
	public SearchService getSearchService() {
		return searchService;
	}
	public void setSearchService(SearchService searchService) {
		this.searchService = searchService;
	}
	public NamespaceService getNamespaceService() {
		return namespaceService;
	}
	public ServiceRegistry getServiceRegistry() {
		return serviceRegistry;
	}
	public void setServiceRegistry(ServiceRegistry serviceRegistry) {
		this.serviceRegistry = serviceRegistry;
	}
	public void setNamespaceService(NamespaceService namespaceService) {
		this.namespaceService = namespaceService;
	}
	public NodeService getNodeService() {
		return nodeService;
	}
	public void setNodeService(NodeService nodeService) {
		this.nodeService = nodeService;
	}

	public List<String> getResultsAspects(final String typeAspects, final String documentId, final String prefix){

		return AuthenticationUtil.runAs(new AuthenticationUtil.RunAsWork<List<String>>() {
			public List<String> doWork(){
		ResultSet resultset = null;
		NodeRef nodeRef = null;
		List <String> listArray = new ArrayList<String>();
		try{
			resultset = searchService.query(StoreRef.STORE_REF_WORKSPACE_SPACESSTORE, SearchService.LANGUAGE_LUCENE,"TYPE:\""+prefix.trim()+"List:"+typeAspects+"\" AND @"+prefix.trim()+"List\\:id:\""+documentId+"\" ");
			if(resultset.length()>0){
				nodeRef = resultset.getNodeRef(0);
				Map<QName,Serializable> aspects=nodeService.getProperties(nodeRef);
				for(Map.Entry<QName,Serializable> property : aspects.entrySet()){
					if(property.getKey().getLocalName().contains("Data")){
						if((Boolean) property.getValue()){
							listArray.add(namespaceService.getPrefixes(property.getKey().getNamespaceURI()).toString().replace("[", "").replace("]", "").replace("List", "") + ":" + property.getKey().getLocalName());
						}
					}
				}
			}
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			if(resultset!=null) resultset.close();
			nodeRef = null;
		}
		return listArray;
			}
		},"admin");

	}

	public class ListCombo {
		private String id;
		private String name;

		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}

		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
	}

	public class ListProperties {

		private String titleAspect;
		private String aspect;
		private String name;
		private String dataType;
		private String mandatory;
		private String title;
		private String description;

		public ListProperties(String titleAspect, String aspect, String name, String dataType, String mandatory, String title, String description){
			this.titleAspect = titleAspect;
			this.aspect = aspect;
			this.name = name;
			this.dataType = dataType;
			this.mandatory = mandatory;
			this.title = title;
			this.description = description;		
		}

		public String getTitleAspect() {
			return titleAspect;
		}
		public void setTitleAspect(String titleAspect) {
			this.titleAspect = titleAspect;
		}
		public String getAspect() {
			return aspect;
		}
		public void setAspect(String aspect) {
			this.aspect = aspect;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getDataType() {
			return dataType;
		}
		public void setDataType(String dataType) {
			this.dataType = dataType;
		}
		public String getMandatory() {
			return mandatory;
		}
		public void setMandatory(String mandatory) {
			this.mandatory = mandatory;
		}
		public String getTitle() {
			return title;
		}
		public void setTitle(String title) {
			this.title = title;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}

		public PropertiesCreate getCreate() {
			PropertiesCreate properties = (PropertiesCreate) processDescription("create");
			return properties;
		}
		public PropertiesDetails getDetails() {
			PropertiesDetails properties = (PropertiesDetails) processDescription("details");
			return properties;
		}
		public PropertiesSearch getSearch() {
			PropertiesSearch properties = (PropertiesSearch) processDescription("search");
			return properties;
		}


		private PropertiesMode processDescription(String mode){
			PropertiesMode item=null;
			String propertyName=new String();
			String propertyValue=new String();
			Map<String, String> propertiesMap = new HashMap<String, String>();


			if(mode.equals("create")) item=new PropertiesCreate();
			if(mode.equals("details")) item=new PropertiesDetails();
			if(mode.equals("search")) item=new PropertiesSearch();			

			//create.show:true;create.list:false;details.show:true;details.area:true;search.show:true
			String[] properties = this.getDescription().split(";");
			for(int i=0;i<properties.length;i++){
				if(properties[i].split(":")[0].contains(mode)){
					propertyName = properties[i].split(":")[0].split("\\.")[1];
					propertyValue = properties[i].split(":")[1];
					propertiesMap.put(propertyName, propertyValue);
				}
			}
			item.setProperties(propertiesMap);

			return item;
		}

		public List<ListCombo> getListToCombo(String _list) {
			String array[] = _list.split("_");
			String nameSpace = serviceRegistry.getNamespaceService().getNamespaceURI(array[0]);
			QName prorId=QName.createQName(nameSpace,"id");
			QName propName=Constants.PROP_LIST_DESCRIPTION; //ContentModel.PROP_NAME;
			ResultSet resultset = null;
			NodeRef nodeRef = null;
			List <ListCombo> listArray = new ArrayList<ListCombo>();
			try{
				String query = "TYPE:\""+ _list.replace("_", ":") +"\"";
				resultset = searchService.query(StoreRef.STORE_REF_WORKSPACE_SPACESSTORE, SearchService.LANGUAGE_LUCENE,query);

				if(resultset.length()>0){
					for(int i = 0 ; i < resultset.length() ; i++){
						nodeRef = resultset.getNodeRef(i);						
						ListCombo dato = new ListCombo();
						dato.setId((String) nodeService.getProperty(nodeRef, prorId));
						dato.setName((String) nodeService.getProperty(nodeRef, propName));
						listArray.add(dato);
					}
				}
			}catch(Exception e){
				e.printStackTrace();
			}finally{
				if(resultset!=null) resultset.close();
				nodeRef = null;
			}
			return listArray;
		}

	}

	public class PropertiesMode{
		private Map<String, String> properties;

		public PropertiesMode(){
			this.properties=new HashMap<String, String>();
		}

		public Map<String, String> getProperties() {
			return properties;
		}

		public void setProperties(Map<String, String> properties) {
			this.properties = properties;
		}

		public boolean getShow() {
			return getBoolean("show");
		}

		protected boolean getBoolean(String key){
			boolean result=false;

			String value = this.properties.get(key);

			if(value!=null && value.length()>0){
				if(value.equals("true")) result=true;
			}

			return result;
		}
	}

	public class PropertiesCreate extends PropertiesMode{

		public PropertiesCreate(){
			super();
		}

		public boolean getList() {
			return getBoolean("list");
		}

		public boolean getArea() {
			return getBoolean("area");
		}

	}

	public class PropertiesDetails extends PropertiesMode{

		public boolean getArea() {
			return getBoolean("area");
		}
	}

	public class PropertiesSearch extends PropertiesMode{

		public PropertiesSearch(){
			super();
		}

		public boolean getList() {
			return getBoolean("list");
		}

		public boolean getRange() {
			return getBoolean("range");
		}
	}





}