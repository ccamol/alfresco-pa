package com.intellego.parquearauco.entities;

import com.intellego.parquearauco.security.entities.BasicEntity;

public class OrganizationalAreaEntity extends BasicEntity {

	private Integer id;
	private String name;

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
