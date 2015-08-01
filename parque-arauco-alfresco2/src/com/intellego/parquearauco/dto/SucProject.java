package com.intellego.parquearauco.dto;

import java.util.Date;

import com.intellego.parquearauco.security.annotations.Dto;
import com.intellego.parquearauco.security.dto.Basic;

@Dto(entity = "com.intellego.parquearauco.entities.SucProjectEntity")
public class SucProject extends Basic{

	private static final long serialVersionUID = 1L;

	private String name;
	private Date finishDate;
	private Date startDate;
	private Suc sucEntity;
	private Operator operator;
	private ProjectType projectType;
	private ProjectStatus projectStatusEntity;
	private String description;
	private String chiefArchitect;
	private String professionalName;
	private String draftsmanName;
	

	public SucProject() {
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getFinishDate() {
		return finishDate;
	}

	
	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public void setFinishDate(Date finishDate) {
		this.finishDate = finishDate;
	}

	public Suc getSucEntity() {
		return sucEntity;
	}

	public void setSucEntity(Suc sucEntity) {
		this.sucEntity = sucEntity;
	}

	public Operator getOperator() {
		return operator;
	}

	public void setOperator(Operator operator) {
		this.operator = operator;
	}

	public ProjectType getProjectType() {
		return projectType;
	}

	public void setProjectType(ProjectType projectType) {
		this.projectType = projectType;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	public ProjectStatus getProjectStatusEntity() {
		return projectStatusEntity;
	}

	public void setProjectStatusEntity(ProjectStatus projectStatusEntity) {
		this.projectStatusEntity = projectStatusEntity;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public String getChiefArchitect() {
		return chiefArchitect;
	}

	public void setChiefArchitect(String chiefArchitect) {
		this.chiefArchitect = chiefArchitect;
	}

	public String getProfessionalName() {
		return professionalName;
	}

	public void setProfessionalName(String professionalName) {
		this.professionalName = professionalName;
	}

	public String getDraftsmanName() {
		return draftsmanName;
	}

	public void setDraftsmanName(String draftsmanName) {
		this.draftsmanName = draftsmanName;
	}
	
	
}
