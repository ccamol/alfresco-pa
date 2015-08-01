package com.intellego.parquearauco.entities;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import com.intellego.parquearauco.security.entities.BasicEntity;

public class SucEntity extends BasicEntity{
	
	
	private String name;
	private Integer id;
	private String sucCode;
	private String storeM2; 
	private String wareHouseM2;
	private String terraseM2;
	private String escaparateM;
	private Integer sucType;
	private Integer status;
	private String description;
	private Date contractDate; 
	private Date historySend;


	private String financialCompany;

	private MallEntity mall;
	
	private Set<SucProjectEntity> sucProjectEntity = new HashSet<SucProjectEntity>();

	public SucEntity() {
	}

	public SucEntity(String name, Integer id, String sucCode, String storeM2,
			String wareHouseM2, String terraseM2, String escaparateM,
			Integer sucType, Integer status, 
			String description, String financialCompany, MallEntity mall,
			Set<SucProjectEntity> sucProjectEntity, Date contractDate , Date historySend ) {
		
		this.name = name;
		this.id = id;
		this.sucCode = sucCode;
		this.storeM2 = storeM2;
		this.wareHouseM2 = wareHouseM2;
		this.terraseM2 = terraseM2;
		this.escaparateM = escaparateM;
		this.sucType = sucType;
		this.status = status;
		this.description = description;
		this.financialCompany = financialCompany;
		this.mall = mall;
		this.sucProjectEntity = sucProjectEntity;
		this.contractDate = contractDate;
		this.historySend = historySend;
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



	public String getFinancialCompany() {
		return financialCompany;
	}



	public void setFinancialCompany(String financialCompany) {
		this.financialCompany = financialCompany;
	}



	public Set<SucProjectEntity> getSucProjectEntity() {
		return sucProjectEntity;
	}



	public void setSucProjectEntity(Set<SucProjectEntity> sucProjectEntity) {
		this.sucProjectEntity = sucProjectEntity;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
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

	public MallEntity getMall() {
		return mall;
	}

	public void setMall(MallEntity mall) {
		this.mall = mall;
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
	

}
