package com.intellego.parquearauco.security.entities;

import java.io.Serializable;

public class RolFuncionalityEntity extends BasicEntity implements Serializable{

	private static final long serialVersionUID = 1L;

	private Integer id;
	private RolEntity rol;
	private FuncionalityEntity funcionality;
	private boolean value;
	
	public RolFuncionalityEntity(){
		this.id=null;
		this.rol=new RolEntity();
		this.funcionality=new FuncionalityEntity();
		this.value=false;
	}
	
	public RolFuncionalityEntity(Integer id, RolEntity rol, FuncionalityEntity funcionality, boolean value){
		this.id=id;
		this.rol=rol;
		this.funcionality=funcionality;
		this.value=value;
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public RolEntity getRol() {
		return rol;
	}
	public void setRol(RolEntity rol) {
		this.rol = rol;
	}
	public FuncionalityEntity getFuncionality() {
		return funcionality;
	}
	public void setFuncionality(FuncionalityEntity funcionality) {
		this.funcionality = funcionality;
	}
	public boolean getValue() {
		return value;
	}
	public void setValue(boolean value) {
		this.value = value;
	}
	
}
