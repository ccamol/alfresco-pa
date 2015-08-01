package com.intellego.parquearauco.filters;

import com.intellego.parquearauco.security.filters.NumericFilter;
import com.intellego.parquearauco.security.filters.ObjectFilter;
import com.intellego.parquearauco.security.filters.TextFilter;

public class AnswerFilter extends ObjectFilter {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private NumericFilter id;
	private NumericFilter question;
	private TextFilter author;
	private TextFilter answer;
	private TextFilter answerDate;
	
	public AnswerFilter(){
		this.id = new NumericFilter();
		this.id.setField("id");
		
		this.question = new NumericFilter();
		this.question.setField("question");

		this.author = new TextFilter();
		this.author.setField("author");
		
		this.answer = new TextFilter();
		this.answer.setField("answer");
		
		this.answerDate = new TextFilter();
		this.answerDate.setField("answerDate");
		
	}

	public NumericFilter getId() {
		return id;
	}

	public void setId(NumericFilter id) {
		this.id = id;
	}

	public NumericFilter getQuestion() {
		return question;
	}

	public void setQuestion(NumericFilter question) {
		this.question = question;
	}

	public TextFilter getAuthor() {
		return author;
	}

	public void setAuthor(TextFilter author) {
		this.author = author;
	}

	public TextFilter getAnswer() {
		return answer;
	}

	public void setAnswer(TextFilter answer) {
		this.answer = answer;
	}
	

	public TextFilter getAnswerDate() {
		return answerDate;
	}

	public void setAnswerDate(TextFilter answerDate) {
		this.answerDate = answerDate;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
