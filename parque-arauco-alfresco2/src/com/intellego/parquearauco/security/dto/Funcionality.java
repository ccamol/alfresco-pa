package com.intellego.parquearauco.security.dto;

import com.intellego.parquearauco.security.annotations.Dto;

@Dto(entity = "com.intellego.parquearauco.security.entities.FuncionalityEntity")
public class Funcionality extends Basic{

	private static final long serialVersionUID = 1L;

	private String name;
	private Integer nodeType;
	private Area area;
	
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

	public Funcionality(){
		//super(AclEntity.class);
	}
	public Area getArea() {
		return area;
	}
	public void setArea(Area area) {
		this.area = area;
	}
}
