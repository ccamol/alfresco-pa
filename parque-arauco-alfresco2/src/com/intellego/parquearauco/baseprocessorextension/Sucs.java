package com.intellego.parquearauco.baseprocessorextension;

import java.util.Date;
import java.util.List;

import com.intellego.parquearauco.dto.Contract;
import com.intellego.parquearauco.dto.Response;
import com.intellego.parquearauco.dto.Suc;
import com.intellego.parquearauco.filters.ContractFilter;
import com.intellego.parquearauco.security.filters.Filter;
import com.intellego.parquearauco.security.interfaces.EntityManager;

public class Sucs extends EntityManager<Suc>{

	public Sucs(){
		super(Suc.class);
	}

	public Response<Contract> getCurrentContract(Suc suc){

		Response<Contract> response = new Response<Contract>();
		Contracts contracts = new Contracts();

		ContractFilter filter = new ContractFilter();
		filter.getSapCode().exact(suc.getSucCode(), Filter.EQUALS_TO);

		Response<List<Contract>> contractList = contracts.getListByFilter(filter);
		if(response.getStatus()>-1){
			for(Contract each : contractList.getResult()){
				if(each.getStartDate().before(new Date()) && each.getFinishDate().after(new Date())){
					response.setResult(each);
				}
			}
		}
		return response;
	}

}
