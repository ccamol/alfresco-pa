package com.intellego.parquearauco.filters;

import com.intellego.parquearauco.security.filters.NumericFilter;
import com.intellego.parquearauco.security.filters.ObjectFilter;
import com.intellego.parquearauco.security.filters.TextFilter;

public class SucProjectFilter extends ObjectFilter{

	private static final long serialVersionUID = 1L;
	private NumericFilter id;
	private TextFilter name;
	private NumericFilter sucEntity;
	private NumericFilter operator;
	private NumericFilter projectType;
	private NumericFilter projectStatusEntity;
	private TextFilter description;
	
	public SucProjectFilter(){ 
		
		this.id = new NumericFilter();
		this.id.setField("id");

		this.name = new TextFilter();
		this.name.setField("name");
		
		this.sucEntity = new NumericFilter();
		this.sucEntity.setField("sucEntity");

		this.operator = new NumericFilter();
		this.operator.setField("operator");

		this.projectType = new NumericFilter();
		this.projectType.setField("projectType");

		this.projectStatusEntity = new NumericFilter();
		this.projectStatusEntity.setField("projectStatusEntity");
		
		

		this.description = new TextFilter();
		this.description.setField("description");

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
	public NumericFilter getSucEntity() {
		return sucEntity;
	}
	public void setSucEntity(NumericFilter sucEntity) {
		this.sucEntity = sucEntity;
	}
	public NumericFilter getOperator() {
		return operator;
	}
	public void setOperator(NumericFilter operator) {
		this.operator = operator;
	}
	public NumericFilter getProjectType() {
		return projectType;
	}
	public void setProjectType(NumericFilter projectType) {
		this.projectType = projectType;
	}
	
	public NumericFilter getProjectStatusEntity() {
		return projectStatusEntity;
	}
	public void setProjectStatusEntity(NumericFilter projectStatusEntity) {
		this.projectStatusEntity = projectStatusEntity;
	}
	public TextFilter getDescription() {
		return description;
	}
	public void setDescription(TextFilter description) {
		this.description = description;
	}
}
