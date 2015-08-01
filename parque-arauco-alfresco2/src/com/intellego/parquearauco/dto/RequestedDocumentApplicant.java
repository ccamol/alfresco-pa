package com.intellego.parquearauco.dto;
import java.util.Date;

import com.intellego.parquearauco.security.annotations.Dto;
import com.intellego.parquearauco.security.dto.Basic;
@Dto(entity = "com.intellego.parquearauco.entities.RequestedDocumentApplicantEntity")
public class RequestedDocumentApplicant extends Basic {
	private static final long serialVersionUID = 1L;
	private Integer id;
	private DocumentsToCarry documentToCarry;
	private String uuidDocument;
	private String userTender;
	private Integer idTender;
	private Date fechaCarga;


	public RequestedDocumentApplicant(){
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}

	public Date getFechaCarga() {
		return fechaCarga;
	}
	public void setFechaCarga(Date fechaCarga) {
		this.fechaCarga = fechaCarga;
	}
	public String getUserTender() {
		return userTender;
	}
	public void setUserTender(String userTender) {
		this.userTender = userTender;
	}
	public Integer getIdTender() {
		return idTender;
	}
	public void setIdTender(Integer idTender) {
		this.idTender = idTender;
	}
	public DocumentsToCarry getDocumentToCarry() {
		return documentToCarry;
	}
	public void setDocumentToCarry(DocumentsToCarry documentToCarry) {
		this.documentToCarry = documentToCarry;
	}
	public String getUuidDocument() {
		return uuidDocument;
	}
	public void setUuidDocument(String uuidDocument) {
		this.uuidDocument = uuidDocument;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
}
