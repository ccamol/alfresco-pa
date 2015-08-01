package com.intellego.pa.webscripts.download;

import java.io.DataOutputStream;
import java.io.IOException;
import java.io.OutputStream;

import org.alfresco.model.ContentModel;
import org.alfresco.repo.security.authentication.AuthenticationUtil;
import org.alfresco.service.ServiceRegistry;
import org.alfresco.service.cmr.repository.ContentReader;
import org.alfresco.service.cmr.repository.ContentService;
import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.service.cmr.repository.NodeService;
import org.alfresco.service.cmr.repository.StoreRef;
import org.alfresco.service.cmr.search.ResultSet;
import org.alfresco.service.cmr.search.SearchService;
import org.alfresco.service.namespace.NamespaceService;
import org.springframework.extensions.webscripts.AbstractWebScript;
import org.springframework.extensions.webscripts.WebScriptRequest;
import org.springframework.extensions.webscripts.WebScriptResponse;


public class ExternalDownloadWs extends AbstractWebScript {

	private static final StoreRef STORE_REF = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");

	protected ServiceRegistry serviceRegistry;
	private NamespaceService namespaceService;
	private ContentService contentService;
	private NodeService nodeService;

	@Override
	public void execute(final WebScriptRequest req, final WebScriptResponse res)
			throws IOException {
		AuthenticationUtil.runAs(new AuthenticationUtil.RunAsWork<String>() {
			public String doWork(){
				try{
					String uuid = req.getParameter("uuid");
					SearchService searchService = serviceRegistry.getSearchService();
					String query = "@sys\\:node-uuid:" + uuid;
					ResultSet resultset = searchService.query(StoreRef.STORE_REF_WORKSPACE_SPACESSTORE, SearchService.LANGUAGE_LUCENE, query);
					if(resultset.length()>0){
						NodeService nodeService = serviceRegistry.getNodeService();
						ContentService contentService = serviceRegistry.getContentService();
						NodeRef nodeRef = resultset.getNodeRef(0);
						String nameFile = (String) nodeService.getProperty(nodeRef, ContentModel.PROP_NAME);
						System.out.println(nameFile + "    NAME");
						ContentReader reader = contentService.getReader(nodeRef, ContentModel.PROP_CONTENT);
						res.setContentType(reader.getMimetype());
//						res.setHeader("Content-Disposition", "inline; filename=" + nameFile.replace(" ", ""));
						res.setHeader("Content-Disposition","attachment; filename=\"" + nameFile + "\"");
						OutputStream out = new DataOutputStream(res.getOutputStream());
						reader.getContent(out);
					} 
				}catch(Exception e){
					e.printStackTrace();
				}
				return null;
			}
		},"admin");
	}
	public ServiceRegistry getServiceRegistry() {
		return serviceRegistry;
	}

	public void setServiceRegistry(ServiceRegistry serviceRegistry) {
		this.serviceRegistry = serviceRegistry;
	}

	public NamespaceService getNamespaceService() {
		return namespaceService;
	}

	public void setNamespaceService(NamespaceService namespaceService) {
		this.namespaceService = namespaceService;
	}

	public ContentService getContentService() {
		return contentService;
	}

	public void setContentService(ContentService contentService) {
		this.contentService = contentService;
	}

	public NodeService getNodeService() {
		return nodeService;
	}

	public void setNodeService(NodeService nodeService) {
		this.nodeService = nodeService;
	}


}

