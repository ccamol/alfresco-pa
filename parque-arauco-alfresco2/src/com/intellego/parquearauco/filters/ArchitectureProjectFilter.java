package com.intellego.parquearauco.filters;

import java.util.Date;

import com.intellego.parquearauco.dto.Mall;
import com.intellego.parquearauco.dto.Operator;
import com.intellego.parquearauco.dto.ProjectStatus;
import com.intellego.parquearauco.dto.ProjectType;
import com.intellego.parquearauco.security.filters.DateFilter;
import com.intellego.parquearauco.security.filters.NumericFilter;
import com.intellego.parquearauco.security.filters.ObjectFilter;
import com.intellego.parquearauco.security.filters.TextFilter;

public class ArchitectureProjectFilter extends ObjectFilter {

	private NumericFilter id;
	private TextFilter name;
	private DateFilter finishDate;
	private DateFilter createDate;
	private NumericFilter mall;
	private NumericFilter operator;
	private NumericFilter projectType;
	private NumericFilter projectStatusEntity;
	private TextFilter description;
	
	public ArchitectureProjectFilter(){
		this.id = new NumericFilter();
		this.id.setField("id");

		this.name = new TextFilter();
		this.name.setField("name");
		
		this.finishDate = new DateFilter();
		this.finishDate.setField("finishDate");

		this.createDate = new DateFilter();
		this.createDate.setField("createDate");

		this.description = new TextFilter();
		this.description.setField("description");
		
		this.mall = new NumericFilter();
		this.mall.setField("mall");
		
		this.operator = new NumericFilter();
		this.operator.setField("operator");
		
		this.projectType = new NumericFilter();
		this.projectType.setField("projectType");

		this.projectStatusEntity = new NumericFilter();
		this.projectStatusEntity.setField("projectStatusEntity");
		
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
	public DateFilter getFinishDate() {
		return finishDate;
	}
	public void setFinishDate(DateFilter finishDate) {
		this.finishDate = finishDate;
	}
	public NumericFilter getMall() {
		return mall;
	}
	public void setMall(NumericFilter mall) {
		this.mall = mall;
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


	public DateFilter getCreateDate() {
		return createDate;
	}


	public void setCreateDate(DateFilter createDate) {
		this.createDate = createDate;
	}
	
}
