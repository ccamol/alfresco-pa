package com.intellego.pa.utils;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;




//import org.alfresco.model.ContentModel;
import org.alfresco.repo.processor.BaseProcessorExtension;
import org.alfresco.repo.version.VersionModel;
import org.alfresco.service.ServiceRegistry;
import org.alfresco.service.cmr.repository.AssociationRef;
import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.service.cmr.repository.NodeService;
//import org.alfresco.service.cmr.repository.NodeService;
import org.alfresco.service.cmr.repository.StoreRef;
import org.alfresco.service.cmr.search.ResultSet;
import org.alfresco.service.cmr.search.SearchService;
import org.alfresco.service.cmr.version.Version;
import org.alfresco.service.cmr.version.VersionService;
import org.alfresco.service.cmr.version.VersionType;
import org.alfresco.service.namespace.QName;

import com.intellego.parquearauco.baseprocessorextension.transform.Transform;
import com.intellego.parquearauco.constants.Constants;

public class VersionUtils extends BaseProcessorExtension {
	ServiceRegistry serviceRegistry;

	public boolean createVersion(String uuid, Boolean isMajor, String description) throws Exception {
		VersionService versionService= this.serviceRegistry.getVersionService();
		SearchService searchService = this.serviceRegistry.getSearchService();
		//		NodeService nodeService = this.serviceRegistry.getNodeService();
		NodeRef nodeRef=null;

		try {
			StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
			ResultSet resultSet=searchService.query(storeRef, SearchService.LANGUAGE_LUCENE,"@sys\\:node-uuid:"+uuid);

			if(resultSet.length()>0) {
				nodeRef=resultSet.getNodeRef(0);

				//				if(!nodeService.hasAspect(nodeRef, ContentModel.ASPECT_VERSIONABLE)){
				//					nodeService.addAspect(nodeRef, ContentModel.ASPECT_VERSIONABLE, null);
				//				}

				Map<String, Serializable> versionProperties = new HashMap<String, Serializable>();
				versionProperties.put(Version.PROP_DESCRIPTION, description);

				if (isMajor) {
					versionProperties.put(VersionModel.PROP_VERSION_TYPE, VersionType.MAJOR);
				} else {
					versionProperties.put(VersionModel.PROP_VERSION_TYPE, VersionType.MINOR);
				}
				versionService.createVersion(nodeRef, versionProperties);
				removeCommentOldDocuments(nodeRef);
				removeAssocComments(nodeRef);
			}
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	public boolean createVersion(String uuid, Boolean isMajor) throws Exception {
		VersionService versionService= this.serviceRegistry.getVersionService();
		SearchService searchService = this.serviceRegistry.getSearchService();
		//		NodeService nodeService = this.serviceRegistry.getNodeService();
		NodeRef nodeRef=null;

		try {
			StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
			ResultSet resultSet=searchService.query(storeRef, SearchService.LANGUAGE_LUCENE,"@sys\\:node-uuid:"+uuid);

			if(resultSet.length()>0) {
				nodeRef=resultSet.getNodeRef(0);

				//				if(!nodeService.hasAspect(nodeRef, ContentModel.ASPECT_VERSIONABLE)){
				//					nodeService.addAspect(nodeRef, ContentModel.ASPECT_VERSIONABLE, null);
				//				}

				Map<String, Serializable> versionProperties = new HashMap<String, Serializable>();

				if (isMajor) {
					versionProperties.put(VersionModel.PROP_VERSION_TYPE, VersionType.MAJOR);
				} else {
					versionProperties.put(VersionModel.PROP_VERSION_TYPE, VersionType.MINOR);
				}
				removeCommentOldDocuments(nodeRef);
				removeAssocComments(nodeRef);
				versionService.createVersion(nodeRef, versionProperties);
			}
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}

	private void removeAssocComments(NodeRef nodeRef){

		NodeService nodeService = serviceRegistry.getNodeService();
		// Remove comment pdf association
		List<AssociationRef> associations = nodeService.getTargetAssocs(nodeRef, Constants.ASSOC_PDFASSOC);
		for(AssociationRef each : associations){
			nodeService.removeAssociation(nodeRef, each.getTargetRef(), Constants.ASSOC_PDFASSOC);
		}

		associations = nodeService.getTargetAssocs(nodeRef, Constants.ASSOC_SWF_PREVIEW);
		if(associations.size()>0){
			Transform transform = new Transform();
			transform.setServiceRegistry(this.serviceRegistry);
			transform.createFlashPreview(nodeRef.getId());
		}
	}
	
	private void removeCommentOldDocuments(NodeRef nodeRef){
		// MODEL NAMESPACE
		final String MODEL = "http://www.info2000.cl/models/comment"; 

		// TYPES
		final QName TYPE_DOC_DOCUMENTO = QName.createQName(MODEL, "doc");
		final QName TYPE_FOLDER_EXPEDIENTE = QName.createQName(MODEL, "folder");
		final QName TYPE_DOC = QName.createQName(MODEL, "typeDocumento");
		// static final QName TYPE_EXPEDIENTE = QName.createQName(MODEL, "typeExpediente");

		// ASPECTS
		final QName ASPECT_DOCUMENTO = QName.createQName(MODEL, "commentData");
		final QName ASPECT_RESPONSE = QName.createQName(MODEL, "commentResponse");

		// PROPERTIES DOCUMENTO
		final QName PROP_user = QName.createQName(MODEL, "user");
		final QName PROP_ndate = QName.createQName(MODEL, "ndate");
		final QName PROP_coment = QName.createQName(MODEL, "coment");
		final QName PROP_top = QName.createQName(MODEL, "top");
		final QName PROP_left = QName.createQName(MODEL, "left");
		final QName PROP_width = QName.createQName(MODEL, "width");
		final QName PROP_height = QName.createQName(MODEL, "height");
		final QName PROP_pagina = QName.createQName(MODEL, "pagina");
		final QName PROP_color = QName.createQName(MODEL, "color");

		final QName PROP_id_parent = QName.createQName(MODEL, "id");
		final QName PROP_id_parentr = QName.createQName(MODEL, "idparent");
		final QName PROP_userr = QName.createQName(MODEL, "userr");
		final QName PROP_commentr = QName.createQName(MODEL, "commentr");
		final QName PROP_ndater = QName.createQName(MODEL, "ndater");
		final QName PROP_id_son = QName.createQName(MODEL, "idson");

		serviceRegistry.getNodeService().removeProperty(nodeRef, PROP_id_son);
		serviceRegistry.getNodeService().removeProperty(nodeRef, PROP_ndater);
		serviceRegistry.getNodeService().removeProperty(nodeRef, PROP_commentr);
		serviceRegistry.getNodeService().removeProperty(nodeRef, PROP_userr);
		serviceRegistry.getNodeService().removeProperty(nodeRef, PROP_id_parentr);
		serviceRegistry.getNodeService().removeProperty(nodeRef, PROP_id_parentr);
		serviceRegistry.getNodeService().removeProperty(nodeRef, PROP_id_parent);
		serviceRegistry.getNodeService().removeProperty(nodeRef, PROP_color);
		serviceRegistry.getNodeService().removeProperty(nodeRef, PROP_pagina);
		serviceRegistry.getNodeService().removeProperty(nodeRef, PROP_height);
		serviceRegistry.getNodeService().removeProperty(nodeRef, PROP_width);
		serviceRegistry.getNodeService().removeProperty(nodeRef, PROP_left);
		serviceRegistry.getNodeService().removeProperty(nodeRef, PROP_top);
		serviceRegistry.getNodeService().removeProperty(nodeRef, PROP_coment);
		serviceRegistry.getNodeService().removeProperty(nodeRef, PROP_ndate);
		serviceRegistry.getNodeService().removeProperty(nodeRef, PROP_user);
		serviceRegistry.getNodeService().removeAspect(nodeRef, ASPECT_RESPONSE);
		serviceRegistry.getNodeService().removeAspect(nodeRef, ASPECT_DOCUMENTO);
	}
	
	public ServiceRegistry getServiceRegistry() {
		return serviceRegistry;
	}

	public void setServiceRegistry(ServiceRegistry serviceRegistry) {
		this.serviceRegistry = serviceRegistry;
	}

}
