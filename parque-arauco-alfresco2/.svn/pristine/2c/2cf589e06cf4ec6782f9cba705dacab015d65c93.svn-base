package com.intellego.parquearauco.entities;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.intellego.parquearauco.security.entities.BasicEntity;

public class ProjectTypeEntity extends BasicEntity{

	private Integer id;
	private String name;
	
	private NodeTypeEntity nodeType;

	private Set<StageTypeEntity> stageTypes = new HashSet<StageTypeEntity>(0);
	
	private Set<StageTypeTenderEntity> stageTypesTender = new HashSet<StageTypeTenderEntity>(0);
	
	private Set<ArchitectureProjectEntity> architectureProjects = new HashSet<ArchitectureProjectEntity>();
	
	private Set<EngineeringProjectEntity> engineeringProjecs = new HashSet<EngineeringProjectEntity>();
	
	private Set<SucProjectEntity> sucProjects = new HashSet<SucProjectEntity>();
	


	public ProjectTypeEntity() {
	}

	public ProjectTypeEntity(Integer id, String name, NodeTypeEntity nodeType,
			Set<StageTypeEntity> stageTypes, Set<StageTypeTenderEntity> stageTypesTender,
			Set<ArchitectureProjectEntity> architectureProjects,
			Set<EngineeringProjectEntity> engineeringProjecs,
			Set<SucProjectEntity> sucProjects) {
		this.id = id;
		this.name = name;
		this.nodeType = nodeType;
		this.stageTypes = stageTypes;
		this.stageTypesTender = stageTypesTender;
		this.architectureProjects = architectureProjects;
		this.engineeringProjecs = engineeringProjecs;
		this.sucProjects = sucProjects;
		
	}


	public NodeTypeEntity getNodeType() {
		return nodeType;
	}

	public void setNodeType(NodeTypeEntity nodeType) {
		this.nodeType = nodeType;
	}

	public Set<ArchitectureProjectEntity> getArchitectureProjects() {
		return architectureProjects;
	}

	public void setArchitectureProjects(
			Set<ArchitectureProjectEntity> architectureProjects) {
		this.architectureProjects = architectureProjects;
	}


	public Set<EngineeringProjectEntity> getEngineeringProjecs() {
		return engineeringProjecs;
	}

	public Set<StageTypeTenderEntity> getStageTypesTender() {
		return stageTypesTender;
	}

	public void setStageTypesTender(Set<StageTypeTenderEntity> stageTypesTender) {
		this.stageTypesTender = stageTypesTender;
	}

	public void setEngineeringProjecs(
			Set<EngineeringProjectEntity> engineeringProjecs) {
		this.engineeringProjecs = engineeringProjecs;
	}

	public Set<SucProjectEntity> getSucProjects() {
		return sucProjects;
	}





	public void setSucProjects(Set<SucProjectEntity> sucProjects) {
		this.sucProjects = sucProjects;
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
