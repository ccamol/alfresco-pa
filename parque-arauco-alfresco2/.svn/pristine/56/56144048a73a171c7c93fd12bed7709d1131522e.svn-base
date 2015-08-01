package com.intellego.parquearauco.baseprocessorextension;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

import org.alfresco.model.ContentModel;
import org.alfresco.repo.processor.BaseProcessorExtension;
import org.alfresco.repo.security.authentication.AuthenticationUtil;
import org.alfresco.service.ServiceRegistry;
import org.alfresco.service.cmr.action.Action;
import org.alfresco.service.cmr.model.FileExistsException;
import org.alfresco.service.cmr.model.FileFolderService;
import org.alfresco.service.cmr.model.FileNotFoundException;
import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.service.cmr.repository.NodeService;
import org.alfresco.service.cmr.repository.StoreRef;
import org.alfresco.service.cmr.search.ResultSet;
import org.alfresco.service.cmr.search.SearchService;
import org.alfresco.service.namespace.QName;
import org.alfresco.util.ISO9075;
import org.alfresco.repo.action.executer.MailActionExecuter;

import com.intellego.parquearauco.constants.Constants;

public class DocumentService  extends BaseProcessorExtension{

	private ServiceRegistry serviceRegistry;

	public void moveDocument(final String uuid, final String [] path, final String site){

		AuthenticationUtil.runAs(new AuthenticationUtil.RunAsWork<Boolean>() {
			public Boolean doWork(){

				NodeService nodeService = serviceRegistry.getNodeService();
				FileFolderService filefolderService = serviceRegistry.getFileFolderService();
				SearchService searchService = serviceRegistry.getSearchService();
				NodeRef destination = null;
				NodeRef tempNode = null;
				String documentName = null;
				String newName = null;
				NodeRef nodeRef = new NodeRef("workspace://SpacesStore/" + uuid);
				String documentType = null;
				String extension = null;

				Map<QName, Serializable> properties = nodeService.getProperties(nodeRef);


				try {
					StoreRef storeRef = new StoreRef("workspace", "SpacesStore");
					ResultSet resultSet=searchService.query(storeRef,SearchService.LANGUAGE_LUCENE, "PATH:\"/app:company_home/st:sites/cm:" + ISO9075.encode(site) + "/cm:documentLibrary\"");
					if(resultSet.length()>0){
						destination=resultSet.getNodeRef(0);

						for (int i = 0; i < path.length; i++) {
							tempNode = nodeService.getChildByName(destination, ContentModel.ASSOC_CONTAINS, path[i]);
							if(tempNode==null){
								destination = filefolderService.create(destination, path[i], ContentModel.TYPE_FOLDER).getNodeRef();
							}else{
								destination = nodeService.getChildByName(destination, ContentModel.ASSOC_CONTAINS, path[i]);
							}
						}

						documentName = (String) properties.get(ContentModel.PROP_NAME);
						extension = documentName.substring(documentName.lastIndexOf("."));
						documentType = (String) properties.get(Constants.PROP_DOCUMENTTYPE);
						newName = documentType + extension;
						int counter = 0;

						while(nodeService.getChildByName(destination, ContentModel.ASSOC_CONTAINS, newName)!=null){
							counter++;
							newName = "(" + counter + ") " + (String) properties.get(Constants.PROP_DOCUMENTTYPE) + extension;
						}

						filefolderService.move(nodeRef, destination, newName);
					}

				}catch (FileExistsException | FileNotFoundException e) {
					e.printStackTrace();
				}	
				return true;
			}
		}, "admin");

	}

