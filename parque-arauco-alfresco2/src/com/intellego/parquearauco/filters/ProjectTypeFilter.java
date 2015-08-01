package com.intellego.parquearauco.filters;

import java.util.HashSet;
import java.util.Set;


import com.intellego.parquearauco.security.filters.NumericFilter;
import com.intellego.parquearauco.security.filters.ObjectFilter;
import com.intellego.parquearauco.security.filters.TextFilter;

public class ProjectTypeFilter  extends ObjectFilter{
	private static final long serialVersionUID = 1L;
	
	
	private NumericFilter id;
	private TextFilter name;
	private NumericFilter nodeType;

	private NumericFilter stageTypes ;
	private NumericFilter architectureProjects;
	private NumericFilter engineeringProjecs;
	private NumericFilter sucProjects;
	
	
	
	public ProjectTypeFilter(){ 
		
		this.id = new NumericFilter();
		this.id.setField("id");
		
		this.nodeType = new NumericFilter();
		this.nodeType.setField("nodeType");

		this.stageTypes = new NumericFilter();
		this.stageTypes.setField("stageTypes");

		this.architectureProjects = new NumericFilter();
		this.architectureProjects.setField("architectureProjects");

		this.engineeringProjecs = new NumericFilter();
		this.engineeringProjecs.setField("engineeringProjecs");

		this.sucProjects = new NumericFilter();
		this.sucProjects.setField("sucProjects");

		this.name = new TextFilter();
		this.name.setField("name");
		
	}

	public NumericFilter getId() {
		return id;
	}


	public void setId(NumericFilter id) {
		this.id = id;
	}


	public TextFilter getName() {
		return name;
	}


	public void setName(TextFilter name) {
		this.name = name;
	}


	public NumericFilter getNodeType() {
		return nodeType;
	}

	public void setNodeType(NumericFilter nodeType) {
		this.nodeType = nodeType;
	}

	public NumericFilter getStageTypes() {
		return stageTypes;
	}


	public void setStageTypes(NumericFilter stageTypes) {
		this.stageTypes = stageTypes;
	}


	public NumericFilter getArchitectureProjects() {
		return architectureProjects;
	}

	public void setArchitectureProjects(NumericFilter architectureProjects) {
		this.architectureProjects = architectureProjects;
	}

	public NumericFilter getEngineeringProjecs() {
		return engineeringProjecs;
	}


	public void setEngineeringProjecs(NumericFilter engineeringProjecs) {
		this.engineeringProjecs = engineeringProjecs;
	}



	public NumericFilter getSucProjects() {
		return sucProjects;
	}



	public void setSucProjects(NumericFilter sucProjects) {
		this.sucProjects = sucProjects;
	}



	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
	
}
