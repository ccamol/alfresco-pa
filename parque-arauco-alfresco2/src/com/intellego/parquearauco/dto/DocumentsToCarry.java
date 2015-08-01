package com.intellego.parquearauco.dto;

import java.util.Date;

import com.intellego.parquearauco.security.annotations.Dto;
import com.intellego.parquearauco.security.dto.Basic;

@Dto(entity = "com.intellego.parquearauco.entities.DocumentsToCarryEntity")
public class DocumentsToCarry extends Basic{

	private static final long serialVersionUID = 1L;
	
	private Tender tender;
	private String uuid;
	private String name;
	private String format;
	private String description;
	private Integer type;
	private String documentType;
	private Date createdDate;


	public DocumentsToCarry() {
	}
	public Tender getTender() {
		return tender;
	}
	public void setTender(Tender tender) {
		this.tender = tender;
	}
	public String getUuid() {
		return uuid;
	}
	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public String getFormat() {
		return format;
	}
	public void setFormat(String format) {
		this.format = format;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public Integer getType() {
		return type;
	}
	public void setType(Integer type) {
		this.type = type;
	}
	
	public String getDocumentType() {
		return documentType;
	}
	public void setDocumentType(String documentType) {
		this.documentType = documentType;
	}
	public Date getCreatedDate() {
		return createdDate;
	}
	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
}
