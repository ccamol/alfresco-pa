package com.intellego.parquearauco.filters;

import com.intellego.parquearauco.security.filters.NumericFilter;
import com.intellego.parquearauco.security.filters.ObjectFilter;
import com.intellego.parquearauco.security.filters.TextFilter;

public class ContractFilter extends ObjectFilter{

	private static final long serialVersionUID = 1L;
	private NumericFilter id;
	private TextFilter name;
	private TextFilter sapCode;
	private NumericFilter sucEntity;
	
	public ContractFilter(){ 
		
		this.id = new NumericFilter();
		this.id.setField("id");

		this.name = new TextFilter();
		this.name.setField("name");

		this.sapCode = new TextFilter();
		this.sapCode.setField("sapCode");

		this.sucEntity = new NumericFilter();
		this.sucEntity.setField("sucEntity");


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
	public TextFilter getSapCode() {
		return sapCode;
	}
	public void setSapCode(TextFilter sapCode) {
		this.sapCode = sapCode;
	}
}
