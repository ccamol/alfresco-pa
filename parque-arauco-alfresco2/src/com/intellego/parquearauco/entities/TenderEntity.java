package com.intellego.parquearauco.entities;

import java.util.Date;

import com.intellego.parquearauco.security.entities.BasicEntity;

public class TenderEntity extends BasicEntity {

	private Integer id;
	private Integer tenderStatus;
	private String projectId;
	private String projectName;
	private Integer projectTypeId;
	private NodeTypeEntity projectNodeType;
	private String name;
	private Date initDate;
	private Date endDate;
	private OrganizationalAreaEntity organizationalArea;
	private ProjectTypeEntity projectType;
	private Integer awardStatus;
	private String awardApplicant;
	private Integer participant;

	public TenderEntity() {
	}

	public TenderEntity(Integer id,Integer tenderStatus, 
			String projectId, String projectName,
			Integer projectTypeId, NodeTypeEntity projectNodeType, String name, 
			Date initDate, Date endDate, OrganizationalAreaEntity organizationalArea, 
			ProjectTypeEntity projectType, Integer awardStatus, String awardApplicant,
			Integer participant) {
		super();
		this.id = id;
		this.tenderStatus = tenderStatus;
		this.projectId = projectId;
		this.projectName = projectName;
		this.projectTypeId = projectTypeId;
		this.projectNodeType = projectNodeType;
		this.name = name;
		this.initDate = initDate;
		this.endDate = endDate;
		this.organizationalArea = organizationalArea;
		this.projectType = projectType;
		this.awardStatus = awardStatus;
		this.awardApplicant = awardApplicant;
		this.participant = participant;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getProjectId() {
		return projectId;
	}

	public void setProjectId(String projectId) {
		this.projectId = projectId;
	}

	public NodeTypeEntity getProjectNodeType() {
		return projectNodeType;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public Integer getProjectTypeId() {
		return projectTypeId;
	}

	public void setProjectTypeId(Integer projectTypeId) {
		this.projectTypeId = projectTypeId;
	}

	public void setProjectNodeType(NodeTypeEntity projectNodeType) {
		this.projectNodeType = projectNodeType;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getInitDate() {
		return initDate;
	}

	public void setInitDate(Date initDate) {
		this.initDate = initDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public OrganizationalAreaEntity getOrganizationalArea() {
		return organizationalArea;
	}

	public void setOrganizationalArea(
			OrganizationalAreaEntity organizationalArea) {
		this.organizationalArea = organizationalArea;
	}

	public ProjectTypeEntity getProjectType() {
		return projectType;
	}

	public void setProjectType(ProjectTypeEntity projectType) {
		this.projectType = projectType;
	}

	public Integer getTenderStatus() {
		return tenderStatus;
	}

	public void setTenderStatus(Integer tenderStatus) {
		this.tenderStatus = tenderStatus;
	}

	public Integer getAwardStatus() {
		return awardStatus;
	}

	public void setAwardStatus(Integer awardStatus) {
		this.awardStatus = awardStatus;
	}

	public String getAwardApplicant() {
		return awardApplicant;
	}

	public void setAwardApplicant(String awardApplicant) {
		this.awardApplicant = awardApplicant;
	}

	public Integer getParticipant() {
		return participant;
	}

	public void setParticipant(Integer participant) {
		this.participant = participant;
	}

	
	
	

}
