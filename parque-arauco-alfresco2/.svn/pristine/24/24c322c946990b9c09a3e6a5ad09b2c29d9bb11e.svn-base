package com.intellego.parquearauco.dto;

import java.io.Serializable;

public class Response<T> implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private int status;
	private String message;
	private T result;
	
	public Response(){
		this.status=-1;
		this.message="Error durante el procesamiento de la acción";
		this.result=null;
	}
	
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public T getResult() {
		return result;
	}
	public void setResult(T result) {
		this.result = result;
	}
	
	
	
	
}
