package com.intellego.parquearauco.classification.baseprocessorextension;

import java.util.List;

import org.alfresco.repo.processor.BaseProcessorExtension;
import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.service.cmr.search.ResultSet;
import org.alfresco.service.namespace.QName;

import com.intellego.parquearauco.classification.dto.Classification;
import com.intellego.parquearauco.classification.dto.EntryPoint;
import com.intellego.parquearauco.classification.services.ClassificationService;
import com.intellego.parquearauco.dto.Response;

public class ClassificationServiceBaseProccesor extends BaseProcessorExtension{
	
	private ClassificationService service;

	public Response<Classification> getEngineeringRoot(){
		return service.getEngineeringRoot();
	}

	public Response<Classification> getArchitectureRoot(){
		return service.getArchitectureRoot();
	}
	
	public Response<Classification> add(Classification parent, String name){
		return service.add(parent, name);
	}

//	public Response<Classification> copyFolder(Classification sourceFolder, Classification targetFolder, String newNameFolder){
//		return service.copyFolder(sourceFolder, targetFolder, newNameFolder);
//	}
	
	/**
	public Response<Classification> copyFolder(NodeRef sourceNodeRef, 
				NodeRef targetParentNodeRef, 
				QName assocTypeQName, 
				QName assocQName,
				boolean copyChildren){
		return service.copyFolder(sourceNodeRef, targetParentNodeRef, assocTypeQName, assocQName, copyChildren);
	}	
	*/
	
	
	
//	public NodeRef copy(NodeRef sourceNodeRef, NodeRef targetParentNodeRef, QName assocTypeQName, QName assocQName,
//			boolean copyChildren) {
//		return service.copy(sourceNodeRef, targetParentNodeRef, assocTypeQName, copyChildren);
//	}
	
	public Response<Boolean> remove(Classification parent, String name){
		return service.remove(parent, name);
	}

	public Response<Boolean> remove(Classification classification, boolean recurse){
		return service.remove(classification, recurse);
	}

	public Response<Boolean> rename(Classification parent, String name, String newName){
		return service.rename(parent, name, newName);
	}

	public Response<Boolean> rename(Classification classification, String newName){
		return service.rename(classification, newName);
	}

	public Response<Boolean> setDescription(Classification classification, String newDescription){
		return service.setDescription(classification, newDescription);
	}
	
	public Response<Classification> getByUuid(String Uuid){
		return service.getByUuid(Uuid);
	}

	public Response<List<Classification>> parent(Classification classification, boolean recurse){
		return service.parent(classification, recurse);
	}
	
	public Response<List<Classification>> children(Classification classification, boolean recurse){
		return service.children(classification, recurse);
	}
	
	public Response<List<String>> documents(EntryPoint entryPoint, Classification classification){
		return service.documents(entryPoint, classification);
	}
	
	public Response<List<String>> documentsByFilter(String query, EntryPoint entryPoint, Classification classification){
		return service.documentsByFilter(query, entryPoint, classification);
	}
	
	public Response<Integer> count(EntryPoint entryPoint, Classification classification, boolean recurse, boolean countClassifications){
		return service.count(entryPoint, classification, recurse, countClassifications);
	}
	
	public Response<Classification> copy(Classification classification, Classification destination, boolean recurse, boolean onlyClassifications){
		return service.copy(classification, destination, recurse, onlyClassifications);
	}

	public Response<Boolean> move(Classification classification, Classification destination, boolean recurse, boolean onlyClassifications){
		return service.move(classification, destination, recurse, onlyClassifications);
	}

	public Response<Boolean> classify(Classification classification, NodeRef node){
		return service.classify(classification, node);
	}

	public Response<Boolean> classify(Classification classification, String uuid){
		return service.classify(classification, uuid);
	}

	public Response<Boolean> unClassify(Classification classification, NodeRef node){
		return service.unClassify(classification, node);
	}
	
	public Response<Classification> searchFolder(String name, String site){
		return service.searchFolder(name, site);
	}
	
	public Response<Classification> shareDocument(String newClassification, String uuid){
		return service.searchFolder(newClassification, uuid);
	}
	
	public Response<Boolean> unClassify(Classification classification, String uuid){
		return service.unClassify(classification, uuid);
	}

	public Response<Boolean> unClassify(NodeRef node){
		return service.unClassify(node);
	}

	public Response<Boolean> unClassify(Classification classification, boolean recurse, boolean onlyDocuments){
		return service.unClassify(classification, recurse, onlyDocuments);
	}

	public Response<List<String>> documentsInEntryPoint(EntryPoint entryPoint){
		return service.documentsInEntryPoint(entryPoint);
	}

	public ClassificationService getService() {
		return service;
	}

	public void setService(ClassificationService service) {
		this.service = service;
	}
}
