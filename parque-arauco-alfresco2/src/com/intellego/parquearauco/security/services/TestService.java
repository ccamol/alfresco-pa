package com.intellego.parquearauco.security.services;

import com.intellego.parquearauco.dto.Response;
import com.intellego.parquearauco.security.annotations.FuncionalityID;
import com.intellego.parquearauco.security.annotations.NodeId;

public class TestService {

	@FuncionalityID(id=1, checkSecurity=true)
	public Response test1(String username, @NodeId int nodeId){
		
		Response result = new Response();
		
		result.setStatus(1);
		result.setMessage("Respuesta valida funcionalidad 1");
		
		return result;
	}

	@FuncionalityID(id=2, checkSecurity=true)
	public Response test2(@NodeId int nodeId, String username){
		
		Response result = new Response();
		
		result.setStatus(1);
		result.setMessage("Respuesta valida funcionalidad 2");
		
		return result;
	}

	
}
