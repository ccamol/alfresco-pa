package com.intellego.parquearauco.dto;

import java.io.Serializable;
import java.util.Date;

public class CheckListResultSet implements Serializable{

	
	private static final long serialVersionUID = 1L;
	
	private String documentTypeName;
	private String name;
	private Integer documentType;
	private String owner;
	private Date loadDate;
	private Boolean check;
	private String comments;
	private String uuid;
	
	public CheckListResultSet(){
		this.documentTypeName = new String();
		this.owner = new String();
		this.loadDate = null;
		this.check = false;
		this.comments = new String();
		this.uuid = new String();
		this.setName(new String());
	}
	
	public String getDocumentTypeName() {
		return documentTypeName;
	}
	public void setDocumentTypeName(String documentTypeName) {
		this.documentTypeName = documentTypeName;
	}
	public String getOwner() {
		return owner;
	}
	public void setOwner(String owner) {
		this.owner = owner;
	}
	public Date getLoadDate() {
		return loadDate;
	}
	public void setLoadDate(Date loadDate) {
		this.loadDate = loadDate;
	}
	public Boolean getCheck() {
		return check;
	}
	public void setCheck(Boolean check) {
		this.check = check;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	public String getUuid() {
		return uuid;
	}
	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public Integer getDocumentType() {
		return documentType;
	}

	public void setDocumentType(Integer documentType) {
		this.documentType = documentType;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
