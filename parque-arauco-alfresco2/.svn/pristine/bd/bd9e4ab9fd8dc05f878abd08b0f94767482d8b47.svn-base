package com.intellego.pa.quartz.notification;


import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import org.alfresco.model.ContentModel;
import org.alfresco.repo.security.authentication.AuthenticationComponent;
import org.alfresco.service.ServiceRegistry;
import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.service.cmr.repository.NodeService;
import org.alfresco.service.cmr.repository.StoreRef;
import org.alfresco.service.cmr.search.LimitBy;
import org.alfresco.service.cmr.search.ResultSet;
import org.alfresco.service.cmr.search.SearchParameters;
import org.alfresco.service.cmr.search.SearchService;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.quartz.QuartzJobBean;

import com.intellego.pa.email.services.EmailService;
import com.intellego.pa.quartz.dto.NotificationDocumentDto;
import com.intellego.pa.quartz.dto.NotificationDto;

public class NotificationSharedDocument extends QuartzJobBean{

	private static final Logger logger = LoggerFactory.getLogger(NotificationSharedDocument.class);
	private static final StoreRef STORE_REF = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
	private static final String FIELD_SORT_CREATED = "@{http://www.alfresco.org/model/content/1.0}created";

	private AuthenticationComponent authenticationComponent;
	private NodeService nodeService;
	private ServiceRegistry serviceRegistry;
	private EmailService emailService;
	private Properties properties;

	@Override
	protected void executeInternal(JobExecutionContext arg0)
			throws JobExecutionException {

		try {

			logger.debug("Iniciando envío de correos notificación...");			
			authenticationComponent.setCurrentUser("admin");

			Calendar calendar = Calendar.getInstance();
			calendar.add(Calendar.DAY_OF_YEAR, 30);
			Date startDate = calendar.getTime();

			logger.debug("Start date: " + startDate);

			// Documentos compartidos a arquitectura
			String query = "TYPE:\"pa:paDocument\" AND @pa\\:sharedType:arauco AND @pa\\:sharedDate:NOW";
			System.out.println("Documentos compartidos a arquitectura");
			System.out.println("query: " + query);



			ResultSet resultSet = getResultQuery(query);
			NotificationDto notificationDto = null;
			List<NotificationDto> notifyList = new ArrayList<NotificationDto>();			

			for(NodeRef node : resultSet.getNodeRefs()){		
				notificationDto = getNotification(notifyList, node);
				addValue(notificationDto.getExpiredList(), node);
			}

			// Documentos compartidos a ingenieria
			query = "TYPE:\"pa:paDocument\" AND @pa\\:sharedType:arquitectura AND @pa\\:sharedDate:NOW";
			
			NotificationDto notificationDtoEngineering = null;
			List<NotificationDto> notifyListEngineering = new ArrayList<NotificationDto>();

			System.out.println("Documentos compartidos a ingeniería");
			System.out.println("query: " + query);

			resultSet = getResultQuery(query);

			for(NodeRef node : resultSet.getNodeRefs()){		
				notificationDtoEngineering = getNotification(notifyListEngineering, node);
				addValue(notificationDtoEngineering.getExpiredList(), node);
			}

			
			Map<String, Serializable> params;
			String many;

			for(NotificationDto notifyDto : notifyList){

				if(notifyDto.getExpiredList().size() > 0 || notifyDto.getNextExpiredList().size() > 0){

					params = new HashMap<String, Serializable>();
					params.put("many", properties.getProperty("mail.architecture.chief"));
					params.put("subject", properties.getProperty("mail.notification.subject"));
					params.put("templateName", "shared-architecture-document-notification.ftl");
					params.put("from", properties.getProperty("mail.from.pa"));
					params.put("notify", notifyDto);

					System.out.println("Enviando correo...");
					emailService.sendEmail(params);
				}else{
					System.out.println("No hay notificaciones");
				}
			}
			
			for(NotificationDto notifyDtoEngineering : notifyListEngineering){

				if(notifyDtoEngineering.getExpiredList().size() > 0 || notifyDtoEngineering.getNextExpiredList().size() > 0){

					params = new HashMap<String, Serializable>();
					params.put("many", properties.getProperty("mail.engineering.chief"));
					params.put("subject", properties.getProperty("mail.notification.subject"));
					params.put("templateName", "shared-engineering-document-notification.ftl");
					params.put("from", properties.getProperty("mail.from.pa"));
					params.put("notify", notifyDtoEngineering);

					System.out.println("Enviando correo...");
					emailService.sendEmail(params);
				}else{
					System.out.println("No hay notificaciones");
				}
			}


			System.out.println("Fin envíos notificación....");		
		}catch(Exception e){
			e.printStackTrace();
		}

	}

