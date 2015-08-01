package com.intellego.parquearauco.datalist.dto;

import java.io.Serializable;


public class DataListDto implements Serializable, Comparable<DataListDto>{
	

	/**
	 * 
	 */
	private static final long serialVersionUID = -8246135145150489094L;
	
	public static final int LIST = 0;
	public static final int BD = 1;
	
	
	private String id;
	private String title;
	private int type=LIST;
	private int order;

	public DataListDto() {
		this.id=new String();
		this.title=new String();
		this.type=LIST;
		this.order=0;
	}

	@Override
	public int compareTo(DataListDto o) {
		if(o.getOrder() < getOrder()){
			return 1;
		}else{
			if(o.getOrder() > getOrder()){
				return -1;
			}
		}

		return 0;
	}
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}

	public int getOrder() {
		return order;
	}

	public void setOrder(int order) {
		this.order = order;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

}
