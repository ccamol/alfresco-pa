package com.intellego.pa.webscripts.download;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.Serializable;
import java.util.List;
import java.util.Map.Entry;

import org.alfresco.model.ContentModel;
import org.alfresco.repo.content.MimetypeMap;
import org.alfresco.repo.content.transform.ContentTransformer;
import org.alfresco.repo.security.authentication.AuthenticationUtil;
import org.alfresco.service.ServiceRegistry;
import org.alfresco.service.cmr.model.FileFolderService;
import org.alfresco.service.cmr.repository.AssociationRef;
import org.alfresco.service.cmr.repository.ContentReader;
import org.alfresco.service.cmr.repository.ContentService;
import org.alfresco.service.cmr.repository.ContentWriter;
import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.service.cmr.repository.NodeService;
import org.alfresco.service.cmr.repository.StoreRef;
import org.alfresco.service.cmr.search.ResultSet;
import org.alfresco.service.cmr.search.SearchService;
import org.alfresco.service.namespace.NamespaceService;
import org.alfresco.service.namespace.QName;
import org.springframework.extensions.webscripts.AbstractWebScript;
import org.springframework.extensions.webscripts.WebScriptRequest;
import org.springframework.extensions.webscripts.WebScriptResponse;

import com.intellego.parquearauco.constants.Constants;


public class DownloadWs extends AbstractWebScript {

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
					System.out.println("DOWNLOAD WS UUID DOCUMENT: "+uuid);
					InputStream is = null;
					String fileName = "";
					String extension = "";
					byte[] b = new byte[1024];
					int count;
					OutputStream out = res.getOutputStream();
					NodeRef node=null;
					StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
					NodeRef nodeBase = new NodeRef(storeRef, uuid);
					node = createPdfPreview(uuid);
					if(node != null)
					{
						System.out.println("existe el documento transformado");
						System.out.println(node);
						ContentReader reader = contentService.getReader(node, ContentModel.PROP_CONTENT);
						System.out.println("#####################################################################reader: ");
						System.out.println(reader);
						System.out.println("#####################################################################reader: ");
						is = (InputStream) reader.getReader().getContentInputStream();
						String fileName2 = (String) nodeService.getProperty(nodeBase, Constants.PROP_DOCUMENTTYPE)+".pdf";
//						for(Entry<QName, Serializable> prop : nodeService.getProperties(nodeBase).entrySet()){
//							if(prop.getKey().getPrefixedQName(namespaceService).getPrefixString().equals("pa:documentType")){
//								fileName = prop.getValue().toString();
//							}else{
//								fileName = "document";
//							}
//							if(prop.getKey().getPrefixedQName(namespaceService).getPrefixString().equals("cm:name")){
//								extension = prop.getValue().toString();
//								extension = extension.substring(extension.lastIndexOf("."), extension.length());
//							}
//						}
						res.setContentType(reader.getMimetype());
//						res.setHeader("Content-Disposition", "attachment; filename=" + fileName2 + ".pdf");
						res.setHeader("Content-Disposition","attachment; filename=\"" + fileName2 + "\"");
						if(!fileName2.isEmpty()){
							while ((count = is.read(b)) > 0) {
								out.write(b, 0, count);
							}
						}
						is.close();
						out.close();
						res.getOutputStream().flush();
						nodeService.deleteNode(node);
					}else
					{
						System.out.println("No existe el documento transformado");
					}

				}catch(Exception e){
					e.printStackTrace();
					return null;
				}
				return null;
			}
		},"admin");
	}

	public NodeRef createPdfPreview(String uuid){

		ContentTransformer toPDFTransformer = null;
		NodeRef target = null;
		ContentReader source = null;
		NodeRef thumbNailFolder = null;
		ContentService contentService = this.serviceRegistry.getContentService();
		FileFolderService fileFolderService = this.serviceRegistry.getFileFolderService();
		SearchService searchService = this.serviceRegistry.getSearchService();
		NodeService nodeService = this.serviceRegistry.getNodeService();
		StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");



		ResultSet resultSet=searchService.query(storeRef, SearchService.LANGUAGE_LUCENE,"PATH:\"/app:company_home/app:dictionary/cm:thumbnailsPdf\"");


		if(resultSet.length()==0){
			resultSet=searchService.query(storeRef, SearchService.LANGUAGE_LUCENE,"PATH:\"/app:company_home/app:dictionary\"");
			thumbNailFolder=fileFolderService.create(resultSet.getNodeRef(0), "thumbnailsPdf", ContentModel.TYPE_FOLDER).getNodeRef();
		}else{
			thumbNailFolder=resultSet.getNodeRef(0);
		}

		try{
			resultSet=searchService.query(storeRef, SearchService.LANGUAGE_LUCENE,"@sys\\:node-uuid:" + uuid);
			System.out.println("LENGHT::::::::::::::::::::::::::::::::::::::::");
			System.out.println(resultSet.length());
			if(resultSet.length()>0){
				source = contentService.getReader(resultSet.getNodeRef(0), ContentModel.PROP_CONTENT);
				target = fileFolderService.create(thumbNailFolder, System.currentTimeMillis()+"_"+((String) nodeService.getProperty(resultSet.getNodeRef(0), ContentModel.PROP_NAME)), ContentModel.TYPE_CONTENT).getNodeRef();
				ContentWriter contentWriter = contentService.getWriter(target, ContentModel.PROP_CONTENT, true);
				System.out.println("#####################################################################################TARGET:");
				System.out.println(target);
				System.out.println("#####################################################################################SOURCE:");
				System.out.println(source);
				System.out.println(contentWriter);
				contentWriter.setMimetype(MimetypeMap.MIMETYPE_PDF);
				toPDFTransformer = contentService.getTransformer(source.getMimetype(), MimetypeMap.MIMETYPE_PDF);
				toPDFTransformer.transform(source, contentWriter);
				source = contentService.getReader(target, ContentModel.PROP_CONTENT);
			}

		}catch(Exception e){
			System.out.println("Error transformando PDF." + e.toString());
		}

		return target;
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

