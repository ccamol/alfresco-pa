package com.intellego.parquearauco.dto;

import java.util.HashSet;
import java.util.Set;

import com.intellego.parquearauco.security.annotations.Dto;
import com.intellego.parquearauco.security.dto.Basic;

@Dto(entity = "com.intellego.parquearauco.entities.DocumentTypeEntity")
public class DocumentType extends Basic{

	private static final long serialVersionUID = 1L;

	private String name;

	private Set<StageType> stageTypes = new HashSet<StageType>(0);

	public DocumentType() {
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<StageType> getStageTypes() {
		return stageTypes;
	}

	public void setStageTypes(Set<StageType> stageTypes) {
		this.stageTypes = stageTypes;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
	
}
