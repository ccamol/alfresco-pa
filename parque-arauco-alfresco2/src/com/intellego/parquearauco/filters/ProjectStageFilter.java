package com.intellego.parquearauco.filters;

import java.util.HashSet;
import java.util.Set;

import org.apache.fop.datatypes.Numeric;

import com.intellego.parquearauco.dto.ArchitectureProject;
import com.intellego.parquearauco.dto.EngineeringProject;
import com.intellego.parquearauco.dto.StageType;
import com.intellego.parquearauco.dto.SucProject;
import com.intellego.parquearauco.security.filters.NumericFilter;
import com.intellego.parquearauco.security.filters.ObjectFilter;
import com.intellego.parquearauco.security.filters.TextFilter;

public class ProjectStageFilter extends ObjectFilter{

	private static final long serialVersionUID = 1L;

	private NumericFilter id;
	private NumericFilter idProject;
	private NumericFilter stageType;
	private NumericFilter idProjectType;
	private NumericFilter stageStatus;
	private NumericFilter subStages;

	public ProjectStageFilter(){ 
		
		this.id = new NumericFilter();
		this.id.setField("id");

		this.idProject = new NumericFilter();
		this.idProject.setField("idProject");
		
		this.idProjectType = new NumericFilter();
		this.idProjectType.setField("idProjectType");
		
		this.stageStatus = new NumericFilter();
		this.stageStatus.setField("stageStatus");
		
		this.stageType = new NumericFilter();
		this.stageType.setField("stageType");
		
		this.subStages = new NumericFilter();
		this.subStages.setField("subStages");
		
	}
	
	public NumericFilter getStageType() {
		return stageType;
	}

	public void setStageType(NumericFilter stageType) {
		this.stageType = stageType;
	}

	public NumericFilter getId() {
		return id;
	}
	public void setId(NumericFilter id) {
		this.id = id;
	}

	public NumericFilter getIdProject() {
		return idProject;
	}

	public void setIdProject(NumericFilter idProject) {
		this.idProject = idProject;
	}

	public NumericFilter getIdProjectType() {
		return idProjectType;
	}

	public void setIdProjectType(NumericFilter idProjectType) {
		this.idProjectType = idProjectType;
	}

	public NumericFilter getStageStatus() {
		return stageStatus;
	}

	public void setStageStatus(NumericFilter stageStatus) {
		this.stageStatus = stageStatus;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}	
	
}
