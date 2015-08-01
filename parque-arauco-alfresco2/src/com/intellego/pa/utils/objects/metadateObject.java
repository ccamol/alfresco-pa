package com.intellego.pa.utils.objects;

import java.util.HashMap;
import java.util.Map;

public class metadateObject {
	
	private String uuid;
	private Map<String, String> metadate = new HashMap<String, String>();
	public String getUuid() {
		return uuid;
	}
	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
	public Map<String, String> getMetadate() {
		return metadate;
	}
	public void setMetadate(Map<String, String> metadate) {
		this.metadate = metadate;
	}
	
	public metadateObject(String uuid, Map<String, String> metadate) {
		super();
		this.uuid = uuid;
		this.metadate = metadate;
	}
	
	public metadateObject() {
		
	}
	

	
	
}
