package com.intellego.parquearauco.filters;

import com.intellego.parquearauco.security.filters.NumericFilter;
import com.intellego.parquearauco.security.filters.ObjectFilter;
import com.intellego.parquearauco.security.filters.TextFilter;

public class TenderStageFilter extends ObjectFilter{

	private static final long serialVersionUID = 1L;

	private NumericFilter id;
	private NumericFilter tender;
	private NumericFilter stageTypesTender;
	private NumericFilter idProjectType;
	private TextFilter initDate;
	private TextFilter endDate;
	private NumericFilter stageStatus;
	private NumericFilter questionsStatus;
	



	public TenderStageFilter(){ 
		
		
		this.id = new NumericFilter();
		this.id.setField("id");

		this.tender = new NumericFilter();
		this.tender.setField("tender");
		
		this.idProjectType = new NumericFilter();
		this.idProjectType.setField("idProjectType");
		
		this.initDate = new TextFilter();
		this.initDate.setField("initDate");
		
		this.endDate = new TextFilter();
		this.endDate.setField("endDate");
		
		this.stageTypesTender = new NumericFilter();
		this.stageTypesTender.setField("stageTypesTender");
		
		this.stageStatus = new NumericFilter();
		this.stageStatus.setField("stageStatus");
		
		this.questionsStatus = new NumericFilter();
		this.questionsStatus.setField("questionsStatus");
		
	}
	
	public NumericFilter getStageTypesTender() {
		return stageTypesTender;
	}

	public void setStageTypesTender(NumericFilter stageTypesTender) {
		this.stageTypesTender = stageTypesTender;
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


	public NumericFilter getIdProjectType() {
		return idProjectType;
	}


	public void setIdProjectType(NumericFilter idProjectType) {
		this.idProjectType = idProjectType;
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


	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	public NumericFilter getStageStatus() {
		return stageStatus;
	}


	public void setStageStatus(NumericFilter stageStatus) {
		this.stageStatus = stageStatus;
	}


	public NumericFilter getQuestionsStatus() {
		return questionsStatus;
	}


	public void setQuestionsStatus(NumericFilter questionsStatus) {
		this.questionsStatus = questionsStatus;
	}	
	
}
