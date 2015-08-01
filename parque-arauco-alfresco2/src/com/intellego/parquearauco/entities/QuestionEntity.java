package com.intellego.parquearauco.entities;

import java.util.Date;

import com.intellego.parquearauco.security.entities.BasicEntity;

public class QuestionEntity extends BasicEntity {
	
	private Integer id;
	private String topicTitle;
	private CategoryEntity category;
	private TenderEntity tender;
	private String author;
	private String question;
	private String description;
	private Integer status;
	private Integer publicationStatus;
	private Date questionDate;

	public QuestionEntity() {
	}

	public QuestionEntity(Integer id, String topicTitle, CategoryEntity category,
			TenderEntity tender, String author, String question,
			String description, Integer status, Integer publicationStatus, Date questionDate) {
		super();
		
		this.id = id;
		this.topicTitle = topicTitle;
		this.category = category;
		this.tender = tender;
		this.author = author;
		this.question = question;
		this.description = description;
		this.status = status;
		this.publicationStatus = publicationStatus;
		this.questionDate = questionDate;
	}

	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTopicTitle() {
		return topicTitle;
	}

	public void setTopicTitle(String topicTitle) {
		this.topicTitle = topicTitle;
	}

	public CategoryEntity getCategory() {
		return category;
	}

	public void setCategory(CategoryEntity category) {
		this.category = category;
	}

	public TenderEntity getTender() {
		return tender;
	}

	public void setTender(TenderEntity tender) {
		this.tender = tender;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public Integer getPublicationStatus() {
		return publicationStatus;
	}

	public void setPublicationStatus(Integer publicationStatus) {
		this.publicationStatus = publicationStatus;
	}

	public Date getQuestionDate() {
		return questionDate;
	}

	public void setQuestionDate(Date questionDate) {
		this.questionDate = questionDate;
	}
	

}
