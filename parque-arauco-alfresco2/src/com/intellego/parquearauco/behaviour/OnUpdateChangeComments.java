package com.intellego.parquearauco.behaviour;

import java.io.Serializable;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.alfresco.model.ContentModel;
import org.alfresco.repo.content.ContentServicePolicies;
import org.alfresco.repo.node.NodeServicePolicies;
import org.alfresco.repo.policy.Behaviour;
import org.alfresco.repo.policy.Behaviour.NotificationFrequency;
import org.alfresco.repo.policy.JavaBehaviour;
import org.alfresco.repo.policy.PolicyComponent;
import org.alfresco.service.ServiceRegistry;
import org.alfresco.service.cmr.repository.AssociationRef;
import org.alfresco.service.cmr.repository.ChildAssociationRef;
import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.service.cmr.repository.NodeService;
import org.alfresco.service.cmr.repository.StoreRef;
import org.alfresco.service.cmr.version.Version;
import org.alfresco.service.cmr.version.VersionService;
import org.alfresco.service.namespace.NamespaceService;
import org.alfresco.service.namespace.QName;

import com.intellego.parquearauco.baseprocessorextension.transform.Transform;
import com.intellego.parquearauco.constants.Constants;

public class OnUpdateChangeComments implements ContentServicePolicies.OnContentUpdatePolicy {

	private StoreRef STORE = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");

	private ServiceRegistry serviceRegistry;

	// Behaviors
	private Behaviour onContentUpdate;
	private PolicyComponent policyComponent;

	public synchronized void init() {

		this.onContentUpdate = new JavaBehaviour(this, "onContentUpdate",
				NotificationFrequency.TRANSACTION_COMMIT);

		this.policyComponent.bindClassBehaviour(QName.createQName(
				NamespaceService.ALFRESCO_URI, "onContentUpdate"), ContentModel.TYPE_CONTENT, this.onContentUpdate);

	}

	public ServiceRegistry getServiceRegistry() {
		return serviceRegistry;
	}

	public void setServiceRegistry(ServiceRegistry serviceRegistry) {
		this.serviceRegistry = serviceRegistry;
	}

	public PolicyComponent getPolicyComponent() {
		return policyComponent;
	}

	public void setPolicyComponent(PolicyComponent policyComponent) {
		this.policyComponent = policyComponent;
	}

	@Override
	public void onContentUpdate(NodeRef nodeRef, boolean newDocument) {

		if(!newDocument){
			NodeService nodeService = serviceRegistry.getNodeService();
			
			removeCommentOldDocuments(nodeRef);
			
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

}
