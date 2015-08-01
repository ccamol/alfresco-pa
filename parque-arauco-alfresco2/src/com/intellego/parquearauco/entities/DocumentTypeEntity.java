package com.intellego.parquearauco.entities;

import java.util.HashSet;
import java.util.Set;

import com.intellego.parquearauco.security.entities.BasicEntity;

public class DocumentTypeEntity extends BasicEntity{

	private Integer id;
	private String name;

	private Set<StageTypeEntity> stageTypes = new HashSet<StageTypeEntity>(0);

	public DocumentTypeEntity() {
	}



	public DocumentTypeEntity(Integer id, String name,
			Set<StageTypeEntity> stageTypes) {
		super();
		this.id = id;
		this.name = name;
		this.stageTypes = stageTypes;
	}



	public Set<StageTypeEntity> getStageTypes() {
		return stageTypes;
	}



	public void setStageTypes(Set<StageTypeEntity> stageTypes) {
		this.stageTypes = stageTypes;
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
