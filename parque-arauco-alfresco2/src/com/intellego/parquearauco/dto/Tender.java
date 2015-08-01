package com.intellego.parquearauco.dto;

import java.util.Date;

import com.intellego.parquearauco.entities.NodeTypeEntity;
import com.intellego.parquearauco.entities.OrganizationalAreaEntity;
import com.intellego.parquearauco.entities.ProjectTypeEntity;
import com.intellego.parquearauco.security.annotations.Dto;
import com.intellego.parquearauco.security.dto.Basic;

@Dto(entity = "com.intellego.parquearauco.entities.TenderEntity")
public class Tender extends Basic {

	private static final long serialVersionUID = 1L;
	private Integer id;
	private Integer tenderStatus;
	private String projectId;
	private String projectName;
	private Integer projectTypeId; 
	private NodeType projectNodeType;
	private String name;
	private Date initDate;
	private Date endDate;
	private OrganizationalArea organizationalArea;
	private ProjectType projectType;
	private Integer awardStatus;
	private String awardApplicant;
	private Integer participant;

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



	public NodeType getProjectNodeType() {
		return projectNodeType;
	}

	public void setProjectNodeType(NodeType projectNodeType) {
		this.projectNodeType = projectNodeType;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
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

	public OrganizationalArea getOrganizationalArea() {
		return organizationalArea;
	}

	public void setOrganizationalArea(
			OrganizationalArea organizationalArea) {
		this.organizationalArea = organizationalArea;
	}

	public ProjectType getProjectType() {
		return projectType;
	}

	public void setProjectType(ProjectType projectType) {
		this.projectType = projectType;
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
