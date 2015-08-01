package com.intellego.parquearauco.filters;


import com.intellego.parquearauco.security.filters.NumericFilter;
import com.intellego.parquearauco.security.filters.ObjectFilter;
import com.intellego.parquearauco.security.filters.TextFilter;

public class CountryFilter extends ObjectFilter {

	private static final long serialVersionUID = 1L;
	private NumericFilter id;
	private TextFilter  name;
	private TextFilter  countryCode;
	private NumericFilter mall;
	
	public CountryFilter(){
		this.id = new NumericFilter();
		this.id.setField("id");

		this.name = new TextFilter();
		this.name.setField("name");

		this.countryCode = new TextFilter();
		this.countryCode.setField("countryCode");

		this.mall = new NumericFilter();
		this.mall.setField("mall");
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
	public NumericFilter getMall() {
		return mall;
	}
	public void setMall(NumericFilter mall) {
		this.mall = mall;
	}



	public TextFilter getCountryCode() {
		return countryCode;
	}



	public void setCountryCode(TextFilter countryCode) {
		this.countryCode = countryCode;
	}
	
	
}
