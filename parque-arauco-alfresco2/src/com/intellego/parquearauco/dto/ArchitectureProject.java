package com.intellego.parquearauco.dto;

import java.util.Date;

import com.intellego.parquearauco.security.annotations.Dto;
import com.intellego.parquearauco.security.dto.Basic;

@Dto(entity = "com.intellego.parquearauco.entities.ArchitectureProjectEntity")
public class ArchitectureProject extends Basic{

	private static final long serialVersionUID = 1L;

	private String name;
	private Date createDate;
	private Date finishDate;
	private Mall mall;
	private Operator operator;
	private ProjectType projectType;
	private ProjectStatus projectStatusEntity;
	private String description;
	
	private String chiefArchitect;
	private String companyAwarded;
	private String professionalName;
	private String draftsmanName;
	private String numberOC;
	private String companyAwardedRut;
	
	public String getCompanyAwardedRut() {
		return companyAwardedRut;
	}

	public void setCompanyAwardedRut(String companyAwardedRut) {
		this.companyAwardedRut = companyAwardedRut;
	}

	public ArchitectureProject() {
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

	public void setFinishDate(Date finishDate) {
		this.finishDate = finishDate;
	}

	public Mall getMall() {
		return mall;
	}

	public void setMall(Mall mall) {
		this.mall = mall;
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
	
	

	public ProjectStatus getProjectStatusEntity() {
		return projectStatusEntity;
	}

	public void setProjectStatusEntity(ProjectStatus projectStatusEntity) {
		this.projectStatusEntity = projectStatusEntity;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
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

	public String getCompanyAwarded() {
		return companyAwarded;
	}

	public void setCompanyAwarded(String companyAwarded) {
		this.companyAwarded = companyAwarded;
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

	public String getNumberOC() {
		return numberOC;
	}

	public void setNumberOC(String numberOC) {
		this.numberOC = numberOC;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}
	
}
