package com.intellego.parquearauco.entities;


import java.util.Date;

import com.intellego.parquearauco.security.entities.BasicEntity;

public class TenderStagesEntity extends BasicEntity{

	private Integer id;
	private TenderEntity tender;
	private Integer idProjectType;
	private StageTypeTenderEntity stageTypesTender;
	private Date initDate;
	private Date endDate;
	private Integer stageStatus;
	private Integer questionsStatus;


	public TenderStagesEntity() {
	}

	public TenderStagesEntity(Integer id, TenderEntity tender,
			Integer idProjectType,StageTypeTenderEntity stageTypesTender, 
			Date initDate, Date endDate, Integer stageStatus, Integer questionsStatus) {
		this.id = id;
		this.tender = tender;
		this.idProjectType = idProjectType;
		this.stageTypesTender = stageTypesTender;
		this.initDate = initDate;
		this.endDate = endDate;
		this.stageStatus = stageStatus;
		this.questionsStatus = questionsStatus;
		
	}

	
	public Integer getQuestionsStatus() {
		return questionsStatus;
	}

	public void setQuestionsStatus(Integer questionsStatus) {
		this.questionsStatus = questionsStatus;
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

	public Integer getIdProjectType() {
		return idProjectType;
	}

	public void setIdProjectType(Integer idProjectType) {
		this.idProjectType = idProjectType;
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

	public StageTypeTenderEntity getStageTypesTender() {
		return stageTypesTender;
	}

	public void setStageTypesTender(StageTypeTenderEntity stageTypesTender) {
		this.stageTypesTender = stageTypesTender;
	}

	public Integer getStageStatus() {
		return stageStatus;
	}

	public void setStageStatus(Integer stageStatus) {
		this.stageStatus = stageStatus;
	}



}
