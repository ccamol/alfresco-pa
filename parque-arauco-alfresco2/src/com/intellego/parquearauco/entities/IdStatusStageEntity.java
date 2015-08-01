package com.intellego.parquearauco.entities;

import java.io.Serializable;

import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;

import com.intellego.parquearauco.dto.IdStatusStage;

public class IdStatusStageEntity implements Serializable{

	private StageTypeEntity idStageType;
	private ProjectTypeEntity idProjectType;




	public IdStatusStageEntity(){

	}

	public IdStatusStageEntity(StageTypeEntity idStageType,ProjectTypeEntity idProjectType){
		this.idStageType = idStageType;
		this.idProjectType = idProjectType;

	}

	public StageTypeEntity getIdStageType() {
		return idStageType;
	}

	public void setIdStageType(StageTypeEntity idStageType) {
		this.idStageType = idStageType;
	}

	public ProjectTypeEntity getIdProjectType() {
		return idProjectType;
	}

	public void setIdProjectType(ProjectTypeEntity idProjectType) {
		this.idProjectType = idProjectType;
	}


}
