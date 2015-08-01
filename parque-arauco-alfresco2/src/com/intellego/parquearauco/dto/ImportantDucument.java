package com.intellego.parquearauco.dto;

import java.util.Date;

import com.intellego.parquearauco.entities.NodeTypeEntity;
import com.intellego.parquearauco.security.annotations.Dto;
import com.intellego.parquearauco.security.dto.Basic;
import com.intellego.parquearauco.security.entities.BasicEntity;
@Dto(entity = "com.intellego.parquearauco.entities.ImportantDucumentEntity")
public class ImportantDucument extends Basic{
	
	private static final long serialVersionUID = 1L;
	
	private Integer idType;
	private NodeType nodeType;
	private String uuid;
	private String userAlfresco;
	
	public ImportantDucument() {
		
	}
	
	


	public String getUserAlfresco() {
		return userAlfresco;
	}




	public void setUserAlfresco(String userAlfresco) {
		this.userAlfresco = userAlfresco;
	}




	public NodeType getNodeType() {
		return nodeType;
	}
	public void setNodeType(NodeType nodeType) {
		this.nodeType = nodeType;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public Integer getIdType() {
		return idType;
	}
	public void setIdType(Integer idType) {
		this.idType = idType;
	}
	

	public String getUuid() {
		return uuid;
	}
	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
}
