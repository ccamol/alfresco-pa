package com.intellego.parquearauco.dto;

import java.util.HashSet;
import java.util.Set;

import com.intellego.parquearauco.security.annotations.Dto;
import com.intellego.parquearauco.security.dto.Basic;

@Dto(entity = "com.intellego.parquearauco.entities.StageTypeEntity")
public class StageType extends Basic{

	private static final long serialVersionUID = 1L;
	
	private String name;
	
    private Integer status;

	private Set<ProjectType> projectTypes = new HashSet<ProjectType>(0);

	private Set<DocumentType> documentTypes = new HashSet<DocumentType>(0);
	


	public Integer getStatus() {
		return status;
	}


	public void setStatus(Integer status) {
		this.status = status;
	}


	public StageType() {
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}




	public Set<ProjectType> getProjectTypes() {
		return projectTypes;
	}


	public void setProjectTypes(Set<ProjectType> projectTypes) {
		this.projectTypes = projectTypes;
	}


	public Set<DocumentType> getDocumentTypes() {
		return documentTypes;
	}


	public void setDocumentTypes(Set<DocumentType> documentTypes) {
		this.documentTypes = documentTypes;
	}


	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
}
