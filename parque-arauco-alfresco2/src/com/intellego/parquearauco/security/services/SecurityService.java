package com.intellego.parquearauco.security.services;

import java.util.ArrayList;
import java.util.List;

import org.alfresco.service.ServiceRegistry;

import com.intellego.parquearauco.dto.Response;
import com.intellego.parquearauco.security.baseprocessorextension.Acls;
import com.intellego.parquearauco.security.baseprocessorextension.RolFuncionalities;
import com.intellego.parquearauco.security.baseprocessorextension.Rols;
import com.intellego.parquearauco.security.dto.Acl;
import com.intellego.parquearauco.security.dto.Rol;
import com.intellego.parquearauco.security.dto.RolFuncionality;

public class SecurityService{

	private ServiceRegistry serviceRegistry;

	public boolean checkDocumentalRol(Integer nodeId, Integer nodeType, String rolRequired){
		
		boolean response = false;
		int rolWeightRequired = 0;
		int rolWeight = 0;
		
		if(rolRequired.equals("editor")) rolWeightRequired = 1;
		if(rolRequired.equals("collaborator")) rolWeightRequired = 2;
		if(rolRequired.equals("coordinator")) rolWeightRequired = 3;
		
		List<Rol> rolList = getRolsByUser(nodeId, nodeType);
		
		for(Rol each : rolList){
			if(each.getDocumentalRol().equals("editor")){
				if(rolWeight<1) rolWeight=1;
			}
			if(each.getDocumentalRol().equals("collaborator")){
				if(rolWeight<2) rolWeight=2;
			}
			if(each.getDocumentalRol().equals("coordinator")){
				if(rolWeight<3) rolWeight=3;
			}
		}
		
		if(rolWeightRequired>rolWeight){
			response = false;
		}else{
			response = true;
		}
		
		return response;
		
	}

	public boolean checkSecurity(Integer nodeId, Integer nodeType, Integer funcionalityId){
		
		String username = serviceRegistry.getAuthenticationService().getCurrentUserName();
		return checkSecurity(nodeId, nodeType, funcionalityId, username);
	}

	public boolean checkSecurity(Integer nodeId, Integer nodeType, Integer funcionalityId, String username){
		
		boolean result = false;
		
		if(nodeId!=null && funcionalityId!=null){
			
			Acls acls = new Acls();
			RolFuncionalities rolFuncionalities = new RolFuncionalities(); 
			for(Acl each : acls.getRules(nodeId, nodeType, username).getResult()){
				if(rolFuncionalities.checkFuncionalityByRol(each.getRol().getId(), funcionalityId).getResult()){
					result = true;
					break;
				}
			}
		}
		return result;
	}

	public List<Rol> getRolsByUser(Integer nodeId, Integer nodeType){
		String username = serviceRegistry.getAuthenticationService().getCurrentUserName();
		return getRolsByUser( nodeId, nodeType, username);
	}

	public List<Rol> getRolsByUser(Integer nodeId, Integer nodeType, String username){
		List<Rol> result = new ArrayList<Rol>();
		
		if(nodeId!=null && nodeId>-1){
			
			Acls acls = new Acls();
			for(Acl each : acls.getRules(nodeId, nodeType, username).getResult()){
				result.add((Rol) each.getRol());
			}
		}
		
		return result;
	}
	
	public List<Rol> getUserRols(Integer nodeId, Integer nodeType){
		String username = serviceRegistry.getAuthenticationService().getCurrentUserName();
		return getRolsByUser(nodeId, nodeType, username);
	}
	
	@SuppressWarnings("rawtypes")
	public boolean assign(Integer nodeId, Integer nodeType, String username, Integer idRol){
		
		boolean result = false;
		
		if(nodeId!=null && nodeId>-1 && nodeType!=null && nodeType>-1 && username!=null && username.length()>0 && idRol!=null && idRol>-1){
		
			Acl acl = new Acl();
			acl.setNodeId(nodeId);
			acl.setNodeType(nodeType);
			acl.setRol(new Rols().getById(idRol).getResult());
			acl.setUsername(username);
			
			Acls aclService = new Acls();
			Response response = aclService.add(acl);
			if(response.getStatus()>0) result = true;
		}
		
		return result;
	}

	@SuppressWarnings("rawtypes")
	public boolean removeAssign(Integer nodeId, Integer nodeType, String username, Integer idRol){
		
		boolean result = false;
		
		if(nodeId!=null && nodeId>-1 && nodeType!=null && nodeType>-1 && username!=null && username.length()>0 && idRol!=null && idRol>-1){
			Acls aclService = new Acls();
			Acl acl = aclService.getRule(nodeId, nodeType, username, idRol).getResult();
			Response response = aclService.remove(acl);
			if(response.getStatus()>0) result = true;
		}

		return result;
	}
	
	public Response<Boolean> checkFuncionalityByRol(int idRol, int idFuncionality){
		Response<Boolean> result= new Response<Boolean>();

		Response<List<RolFuncionality>> resultList = new Response<List<RolFuncionality>>();
		
		if(idFuncionality>-1){
			
			String query = "FROM RolFuncionalityEntity A WHERE A.rol = " + idRol + 
                    " AND A.funcionality = " + idFuncionality;
			
			resultList = new RolFuncionalities().getAll(query);
			if(resultList!=null && resultList.getResult()!=null && resultList.getResult().size()>0){
				result.setStatus(1);
				result.setMessage("Operación procesada con �xito");
				result.setResult(resultList.getResult().get(0).getValue());
			}else{
				result.setStatus(1);
				result.setMessage("Operación procesada con �xito");
				result.setResult(false);
			}
		}
		
		return result;
	}
	
	public ServiceRegistry getServiceRegistry() {
		return serviceRegistry;
	}

	public void setServiceRegistry(ServiceRegistry serviceRegistry) {
		this.serviceRegistry = serviceRegistry;
	}

}
