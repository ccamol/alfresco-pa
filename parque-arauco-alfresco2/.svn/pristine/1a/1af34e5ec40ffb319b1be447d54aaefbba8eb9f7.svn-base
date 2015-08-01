package com.intellego.parquearauco.entities;

import java.util.HashSet;
import java.util.Set;

import com.intellego.parquearauco.security.entities.BasicEntity;

public class CountryEntity extends BasicEntity {

	private Integer id;
	private String name;
	private String countryCode;

	private Set<MallEntity> mall = new HashSet<MallEntity>();

	public CountryEntity(){
	}


	public CountryEntity(Integer id, String name, Set<MallEntity> mall) {
		this.id = id;
		this.name = name;
		this.mall = mall;
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


	public Set<MallEntity> getMall() {
		return mall;
	}


	public void setMall(Set<MallEntity> mall) {
		this.mall = mall;
	}


	public String getCountryCode() {
		return countryCode;
	}


	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}




}
