package com.intellego.parquearauco.filters;

import com.intellego.parquearauco.security.filters.NumericFilter;
import com.intellego.parquearauco.security.filters.ObjectFilter;
import com.intellego.parquearauco.security.filters.TextFilter;

public class OperatorFilter  extends ObjectFilter {
	
	private static final long serialVersionUID = 1L;
	
	
	private NumericFilter id;
	private TextFilter name;
	private NumericFilter typeOperator;
	

public OperatorFilter(){ 
		this.id = new NumericFilter();
		this.id.setField("id");

		this.name = new TextFilter();
		this.name.setField("name");
		
		this.typeOperator = new NumericFilter();
		this.typeOperator.setField("typeOperator");
		
	}

	
public NumericFilter getTypeOperator() {
	return typeOperator;
}

public void setTypeOperator(NumericFilter typeOperator) {
	this.typeOperator = typeOperator;
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
