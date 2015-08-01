package com.intellego.parquearauco.security.dto;

import com.intellego.parquearauco.security.annotations.Dto;

@Dto(entity = "com.intellego.parquearauco.security.entities.NodeEntity")
public class Node extends Basic{

	private static final long serialVersionUID = 1L;

	public static final int MALL=1;
	public static final int PROYECTO_MALL=2;
	public static final int SUC=3;
	public static final int PROYECTO_SUC=4;
	
	
	private Integer parent;
	private String name;
	private Integer nodeType;
	
	public Integer getParent() {
		return parent;
	}
	public void setParent(Integer parent) {
		this.parent = parent;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getNodeType() {
		return nodeType;
	}
	public void setNodeType(Integer nodeType) {
		this.nodeType = nodeType;
	}
	
	public Node(){
		//super(AclEntity.class);
	}
	
	
	
}
