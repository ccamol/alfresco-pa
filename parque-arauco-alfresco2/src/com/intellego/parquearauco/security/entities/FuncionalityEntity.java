package com.intellego.parquearauco.security.entities;

import java.io.Serializable;

public class FuncionalityEntity extends BasicEntity implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private Integer id;
	private String name;
	private Integer nodeType;
	private AreaEntity area;
	
	public FuncionalityEntity(){
		this.id=null;
		this.name=new String();
		this.nodeType=null;
		this.area = new AreaEntity();
	}
	
	public FuncionalityEntity(Integer id, String name, Integer nodeType, AreaEntity area){
		this.id=id;
		this.name=name;
		this.nodeType=nodeType;
		this.area=area;
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
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

	public AreaEntity getArea() {
		return area;
	}

	public void setArea(AreaEntity area) {
		this.area = area;
	}


}
