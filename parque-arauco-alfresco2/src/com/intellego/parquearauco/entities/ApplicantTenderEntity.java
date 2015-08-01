package com.intellego.parquearauco.entities;

import com.intellego.parquearauco.security.entities.BasicEntity;

public class ApplicantTenderEntity extends BasicEntity {

	private Integer id;
	private TenderEntity tender;
	private ApplicantEntity applicant;

	public ApplicantTenderEntity() {
	}

	public ApplicantTenderEntity(Integer id, TenderEntity tender, ApplicantEntity applicant) {
		super();
		this.id = id;
		this.tender = tender;
		this.applicant = applicant;
	}


	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public TenderEntity getTender() {
		return tender;
	}

	public void setTender(TenderEntity tender) {
		this.tender = tender;
	}

	public ApplicantEntity getApplicant() {
		return applicant;
	}

	public void setApplicant(ApplicantEntity applicant) {
		this.applicant = applicant;
	}

}