	private void addValue(List<NotificationDocumentDto> docList, NodeRef node){
		NotificationDocumentDto notificationDocDto = new NotificationDocumentDto();
		notificationDocDto.setDocumentName((String) nodeService.getProperty(node, ContentModel.PROP_NAME));				
		notificationDocDto.setLink(getUrl(node));
		docList.add(notificationDocDto);
	}

	private NotificationDto getNotification(List<NotificationDto> notifyList, NodeRef node){

		NotificationDto notificationDto = new NotificationDto();
		notificationDto.setResponsible((String) nodeService.getProperty(node, ContentModel.PROP_EMAIL));
		notifyList.add(notificationDto);

		return notificationDto;
	}

	private String getUrl(NodeRef node){
		StringBuilder url = new StringBuilder();
		url.append(properties.getProperty("alfresco.protocol"));
		url.append("://");
		url.append(properties.getProperty("alfresco.host"));
		url.append(":");
		url.append(properties.getProperty("alfresco.port"));
		url.append("/alfresco/service/documentService/downloadWs?uuid=");
		url.append((String) nodeService.getProperty(node, ContentModel.PROP_NODE_UUID));
		return url.toString();
	}

	private ResultSet getResultQuery(String query){		
		SearchParameters sp = new SearchParameters();
		sp.addStore(STORE_REF);
		sp.setLanguage(SearchService.LANGUAGE_LUCENE);
		sp.setQuery(query);
		sp.addSort(FIELD_SORT_CREATED, true);
		sp.setLimitBy(LimitBy.UNLIMITED);
		sp.setLimit(0);
		sp.setMaxPermissionChecks(100000000);
		sp.setMaxPermissionCheckTimeMillis(100000000);
		sp.setMaxItems(-1);
		ResultSet resultSet = serviceRegistry.getSearchService().query(sp);

		if(resultSet == null || resultSet.length() < 1){
			System.out.println("No se encontraron resultados en la búsqueda");
		}else{
			System.out.println("Se encontraron resultados en la búsqueda: " + resultSet.length());

		}		

		return resultSet;
	}

	private String dateToString(Date date, boolean isNotify){
		String format = isNotify ? "dd-MM-YYYY hh:mm:ss" : "YYYY-MM-dd";
		SimpleDateFormat sdf = new SimpleDateFormat(format);
		return sdf.format(date);
	}

	private String getFullName(String user){
		String fullName = "";
		String lastName;
		NodeRef person = serviceRegistry.getPersonService().getPerson(user);

		if(person != null){
			fullName = (String) nodeService.getProperty(person, ContentModel.PROP_FIRSTNAME);
			lastName = (String) nodeService.getProperty(person, ContentModel.PROP_LASTNAME);

			if(lastName != null && !lastName.isEmpty()){
				fullName += " " + lastName;
			}

			fullName += "(" + user + ")";

		}

		return fullName;			
	}

	public AuthenticationComponent getAuthenticationComponent() {
		return authenticationComponent;
	}

	public void setAuthenticationComponent(
			AuthenticationComponent authenticationComponent) {
		this.authenticationComponent = authenticationComponent;
	}

	public ServiceRegistry getServiceRegistry() {
		return serviceRegistry;
	}

	public void setServiceRegistry(ServiceRegistry serviceRegistry) {
		this.serviceRegistry = serviceRegistry;
		this.nodeService = serviceRegistry.getNodeService();
	}

	public EmailService getEmailService() {
		return emailService;
	}

	public void setEmailService(EmailService emailService) {
		this.emailService = emailService;
	}

	public Properties getProperties() {
		return properties;
	}

	public void setProperties(Properties properties) {
		this.properties = properties;
	}
}
