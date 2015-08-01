package com.intellego.parquearauco.filters;
import java.util.HashSet;
import java.util.Set;
import com.intellego.parquearauco.dto.DocumentType;
import com.intellego.parquearauco.dto.ProjectType;
import com.intellego.parquearauco.security.filters.NumericFilter;
import com.intellego.parquearauco.security.filters.ObjectFilter;
import com.intellego.parquearauco.security.filters.TextFilter;

public class StageTypeTenderFilter extends ObjectFilter {
	
	
	private NumericFilter id;
	private TextFilter name;
    private NumericFilter status;
	private NumericFilter projectTypes ;
	private NumericFilter documentTypes;
	
	
public StageTypeTenderFilter(){ 
		
		this.id = new NumericFilter();
		this.id.setField("id");

		this.name = new TextFilter();
		this.name.setField("name");
		
		this.status = new NumericFilter();
		this.status.setField("status");
		
		this.projectTypes = new NumericFilter();
		this.projectTypes.setField("projectTypes");
		
		this.documentTypes = new NumericFilter();
		this.documentTypes.setField("documentTypes");
		
	}


public NumericFilter getId() {
	return id;
}


public void setId(NumericFilter id) {
	this.id = id;
}


public TextFilter getName() {
	return name;
}


public void setName(TextFilter name) {
	this.name = name;
}


public NumericFilter getStatus() {
	return status;
}


public void setStatus(NumericFilter status) {
	this.status = status;
}


public NumericFilter getProjectTypes() {
	return projectTypes;
}


public void setProjectTypes(NumericFilter projectTypes) {
	this.projectTypes = projectTypes;
}


public NumericFilter getDocumentTypes() {
	return documentTypes;
}


public void setDocumentTypes(NumericFilter documentTypes) {
	this.documentTypes = documentTypes;
}

}
