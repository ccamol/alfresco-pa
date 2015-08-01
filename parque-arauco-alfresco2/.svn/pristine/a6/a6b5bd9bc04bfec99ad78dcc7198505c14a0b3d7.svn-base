package com.intellego.parquearauco.security.entities;

import java.io.Serializable;

public class AclEntity extends BasicEntity implements Serializable{

	private static final long serialVersionUID = 1L;

	private Integer id;
	private Integer nodeType;
	private Integer nodeId;
	private RolEntity rol;
	private String username;
	
	public AclEntity(){
		this.id=null;
		this.nodeType=null;
		this.nodeId=null;
		this.rol=new RolEntity();
		this.username=new String();
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public RolEntity getRol() {
		return rol;
	}
	public void setRol(RolEntity rol) {
		this.rol = rol;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}

	public Integer getNodeType() {
		return nodeType;
	}

	public void setNodeType(Integer nodeType) {
		this.nodeType = nodeType;
	}

	public Integer getNodeId() {
		return nodeId;
	}

	public void setNodeId(Integer nodeId) {
		this.nodeId = nodeId;
	}
	
}
