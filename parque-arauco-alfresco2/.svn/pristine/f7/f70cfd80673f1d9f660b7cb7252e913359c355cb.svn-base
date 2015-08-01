package com.intellego.parquearauco.dto;

import java.util.HashSet;
import java.util.Set;

import com.intellego.parquearauco.security.annotations.Dto;
import com.intellego.parquearauco.security.dto.Basic;

@Dto(entity = "com.intellego.parquearauco.entities.MallTypeEntity")
public class MallType extends Basic{

	private static final long serialVersionUID = 1L;

	private String name;
	private Set<Mall> mall = new HashSet<Mall>();

	public MallType(){

	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}


	public Set<Mall> getMall() {
		return mall;
	}

	public void setMall(Set<Mall> mall) {
		this.mall = mall;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
	
}
