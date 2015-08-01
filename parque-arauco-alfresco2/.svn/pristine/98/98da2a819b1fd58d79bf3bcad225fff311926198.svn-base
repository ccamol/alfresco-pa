package com.intellego.parquearauco.dto;

import java.util.Date;

import com.intellego.parquearauco.security.annotations.Dto;
import com.intellego.parquearauco.security.dto.Basic;

@Dto(entity = "com.intellego.parquearauco.entities.ContractEntity")
public class Contract extends Basic{

	private static final long serialVersionUID = 1L;

	private String name;
	private String sapCode;
	private Date finishDate;
	private Date startDate;

	private Suc sucEntity;

	public Contract() {
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getFinishDate() {
		return finishDate;
	}

	
	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public void setFinishDate(Date finishDate) {
		this.finishDate = finishDate;
	}

	public Suc getSucEntity() {
		return sucEntity;
	}

	public void setSucEntity(Suc sucEntity) {
		this.sucEntity = sucEntity;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public String getSapCode() {
		return sapCode;
	}

	public void setSapCode(String sapCode) {
		this.sapCode = sapCode;
	}
}
