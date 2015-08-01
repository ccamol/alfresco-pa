package com.intellego.parquearauco.quartz.sap;

import net.sf.acegisecurity.Authentication;

import org.alfresco.repo.security.authentication.AuthenticationComponent;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.scheduling.quartz.QuartzJobBean;

public class SapJobBean extends QuartzJobBean{

	private AuthenticationComponent authenticationComponent;
	
	@Override
	protected void executeInternal(JobExecutionContext arg0)
			throws JobExecutionException {
		
		//Authentication currentAuthentication = authenticationComponent.getCurrentAuthentication();
		try {
			
			//System.out.println("Current job---------------------");
			//authenticationComponent.setCurrentUser("admin");
		}catch(Exception e){
			//System.out.println("Error obteniendo contexto de seguridad");
		}
		
	}

	public AuthenticationComponent getAuthenticationComponent() {
		return authenticationComponent;
	}

	public void setAuthenticationComponent(
			AuthenticationComponent authenticationComponent) {
		this.authenticationComponent = authenticationComponent;
	}
}
