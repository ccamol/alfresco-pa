package com.intellego.parquearauco.security.baseprocessorextension;

import java.util.ArrayList;
import java.util.List;

import com.intellego.parquearauco.dto.Response;
import com.intellego.parquearauco.security.dto.Acl;
import com.intellego.parquearauco.security.interfaces.EntityManager;

public class Acls extends EntityManager<Acl>{

	public Acls(){
		super(Acl.class);
	}
	
	
	public Response<List<Acl>> getRules(Integer nodeId, Integer nodeType, String username){
		
		Response<List<Acl>> response = new Response<List<Acl>>(); 
		
		if(nodeId!=null && nodeId> -1 && nodeType!=null && nodeType> -1  && username!= null && username.length()>0){
			
			String query = "FROM AclEntity A WHERE A.nodeId = " + nodeId + 
													   " AND A.nodeType = '" + nodeType + "'" +
					                                   " AND username = '" + username + "'";
			
			response = getAll(query);
		}
		
		return response;
	}
	
	public Response<List<Acl>> getRules(Integer nodeId, Integer nodeType){
		
		String username = serviceRegistry.getAuthenticationService().getCurrentUserName();
		return getRules(nodeId, nodeType, username);
	
	}

	public Response<Acl> getRule(Integer nodeId, Integer nodeType, String username, Integer idRol){
		
		Response<Acl> response = new Response<Acl>(); 
		
		List<Acl> resultAclList = new ArrayList<Acl>();
		
		if(nodeId!=null && nodeId> -1 && nodeType!=null && nodeType> -1 && username!= null && username.length()>0){
			
			String query = "FROM AclEntity A WHERE A.nodeId = " + nodeId + 
                    " AND A.nodeType = '" + nodeType + "'" + 
                    " AND username = '" + username + "'" + 
                    " AND A.rol = " + idRol;
			
			resultAclList = getAll(query).getResult();
			
			if(resultAclList!=null && resultAclList.size()>0){
				response.setStatus(1);
				response.setMessage("Operación procesada con éxito");
				response.setResult(resultAclList.get(0)); 
			}
		}
		
		return response;
	}

	
}
