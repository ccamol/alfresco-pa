package com.intellego.parquearauco.artifacts.dictionary;

import java.util.ArrayList;
import java.util.List;

import org.alfresco.service.ServiceRegistry;
import org.alfresco.service.cmr.dictionary.DictionaryService;
import org.alfresco.service.cmr.dictionary.PropertyDefinition;
import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.service.cmr.repository.NodeService;
import org.alfresco.service.cmr.repository.StoreRef;
import org.alfresco.service.cmr.search.ResultSet;
import org.alfresco.service.cmr.search.SearchService;
import org.alfresco.service.namespace.NamespaceService;
import org.alfresco.service.namespace.QName;

public class Distinct {

	private NamespaceService namespaceService;
	private DictionaryService dictionaryService;
	private SearchService searchService;
	private NodeService nodeService;
	
	public void init(ServiceRegistry serviceRegistry){
		this.setDictionaryService(serviceRegistry.getDictionaryService());
		this.setNamespaceService(serviceRegistry.getNamespaceService());
		this.setSearchService(serviceRegistry.getSearchService());
		this.setNodeService(serviceRegistry.getNodeService());
		
	}
	
	public List<String> getDistinct(String query, String property){
		List<String> distinct = new ArrayList<String>();
		
		QName propertyQName = null;
		String[] propertyParts = property.split(":");
		if(propertyParts!=null && propertyParts.length==2){
			String nameSpace = namespaceService.getNamespaceURI(propertyParts[0]);
			
			if(nameSpace!=null && nameSpace.length()>0){
				propertyQName = QName.createQName(nameSpace, propertyParts[1]);

				StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
				ResultSet resultSet = searchService.query(storeRef , SearchService.LANGUAGE_LUCENE, query);
				if(resultSet.length()>0){
					for(NodeRef each : resultSet.getNodeRefs()){
						if(!distinct.contains((String) nodeService.getProperty(each, propertyQName) ) && (String) nodeService.getProperty(each, propertyQName) != null){
							   distinct.add((String) nodeService.getProperty(each, propertyQName));
							
						}
					}
					
				}
			
			}
		}
		return distinct;
	}
	
	

	public NamespaceService getNamespaceService() {
		return namespaceService;
	}

	public void setNamespaceService(NamespaceService namespaceService) {
		this.namespaceService = namespaceService;
	}

	public DictionaryService getDictionaryService() {
		return dictionaryService;
	}

	public void setDictionaryService(DictionaryService dictionaryService) {
		this.dictionaryService = dictionaryService;
	}

	public SearchService getSearchService() {
		return searchService;
	}

	public void setSearchService(SearchService searchService) {
		this.searchService = searchService;
	}

	public NodeService getNodeService() {
		return nodeService;
	}

	public void setNodeService(NodeService nodeService) {
		this.nodeService = nodeService;
	}
	
	

}
