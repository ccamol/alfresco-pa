package com.intellego.parquearauco.filters;

import com.intellego.parquearauco.security.filters.NumericFilter;
import com.intellego.parquearauco.security.filters.ObjectFilter;
import com.intellego.parquearauco.security.filters.TextFilter;

public class QuestionFilter extends ObjectFilter {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	/**
	 * 
	 */
	
	
	private TextFilter topicTitle;
	private NumericFilter category;
	private NumericFilter tender;
	private TextFilter author;
	private TextFilter question;
	private TextFilter description;
	private NumericFilter status;
	private NumericFilter publicationStatus;
	private TextFilter questionDate;
	
	public QuestionFilter(){
		
		this.topicTitle = new TextFilter();
		this.topicTitle.setField("topicTitle");
		
		this.category = new NumericFilter();
		this.category.setField("category");
		
		this.tender = new NumericFilter();
		this.tender.setField("tender");

		this.author = new TextFilter();
		this.author.setField("author");
		
		this.question = new TextFilter();
		this.question.setField("question");

		this.description = new TextFilter();
		this.description.setField("description");
		
		this.status = new NumericFilter();
		this.status.setField("status");
		
		this.publicationStatus = new NumericFilter();
		this.publicationStatus.setField("publicationStatus");

		this.questionDate = new TextFilter();
		this.questionDate.setField("questionDate");
	}

	public TextFilter getTopicTitle() {
		return topicTitle;
	}

	public void setTopicTitle(TextFilter topicTitle) {
		this.topicTitle = topicTitle;
	}

	public NumericFilter getCategory() {
		return category;
	}

	public void setCategory(NumericFilter category) {
		this.category = category;
	}

	public NumericFilter getTender() {
		return tender;
	}

	public void setTender(NumericFilter tender) {
		this.tender = tender;
	}

	public TextFilter getAuthor() {
		return author;
	}

	public void setAuthor(TextFilter author) {
		this.author = author;
	}

	public TextFilter getQuestion() {
		return question;
	}

	public void setQuestion(TextFilter question) {
		this.question = question;
	}

	public TextFilter getDescription() {
		return description;
	}

	public void setDescription(TextFilter description) {
		this.description = description;
	}

	public NumericFilter getStatus() {
		return status;
	}

	public void setStatus(NumericFilter status) {
		this.status = status;
	}

	public NumericFilter getPublicationStatus() {
		return publicationStatus;
	}

	public void setPublicationStatus(NumericFilter publicationStatus) {
		this.publicationStatus = publicationStatus;
	}

	public TextFilter getQuestionDate() {
		return questionDate;
	}

	public void setQuestionDate(TextFilter questionDate) {
		this.questionDate = questionDate;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
}
