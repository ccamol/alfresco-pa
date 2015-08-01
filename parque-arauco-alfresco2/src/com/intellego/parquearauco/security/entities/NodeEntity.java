package com.intellego.parquearauco.security.entities;

import java.io.Serializable;

public class NodeEntity extends BasicEntity implements Serializable{

	private static final long serialVersionUID = 1L;

	private Integer id;
	private Integer parent;
	private String name;
	private Integer nodeType;
	
	public NodeEntity(){
		this.id=null;
		this.parent=null;
		this.name=new String();
		this.nodeType=null;
	}
	
	public NodeEntity(Integer id, Integer parent, String name, Integer nodeType){
		this.id=id;
		this.parent=parent;
		this.name=name;
		this.nodeType=nodeType;
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getParent() {
		return parent;
	}
	public void setParent(Integer parent) {
		this.parent = parent;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getNodeType() {
		return nodeType;
	}
	public void setNodeType(Integer nodeType) {
		this.nodeType = nodeType;
	}
	
}
