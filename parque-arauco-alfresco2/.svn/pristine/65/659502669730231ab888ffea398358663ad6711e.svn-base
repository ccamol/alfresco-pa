package com.intellego.parquearauco.filters;

import com.intellego.parquearauco.security.filters.NumericFilter;
import com.intellego.parquearauco.security.filters.ObjectFilter;
import com.intellego.parquearauco.security.filters.TextFilter;

public class ApplicantFilter extends ObjectFilter {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private NumericFilter id;
	private NumericFilter identificationNumber;
	private TextFilter name;
	private NumericFilter country;
	private NumericFilter mall;
	private TextFilter mail;
	private TextFilter additionalInfo;
	
	public ApplicantFilter(){
		this.id = new NumericFilter();
		this.id.setField("id");
		
		this.identificationNumber = new NumericFilter();
		this.identificationNumber.setField("identificationNumber");

		this.name = new TextFilter();
		this.name.setField("name");
		
		this.country = new NumericFilter();
		this.country.setField("country");
		
		this.mall = new NumericFilter();
		this.mall.setField("mall");

		this.mail = new TextFilter();
		this.mail.setField("mail");
		
		this.additionalInfo = new TextFilter();
		this.additionalInfo.setField("additionalInfo");
		
		
	}

	public NumericFilter getIdentificationNumber() {
		return identificationNumber;
	}

	public void setIdentificationNumber(NumericFilter identificationNumber) {
		this.identificationNumber = identificationNumber;
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


	public NumericFilter getCountry() {
		return country;
	}


	public void setCountry(NumericFilter country) {
		this.country = country;
	}


	public NumericFilter getMall() {
		return mall;
	}


	public void setMall(NumericFilter mall) {
		this.mall = mall;
	}


	public TextFilter getMail() {
		return mail;
	}


	public void setMail(TextFilter mail) {
		this.mail = mail;
	}


	public TextFilter getAdditionalInfo() {
		return additionalInfo;
	}


	public void setAdditionalInfo(TextFilter additionalInfo) {
		this.additionalInfo = additionalInfo;
	}

	
}
