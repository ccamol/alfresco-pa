package com.intellego.parquearauco.entities;
import com.intellego.parquearauco.security.entities.BasicEntity;

public class ImportantDucumentEntity extends BasicEntity{
	
	private Integer id;
	private Integer idType;
	private NodeTypeEntity nodeType;
	private String uuid;
	private String userAlfresco;
	
	public ImportantDucumentEntity() {
		
	}
	public ImportantDucumentEntity(Integer id,Integer idType, NodeTypeEntity nodeType,
			String uuid,String userAlfresco) {
		super();
		this.id = id;
		this.idType = idType;
		this.nodeType = nodeType;
		this.uuid = uuid;
		this.userAlfresco = userAlfresco; 
	}
	
	
	
	
	public String getUserAlfresco() {
		return userAlfresco;
	}
	public void setUserAlfresco(String userAlfresco) {
		this.userAlfresco = userAlfresco;
	}

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}

	
	public Integer getIdType() {
		return idType;
	}
	public void setIdType(Integer idType) {
		this.idType = idType;
	}
	public NodeTypeEntity getNodeType() {
		return nodeType;
	}



	public void setNodeType(NodeTypeEntity nodeType) {
		this.nodeType = nodeType;
	}

	public String getUuid() {
		return uuid;
	}
	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
	
}
