package com.intellego.parquearauco.dto;

import java.util.Date;

import com.intellego.parquearauco.security.annotations.Dto;
import com.intellego.parquearauco.security.dto.Basic;

@Dto(entity = "com.intellego.parquearauco.entities.ThirdPartySharedDocumentEntity")
public class ThirdPartySharedDocument extends Basic{
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String uuidDocument;
	private String thirdPartyName;
	private ArchitectureProject architectureProject;
	private ProjectStages projectStages;
	private Date sharedDate;
	
	
	public ThirdPartySharedDocument(){
		
	}
	
	public Date getSharedDate() {
		return sharedDate;
	}

	public void setSharedDate(Date sharedDate) {
		this.sharedDate = sharedDate;
	}

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUuidDocument() {
		return uuidDocument;
	}
	public void setUuidDocument(String uuidDocument) {
		this.uuidDocument = uuidDocument;
	}
	public String getThirdPartyName() {
		return thirdPartyName;
	}
	public void setThirdPartyName(String thirdPartyName) {
		this.thirdPartyName = thirdPartyName;
	}

	
	
	
	public ArchitectureProject getArchitectureProject() {
		return architectureProject;
	}



	public void setArchitectureProject(ArchitectureProject architectureProject) {
		this.architectureProject = architectureProject;
	}



	


	public ProjectStages getProjectStages() {
		return projectStages;
	}



	public void setProjectStages(ProjectStages projectStages) {
		this.projectStages = projectStages;
	}



	public static long getSerialversionuid() {
		return serialVersionUID;
	}
}
