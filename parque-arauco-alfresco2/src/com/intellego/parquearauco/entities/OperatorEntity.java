package com.intellego.parquearauco.entities;

import java.util.HashSet;
import java.util.Set;

import com.intellego.parquearauco.security.entities.BasicEntity;

public class OperatorEntity extends BasicEntity{

	private Integer id;
	private String name;
	private Integer typeOperator;
	private Set<SucProjectEntity> sucProject = new HashSet<SucProjectEntity>();
	
	private Set<ArchitectureProjectEntity> architectureProject= new HashSet<ArchitectureProjectEntity>();

	public OperatorEntity() {
	}

	
	public OperatorEntity(Integer id, String name,
			Set<SucProjectEntity> sucProject,
			Set<ArchitectureProjectEntity> architectureProject, Integer typeOperator) {
		this.id = id;
		this.name = name;
		this.sucProject = sucProject;
		this.architectureProject = architectureProject;
		this.typeOperator = typeOperator;
		
	
	}


	public Integer getTypeOperator() {
		return typeOperator;
	}


	public void setTypeOperator(Integer typeOperator) {
		this.typeOperator = typeOperator;
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

	public Set<SucProjectEntity> getSucProject() {
		return sucProject;
	}

	public void setSucProject(Set<SucProjectEntity> sucProject) {
		this.sucProject = sucProject;
	}



	public Set<ArchitectureProjectEntity> getArchitectureProject() {
		return architectureProject;
	}



	public void setArchitectureProject(
			Set<ArchitectureProjectEntity> architectureProject) {
		this.architectureProject = architectureProject;
	}

	
	
}
