package com.intellego.parquearauco.datalist.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


public class MetaDataDto implements Serializable, Comparable<MetaDataDto>{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -8246135145150489094L;
	
	private String id;
	private String description;
	private String mandatory;
	private String dataType;
	private int order;
	private String listType;
	private List<MetaDataDto> metadatas = new ArrayList<MetaDataDto>();	
	
	@Override
	public int compareTo(MetaDataDto o) {
		if(o.getOrder() < getOrder()){
			return 1;
		}else{
			if(o.getOrder() > getOrder()){
				return -1;
			}
		}

		return 0;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getMandatory() {
		return mandatory;
	}
	public void setMandatory(String mandatory) {
		this.mandatory = mandatory;
	}
	public String getDataType() {
		return dataType;
	}
	public void setDataType(String dataType) {
		this.dataType = dataType;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<MetaDataDto> getMetadatas() {
		return metadatas;
	}
	public void setMetadatas(List<MetaDataDto> metadatas) {
		this.metadatas = metadatas;
	}

	public int getOrder() {
		return order;
	}

	public void setOrder(int order) {
		this.order = order;
	}

	public String getListType() {
		return listType;
	}

	public void setListType(String listType) {
		this.listType = listType;
	}

}
