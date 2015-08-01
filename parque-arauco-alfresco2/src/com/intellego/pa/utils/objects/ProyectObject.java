package com.intellego.pa.utils.objects;

import java.util.Date;

public class ProyectObject {
	
	private long idProyect;
	private long idMall;
	private String name;
	private String typeProyect;
	private String status;
	private String description;
	private Date finishDate;
	
	public long getIdProyect() {
		return idProyect;
	}
	public void setIdProyect(long idProyect) {
		this.idProyect = idProyect;
	}
	public long getIdMall() {
		return idMall;
	}
	public void setIdMall(long idMall) {
		this.idMall = idMall;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getTypeProyect() {
		return typeProyect;
	}
	public void setTypeProyect(String typeProyect) {
		this.typeProyect = typeProyect;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getFinishDate() {
		return finishDate;
	}
	public void setFinishDate(Date finishDate) {
		this.finishDate = finishDate;
	}

}
