package com.intellego.parquearauco.filters;

import com.intellego.parquearauco.entities.ArchitectureProjectEntity;
import com.intellego.parquearauco.security.filters.NumericFilter;
import com.intellego.parquearauco.security.filters.ObjectFilter;
import com.intellego.parquearauco.security.filters.TextFilter;

public class ThirdPartyProjectFilter  extends ObjectFilter{

	private static final long serialVersionUID = 1L;
	private NumericFilter id;
	private NumericFilter architectureProjectEntity;
	private TextFilter thirdPartyName;
	private TextFilter fullNameGroup;
	
	
	public ThirdPartyProjectFilter(){ 
		
		this.id = new NumericFilter();
		this.id.setField("id");
		
		this.architectureProjectEntity = new NumericFilter();
		this.architectureProjectEntity.setField("architectureProjectEntity");

		this.thirdPartyName = new TextFilter();
		this.thirdPartyName.setField("thirdPartyName");
		
		this.fullNameGroup = new TextFilter();
		this.fullNameGroup.setField("fullNameGroup");
	}

	public NumericFilter getId() {
		return id;
	}

	public void setId(NumericFilter id) {
		this.id = id;
	}

	public NumericFilter getArchitectureProjectEntity() {
		return architectureProjectEntity;
	}

	public void setArchitectureProjectEntity(NumericFilter architectureProjectEntity) {
		this.architectureProjectEntity = architectureProjectEntity;
	}

	public TextFilter getThirdPartyName() {
		return thirdPartyName;
	}

	public void setThirdPartyName(TextFilter thirdPartyName) {
		this.thirdPartyName = thirdPartyName;
	}

	public TextFilter getFullNameGroup() {
		return fullNameGroup;
	}

	public void setFullNameGroup(TextFilter fullNameGroup) {
		this.fullNameGroup = fullNameGroup;
	}
	
	
	
	
}
