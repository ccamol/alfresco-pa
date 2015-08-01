package com.intellego.pa.property.services;

import java.util.Properties;

import org.alfresco.repo.processor.BaseProcessorExtension;

public class PropertyService extends BaseProcessorExtension {
	
	private Properties properties;	
	private PropertyServiceImpl propertyServiceImpl;
	
	private PropertyServiceImpl getInstance(){
		if(propertyServiceImpl == null){
			return new PropertyServiceImpl(properties);
		}
		
		return propertyServiceImpl;
	}
	
	
	public String getProperty(String key){
		return getInstance().getProperty(key);
	}

	public Properties getProperties() {
		return properties;
	}

	public void setProperties(Properties properties) {
		this.properties = properties;
	}
}