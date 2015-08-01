package com.intellego.parquearauco.baseprocessorextension;

import com.intellego.parquearauco.dto.ProjectType;
import com.intellego.parquearauco.security.interfaces.EntityManager;

public class ProjectTypes extends EntityManager<ProjectType>{

	public ProjectTypes(){
		super(ProjectType.class);
	}
	
}
