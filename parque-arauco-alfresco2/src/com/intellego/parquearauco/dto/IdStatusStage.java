package com.intellego.parquearauco.dto;

import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;

import com.intellego.parquearauco.security.annotations.Dto;
import com.intellego.parquearauco.security.dto.Basic;


@Dto(entity = "com.intellego.parquearauco.entities.IdStatusStageEntity")
public class IdStatusStage extends Basic{
	
	private StageType idStageType;
	private ProjectType idProjectType;
	
	public IdStatusStage(){
		
	}
	
	
	public StageType getIdStageType() {
		return idStageType;
	}


	public void setIdStageType(StageType idStageType) {
		this.idStageType = idStageType;
	}


	public ProjectType getIdProjectType() {
		return idProjectType;
	}


	public void setIdProjectType(ProjectType idProjectType) {
		this.idProjectType = idProjectType;
	}

	
	
	
	
	
}
