package com.intellego.parquearauco.filters;

import com.intellego.parquearauco.security.filters.NumericFilter;
import com.intellego.parquearauco.security.filters.ObjectFilter;

public class ApplicantTenderFilter extends ObjectFilter {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private NumericFilter id;
	private NumericFilter tender;
	private NumericFilter applicant;
	
	public ApplicantTenderFilter(){
		this.id = new NumericFilter();
		this.id.setField("id");

		this.tender = new NumericFilter();
		this.tender.setField("tender");
		
		this.applicant = new NumericFilter();
		this.applicant.setField("applicant");

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

	public NumericFilter getApplicant() {
		return applicant;
	}

	public void setApplicant(NumericFilter applicant) {
		this.applicant = applicant;
	}



	
}
