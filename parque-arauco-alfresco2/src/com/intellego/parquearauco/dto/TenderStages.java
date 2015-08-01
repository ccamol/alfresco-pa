package com.intellego.parquearauco.dto;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import com.intellego.parquearauco.security.annotations.Dto;
import com.intellego.parquearauco.security.dto.Basic;

@Dto(entity = "com.intellego.parquearauco.entities.TenderStagesEntity")
public class TenderStages extends Basic{

	private static final long serialVersionUID = 1L;
	
	private Tender tender;
	private Integer idProjectType;
	private StageTypeTender stageTypesTender;
	private Date initDate;
	private Date endDate;
	private Integer stageStatus;
	private Integer questionsStatus;


	public Integer getQuestionsStatus() {
		return questionsStatus;
	}
	public void setQuestionsStatus(Integer questionsStatus) {
		this.questionsStatus = questionsStatus;
	}
	public Integer getStageStatus() {
		return stageStatus;
	}
	public void setStageStatus(Integer stageStatus) {
		this.stageStatus = stageStatus;
	}
	public TenderStages() {
	}
	public Tender getTender() {
		return tender;
	}
	public void setTender(Tender tender) {
		this.tender = tender;
	}
	public Integer getIdProjectType() {
		return idProjectType;
	}
	public void setIdProjectType(Integer idProjectType) {
		this.idProjectType = idProjectType;
	}


	public StageTypeTender getStageTypesTender() {
		return stageTypesTender;
	}
	public void setStageTypesTender(StageTypeTender stageTypesTender) {
		this.stageTypesTender = stageTypesTender;
	}
	public Date getInitDate() {
		return initDate;
	}
	public void setInitDate(Date initDate) {
		this.initDate = initDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
}
