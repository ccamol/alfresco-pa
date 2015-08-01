package com.intellego.parquearauco.entities;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.intellego.parquearauco.security.entities.BasicEntity;

public class StageTypeEntity extends BasicEntity{

	private Integer id;
	private String name;
    private Integer status;
	private Set<ProjectTypeEntity> projectTypes = new HashSet<ProjectTypeEntity>(0);
	private Set<DocumentTypeEntity> documentTypes = new HashSet<DocumentTypeEntity>(0);
	
	public StageTypeEntity() {
	}

	

	public StageTypeEntity(Integer id, String name,
			Set<ProjectTypeEntity> projectTypes,
			Set<DocumentTypeEntity> documentTypes,
			Integer status, List<StatusProjectStageEntity> projects) {
		this.id = id;
		this.name = name;
		this.projectTypes = projectTypes;
		this.documentTypes = documentTypes;
		this.status = status;
		
		
	}

	
	public Integer getStatus() {
		return status;
	}



	public void setStatus(Integer status) {
		this.status = status;
	}



	public Set<DocumentTypeEntity> getDocumentTypes() {
		return documentTypes;
	}


	public void setDocumentTypes(Set<DocumentTypeEntity> documentTypes) {
		this.documentTypes = documentTypes;
	}


	public Set<ProjectTypeEntity> getProjectTypes() {
		return projectTypes;
	}


	public void setProjectTypes(Set<ProjectTypeEntity> projectTypes) {
		this.projectTypes = projectTypes;
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
