package com.intellego.parquearauco.baseprocessorextension.transform;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import org.alfresco.model.ContentModel;
import org.alfresco.repo.content.MimetypeMap;
import org.alfresco.repo.content.transform.ContentTransformer;
import org.alfresco.repo.processor.BaseProcessorExtension;
import org.alfresco.repo.security.authentication.AuthenticationUtil;
import org.alfresco.service.ServiceRegistry;
import org.alfresco.service.cmr.model.FileExistsException;
import org.alfresco.service.cmr.model.FileFolderService;
import org.alfresco.service.cmr.model.FileNotFoundException;
import org.alfresco.service.cmr.repository.AssociationRef;
import org.alfresco.service.cmr.repository.ContentReader;
import org.alfresco.service.cmr.repository.ContentService;
import org.alfresco.service.cmr.repository.ContentWriter;
import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.service.cmr.repository.NodeService;
import org.alfresco.service.cmr.repository.StoreRef;
import org.alfresco.service.cmr.search.ResultSet;
import org.alfresco.service.cmr.search.SearchService;
import org.alfresco.service.namespace.QName;
import org.alfresco.util.ISO9075;

import com.intellego.parquearauco.constants.Constants;



public class Transform extends BaseProcessorExtension{


	public String createFlashPreview(String uuid){
		String result=new String();

		NodeRef thumbNailFolder = null;
		NodeRef target = null;
		NodeRef node = new NodeRef("workspace://SpacesStore/" + uuid);
		ContentService contentService = this.serviceRegistry.getContentService();
		SearchService searchService = this.serviceRegistry.getSearchService();
		NodeService nodeService = this.serviceRegistry.getNodeService();
		FileFolderService fileFolderService = this.serviceRegistry.getFileFolderService();
		StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
		ResultSet resultSet=searchService.query(storeRef, SearchService.LANGUAGE_LUCENE,"PATH:\"/app:company_home/app:dictionary/cm:thumbnailsSwf\"");

		try{

			if(resultSet.length()==0){
				resultSet=searchService.query(storeRef, SearchService.LANGUAGE_LUCENE,"PATH:\"/app:company_home/app:dictionary\"");
				thumbNailFolder=fileFolderService.create(resultSet.getNodeRef(0), "thumbnailsSwf", ContentModel.TYPE_FOLDER).getNodeRef();
			}else{
				thumbNailFolder=resultSet.getNodeRef(0);
			}

			if(node!=null){
				ContentReader source = contentService.getReader(node, ContentModel.PROP_CONTENT);
				target = fileFolderService.create(thumbNailFolder, System.currentTimeMillis()+"_"+((String) nodeService.getProperty(node, ContentModel.PROP_NAME)), ContentModel.TYPE_CONTENT).getNodeRef();
				ContentWriter contentWriter = contentService.getWriter(target, ContentModel.PROP_CONTENT, true);
				contentWriter.setMimetype(MimetypeMap.MIMETYPE_FLASH);
				ContentTransformer toPDFTransformer = contentService.getTransformer(source.getMimetype(), MimetypeMap.MIMETYPE_FLASH);
				if(toPDFTransformer!=null){
					// Checks if exists preview
					List<AssociationRef> associations = nodeService.getTargetAssocs(node, Constants.ASSOC_SWF_PREVIEW);
					for(AssociationRef each : associations){
						nodeService.removeAssociation(node, each.getTargetRef(), Constants.ASSOC_SWF_PREVIEW);
					}
					// Transform
					toPDFTransformer.transform(source, contentWriter);
					nodeService.createAssociation(node, target, Constants.ASSOC_SWF_PREVIEW);
					result=target.getId();
				}else{
					System.out.println("No transformers available for " + source.getMimetype() + " to " + MimetypeMap.MIMETYPE_FLASH);
				}
			}

		}catch(Exception e){
			System.out.println("Error transformando PDF." + e.toString());
			e.printStackTrace();
		}

		return result;
	}
	public String createFlashPreview(String uuidPreview, String uuid){
		String result=new String();

		NodeRef thumbNailFolder = null;
		NodeRef target = null;
		NodeRef node = new NodeRef("workspace://SpacesStore/" + uuidPreview);
		NodeRef nodeBase = new NodeRef("workspace://SpacesStore/" + uuid);
		
		ContentService contentService = this.serviceRegistry.getContentService();
		SearchService searchService = this.serviceRegistry.getSearchService();
		NodeService nodeService = this.serviceRegistry.getNodeService();
		FileFolderService fileFolderService = this.serviceRegistry.getFileFolderService();
		StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
		ResultSet resultSet=searchService.query(storeRef, SearchService.LANGUAGE_LUCENE,"PATH:\"/app:company_home/app:dictionary/cm:thumbnailsSwf\"");

		try{

			if(resultSet.length()==0){
				resultSet=searchService.query(storeRef, SearchService.LANGUAGE_LUCENE,"PATH:\"/app:company_home/app:dictionary\"");
				thumbNailFolder=fileFolderService.create(resultSet.getNodeRef(0), "thumbnailsSwf", ContentModel.TYPE_FOLDER).getNodeRef();
			}else{
				thumbNailFolder=resultSet.getNodeRef(0);
			}

			if(node!=null){
				ContentReader source = contentService.getReader(node, ContentModel.PROP_CONTENT);
				target = fileFolderService.create(thumbNailFolder, System.currentTimeMillis()+"_"+((String) nodeService.getProperty(node, ContentModel.PROP_NAME)), ContentModel.TYPE_CONTENT).getNodeRef();
				ContentWriter contentWriter = contentService.getWriter(target, ContentModel.PROP_CONTENT, true);
				contentWriter.setMimetype(MimetypeMap.MIMETYPE_FLASH);
				ContentTransformer toPDFTransformer = contentService.getTransformer(source.getMimetype(), MimetypeMap.MIMETYPE_FLASH);
				if(toPDFTransformer!=null){
					// Checks if exists preview
					List<AssociationRef> associations = nodeService.getTargetAssocs(node, Constants.ASSOC_SWF_PREVIEW);
					for(AssociationRef each : associations){
						nodeService.removeAssociation(node, each.getTargetRef(), Constants.ASSOC_SWF_PREVIEW);
					}

					toPDFTransformer.transform(source, contentWriter);
					nodeService.createAssociation(nodeBase, target, Constants.ASSOC_SWF_PREVIEW);
					result=target.getId();
				}else{
					System.out.println("No transformers available for " + source.getMimetype() + " to " + MimetypeMap.MIMETYPE_FLASH);
				}
			}

		}catch(Exception e){
			System.out.println("Error transformando PDF." + e.toString());
			e.printStackTrace();
		}

		return result;
	}

	private ServiceRegistry serviceRegistry;

	public ServiceRegistry getServiceRegistry() {
		return serviceRegistry;
	}

	public void setServiceRegistry(ServiceRegistry serviceRegistry) {
		this.serviceRegistry = serviceRegistry;
	}

	public void init(ServiceRegistry serviceRegistry){
		this.serviceRegistry=serviceRegistry;
	}

}
