package com.intellego.pa.utils;

import java.io.DataOutputStream;
import java.io.IOException;
import java.io.OutputStream;

import org.alfresco.model.ContentModel;
import org.alfresco.repo.search.SearcherException;
import org.alfresco.repo.security.authentication.AuthenticationUtil;
import org.alfresco.service.ServiceRegistry;
import org.alfresco.service.cmr.repository.ContentReader;
import org.alfresco.service.cmr.repository.ContentService;
import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.service.cmr.repository.NodeService;
import org.alfresco.service.cmr.repository.StoreRef;
import org.alfresco.service.cmr.search.ResultSet;
import org.alfresco.service.cmr.search.SearchService;
import org.alfresco.service.cmr.security.PersonService;

import org.springframework.extensions.webscripts.AbstractWebScript;
import org.springframework.extensions.webscripts.WebScriptRequest;
import org.springframework.extensions.webscripts.WebScriptResponse;

//sdk antigua

public class GetDocument extends AbstractWebScript  {

	protected ServiceRegistry serviceRegistry;

	public final void execute(final WebScriptRequest req, final WebScriptResponse res) throws IOException{

		AuthenticationUtil.runAs(new AuthenticationUtil.RunAsWork<String>() {
			public String doWork(){
				try{
					String uuid = req.getParameter("uuid");
					if(uuid!=null && uuid.length()>0){
						SearchService searchService = serviceRegistry.getSearchService();
						NodeService nodeService = serviceRegistry.getNodeService();
						ContentService contentService = serviceRegistry.getContentService();
						ContentReader reader = null;
						NodeRef nodeRef = null;
						String query = new String();
						query = "@sys\\:node-uuid:" + uuid;
						try{
							ResultSet resultset = searchService.query(StoreRef.STORE_REF_WORKSPACE_SPACESSTORE, SearchService.LANGUAGE_LUCENE, query);
							if(resultset.length()>0){
								nodeRef = resultset.getNodeRef(0);
								//nodeService.setProperty(nodeRef,ColmenaConstants.PROP_DOCUMENTOABIERTOCOPY, true);
								reader = contentService.getReader(nodeRef, ContentModel.PROP_CONTENT);
								res.setContentType(reader.getMimetype());
								//res.setHeader("Content-Disposition", "attachment; filename=" + nodeService.getProperty(nodeRef, ContentModel.PROP_NAME));
								res.setHeader("Content-Disposition", "inline; filename=" + nodeService.getProperty(nodeRef, ContentModel.PROP_NAME));
								OutputStream out = new DataOutputStream(res.getOutputStream());
								reader.getContent(out);
								
								return null;
							}
						}catch(SearcherException e){

						}
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

}

