package com.intellego.parquearauco.dto;

import java.util.HashSet;
import java.util.Set;

import com.intellego.parquearauco.security.annotations.Dto;
import com.intellego.parquearauco.security.dto.Basic;

@Dto(entity = "com.intellego.parquearauco.entities.ProjectStagesEntity")
public class ProjectStages extends Basic{

	private static final long serialVersionUID = 1L;
	
	private Integer idProject;
	private Integer idProjectType;
	private StageType stageType;
	private Integer stageStatus;
	private Integer subStages;


	public ProjectStages() {
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


	public StageType getStageType() {
		return stageType;
	}



	public void setStageType(StageType stageType) {
		this.stageType = stageType;
	}



	public Integer getStageStatus() {
		return stageStatus;
	}



	public void setStageStatus(Integer stageStatus) {
		this.stageStatus = stageStatus;
	}



	public static long getSerialversionuid() {
		return serialVersionUID;
	}



	public Integer getSubStages() {
		return subStages;
	}



	public void setSubStages(Integer subStages) {
		this.subStages = subStages;
	}
	
	

	
}
