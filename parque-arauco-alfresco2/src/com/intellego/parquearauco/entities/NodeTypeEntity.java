package com.intellego.parquearauco.entities;

import com.intellego.parquearauco.security.entities.BasicEntity;

public class NodeTypeEntity extends BasicEntity{
	private Integer id;
	private String name;
	
	public NodeTypeEntity() {
		
	}
	
	public NodeTypeEntity(Integer id,String name){
		super();
		this.id = id;
		this.name = name;
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
	
}
