package com.intellego.pa.email.services;

import java.io.File;
import java.io.IOException;
import java.io.Serializable;
import java.util.Arrays;
import java.util.Map;

import org.alfresco.repo.action.executer.MailActionExecuter;
import org.alfresco.repo.processor.BaseProcessorExtension;
import org.alfresco.service.ServiceRegistry;
import org.alfresco.service.cmr.action.Action;
import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.service.cmr.repository.StoreRef;
import org.alfresco.service.cmr.search.ResultSet;
import org.alfresco.service.cmr.search.SearchService;

import freemarker.template.Configuration;
import freemarker.template.Template;


public class EmailServiceImpl extends BaseProcessorExtension implements EmailService {
	private ServiceRegistry serviceRegistry;
	private static EmailServiceImpl instance;
	private Action action; 
	
	public static synchronized EmailService getInstance(){
		if(instance == null){
			instance = new EmailServiceImpl();
		}
		return instance;
	}

	@Override
	public Boolean sendEmail(Map<String, Serializable> parameters) {
		action = serviceRegistry.getActionService().createAction(MailActionExecuter.NAME);
		ResultSet resultSet;
		NodeRef template = null;
		try {
			action.setParameterValue(MailActionExecuter.PARAM_SUBJECT, (String) parameters.get("subject"));
			
			if(parameters.get("to") != null){
				action.setParameterValue(MailActionExecuter.PARAM_TO, (String) parameters.get("to"));
			
			}
			
			if(parameters.get("many") != null){
				String[] many =  ((String) parameters.get("many")).split(",");				
				action.setParameterValue(MailActionExecuter.PARAM_TO_MANY,(Serializable) Arrays.asList(many));
			}
			action.setParameterValue(MailActionExecuter.PARAM_FROM, (String) parameters.get("from"));
			
			if(parameters.get("templateName") != null){
				StringBuilder templatePath = new StringBuilder("PATH:\"/app:company_home/app:dictionary/app:email_templates/cm:Notifications/cm:"+parameters.get("templateName")+"\"");
				resultSet = serviceRegistry.getSearchService().query(new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore"), SearchService.LANGUAGE_LUCENE, templatePath.toString());
				template = resultSet.getNodeRef(0);
				action.setParameterValue(MailActionExecuter.PARAM_TEMPLATE, template);
			}
			
			if(parameters.get("uuid") != null){
				StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
				resultSet = serviceRegistry.getSearchService().query(storeRef, SearchService.LANGUAGE_LUCENE, "@sys\\:node-uuid:\"" + parameters.get("uuid") + "\"");
				template = resultSet.getNodeRef(0);
			}
			
			action.setParameterValue(MailActionExecuter.PARAM_TEMPLATE, template);
			action.setParameterValue(MailActionExecuter.PARAM_TEMPLATE_MODEL,(Serializable) parameters);
			serviceRegistry.getActionService().executeAction(action, null);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	public Template getTemplate(File file) throws IOException {
		Configuration  cfg = new Configuration();
		String absolutePath = file.getAbsolutePath();
		String path = absolutePath.substring(0,absolutePath.lastIndexOf(File.separator));
		cfg.setDirectoryForTemplateLoading(new File(path));
		return cfg.getTemplate(file.getName());
	}
	
	public ServiceRegistry getServiceRegistry() {
		return serviceRegistry;
	}
	
	public void setServiceRegistry(ServiceRegistry serviceRegistry) {
		this.serviceRegistry = serviceRegistry;
	}
}
