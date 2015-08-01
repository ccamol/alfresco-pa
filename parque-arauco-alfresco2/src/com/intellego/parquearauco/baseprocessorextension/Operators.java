package com.intellego.parquearauco.baseprocessorextension;

import com.intellego.parquearauco.dto.Operator;
import com.intellego.parquearauco.security.interfaces.EntityManager;

public class Operators extends EntityManager<Operator>{

	public Operators(){
		super(Operator.class);
	}
	
}
