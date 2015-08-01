package com.intellego.parquearauco.dto;

import java.util.HashSet;
import java.util.Set;


import com.intellego.parquearauco.entities.StageTypeTenderEntity;
import com.intellego.parquearauco.security.annotations.Dto;
import com.intellego.parquearauco.security.dto.Basic;

@Dto(entity = "com.intellego.parquearauco.entities.ProjectTypeEntity")
public class ProjectType extends Basic{

	private static final long serialVersionUID = 1L;
	
	private String name;
	
	private NodeType nodeType;

	private Set<StageType> stageTypes = new HashSet<StageType>(0);
	
	private Set<StageTypeTender> stageTypesTender = new HashSet<StageTypeTender>(0);
	
	private Set<ArchitectureProject> architectureProjects = new HashSet<ArchitectureProject>();
	
	private Set<EngineeringProject> engineeringProjecs = new HashSet<EngineeringProject>();
	
	private Set<SucProject> sucProjects = new HashSet<SucProject>();

	public ProjectType() {
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

	public Set<ArchitectureProject> getArchitectureProjects() {
		return architectureProjects;
	}

	public void setArchitectureProjects(
			Set<ArchitectureProject> architectureProjects) {
		this.architectureProjects = architectureProjects;
	}

	public Set<EngineeringProject> getEngineeringProjecs() {
		return engineeringProjecs;
	}

	public void setEngineeringProjecs(Set<EngineeringProject> engineeringProjecs) {
		this.engineeringProjecs = engineeringProjecs;
	}

	public Set<SucProject> getSucProjects() {
		return sucProjects;
	}

	public void setSucProjects(Set<SucProject> sucProjects) {
		this.sucProjects = sucProjects;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public NodeType getNodeType() {
		return nodeType;
	}

	public void setNodeType(NodeType nodeType) {
		this.nodeType = nodeType;
	}

	public Set<StageTypeTender> getStageTypesTender() {
		return stageTypesTender;
	}

	public void setStageTypesTender(Set<StageTypeTender> stageTypesTender) {
		this.stageTypesTender = stageTypesTender;
	}
	
	

	
}
