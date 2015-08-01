package com.intellego.parquearauco.filters;

import com.intellego.parquearauco.security.filters.NumericFilter;
import com.intellego.parquearauco.security.filters.ObjectFilter;
import com.intellego.parquearauco.security.filters.TextFilter;

public class TenderFilter extends ObjectFilter{

	private static final long serialVersionUID = 1L;

	private NumericFilter id;
	private TextFilter projectId;
	private NumericFilter projectNodeType;
	private TextFilter name;
	private TextFilter initDate;
	private TextFilter endDate;
	private NumericFilter organizationalArea;
	private NumericFilter projectType;
	private NumericFilter applicantTender;
	private NumericFilter awardStatus;
	private TextFilter awardApplicant;
	private NumericFilter participant;
	
	



	public TenderFilter(){ 
		
		
		this.id = new NumericFilter();
		this.id.setField("id");

		this.projectId = new TextFilter();
		this.projectId.setField("projectId");
		
		this.projectNodeType = new NumericFilter();
		this.projectNodeType.setField("projectNodeType");
		
		this.name = new TextFilter();
		this.name.setField("name");
		
		this.initDate = new TextFilter();
		this.initDate.setField("initDate");
		
		this.endDate = new TextFilter();
		this.endDate.setField("endDate");
		
		this.organizationalArea = new NumericFilter();
		this.organizationalArea.setField("organizationalArea");
		
		this.participant = new NumericFilter();
		this.participant.setField("participant");
		
		
		
		this.projectType = new NumericFilter();
		this.projectType.setField("projectType");
		
		this.applicantTender = new NumericFilter();
		this.applicantTender.setField("applicantTender");
		
		this.awardStatus = new NumericFilter();
		this.awardStatus.setField("awardStatus");
		
		this.awardApplicant = new TextFilter();
		this.awardApplicant.setField("awardApplicant");
		
	}





	public NumericFilter getId() {
		return id;
	}

	public void setId(NumericFilter id) {
		this.id = id;
	}

	public TextFilter getProjectId() {
		return projectId;
	}
	
	public void setProjectId(TextFilter projectId) {
		this.projectId = projectId;
	}

	public NumericFilter getProjectNodeType() {
		return projectNodeType;
	}

	public void setProjectNodeType(NumericFilter projectNodeType) {
		this.projectNodeType = projectNodeType;
	}

	public TextFilter getName() {
		return name;
	}

	public void setName(TextFilter name) {
		this.name = name;
	}

	public TextFilter getInitDate() {
		return initDate;
	}

	public void setInitDate(TextFilter initDate) {
		this.initDate = initDate;
	}

	public TextFilter getEndDate() {
		return endDate;
	}

	public void setEndDate(TextFilter endDate) {
		this.endDate = endDate;
	}

	public NumericFilter getOrganizationalArea() {
		return organizationalArea;
	}

	public void setOrganizationalArea(NumericFilter organizationalArea) {
		this.organizationalArea = organizationalArea;
	}

	public NumericFilter getProjectType() {
		return projectType;
	}

	public void setProjectType(NumericFilter projectType) {
		this.projectType = projectType;
	}

	public NumericFilter getApplicantTender() {
		return applicantTender;
	}

	public void setApplicantTender(NumericFilter applicantTender) {
		this.applicantTender = applicantTender;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public NumericFilter getAwardStatus() {
		return awardStatus;
	}

	public void setAwardStatus(NumericFilter awardStatus) {
		this.awardStatus = awardStatus;
	}

	public TextFilter getAwardApplicant() {
		return awardApplicant;
	}

	public void setAwardApplicant(TextFilter awardApplicant) {
		this.awardApplicant = awardApplicant;
	}
	public NumericFilter getParticipant() {
		return participant;
	}
	public void setParticipant(NumericFilter participant) {
		this.participant = participant;
	}
	
	
}
