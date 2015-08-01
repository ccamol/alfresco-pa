package com.intellego.parquearauco.filters;

import com.intellego.parquearauco.entities.TenderEntity;
import com.intellego.parquearauco.security.filters.NumericFilter;
import com.intellego.parquearauco.security.filters.ObjectFilter;
import com.intellego.parquearauco.security.filters.TextFilter;

public class CategoryFilter extends ObjectFilter {
	private static final long serialVersionUID = 1L;
	private NumericFilter id;
	private TextFilter name;
	private TextFilter description;
	private TextFilter categoryType;
	
	public CategoryFilter(){
		this.id = new NumericFilter();
		this.id.setField("id");

		this.name = new TextFilter();
		this.name.setField("name");

		this.description = new TextFilter();
		this.description.setField("description");

		this.categoryType = new TextFilter();
		this.categoryType.setField("categoryType");
		
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
	public TextFilter getDescription() {
		return description;
	}
	public void setDescription(TextFilter description) {
		this.description = description;
	}
	public TextFilter getCategoryType() {
		return categoryType;
	}
	public void setCategoryType(TextFilter categoryType) {
		this.categoryType = categoryType;
	}
}
