package com.intellego.parquearauco.baseprocessorextension;

import com.intellego.parquearauco.dto.RequestedDocumentApplicant;
import com.intellego.parquearauco.security.interfaces.EntityManager;

public class RequestedDocumentApplicants extends EntityManager<RequestedDocumentApplicant>{
	public RequestedDocumentApplicants() {
		super(RequestedDocumentApplicant.class);
	}
}