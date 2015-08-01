package com.intellego.parquearauco.dto;

import java.util.HashSet;
import java.util.Set;

import com.intellego.parquearauco.security.annotations.Dto;
import com.intellego.parquearauco.security.dto.Basic;

@Dto(entity = "com.intellego.parquearauco.entities.CountryEntity")
public class Country extends Basic{

	private static final long serialVersionUID = 1L;
	private String name;
	private String countryCode;
	private Set<Mall> mall = new HashSet<Mall>();
	public Country() {
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

	public String getCountryCode() {
		return countryCode;
	}

	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}
	
}
