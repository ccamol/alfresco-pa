package com.intellego.parquearauco.behaviour;

import java.io.Serializable;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.alfresco.model.ContentModel;
import org.alfresco.repo.policy.Behaviour;
import org.alfresco.repo.policy.JavaBehaviour;
import org.alfresco.repo.policy.PolicyComponent;
import org.alfresco.repo.policy.Behaviour.NotificationFrequency;
import org.alfresco.repo.version.VersionModel;
import org.alfresco.repo.version.VersionServicePolicies;
import org.alfresco.service.ServiceRegistry;
import org.alfresco.service.cmr.repository.AssociationRef;
import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.service.cmr.repository.NodeService;
import org.alfresco.service.cmr.version.Version;
import org.alfresco.service.cmr.version.VersionHistory;
import org.alfresco.service.cmr.version.VersionService;
import org.alfresco.service.cmr.version.VersionType;
import org.alfresco.service.namespace.NamespaceService;
import org.alfresco.service.namespace.QName;
import org.alfresco.service.namespace.RegexQNamePattern;

import com.intellego.parquearauco.baseprocessorextension.transform.Transform;
import com.intellego.parquearauco.constants.Constants;

public class OnVersion implements VersionServicePolicies.AfterCreateVersionPolicy{

	private ServiceRegistry serviceRegistry;

	// Behaviors
	private Behaviour afterCreateVersion;
	private PolicyComponent policyComponent;

	public synchronized void init() {

		this.afterCreateVersion = new JavaBehaviour(this, "afterCreateVersion",
				NotificationFrequency.TRANSACTION_COMMIT);

		this.policyComponent.bindClassBehaviour(QName.createQName(
				NamespaceService.ALFRESCO_URI, "afterCreateVersion"), ContentModel.TYPE_CONTENT, this.afterCreateVersion);

	}

	@Override
	public void afterCreateVersion(NodeRef versionableNode, Version version) {

		System.out.println("Se crea versión para: " + versionableNode.getId() + " con num.: "+ version.getVersionLabel() + " Tipo de version:" + version.getVersionType());

		NodeService nodeService = serviceRegistry.getNodeService();
		VersionService versionService = serviceRegistry.getVersionService();

		if(nodeService.getType(versionableNode).equals(Constants.TYPE_PA_DOCUMENT)){
			List<String> ASSOC_NAMES_TO_EXTRACT = Arrays.asList(new String[]{"downlaodAssoc"});
			List<AssociationRef> documentsAssoc = null;
			documentsAssoc = nodeService.getTargetAssocs(versionableNode, RegexQNamePattern.MATCH_ALL);
			NodeRef nodeToUpload = null;
			Map<String, Serializable> versionProperties = new HashMap<String, Serializable>();
			boolean makeVersion = false;
			//Eliminar comentarios
			removeComments(versionableNode);
			for(AssociationRef each : documentsAssoc) {
				QName assocQname = each.getTypeQName();
				if (ASSOC_NAMES_TO_EXTRACT.contains(assocQname.getLocalName())) {
					nodeToUpload=each.getTargetRef();
					if(version.getVersionLabel().contains(".0")){
						versionProperties.put(VersionModel.PROP_VERSION_TYPE, VersionType.MAJOR);
						if(versionService.getCurrentVersion(nodeToUpload)!=null){
							if(checkVersion(version.getVersionLabel(), versionService.getCurrentVersion(nodeToUpload).getVersionLabel(), true)==0){
								makeVersion=true;
							}else{
								if(increaseVersion(nodeToUpload, versionableNode)){
									makeVersion=false;
								}
							}
						}else{
							increaseVersion(nodeToUpload, versionableNode);
							makeVersion=false;
						}

					}else{
						versionProperties.put(VersionModel.PROP_VERSION_TYPE, VersionType.MINOR);
						if(versionService.getCurrentVersion(nodeToUpload)!=null){
							if(checkVersion(version.getVersionLabel(), versionService.getCurrentVersion(nodeToUpload).getVersionLabel(), false)==0){
								makeVersion=true;
							}else{
								if(increaseVersion(nodeToUpload, versionableNode)){
									makeVersion=false;
								}
							}
						}else{
							increaseVersion(nodeToUpload, versionableNode);
							makeVersion=false;
						}
					}
					if(makeVersion) versionService.createVersion(nodeToUpload, versionProperties);  
				}
			}
		}
	}

	private boolean increaseVersion(NodeRef attachmentNode, NodeRef principalNode){
		boolean response = true;

		Map<String, Serializable> versionProperties = new HashMap<String, Serializable>();

		VersionService versionService = serviceRegistry.getVersionService();

		VersionHistory versionHistory = versionService.getVersionHistory(principalNode);

		Version currentVersion = versionHistory.getRootVersion();

		Double  principalVersionDouble = Double.valueOf(currentVersion.getVersionLabel());
		Double  attachmentVersionDouble = 0.0;
		if(versionService.getCurrentVersion(attachmentNode)!=null){
			attachmentVersionDouble = Double.valueOf(versionService.getCurrentVersion(attachmentNode).getVersionLabel());
		}

		Version[] versionElements = null;
		Version created = null; 

		while(true){
			if(!principalVersionDouble.equals(attachmentVersionDouble)){
				if(currentVersion.getVersionLabel().contains(".0")){
					versionProperties.put(VersionModel.PROP_VERSION_TYPE, VersionType.MAJOR);
				}else{
					versionProperties.put(VersionModel.PROP_VERSION_TYPE, VersionType.MINOR);
				}
				created = versionService.createVersion(attachmentNode, versionProperties);
			}

			Iterator<Version> iterator = versionHistory.getSuccessors(currentVersion).iterator();
			if(iterator.hasNext()){
				currentVersion =  iterator.next();
				principalVersionDouble = Double.valueOf(currentVersion.getVersionLabel());
				if(versionService.getCurrentVersion(attachmentNode)!=null){
					attachmentVersionDouble = Double.valueOf(versionService.getCurrentVersion(attachmentNode).getVersionLabel());
				}else{
					response=false;
					break;
				}
			}else{
				break;
			}

		}

		return response;
	}


	private int checkVersion(String principalVersion, String attachmentVersion, boolean mayor){

		int response = -1; // 0=equals; -1=not equals

		Double  principalVersionDouble = Double.valueOf(principalVersion);
		Double  attachmentVersionDouble = Double.valueOf(attachmentVersion);

		if(mayor){
			attachmentVersionDouble=Double.valueOf(attachmentVersionDouble.intValue())+1;
		}else{
			attachmentVersionDouble=attachmentVersionDouble+0.1;
		}

		if(principalVersionDouble.equals(attachmentVersionDouble)){
			response = 0;
		}



		return response;
	}

	private void removeComments(NodeRef nodeRef){
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

	public PolicyComponent getPolicyComponent() {
		return policyComponent;
	}

	public void setPolicyComponent(PolicyComponent policyComponent) {
		this.policyComponent = policyComponent;
	}

}
