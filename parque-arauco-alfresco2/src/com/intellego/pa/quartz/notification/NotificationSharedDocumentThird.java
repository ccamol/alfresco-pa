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
import java.util.Set;

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
import org.alfresco.service.cmr.security.AuthorityService;
import org.alfresco.service.cmr.security.AuthorityType;
import org.alfresco.service.namespace.QName;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.quartz.QuartzJobBean;

import com.intellego.pa.email.services.EmailService;
import com.intellego.pa.quartz.dto.NotificationDocumentDto;
import com.intellego.pa.quartz.dto.NotificationDto;
import com.intellego.parquearauco.baseprocessorextension.ThirdPartySharedDocuments;
import com.intellego.parquearauco.constants.Constants;
import com.intellego.parquearauco.dto.Response;
import com.intellego.parquearauco.dto.ThirdPartySharedDocument;
import com.intellego.parquearauco.filters.ThirdPartySharedDocumentFilter;
import com.intellego.parquearauco.security.filters.TextFilter;

public class NotificationSharedDocumentThird extends QuartzJobBean{

	private static final Logger logger = LoggerFactory.getLogger(NotificationSharedDocumentThird.class);
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
			int year = startDate.getYear();
			int month = startDate.getMonth();
			int day = startDate.getDate();
			String userMails = null;
//			Date sharedDate = new Date(year, month, day);
			

			String newDate = year + 1900 + "-" + month + "-" +day;
			System.out.println("Start date: " + newDate);

			ThirdPartySharedDocument tpsd = new ThirdPartySharedDocument();
			String uuidDocument = null;
			String groupName = null;
			ThirdPartySharedDocumentFilter tpsdFilter = new ThirdPartySharedDocumentFilter();
			ThirdPartySharedDocuments tpsdSrv = new ThirdPartySharedDocuments();
			NodeRef nodeDoc;

			NotificationDto notificationDto = null;
			List<NotificationDto> notifyList = new ArrayList<NotificationDto>();	


//			tpsdFilter.setSharedDate(sharedDate);
			String query = "from ThirdPartySharedDocumentEntity where sharedDate ='"+newDate+"'";
			System.out.println("query: "+query);
			Response<List<ThirdPartySharedDocument>> response = tpsdSrv.getAll(query);
			System.out.println("response.getStatus(): "+response.getStatus());
			if(response.getStatus() > 0){
				System.out.println("response.getResult().size(): "+response.getResult().size());
				if(response.getResult().size() > 0){
					for (ThirdPartySharedDocument tp : response.getResult()) {
						nodeDoc = new NodeRef(STORE_REF, tp.getUuidDocument());
						groupName = tp.getThirdPartyName();
						userMails = getContainerUsersMails(groupName);
						System.out.println("#############################userMails: "+userMails);
						notificationDto = getNotification(notifyList, nodeDoc, userMails);
						addValue(notificationDto.getNextExpiredList(), nodeDoc);

					}
				}

				// Envío de correos

				Map<String, Serializable> params;
				String many;
				System.out.println("notifyList.size(): "+notifyList.size());
				for(NotificationDto notifyDto : notifyList){
					System.out.println("notifyDto.getExpiredList().size(): "+notifyDto.getExpiredList().size());
					System.out.println("notifyDto.getNextExpiredList().size(): "+notifyDto.getNextExpiredList().size());
					if(notifyDto.getExpiredList().size() > 0 || notifyDto.getNextExpiredList().size() > 0){
						System.out.println("notifyDto.getResponsible(): "+notifyDto.getResponsible());

						params = new HashMap<String, Serializable>();
						params.put("many", notifyDto.getResponsible());
						params.put("subject", properties.getProperty("mail.notification.subject"));
						params.put("templateName", "third-party-shared-notification.ftl");
						params.put("from", properties.getProperty("mail.from.pa"));
						params.put("notify", notifyDto);

						System.out.println("Enviando correo...");
						emailService.sendEmail(params);
					}else{
						System.out.println("No hay notificaciones");
					}
				}
			}else{
				System.out.println("No hay Datos que enviar");
			}


			System.out.println("Fin envíos notificación....");		
		}catch(Exception e){
			e.printStackTrace();
		}

	}

	private String getContainerUsersMails(String groupId){
		AuthorityService authSrv = serviceRegistry.getAuthorityService();
		NodeService nodeService = serviceRegistry.getNodeService();
		NodeRef groupNodeRef = null;
		Map<QName, Serializable> propertiesNode = null;
		String userMail = null;
		int counter = 0;
		StringBuilder userMails = new StringBuilder("");
		System.out.println("groupId: "+groupId);
		Set<String> authorities = authSrv.getContainedAuthorities(AuthorityType.USER, "GROUP_"+groupId, true);
		System.out.println("authorities: "+authorities);

		for (String auth : authorities) {
			groupNodeRef = authSrv.getAuthorityNodeRef(auth);
			propertiesNode = (Map<QName, Serializable>) nodeService.getProperties(groupNodeRef);
			userMail = (String) propertiesNode.get(ContentModel.PROP_EMAIL);
			System.out.println("userMail: "+userMail);
			if(userMail != null && userMail != ""){
				if(counter == 0){
					userMails.append(userMail);
				}else{
					userMails.append(","+userMail);
				}

			}
		}
		System.out.println("userMails: "+userMails);

		return userMails.toString();
	}


	private void addValue(List<NotificationDocumentDto> docList, NodeRef node){
		NotificationDocumentDto notificationDocDto = new NotificationDocumentDto();
		notificationDocDto.setDocumentName((String) nodeService.getProperty(node, ContentModel.PROP_NAME));				
		notificationDocDto.setLink(getUrl(node));
		docList.add(notificationDocDto);
	}

	private NotificationDto getNotification(List<NotificationDto> notifyList, NodeRef node, String userMails){
		NotificationDto notificationDto = new NotificationDto();
		notificationDto.setResponsible(userMails);
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
			logger.debug("No se encontraron resultados en la búsqueda");
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
