/**
 * 
 */
package com.intellego.parquearauco.copy.baseprocessorextension;

import org.alfresco.repo.processor.BaseProcessorExtension;
import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.service.namespace.QName;

import com.intellego.parquearauco.copy.service.CopyServiceImpl;

public class CopyServiceBaseProccesor extends BaseProcessorExtension {

	private CopyServiceImpl service;

	public CopyServiceBaseProccesor() {
	}
	
	
    public NodeRef copy(
            NodeRef sourceNodeRef,
            NodeRef targetParentRef, 
            QName assocTypeQName,
            QName assocQName, 
            boolean copyChildren){
    	return service.copy(sourceNodeRef, targetParentRef, assocTypeQName, assocQName, copyChildren);
    }
    
	public CopyServiceImpl getService() {
		return service;
	}


	public void setService(CopyServiceImpl service) {
		this.service = service;
	}
}

