package com.intellego.parquearauco.filters;


import com.intellego.parquearauco.security.filters.NumericFilter;
import com.intellego.parquearauco.security.filters.ObjectFilter;
import com.intellego.parquearauco.security.filters.TextFilter;

public class ThirdPartySharedDocumentFilter extends ObjectFilter{

	private static final long serialVersionUID = 1L;
	
	private NumericFilter id;
	private TextFilter uuidDocument;
	private TextFilter thirdPartyName;
	private NumericFilter architectureProject;
	private NumericFilter projectStages;
	private TextFilter sharedDate;
	
	
	public ThirdPartySharedDocumentFilter(){ 
		
		this.id = new NumericFilter();
		this.id.setField("id");
		
		this.uuidDocument = new TextFilter();
		this.uuidDocument.setField("uuidDocument");

		
		this.thirdPartyName = new TextFilter();
		this.thirdPartyName.setField("thirdPartyName");
	
		this.architectureProject = new NumericFilter();
		this.architectureProject.setField("architectureProject");
		
		this.projectStages = new NumericFilter();
		this.projectStages.setField("projectStages");
		
		this.sharedDate = new TextFilter();
		this.sharedDate.setField("sharedDate");
	}
	
	public TextFilter getSharedDate() {
		return sharedDate;
	}
	public void setSharedDate(TextFilter sharedDate) {
		this.sharedDate = sharedDate;
	}
	public NumericFilter getId() {
		return id;
	}
	public void setId(NumericFilter id) {
		this.id = id;
	}
	public TextFilter getUuidDocument() {
		return uuidDocument;
	}
	public void setUuidDocument(TextFilter uuidDocument) {
		this.uuidDocument = uuidDocument;
	}
	public TextFilter getThirdPartyName() {
		return thirdPartyName;
	}
	public void setThirdPartyName(TextFilter thirdPartyName) {
		this.thirdPartyName = thirdPartyName;
	}
	public NumericFilter getArchitectureProject() {
		return architectureProject;
	}
	public void setArchitectureProject(NumericFilter architectureProject) {
		this.architectureProject = architectureProject;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public NumericFilter getProjectStages() {
		return projectStages;
	}
	public void setProjectStages(NumericFilter projectStages) {
		this.projectStages = projectStages;
	}
}
