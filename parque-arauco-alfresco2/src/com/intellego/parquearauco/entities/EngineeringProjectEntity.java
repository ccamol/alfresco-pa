package com.intellego.parquearauco.entities;

import java.util.Date;

import com.intellego.parquearauco.security.entities.BasicEntity;

public class EngineeringProjectEntity extends BasicEntity {

	private Integer id;
	private String name;
	private Date finishDate;
	private Date createdDate;

	private MallEntity mall;

	private ProjectTypeEntity projectType;

	private ProjectStatusEntity projectStatusEntity;

	private String description;

	public EngineeringProjectEntity() {
	}

	public EngineeringProjectEntity(Integer id, String name, Date finishDate,
			MallEntity mall, ProjectTypeEntity projectType,
			ProjectStatusEntity projectStatusEntity,
			String description, Date createdDate) {
		this.createdDate = createdDate;
		this.name = name;
		this.finishDate = finishDate;
		this.mall = mall;
		this.projectType = projectType;
		this.projectStatusEntity = projectStatusEntity;
		this.description = description;
	}


	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
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

	public Date getFinishDate() {
		return finishDate;
	}

	public void setFinishDate(Date finishDate) {
		this.finishDate = finishDate;
	}

	public MallEntity getMall() {
		return mall;
	}

	public void setMall(MallEntity mall) {
		this.mall = mall;
	}

	public ProjectTypeEntity getProjectType() {
		return projectType;
	}

	public void setProjectType(ProjectTypeEntity projectType) {
		this.projectType = projectType;
	}

	public ProjectStatusEntity getProjectStatusEntity() {
		return projectStatusEntity;
	}

	public void setProjectStatusEntity(
			ProjectStatusEntity projectStatusEntity) {
		this.projectStatusEntity = projectStatusEntity;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
