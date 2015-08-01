package com.intellego.parquearauco.baseprocessorextension;

import org.alfresco.repo.processor.BaseProcessorExtension;

import com.intellego.parquearauco.dto.Response;
import com.intellego.parquearauco.security.services.TestService;

public class Test  extends BaseProcessorExtension{
	
	private TestService service;
	
	public Response test1(String username, int nodeId){
		return service.test1(username, nodeId);
	}

	public Response test2(int nodeId, String username){
		return service.test2(nodeId, username);
	}

	public TestService getService() {
		return service;
	}

	public void setService(TestService service) {
		this.service = service;
	}
}