	public String sendMailAwardTender(String tenderName, String email,String user){
		String result = null;
		try {
			System.out.println("preparing email");
			Action mailAction = serviceRegistry.getActionService().createAction(MailActionExecuter.NAME);
			mailAction.setParameterValue(MailActionExecuter.PARAM_SUBJECT, "Licitación adjudicada: "+ tenderName);
			mailAction.setParameterValue(MailActionExecuter.PARAM_TO, email);
			mailAction.setParameterValue(MailActionExecuter.PARAM_TO_MANY,(java.io.Serializable) email);
			mailAction.setParameterValue(MailActionExecuter.PARAM_FROM, "noreply@parauco.cl" );
			mailAction.setParameterValue(MailActionExecuter.PARAM_TEXT, "BODY");
			System.out.println("searched parameter");
			// Define Model
			String templatePATH = "PATH:\"/app:company_home/app:dictionary/app:email_templates/cm:paTemplate/cm:notify_user_email_es.html.ftl\"";
			ResultSet resultSet = serviceRegistry.getSearchService().query(new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore"), SearchService.LANGUAGE_LUCENE, templatePATH);
			System.out.println("execute template");
			if(resultSet.length()>0){
				NodeRef template = resultSet.getNodeRef(0);
				mailAction.setParameterValue(MailActionExecuter.PARAM_TEMPLATE, template);
			}else{
				mailAction.setParameterValue(MailActionExecuter.PARAM_TEXT, "template no found");
			}
			// Define parameters for the model (set fields in the ftl like : args.workflowTitle)
			Map<String, Serializable> templateArgs = new HashMap<String, Serializable>();

			templateArgs.put("tenderName",tenderName);
			templateArgs.put("user",user);


			Map<String, Serializable> templateModel = new HashMap<String, Serializable>();
			templateModel.put("args",(Serializable)templateArgs);
			mailAction.setParameterValue(MailActionExecuter.PARAM_TEMPLATE_MODEL,(Serializable)templateModel);
			System.out.println("send email now");

			serviceRegistry.getActionService().executeAction(mailAction, null);
			result = "1";
		}
		catch (Throwable e){
			result = "-1";
			System.out.println("Se produjo un error al enviar la notificación");
			e.printStackTrace();
		}
		return result;
	}
	
	public String sendMailVoidTender(String tenderName, String[] emails){
		String result = null;
		try {
			System.out.println("preparing email");
			Action mailAction = serviceRegistry.getActionService().createAction(MailActionExecuter.NAME);
			mailAction.setParameterValue(MailActionExecuter.PARAM_SUBJECT, "La siguiente Licitación se ha declarado desierta: "+ tenderName);
			mailAction.setParameterValue(MailActionExecuter.PARAM_TO_MANY,(java.io.Serializable) emails);
			mailAction.setParameterValue(MailActionExecuter.PARAM_FROM, "noreply@parauco.cl" );
			mailAction.setParameterValue(MailActionExecuter.PARAM_TEXT, "BODY");
			System.out.println("searched parameter");
			// Define Model
			String templatePATH = "PATH:\"/app:company_home/app:dictionary/app:email_templates/cm:paTemplate/cm:notify_users_email_es.html.ftl\"";
			ResultSet resultSet = serviceRegistry.getSearchService().query(new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore"), SearchService.LANGUAGE_LUCENE, templatePATH);
			System.out.println("execute template");
			if(resultSet.length()>0){
				NodeRef template = resultSet.getNodeRef(0);
				mailAction.setParameterValue(MailActionExecuter.PARAM_TEMPLATE, template);
			}else{
				mailAction.setParameterValue(MailActionExecuter.PARAM_TEXT, "template no found");
			}
			// Define parameters for the model (set fields in the ftl like : args.workflowTitle)
			Map<String, Serializable> templateArgs = new HashMap<String, Serializable>();

			templateArgs.put("tenderName",tenderName);


			Map<String, Serializable> templateModel = new HashMap<String, Serializable>();
			templateModel.put("args",(Serializable)templateArgs);
			mailAction.setParameterValue(MailActionExecuter.PARAM_TEMPLATE_MODEL,(Serializable)templateModel);
			System.out.println("send email now");

			serviceRegistry.getActionService().executeAction(mailAction, null);
			result = "1";
		}
		catch (Throwable e){
			result = "-1";
			System.out.println("Se produjo un error al enviar la notificación");
			e.printStackTrace();
		}
		return result;
	}


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
