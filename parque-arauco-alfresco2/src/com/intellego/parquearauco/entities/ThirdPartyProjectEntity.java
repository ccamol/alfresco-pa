package com.intellego.parquearauco.entities;

import com.intellego.parquearauco.security.entities.BasicEntity;

public class ThirdPartyProjectEntity extends BasicEntity{

	private Integer id;
	private Integer architectureProjectEntity;
	private String thirdPartyName;
	private String fullNameGroup;
	public ThirdPartyProjectEntity() {

	}

	public ThirdPartyProjectEntity(Integer id, String thirdPartyName, Integer architectureProjectEntity , String fullNameGroup) {
		super();
		this.id = id;
		this.thirdPartyName = thirdPartyName;
		this.architectureProjectEntity = architectureProjectEntity;
		this.fullNameGroup = fullNameGroup;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public Integer getArchitectureProjectEntity() {
		return architectureProjectEntity;
	}

	public void setArchitectureProjectEntity(Integer architectureProjectEntity) {
		this.architectureProjectEntity = architectureProjectEntity;
	}

	public String getThirdPartyName() {
		return thirdPartyName;
	}


	public void setThirdPartyName(String thirdPartyName) {
		this.thirdPartyName = thirdPartyName;
	}

	public String getFullNameGroup() {
		return fullNameGroup;
	}

	public void setFullNameGroup(String fullNameGroup) {
		this.fullNameGroup = fullNameGroup;
	}

}
