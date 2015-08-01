package com.intellego.parquearauco.security.baseprocessorextension;

import java.util.List;


import com.intellego.parquearauco.dto.Response;
import com.intellego.parquearauco.security.dto.RolFuncionality;
import com.intellego.parquearauco.security.interfaces.EntityManager;

public class RolFuncionalities extends EntityManager<RolFuncionality>{

	public RolFuncionalities(){
		super(RolFuncionality.class);
	}
	
	public Response<Boolean> checkFuncionalityByRol(Integer idRol, Integer idFuncionality){
		Response<Boolean> result= new Response<Boolean>();
		result.setResult(false);

		Response<List<RolFuncionality>> resultList = new Response<List<RolFuncionality>>();
		
		if(idRol!=null && idRol> -1 && idFuncionality!= null && idFuncionality>-1){
			
			String query = "FROM RolFuncionalityEntity A WHERE A.rol = " + idRol + 
                    " AND A.funcionality = " + idFuncionality;
			
			resultList = getAll(query);
			if(resultList!=null && resultList.getResult()!=null && resultList.getResult().size()>0){
				result.setStatus(1);
				result.setMessage("Operación procesada con éxito");
				result.setResult(resultList.getResult().get(0).getValue());
			}
		}
		
		return result;
	}

}
