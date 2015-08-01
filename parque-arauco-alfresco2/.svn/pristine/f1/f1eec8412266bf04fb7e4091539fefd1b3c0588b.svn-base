package com.intellego.parquearauco.security.filters;

public class NodeFilter extends ObjectFilter{

	private static final long serialVersionUID = 1L;

	private NumericFilter id;
	private TextFilter name;
	private NumericFilter parent;
	private NumericFilter nodeType;

	public NodeFilter(){
		this.id = new NumericFilter();
		this.id.setField("id");

		this.name = new TextFilter();
		this.name.setField("name");

		this.parent = new NumericFilter();
		this.parent.setField("parent");

		this.nodeType = new NumericFilter();
		this.nodeType.setField("nodetype");
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
	public NumericFilter getParent() {
		return parent;
	}
	public void setParent(NumericFilter parent) {
		this.parent = parent;
	}
	public NumericFilter getNodeType() {
		return nodeType;
	}
	public void setNodeType(NumericFilter nodeType) {
		this.nodeType = nodeType;
	}



}
