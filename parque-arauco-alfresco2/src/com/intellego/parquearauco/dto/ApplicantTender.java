package com.intellego.parquearauco.dto;

import com.intellego.parquearauco.security.annotations.Dto;
import com.intellego.parquearauco.security.dto.Basic;

@Dto(entity = "com.intellego.parquearauco.entities.ApplicantTenderEntity")
public class ApplicantTender extends Basic {

	private static final long serialVersionUID = 1L;

	private Integer id;
	private Tender tender;
	private Applicant applicant;


	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Tender getTender() {
		return tender;
	}

	public void setTender(Tender tender) {
		this.tender = tender;
	}

	public Applicant getApplicant() {
		return applicant;
	}

	public void setApplicant(Applicant applicant) {
		this.applicant = applicant;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
