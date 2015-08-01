package com.intellego.parquearauco.baseprocessorextension;

import com.intellego.parquearauco.dto.ProjectStages;
import com.intellego.parquearauco.security.interfaces.EntityManager;

public class ProjectStage extends EntityManager<ProjectStages>{

	public ProjectStage(){
		super(ProjectStages.class);
	}
	
}
