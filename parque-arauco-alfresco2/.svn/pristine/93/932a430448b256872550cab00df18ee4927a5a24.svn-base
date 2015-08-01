package com.intellego.pa.quartz.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class NotificationDto implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 2785577732735586421L;
	private String responsible;
	private List<NotificationDocumentDto> expiredList;
	private List<NotificationDocumentDto> nextExpiredList;
	
	public NotificationDto(){
		expiredList = new ArrayList<NotificationDocumentDto>();
		nextExpiredList = new ArrayList<NotificationDocumentDto>();
	}

	public String getResponsible() {
		return responsible;
	}

	public void setResponsible(String responsible) {
		this.responsible = responsible;
	}

	public List<NotificationDocumentDto> getExpiredList() {
		return expiredList;
	}

	public List<NotificationDocumentDto> getNextExpiredList() {
		return nextExpiredList;
	}
}
