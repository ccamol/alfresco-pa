package com.intellego.parquearauco.dto;

import java.util.HashSet;
import java.util.Set;

import com.intellego.parquearauco.entities.ArchitectureProjectEntity;
import com.intellego.parquearauco.entities.SucProjectEntity;
import com.intellego.parquearauco.security.annotations.Dto;
import com.intellego.parquearauco.security.dto.Basic;

@Dto(entity = "com.intellego.parquearauco.entities.OperatorEntity")
public class Operator extends Basic{

	private static final long serialVersionUID = 1L;
	
	private String name;
	private Integer typeOperator;

	private Set<SucProject> sucProject = new HashSet<SucProject>();
	
	private Set<ArchitectureProject> architectureProject= new HashSet<ArchitectureProject>();

	public Operator() {
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	

	public Set<SucProject> getSucProject() {
		return sucProject;
	}

	public void setSucProject(Set<SucProject> sucProject) {
		this.sucProject = sucProject;
	}

	public Set<ArchitectureProject> getArchitectureProject() {
		return architectureProject;
	}

	public void setArchitectureProject(Set<ArchitectureProject> architectureProject) {
		this.architectureProject = architectureProject;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public Integer getTypeOperator() {
		return typeOperator;
	}

	public void setTypeOperator(Integer typeOperator) {
		this.typeOperator = typeOperator;
	}
	
}
