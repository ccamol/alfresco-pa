package com.intellego.parquearauco.security.filters;

public class FuncionalityFilter extends ObjectFilter{

	private static final long serialVersionUID = 1L;
	private NumericFilter id;
	private TextFilter name;
	private NumericFilter nodeType;
	private NumericFilter area;
	
	public FuncionalityFilter(){
		this.id = new NumericFilter();
		this.id.setField("id");

		this.name = new TextFilter();
		this.name.setField("name");

		this.nodeType = new NumericFilter();
		this.nodeType.setField("nodeType");

		this.area = new NumericFilter();
		this.area.setField("area");
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
	public NumericFilter getNodeType() {
		return nodeType;
	}
	public void setNodeType(NumericFilter nodeType) {
		this.nodeType = nodeType;
	}

	public NumericFilter getArea() {
		return area;
	}

	public void setArea(NumericFilter area) {
		this.area = area;
	}
}
