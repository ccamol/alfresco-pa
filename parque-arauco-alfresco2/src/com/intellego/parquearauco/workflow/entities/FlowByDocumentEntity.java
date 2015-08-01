package com.intellego.parquearauco.workflow.entities;

import java.io.Serializable;

import com.intellego.parquearauco.security.entities.BasicEntity;

public class FlowByDocumentEntity extends BasicEntity implements Serializable{

	private static final long serialVersionUID = 1L;

	private Integer id;
	private Integer idWorkFlow;
	private Integer idDocument;
	private String approvers;
	private boolean responsible;
	
	public FlowByDocumentEntity(){
		this.id=null;
		this.idWorkFlow=null;
		this.idDocument=null;
		this.approvers=new String();
		this.responsible=false;
	}
		
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getIdWorkFlow() {
		return idWorkFlow;
	}
	public void setIdWorkFlow(Integer idWorkFlow) {
		this.idWorkFlow = idWorkFlow;
	}
	public Integer getIdDocument() {
		return idDocument;
	}
	public void setIdDocument(Integer idDocument) {
		this.idDocument = idDocument;
	}
	public String getApprovers() {
		return approvers;
	}
	public void setApprovers(String approvers) {
		this.approvers = approvers;
	}
	public boolean getResponsible() {
		return responsible;
	}
	public void setResponsible(boolean responsible) {
		this.responsible = responsible;
	}
	
	
	
}
