package com.intellego.pa.utils;

import java.io.IOException;

import org.alfresco.repo.processor.BaseProcessorExtension;
import org.alfresco.repo.security.authentication.AuthenticationUtil;
import org.alfresco.service.ServiceRegistry;
import org.alfresco.service.cmr.security.AuthenticationService;


public class TicketAlfresco extends BaseProcessorExtension{

	
	private ServiceRegistry serviceRegistry;
	
	public String getTicket(final String user) throws IOException{
		return AuthenticationUtil.runAs(new AuthenticationUtil.RunAsWork<String>() {
			public String doWork(){
				String ticket = new String();
				
				try{
					AuthenticationService authenticationService = serviceRegistry.getAuthenticationService();
					ticket = authenticationService.getCurrentTicket();
				}catch(Exception e){
					e.printStackTrace();
				}
				return ticket;
			}
		}, user);
	}

	public ServiceRegistry getServiceRegistry() {
		return serviceRegistry;
	}

	public void setServiceRegistry(ServiceRegistry serviceRegistry) {
		this.serviceRegistry = serviceRegistry;
	}
	
}
