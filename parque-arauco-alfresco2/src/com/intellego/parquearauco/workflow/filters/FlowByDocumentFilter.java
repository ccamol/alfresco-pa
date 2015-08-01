package com.intellego.parquearauco.workflow.filters;


import com.intellego.parquearauco.security.filters.NumericFilter;
import com.intellego.parquearauco.security.filters.ObjectFilter;
import com.intellego.parquearauco.security.filters.TextFilter;

public class FlowByDocumentFilter extends ObjectFilter {

	private static final long serialVersionUID = 1L;
	private NumericFilter id;
	private NumericFilter idWorkFlow;
	private NumericFilter idDocument;
	private TextFilter approvers;
	
	public FlowByDocumentFilter(){
		this.id = new NumericFilter();
		this.id.setField("id");

		this.idWorkFlow = new NumericFilter();
		this.idWorkFlow.setField("idWorkFlow");
		
		this.idDocument = new NumericFilter();
		this.idDocument.setField("idDocument");
		
		this.approvers = new TextFilter();
		this.approvers.setField("approvers");
	}

	public NumericFilter getId() {
		return id;
	}

	public void setId(NumericFilter id) {
		this.id = id;
	}

	public NumericFilter getIdWorkFlow() {
		return idWorkFlow;
	}

	public void setIdWorkFlow(NumericFilter idWorkFlow) {
		this.idWorkFlow = idWorkFlow;
	}

	public NumericFilter getIdDocument() {
		return idDocument;
	}

	public void setIdDocument(NumericFilter idDocument) {
		this.idDocument = idDocument;
	}

	public TextFilter getApprovers() {
		return approvers;
	}

	public void setApprovers(TextFilter approvers) {
		this.approvers = approvers;
	}
}
