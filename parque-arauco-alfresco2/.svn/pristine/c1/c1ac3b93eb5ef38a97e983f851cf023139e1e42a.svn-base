package com.intellego.parquearauco.filters;

import com.intellego.parquearauco.security.filters.NumericFilter;
import com.intellego.parquearauco.security.filters.ObjectFilter;
import com.intellego.parquearauco.security.filters.TextFilter;

public class AwardApplicantTenderFilter extends ObjectFilter {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private NumericFilter id;
	private NumericFilter tender;
	private TextFilter userName;
	private TextFilter awardDate;
	
	public AwardApplicantTenderFilter(){
		this.id = new NumericFilter();
		this.id.setField("id");

		this.tender = new NumericFilter();
		this.tender.setField("tender");
		
		this.userName = new TextFilter();
		this.userName.setField("userName");
		
		this.awardDate = new TextFilter();
		this.awardDate.setField("awardDate");
	}

	public TextFilter getUserName() {
		return userName;
	}

	public void setUserName(TextFilter userName) {
		this.userName = userName;
	}

	public TextFilter getAwardDate() {
		return awardDate;
	}

	public void setAwardDate(TextFilter awardDate) {
		this.awardDate = awardDate;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public NumericFilter getId() {
		return id;
	}

	public void setId(NumericFilter id) {
		this.id = id;
	}

	public NumericFilter getTender() {
		return tender;
	}

	public void setTender(NumericFilter tender) {
		this.tender = tender;
	}
}
