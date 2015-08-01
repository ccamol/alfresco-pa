package com.intellego.parquearauco.baseprocessorextension;

import com.intellego.parquearauco.dto.ProjectStatus;
import com.intellego.parquearauco.security.interfaces.EntityManager;

public class ProjectsStatus extends EntityManager<ProjectStatus>{

	public ProjectsStatus(){
		super(ProjectStatus.class);
	}
	
}
