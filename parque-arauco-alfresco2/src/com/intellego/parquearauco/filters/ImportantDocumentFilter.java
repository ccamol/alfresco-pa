package com.intellego.parquearauco.filters;

import com.intellego.parquearauco.entities.NodeTypeEntity;
import com.intellego.parquearauco.security.filters.NumericFilter;
import com.intellego.parquearauco.security.filters.ObjectFilter;
import com.intellego.parquearauco.security.filters.TextFilter;

public class ImportantDocumentFilter extends ObjectFilter{
	
	private NumericFilter id;
	private NumericFilter idType;
	private NumericFilter nodeType;
	private TextFilter uuid;
	private TextFilter userAlfresco;

	
	public ImportantDocumentFilter(){
		this.id = new NumericFilter();
		this.id.setField("id");

		this.idType = new NumericFilter();
		this.idType.setField("idType");
		
		this.nodeType = new NumericFilter();
		this.nodeType.setField("nodeType");
		
		this.uuid = new TextFilter();
		this.uuid.setField("uuid");
		
		this.userAlfresco = new TextFilter();
		this.userAlfresco.setField("userAlfresco");
		
		
		
	}





	public TextFilter getUserAlfresco() {
		return userAlfresco;
	}





	public void setUserAlfresco(TextFilter userAlfresco) {
		this.userAlfresco = userAlfresco;
	}





	public NumericFilter getId() {
		return id;
	}



	public void setId(NumericFilter id) {
		this.id = id;
	}



	public NumericFilter getIdType() {
		return idType;
	}



	public void setIdType(NumericFilter idType) {
		this.idType = idType;
	}



	public NumericFilter getNodeType() {
		return nodeType;
	}



	public void setNodeType(NumericFilter nodeType) {
		this.nodeType = nodeType;
	}



	public TextFilter getUuid() {
		return uuid;
	}



	public void setUuid(TextFilter uuid) {
		this.uuid = uuid;
	}
	
	
	
	
	

}
