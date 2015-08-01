package com.intellego.parquearauco.filters;

import java.util.Date;

import com.intellego.parquearauco.security.filters.NumericFilter;
import com.intellego.parquearauco.security.filters.ObjectFilter;
import com.intellego.parquearauco.security.filters.TextFilter;

public class DocumentsToCarryFilter extends ObjectFilter{

	private static final long serialVersionUID = 1L;

	private NumericFilter id;
	private NumericFilter tender;
	private TextFilter uuid;
	private TextFilter name;
	private TextFilter format;
	private TextFilter description;
	private NumericFilter type;
	private TextFilter documentType;
	private TextFilter createdDate;

	public DocumentsToCarryFilter(){ 
		
		this.id = new NumericFilter();
		this.id.setField("id");

		this.type = new NumericFilter();
		this.type.setField("type");
		
		this.tender = new NumericFilter();
		this.tender.setField("tender");
		
		this.uuid = new TextFilter();
		this.uuid.setField("uuid");
		
		this.documentType = new TextFilter();
		this.documentType.setField("documentType");
		
		this.createdDate = new TextFilter();
		this.createdDate.setField("createdDate");
		
		this.name = new TextFilter();
		this.name.setField("name");

		this.format = new TextFilter();
		this.format.setField("format");
		
		this.description = new TextFilter();
		this.description.setField("description");
		
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
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public TextFilter getUuid() {
		return uuid;
	}
	public void setUuid(TextFilter uuid) {
		this.uuid = uuid;
	}
	public TextFilter getName() {
		return name;
	}
	public void setName(TextFilter name) {
		this.name = name;
	}

	public TextFilter getFormat() {
		return format;
	}

	public void setFormat(TextFilter format) {
		this.format = format;
	}

	public TextFilter getDescription() {
		return description;
	}

	public void setDescription(TextFilter description) {
		this.description = description;
	}

	public NumericFilter getType() {
		return type;
	}

	public TextFilter getDocumentType() {
		return documentType;
	}

	public void setDocumentType(TextFilter documentType) {
		this.documentType = documentType;
	}

	public TextFilter getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(TextFilter createdDate) {
		this.createdDate = createdDate;
	}

	public void setType(NumericFilter type) {
		this.type = type;
	}
	
}
