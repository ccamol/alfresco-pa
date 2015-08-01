package com.intellego.parquearauco.filters;

import com.intellego.parquearauco.security.filters.NumericFilter;
import com.intellego.parquearauco.security.filters.ObjectFilter;
import com.intellego.parquearauco.security.filters.TextFilter;

public class OrganizationalAreaFilter extends ObjectFilter{

private static final long serialVersionUID = 1L;
	
	
	private NumericFilter id;
	private TextFilter name;
	
	public OrganizationalAreaFilter(){ 
		this.id = new NumericFilter();
		this.id.setField("id");

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

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
}
