package com.intellego.parquearauco.security.filters;


public class AclFilter extends ObjectFilter{

	private static final long serialVersionUID = 1L;
	private NumericFilter id;
	private NumericFilter nodeType;
	private NumericFilter nodeId;
	private NumericFilter rol;
	private TextFilter username;
	
	public AclFilter(){
		this.id = new NumericFilter();
		this.id.setField("id");

		this.nodeType = new NumericFilter();
		this.nodeType.setField("nodeType");

		this.nodeId = new NumericFilter();
		this.nodeId.setField("nodeId");

		this.rol = new NumericFilter();
		this.rol.setField("rol");

		this.username = new TextFilter();
		this.username.setField("username");
	}

	public NumericFilter getId() {
		return id;
	}

	public void setId(NumericFilter id) {
		this.id = id;
	}

	public NumericFilter getNodeType() {
		return nodeType;
	}

	public void setNodeType(NumericFilter nodeType) {
		this.nodeType = nodeType;
	}

	public NumericFilter getNodeId() {
		return nodeId;
	}

	public void setNodeId(NumericFilter nodeId) {
		this.nodeId = nodeId;
	}

	public NumericFilter getRol() {
		return rol;
	}

	public void setRol(NumericFilter rol) {
		this.rol = rol;
	}

	public TextFilter getUsername() {
		return username;
	}

	public void setUsername(TextFilter username) {
		this.username = username;
	}
	
	
}
