package com.intellego.parquearauco.dto;

import java.util.HashSet;
import java.util.Set;

import com.intellego.parquearauco.security.annotations.Dto;
import com.intellego.parquearauco.security.dto.Basic;

@Dto(entity = "com.intellego.parquearauco.entities.StatusProjectStageEntity")
public class StatusProjectStage extends Basic {
	private static final long serialVersionUID = 1L;
	private IdStatusStage idStatusStage;
	private int status;
	
	public StatusProjectStage(){
		
	}
	public IdStatusStage getIdStatusStage() {
		return idStatusStage;
	}
	public void setIdStatusStage(IdStatusStage idStatusStage) {
		this.idStatusStage = idStatusStage;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	
	
	
}
