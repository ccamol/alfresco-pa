package com.intellego.parquearauco.dto;

import java.util.Date;

public class DocumentWorkflow {

	private static final long serialVersionUID = 1L;

	private String id;
	private String title;
	private String description;
	private Date startDate;
	private Date endDate;
	private Boolean isActive;
	private String initiatorFirstName;
	private String initiatorLastName;

	public DocumentWorkflow() {
		super();
	}

	public DocumentWorkflow(String id, String title, String description,
			Date startDate, Date endDate, Boolean isActive,
			String initiatorFirstName, String initiatorLastName) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.startDate = startDate;
		this.endDate = endDate;
		this.setIsActive(isActive);
		this.initiatorFirstName = initiatorFirstName;
		this.initiatorLastName = initiatorLastName;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}



	public String getInitiatorFirstName() {
		return initiatorFirstName;
	}

	public void setInitiatorFirstName(String initiatorFirstName) {
		this.initiatorFirstName = initiatorFirstName;
	}

	public String getInitiatorLastName() {
		return initiatorLastName;
	}

	public void setInitiatorLastName(String initiatorLastName) {
		this.initiatorLastName = initiatorLastName;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public Boolean getIsActive() {
		return isActive;
	}

	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}

}
