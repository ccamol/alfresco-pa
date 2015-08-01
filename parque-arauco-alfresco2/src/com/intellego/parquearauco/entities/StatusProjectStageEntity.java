package com.intellego.parquearauco.entities;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.intellego.parquearauco.dto.IdStatusStage;
import com.intellego.parquearauco.dto.StatusProjectStage;
import com.intellego.parquearauco.security.annotations.Dto;
import com.intellego.parquearauco.security.dto.Basic;
import com.intellego.parquearauco.security.entities.BasicEntity;

public class StatusProjectStageEntity extends BasicEntity{
	
		private IdStatusStageEntity idStatusStage;
		private Integer status;
		
		public StatusProjectStageEntity(){
			
		}
		
		public StatusProjectStageEntity(IdStatusStageEntity idStatusStage, Integer status) {
			this.idStatusStage = idStatusStage;
			this.status = status;
		}
		
		public IdStatusStageEntity getIdStatusStage() {
			return idStatusStage;
		}
		public void setIdStatusStage(IdStatusStageEntity idStatusStage) {
			this.idStatusStage = idStatusStage;
		}
		public int getStatus() {
			return status;
		}
		public void setStatus(Integer status) {
			this.status = status;
		}
		
	
}
