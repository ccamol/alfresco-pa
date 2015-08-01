package com.intellego.parquearauco.security.filters;

public class RolFuncionalityFilter extends ObjectFilter{

	private static final long serialVersionUID = 1L;
	private NumericFilter id;
	private NumericFilter rol;
	private NumericFilter funcionality;

	public RolFuncionalityFilter(){
		this.id = new NumericFilter();
		this.id.setField("id");

		this.rol = new NumericFilter();
		this.rol.setField("rol");

		this.funcionality = new NumericFilter();
		this.funcionality.setField("funcionality");
	}

	public NumericFilter getId() {
		return id;
	}

	public void setId(NumericFilter id) {
		this.id = id;
	}

	public NumericFilter getRol() {
		return rol;
	}

	public void setRol(NumericFilter rol) {
		this.rol = rol;
	}

	public NumericFilter getFuncionality() {
		return funcionality;
	}

	public void setFuncionality(NumericFilter funcionality) {
		this.funcionality = funcionality;
	}
}
