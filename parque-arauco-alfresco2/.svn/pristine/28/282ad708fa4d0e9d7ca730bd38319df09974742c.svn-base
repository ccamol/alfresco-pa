package com.intellego.parquearauco.dto;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.intellego.parquearauco.baseprocessorextension.Contracts;
import com.intellego.parquearauco.filters.ContractFilter;
import com.intellego.parquearauco.security.annotations.Dto;
import com.intellego.parquearauco.security.dto.Basic;
import com.intellego.parquearauco.security.filters.Filter;

@Dto(entity = "com.intellego.parquearauco.entities.SucEntity")
public class Suc extends Basic{

	private static final long serialVersionUID = 1L;
	
	private String name;
	private String sucCode;
	private String storeM2; 
	private String wareHouseM2;
	private String terraseM2;
	private String escaparateM;
	private Integer sucType;
	private Integer status;
	private String description;
	private Date   contractDate;
	private Date   historySend;

	private String financialCompany;

	private Mall mall;
	
	private Set<SucProject> sucProjectEntity = new HashSet<SucProject>();

	public Suc() {
	}
	
	
	public Date getHistorySend() {
		return historySend;
	}


	public void setHistorySend(Date historySend) {
		this.historySend = historySend;
	}


	public Date getContractDate() {
		return contractDate;
	}

	public void setContractDate(Date contractDate) {
		this.contractDate = contractDate;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	public String getSucCode() {
		return sucCode;
	}

	public void setSucCode(String sucCode) {
		this.sucCode = sucCode;
	}

	public String getStoreM2() {
		return storeM2;
	}

	public void setStoreM2(String storeM2) {
		this.storeM2 = storeM2;
	}

	public String getWareHouseM2() {
		return wareHouseM2;
	}

	public void setWareHouseM2(String wareHouseM2) {
		this.wareHouseM2 = wareHouseM2;
	}

	public String getTerraseM2() {
		return terraseM2;
	}

	public void setTerraseM2(String terraseM2) {
		this.terraseM2 = terraseM2;
	}

	public String getEscaparateM() {
		return escaparateM;
	}

	public void setEscaparateM(String escaparateM) {
		this.escaparateM = escaparateM;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getFinancialCompany() {
		return financialCompany;
	}

	public void setFinancialCompany(String financialCompany) {
		this.financialCompany = financialCompany;
	}

	

	public Mall getMall() {
		return mall;
	}

	public void setMall(Mall mall) {
		this.mall = mall;
	}

	public Set<SucProject> getSucProjectEntity() {
		return sucProjectEntity;
	}

	public void setSucProjectEntity(Set<SucProject> sucProjectEntity) {
		this.sucProjectEntity = sucProjectEntity;
	}
	
	

	public Integer getSucType() {
		return sucType;
	}

	public void setSucType(Integer sucType) {
		this.sucType = sucType;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	public Contract getCurrentContract(){

		Contract response = new Contract();
		Contracts contracts = new Contracts();

		ContractFilter filter = new ContractFilter();
		filter.getSucEntity().exact(this.getId(), Filter.EQUALS_TO);

		Response<List<Contract>> contractList = contracts.getListByFilter(filter);
		if(contractList.getStatus()>-1){
			for(Contract each : contractList.getResult()){
				if(each.getStartDate().before(new Date()) && each.getFinishDate().after(new Date())){
					response=each;
				}
			}
		}
		return response;
	}

}
