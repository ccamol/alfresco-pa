package com.intellego.parquearauco.baseprocessorextension;

import com.intellego.parquearauco.dto.DocumentType;
import com.intellego.parquearauco.security.interfaces.EntityManager;

public class DocumentTypes extends EntityManager<DocumentType>{

	public DocumentTypes(){
		super(DocumentType.class);
	}
	
}
