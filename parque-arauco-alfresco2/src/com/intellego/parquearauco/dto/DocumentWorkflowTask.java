package com.intellego.parquearauco.dto;

import java.util.Date;

public class DocumentWorkflowTask {

	private static final long serialVersionUID = 1L;

	private String id;
	private String title;
	private String state;
	private Date created;
	private Date completionDate;
	private String owner;
	private String comment;

	public DocumentWorkflowTask() {
		super();
	}

	public DocumentWorkflowTask(String id, String title, String state, Date created,
			Date completionDate, String owner, String comment) {
		super();
		this.id = id;
		this.title = title;
		this.state = state;
		this.created = created;
		this.completionDate = completionDate;
		this.owner = owner;
		this.comment = comment;
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

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public Date getCreated() {
		return created;
	}

	public void setCreated(Date created) {
		this.created = created;
	}

	public Date getCompletionDate() {
		return completionDate;
	}

	public void setCompletionDate(Date completionDate) {
		this.completionDate = completionDate;
	}

	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
