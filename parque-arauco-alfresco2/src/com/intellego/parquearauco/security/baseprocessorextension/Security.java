package com.intellego.parquearauco.security.baseprocessorextension;

import java.util.List;

import org.alfresco.repo.processor.BaseProcessorExtension;
import org.alfresco.service.ServiceRegistry;

import com.intellego.parquearauco.dto.Response;
import com.intellego.parquearauco.security.dto.Rol;
import com.intellego.parquearauco.security.services.SecurityService;

public class Security extends BaseProcessorExtension {

	private SecurityService service;
	private ServiceRegistry serviceRegistry;

	public boolean checkDocumentalRol(Integer nodeId, Integer nodeType, String rolRequired){
		return service.checkDocumentalRol(nodeId, nodeType, rolRequired);
		
	}
	public boolean checkSecurity(Integer nodeId, Integer nodeType, Integer funcionalityId){
		return service.checkSecurity(nodeId, nodeType, funcionalityId);
	}

	public boolean checkSecurity(Integer nodeId, Integer nodeType, Integer funcionalityId, String username){
		return service.checkSecurity(nodeId, nodeType, funcionalityId, username);
	}

	public List<Rol> getRolsByUser(Integer nodeId, Integer nodeType, String username){
		return service.getRolsByUser(nodeId, nodeType, username);
	}
	
	public List<Rol> getUserRols(Integer nodeId, Integer nodeType){
		return service.getUserRols(nodeId, nodeType);
	}
	
	public boolean assign(Integer idNode, Integer nodeType, String username, Integer idRol){
		return service.assign(idNode, nodeType, username, idRol);
	}

	public boolean removeAssign(Integer idNode, Integer nodeType, String username, Integer idRol){
		return service.removeAssign(idNode, nodeType, username, idRol);
	}
	
	public SecurityService getService() {
		return service;
	}

	public void setService(SecurityService service) {
		this.service = service;
	}

	public ServiceRegistry getServiceRegistry() {
		return serviceRegistry;
	}

	public void setServiceRegistry(ServiceRegistry serviceRegistry) {
		this.serviceRegistry = serviceRegistry;
	}
	
	public Response<Boolean> checkFuncionalityByRol(int idRol, int idFuncionality){
		return service.checkFuncionalityByRol(idRol, idFuncionality);
	}

}
