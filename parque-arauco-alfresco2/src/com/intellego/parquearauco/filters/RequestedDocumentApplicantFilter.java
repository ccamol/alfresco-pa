package com.intellego.parquearauco.filters;

import com.intellego.parquearauco.security.filters.DateFilter;
import com.intellego.parquearauco.security.filters.NumericFilter;
import com.intellego.parquearauco.security.filters.ObjectFilter;
import com.intellego.parquearauco.security.filters.TextFilter;

public class RequestedDocumentApplicantFilter extends ObjectFilter{

	private static final long serialVersionUID = 1L;
	private NumericFilter id;
	private NumericFilter documentToCarry;
	private TextFilter uuidDocument;
	private NumericFilter idTender;
	private TextFilter userTender;
	private  DateFilter fechaCarga;
	
	public RequestedDocumentApplicantFilter(){
		this.id = new NumericFilter();
		this.id.setField("id");
		
		this.uuidDocument = new TextFilter();
		this.uuidDocument.setField("uuidDocument");

		this.documentToCarry = new NumericFilter();
		this.documentToCarry.setField("documentToCarry");
		
		
		this.userTender = new TextFilter();
		this.userTender.setField("userTender");

		this.idTender = new NumericFilter();
		this.idTender.setField("idTender");

		this.fechaCarga = new DateFilter();
		this.fechaCarga.setField("fechaCarga");
	}

	public NumericFilter getId() {
		return id;
	}
	public void setId(NumericFilter id) {
		this.id = id;
	}
	
	
	public DateFilter getFechaCarga() {
		return fechaCarga;
	}

	public void setFechaCarga(DateFilter fechaCarga) {
		this.fechaCarga = fechaCarga;
	}

	public NumericFilter getIdTender() {
		return idTender;
	}

	public void setIdTender(NumericFilter idTender) {
		this.idTender = idTender;
	}

	public TextFilter getUserTender() {
		return userTender;
	}

	public void setUserTender(TextFilter userTender) {
		this.userTender = userTender;
	}

	public NumericFilter getDocumentToCarry() {
		return documentToCarry;
	}

	public void setDocumentToCarry(NumericFilter documentToCarry) {
		this.documentToCarry = documentToCarry;
	}

	public TextFilter getUuidDocument() {
		return uuidDocument;
	}
	public void setUuidDocument(TextFilter uuidDocument) {
		this.uuidDocument = uuidDocument;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
}
