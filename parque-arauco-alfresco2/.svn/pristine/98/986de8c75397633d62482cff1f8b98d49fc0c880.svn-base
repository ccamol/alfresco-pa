package com.intellego.parquearauco.datalist.converters;

import java.util.List;
import java.util.Map;

import org.alfresco.service.ServiceRegistry;

import com.intellego.parquearauco.datalist.dto.MetaDataDto;

public interface Converter {

	public List<MetaDataDto> convert();

	public List<List<String>> getList();

	public boolean saveOrUpdate(String className, Map<String, String> properties);

	public void init(ServiceRegistry serviceRegistry);
	
}
