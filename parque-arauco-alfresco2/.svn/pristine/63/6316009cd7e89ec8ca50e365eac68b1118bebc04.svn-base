package com.intellego.parquearauco.classification.dto;

import java.io.Serializable;
import java.util.List;

import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.util.ApplicationContextHelper;
import org.springframework.context.ApplicationContext;

import com.intellego.parquearauco.classification.services.ClassificationService;
import com.intellego.parquearauco.dto.Response;

public class Classification implements Serializable{

	private static final long serialVersionUID = 1L;

	private String uuid;
	private String name;
	private String description;

	public Classification(){
		this.uuid=new String();
		this.name=new String();
		this.description=new String();
	}
	
	public Classification(String uuid){
		ApplicationContext context = ApplicationContextHelper.getApplicationContext(); 
		ClassificationService classificationService = (ClassificationService) context.getBean("ClassificationService");
		
		Response<Classification> response = classificationService.getByUuid(uuid);
		
		if(response.getStatus()>-1 && response.getResult()!=null){
			this.uuid=response.getResult().getUuid();
			this.name=response.getResult().getName();
			this.description=response.getResult().getDescription();
		}else{
			this.uuid=new String();
			this.name=new String();
			this.description=new String();
		}
	}
	
	public String getUuid() {
		return uuid;
	}
	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
	public String getName() {
		return name;
	}
	public String getDescription() {
		return description;
	}
	
	public NodeRef getNodeRef(){
		return new NodeRef("workspace://SpacesStore/" + this.uuid);
	}

	public NodeRef getParent(){
		NodeRef result=null;
		
		ApplicationContext context = ApplicationContextHelper.getApplicationContext(); 
		ClassificationService classificationService = (ClassificationService) context.getBean("ClassificationService");
		
		Response<List<Classification>> response = classificationService.parent(this, false);
		
		if(response.getResult().size()>0){
			result = response.getResult().get(0).getNodeRef();
		}
		
		return result;
		
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
