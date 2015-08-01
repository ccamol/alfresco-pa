package com.intellego.parquearauco.utils;

import org.alfresco.repo.processor.BaseProcessorExtension;
import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.service.cmr.repository.NodeService;
import org.alfresco.service.cmr.repository.StoreRef;
import org.alfresco.service.cmr.search.ResultSet;
import org.alfresco.service.cmr.search.SearchService;
import org.alfresco.service.namespace.QName;

public class ML extends BaseProcessorExtension{

	private SearchService searchService;
	private NodeService nodeService;


	public boolean write(String uuid, String nameSpace, String property, String value){

		try{
			QName propertyName = QName.createQName(nameSpace, property);

			StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
			ResultSet resultSet=searchService.query(storeRef,SearchService.LANGUAGE_LUCENE, "@sys\\:node-uuid:"+uuid);
			if(resultSet.length()>0){
				NodeRef node = resultSet.getNodeRef(0);
				nodeService.setProperty(node, propertyName, value);
			}		
		}
		catch(Exception e){
			return false;
		}

		return true;
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
