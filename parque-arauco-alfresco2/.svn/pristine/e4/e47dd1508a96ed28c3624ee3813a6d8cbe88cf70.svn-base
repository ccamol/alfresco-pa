package com.intellego.parquearauco.baseprocessorextension;

import java.util.Set;

import org.alfresco.repo.processor.BaseProcessorExtension;
import org.alfresco.service.ServiceRegistry;
import org.alfresco.service.cmr.search.SearchService;
import org.alfresco.service.cmr.security.AuthorityType;
import org.alfresco.service.cmr.version.VersionService;
import org.alfresco.service.cmr.workflow.WorkflowService;

public class UserMaintainer extends BaseProcessorExtension{

	
	
	private ServiceRegistry serviceRegistry;
	
	
	public Boolean validateUser(){
		Boolean validate = false;
		System.out.println("el usuario es : " + serviceRegistry.getAuthenticationService().getCurrentUserName());
	//	AuthorityType.GROUP.getAuthorityType("");
		
		Set<String> authlAuthorities =	serviceRegistry.getAuthorityService().getAllAuthorities(AuthorityType.GROUP);
		
		for (String groups : authlAuthorities) {
			System.out.println("grupos del getAllAuthorities = " + groups);
		}
		
		Set<String> authUroot =	serviceRegistry.getAuthorityService().getAllRootAuthorities(AuthorityType.GROUP);
		
		for (String groups : authUroot) {
			System.out.println("grupos del RootAuthorities = " + groups);
		}
		
		Set<String> authUsera = serviceRegistry.getAuthenticationService().getDomainsThatAllowUserCreation();
	
		for (String groups : authUsera) {
			System.out.println("grupos del llowUserCreation = " + groups);
		}
	
		Set<String> authUser = serviceRegistry.getAuthorityService().getAuthorities();
		for (String groups : authUser) {
			System.out.println("grupos del usuario = " + groups);
		}
		
		
		return validate;
	}



	public ServiceRegistry getServiceRegistry() {
		return serviceRegistry;
	}




	public void setServiceRegistry(ServiceRegistry serviceRegistry) {
		this.serviceRegistry = serviceRegistry;
	}

}
