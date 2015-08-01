package com.intellego.parquearauco.security.filters;

public class RolFilter extends ObjectFilter{

	private static final long serialVersionUID = 1L;

	private NumericFilter id;
	private TextFilter name;
	private TextFilter documentalRol;
	private TextFilter description;


	public RolFilter(){
		this.id = new NumericFilter();
		this.id.setField("id");

		this.name = new TextFilter();
		this.name.setField("name");

		this.documentalRol = new TextFilter();
		this.documentalRol.setField("documentalRol");

		this.description = new TextFilter();
		this.description.setField("description");
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
	public TextFilter getDocumentalRol() {
		return documentalRol;
	}
	public void setDocumentalRol(TextFilter documentalRol) {
		this.documentalRol = documentalRol;
	}



	public TextFilter getDescription() {
		return description;
	}



	public void setDescription(TextFilter description) {
		this.description = description;
	}
}
