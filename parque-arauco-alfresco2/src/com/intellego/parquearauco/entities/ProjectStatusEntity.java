package com.intellego.parquearauco.entities;

import com.intellego.parquearauco.security.entities.BasicEntity;

public class ProjectStatusEntity extends BasicEntity{

	private Integer id;
	private String name;

	public ProjectStatusEntity() {
	}

	public ProjectStatusEntity(Integer id, String name) {
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
