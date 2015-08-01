package com.intellego.parquearauco.baseprocessorextension;

import com.intellego.parquearauco.dto.SucProject;
import com.intellego.parquearauco.security.interfaces.EntityManager;

public class SucProjects extends EntityManager<SucProject>{

	public SucProjects(){
		super(SucProject.class);
	}
	
}
