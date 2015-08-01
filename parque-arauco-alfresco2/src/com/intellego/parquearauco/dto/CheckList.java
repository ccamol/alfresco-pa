package com.intellego.parquearauco.dto;


import com.intellego.parquearauco.security.annotations.Dto;
import com.intellego.parquearauco.security.dto.Basic;

@Dto(entity = "com.intellego.parquearauco.entities.CheckListEntity")
public class CheckList extends Basic{

	private static final long serialVersionUID = 1L;
	private Integer nodeType;
	private Integer stageId;
	private Integer idDocument;
	private Integer external;

	public CheckList() {
	}

	public Integer getNodeType() {
		return nodeType;
	}

	public void setNodeType(Integer nodeType) {
		this.nodeType = nodeType;
	}

	public Integer getStageId() {
		return stageId;
	}

	public void setStageId(Integer stageId) {
		this.stageId = stageId;
	}

	public Integer getIdDocument() {
		return idDocument;
	}

	public void setIdDocument(Integer idDocument) {
		this.idDocument = idDocument;
	}

	public Integer getExternal() {
		return external;
	}

	public void setExternal(Integer external) {
		this.external = external;
	}



}
