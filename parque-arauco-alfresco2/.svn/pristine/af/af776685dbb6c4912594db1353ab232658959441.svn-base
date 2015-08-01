package com.intellego.parquearauco.entities;


import com.intellego.parquearauco.dto.StageType;
import com.intellego.parquearauco.security.entities.BasicEntity;

public class ProjectStagesEntity extends BasicEntity{

	private Integer id;
	private Integer idProject;
	private Integer idProjectType;
	private StageTypeEntity stageType;
	private Integer stageStatus;


	public ProjectStagesEntity() {
	}

	public ProjectStagesEntity(Integer id, Integer idProject,
			Integer idProjectType,StageTypeEntity stageType, Integer stageStatus) {
		this.id = id;
		this.idProject = idProject;
		this.idProjectType = idProjectType;
		this.setStageType(stageType);
		this.stageStatus = stageStatus;
		
	}

	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getIdProject() {
		return idProject;
	}

	public void setIdProject(Integer idProject) {
		this.idProject = idProject;
	}

	public Integer getIdProjectType() {
		return idProjectType;
	}

	public void setIdProjectType(Integer idProjectType) {
		this.idProjectType = idProjectType;
	}


	public Integer getStageStatus() {
		return stageStatus;
	}

	public void setStageStatus(Integer stageStatus) {
		this.stageStatus = stageStatus;
	}

	public StageTypeEntity getStageType() {
		return stageType;
	}

	public void setStageType(StageTypeEntity stageType) {
		this.stageType = stageType;
	}


}
