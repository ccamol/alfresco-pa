package com.intellego.parquearauco.classification.services;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.alfresco.model.ContentModel;
import org.alfresco.service.ServiceRegistry;
import org.alfresco.service.cmr.model.FileFolderService;
import org.alfresco.service.cmr.model.FileInfo;
import org.alfresco.service.cmr.repository.AssociationRef;
import org.alfresco.service.cmr.repository.ChildAssociationRef;
import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.service.cmr.repository.NodeService;
import org.alfresco.service.cmr.repository.StoreRef;
import org.alfresco.service.cmr.search.ResultSet;
import org.alfresco.service.cmr.search.SearchService;
import org.alfresco.service.namespace.QName;
import org.alfresco.service.namespace.RegexQNamePattern;
import org.alfresco.util.ISO9075;

import com.intellego.parquearauco.baseprocessorextension.SucProjects;
import com.intellego.parquearauco.classification.dto.Classification;
import com.intellego.parquearauco.classification.dto.EntryPoint;
import com.intellego.parquearauco.dto.Response;
import com.intellego.parquearauco.dto.SucProject;

public class ClassificationService {

	public static QName TYPE_CLASSIFICATION=QName.createQName("http://www.intellego.cl/classification/1.0","classification");
	public static QName ASPECT_CLASSIFIABLE=QName.createQName("http://www.intellego.cl/classification/1.0","classifiable");
	public static QName ASPECT_CLASSIFICATION=QName.createQName("http://www.intellego.cl/classification/1.0","classificationAssociations");
	public static QName ASSOC_CLASSIFICATION=QName.createQName("http://www.intellego.cl/classification/1.0","classificationAssociation");
	public static QName PROP_PARENT=QName.createQName("http://www.intellego.cl/classification/1.0","parentUuid");

	private ServiceRegistry serviceRegistry;
	private NodeService nodeService;
	private ResultSet resultSet;

	public Response<Classification> getEngineeringRoot(){
		return this.getRoot("Ingeniería");
	}

	public Response<Classification> getArchitectureRoot(){
		return this.getRoot("Arquitectura");
	}
	
	public void init(ServiceRegistry serviceRegistry){
		this.serviceRegistry = serviceRegistry;
	}
	
	public Response<Classification> copyClassification(String node1, String nodo2){
		
		NodeRef nodeUuidClassification = getNode(node1);
		NodeRef nodeUuidNewParent = getNode(nodo2);
		
		Response<Classification> response = new Response<Classification>();
		System.out.println("1");
		FileFolderService fileFolderService = this.serviceRegistry.getFileFolderService();
		System.out.println("2");
		NodeService nodeService = this.serviceRegistry.getNodeService();
		System.out.println("3");
		String categoryName = (String) nodeService.getProperty(nodeUuidClassification, ContentModel.PROP_NAME);
		System.out.println("4");
		System.out.println("categoryName: " + categoryName);
		FileInfo fileInfo = null;
		int counter;

		try{
			if(nodeUuidClassification != null && nodeUuidNewParent!=null){
				System.out.println("nodeUuidClassification.getNodeRef(): " + nodeUuidClassification);
				counter = 0;

				while(nodeService.getChildByName(nodeUuidNewParent, 
						ContentModel.ASSOC_CONTAINS, categoryName)!=null){
					System.out.println("5");
					counter++;
					categoryName = (String) nodeService.getProperty(nodeUuidClassification, 
							ContentModel.PROP_NAME) + " Copia" + " [" + counter + "]";
					System.out.println("categoryName: " + categoryName);
				}

				System.out.println("6");
				fileInfo = fileFolderService.copy(nodeUuidClassification, 
						nodeUuidNewParent,categoryName);
				
				System.out.println("7");
				SearchService searchService = this.serviceRegistry.getSearchService();
				StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
				ResultSet resultSet = 
						searchService.query(storeRef, SearchService.LANGUAGE_LUCENE,"@sys\\:node-uuid:" + fileInfo.getNodeRef().getId());
				Classification cls = new Classification();
				cls.setDescription((String) nodeService.getProperties(resultSet.getNodeRef(0)).get(ContentModel.PROP_DESCRIPTION));
				cls.setName(fileInfo.getName());
				cls.setUuid(fileInfo.getNodeRef().getId());
				
				System.out.println("fileInfo.getName: " + fileInfo.getName());
				System.out.println("fileInfo.getNodeRef: " + fileInfo.getNodeRef());
				System.out.println("fileInfo.getType: " + fileInfo.getType());
				
				response.setResult(cls);
				response.setStatus(1);
				response.setMessage(fileInfo.getNodeRef().getId());
				System.out.println("response.getMessage: " + response.getMessage());
				System.out.println("response.getStatus: " + response.getStatus());
				System.out.println("response.getResult: " + response.getResult());
			}else{
//				response.setResult(false);
				response.setStatus(-1);
				response.setMessage("Se produjo un error al copiar la  clasificación");
			}
		}catch(Exception e){
			e.printStackTrace();
//			response.setResult(false);
			response.setStatus(-1);
			response.setMessage("Se produjo un error al copiar la  clasificación");
		}
		return response;
	}
	
	public Response<Classification> getByUuid(String uuid){
		Response<Classification> response = new Response<Classification>();

		Classification classification = new Classification();

		SearchService searchService = this.serviceRegistry.getSearchService();
		NodeService nodeService = this.serviceRegistry.getNodeService();
		StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
		ResultSet resultSet=searchService.query(storeRef, SearchService.LANGUAGE_LUCENE,"@sys\\:node-uuid:" + uuid);

		if(resultSet.length()>0){
			classification.setUuid(resultSet.getNodeRef(0).getId());
			classification.setName((String) nodeService.getProperties(resultSet.getNodeRef(0)).get(ContentModel.PROP_NAME));
			classification.setDescription((String) nodeService.getProperties(resultSet.getNodeRef(0)).get(ContentModel.PROP_DESCRIPTION));
			response.setStatus(1);
			response.setMessage("Operación realizada con éxito");
			response.setResult(classification);
		}else{
			response.setStatus(-1);
			response.setMessage("Nodo no encontrado");
			response.setResult(null);
		}


		return response;
	}

	public NodeRef getNode(String nodo) {
		nodo = "workspace://SpacesStore/" + nodo;

		System.out.println("## Ingresando a consulta de nodo seleccionado ##");
		NodeRef nr = new NodeRef(nodo);

		System.out.println("n.getId(): " + nr.getId());
		System.out.println("n.getStoreRef(): " + nr.getStoreRef());
		
		return nr;
	}
	
	public Response<Classification> add(Classification parent, String name){
		Response<Classification> response = new Response<Classification>();

		try{
			FileFolderService fileFolderService = this.serviceRegistry.getFileFolderService();
			FileInfo fileInfo = fileFolderService.create(parent.getNodeRef(), name, TYPE_CLASSIFICATION);

			if(fileInfo!=null && fileInfo.getNodeRef()!=null){
				response = this.getByUuid(fileInfo.getNodeRef().getId());
			}else{
				response.setStatus(-1);
				response.setMessage("Se produjo un error al crear nueva clasificación");
				response.setResult(null);
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		return response;
	}

	public Response<Boolean> remove(Classification parent, String name){
		Response<Boolean> response = new Response<Boolean>();

		//TODO Pending

		return response;
	}

	public Response<Boolean> remove(Classification classification, boolean recurse){
		Response<Boolean> response = new Response<Boolean>();

		//TODO Pending

		return response;
	}

	public Response<Boolean> rename(Classification parent, String name, String newName){
		Response<Boolean> response = new Response<Boolean>();

		try{
			NodeService nodeService = this.serviceRegistry.getNodeService();
			NodeRef node = nodeService.getChildByName(parent.getNodeRef(), ContentModel.ASSOC_CHILDREN, name);
			if(node!=null){
				response = this.rename(this.getByUuid(node.getId()).getResult(), newName);
			}else{
				response.setStatus(-1);
				response.setMessage("Se produjo un error al acceder al padre");
				response.setResult(null);
			}
		}catch(Exception e){
			e.printStackTrace();
		}

		return response;
	}

	public Response<Boolean> rename(Classification classification, String newName){
		Response<Boolean> response = new Response<Boolean>();

		try{
			if(this.changeProperty(classification.getNodeRef(), ContentModel.PROP_NAME, newName)){
				response.setStatus(1);
				response.setMessage("Operación realizada con éxito");
				response.setResult(true);
			}else{
				response.setStatus(-1);
				response.setMessage("Se produjo un error al cambiar la propiedad");
				response.setResult(null);
			}
		}catch(Exception e){
			e.printStackTrace();
		}

		return response;
	}

	public Response<Boolean> setDescription(Classification classification, String newDescription){
		Response<Boolean> response = new Response<Boolean>();

		try{
			if(this.changeProperty(classification.getNodeRef(), ContentModel.PROP_DESCRIPTION, newDescription)){
				response.setStatus(1);
				response.setMessage("Operación realizada con éxito");
				response.setResult(true);
			}else{
				response.setStatus(-1);
				response.setMessage("Se produjo un error al cambiar la propiedad");
				response.setResult(null);
			}
		}catch(Exception e){
			e.printStackTrace();
		}

		return response;
	}

	private boolean changeProperty(NodeRef node, QName property, String value){
		boolean result = false;

		NodeService nodeService = this.serviceRegistry.getNodeService();

		try{
			Map<QName, Serializable>  properties = nodeService.getProperties(node);
			properties.put(ContentModel.PROP_NAME, value);
			nodeService.setProperties(node, properties);
			result=true;
		}catch(Exception e){
			e.printStackTrace();
		}

		return result;
	}

	public Response<Classification> searchFolder(String name, String site){

		if (name == null){

			Response<Classification> response = new Response<Classification>();
			SearchService searchService = this.serviceRegistry.getSearchService();
			NodeService nodeService = this.serviceRegistry.getNodeService();
			Classification classification = new Classification();
			StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
			String query = "PATH:\"/app:company_home/app:dictionary/cm:"+site+"\"";
			ResultSet resultSet=searchService.query(storeRef, SearchService.LANGUAGE_LUCENE, query);

			if(resultSet.length()>0){
				NodeRef node = resultSet.getNodeRef(0);
				String nodeName = (String) nodeService.getProperty(node, ContentModel.PROP_NAME);
				String uuid = node.getId();
				classification.setUuid(uuid);
				classification.setName(nodeName);
				response.setStatus(1);
				response.setMessage("si existe");
				response.setResult(classification);
			}else{
				response.setStatus(-1);
				response.setMessage("carpeta no encontrada");
			}
			return response;
		}else{
			Response<Classification> response = new Response<Classification>();	
			SearchService searchService = this.serviceRegistry.getSearchService();
			NodeService nodeService = this.serviceRegistry.getNodeService();
			Classification classification = new Classification();
			StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
			String query = "PATH:\"/app:company_home/app:dictionary/cm:"+site+"//*\" AND TYPE:\"clasf:classification\" AND @cm\\:name:" + name;
			ResultSet resultSet=searchService.query(storeRef, SearchService.LANGUAGE_LUCENE, query);

			if(resultSet.length()>0){
				NodeRef node = resultSet.getNodeRef(0);
				String nodeName = (String) nodeService.getProperty(node, ContentModel.PROP_NAME);
				String uuid = node.getId();
				classification.setUuid(uuid);
				classification.setName(nodeName);
				response.setStatus(1);
				response.setMessage("si existe");
				response.setResult(classification);

			}else{
				response.setStatus(-1);
				response.setMessage("carpeta no encontrada");
			}
			return response;
		}
	}

	public Response<List<Classification>> parent(Classification classification, boolean recurse){
		Response<List<Classification>> response = new Response<List<Classification>>();

		List<Classification> resultList = new ArrayList<Classification>();

		NodeService nodeService = this.serviceRegistry.getNodeService();

		try{
			NodeRef parent = classification.getNodeRef();
			NodeRef engineering = this.getEngineeringRoot().getResult().getNodeRef();
			NodeRef architecture = this.getArchitectureRoot().getResult().getNodeRef();
			while(!parent.equals(engineering) && !parent.equals(architecture)){
				parent=nodeService.getPrimaryParent(parent).getParentRef();
				resultList.add(this.getByUuid(parent.getId()).getResult());
				if(!recurse) break;
			}
			response.setStatus(1);
			response.setMessage("Operación realizada con éxito");
			response.setResult(resultList);
		}catch(Exception e){
			e.printStackTrace();
		}


		return response;
	}

	public Response<List<Classification>> children(Classification classification, boolean recurse){
		Response<List<Classification>> response = new Response<List<Classification>>();
		List<Classification> resultList = new ArrayList<Classification>();

		NodeService nodeService = this.serviceRegistry.getNodeService();

		List<ChildAssociationRef> associations = nodeService.getChildAssocs(classification.getNodeRef());
		Response<Classification> tempResponse = new Response<Classification>();
		
		for(ChildAssociationRef each : associations){
			if(nodeService.getType(each.getChildRef()).equals(TYPE_CLASSIFICATION)){
				tempResponse = this.getByUuid(each.getChildRef().getId());
				if(tempResponse.getStatus()>-1){
					resultList.add(tempResponse.getResult());
				}
			}
		}

		if(resultList.size()>0){
			response.setStatus(1);
			response.setMessage("Operación realizada con éxito");
		}

		response.setResult(resultList);
		return response;
	}

	public Response<List<String>> documents(EntryPoint entryPoint, Classification classification){
		Response<List<String>> response = new Response<List<String>>();
		List<String> resultList = new ArrayList<String>();

		NodeService nodeService = this.serviceRegistry.getNodeService();

		List<String> ASSOC_NAMES_TO_EXTRACT = Arrays.asList(new String[]{"classificationAssociation"});
		List<AssociationRef> documentsAssoc = null;
		documentsAssoc = nodeService.getTargetAssocs(classification.getNodeRef(), RegexQNamePattern.MATCH_ALL);
		for(AssociationRef each : documentsAssoc) {
			QName assocQname = each.getTypeQName();
			if (ASSOC_NAMES_TO_EXTRACT.contains(assocQname.getLocalName())) {
				if(this.checkEntryPoint(entryPoint, each.getTargetRef())){
					resultList.add(each.getTargetRef().getId());
				}
			}
		}

		response.setStatus(1);
		response.setMessage("Operación realizada con éxito");
		response.setResult(resultList);
		return response;
	}

	public Response<List<String>> documentsInEntryPoint(EntryPoint entryPoint){
		Response<List<String>> response = new Response<List<String>>();
		List<String> resultList = new ArrayList<String>();

		String query = new String();

		SearchService searchService = this.serviceRegistry.getSearchService();

		switch(entryPoint.getNodeType()){
		case 1: // Mall Ingenieering
			query = query.concat("@pa\\:mallID:" + entryPoint.getNodeId());
			break;
		case 2: // Mall project Ingenieering
			query = query.concat("@pa\\:sectionID:2 AND @pa\\:projectID:" + entryPoint.getNodeId());
			break;
		case 3: // SUC
			query = query.concat("@pa\\:sucNumberID:" + entryPoint.getNodeId());
			break;
		case 4: // Suc project
			Response<SucProject> sucProject = new Response<SucProject>();
			SucProjects sucService = new SucProjects();

			sucProject = sucService.getById(entryPoint.getNodeId());
			if(sucProject.getStatus()>-1){
				query = query.concat("@pa\\:sectionID:1 AND  @pa\\:sucNumberID:" + sucProject.getResult().getSucEntity().getId());
			}
			break;
		case 5: // Stage Engineering
			query = query.concat("@pa\\:stageID:" + entryPoint.getNodeId());
			break;
		case 6: // Stage Architecture Project
			query = query.concat("@pa\\:stageID:" + entryPoint.getNodeId());
			break;
		case 7: // Stage suc Project
			query = query.concat("@pa\\:stageID:" + entryPoint.getNodeId());
			break;
		case 8: // Stage Licitaciones
			query = query.concat("@pa\\:stageID:" + entryPoint.getNodeId());
			break;
		case 9: // Mall Architecture
			query = query.concat("@pa\\:mallID:" + entryPoint.getNodeId());
			break;
		case 10: // Mall project Architecture
			query = query.concat("@pa\\:sectionID:1 AND  @pa\\:projectID:" + entryPoint.getNodeId());
			break;
		};


		StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
		ResultSet resultSet=searchService.query(storeRef, SearchService.LANGUAGE_LUCENE,query);
		if(resultSet.length()>0){
			for(NodeRef each : resultSet.getNodeRefs()){
				resultList.add(each.getId());
			}
		}

		response.setStatus(1);
		response.setMessage("Operación realizada con éxito");
		response.setResult(resultList);
		return response;
	}


	private boolean checkEntryPoint(EntryPoint entryPoint, NodeRef node){
		return checkEntryPoint(null, entryPoint, node);
	}

	private boolean checkEntryPoint(String text, EntryPoint entryPoint, NodeRef node){
		boolean response = false;

		String query = new String();

		if(text!=null && text.length()>0){
			query = text + " AND " + "@sys\\:node-uuid:" + node.getId();
		}else{
			query = "@sys\\:node-uuid:" + node.getId();
		}
		SearchService searchService = this.serviceRegistry.getSearchService();

		switch(entryPoint.getNodeType()){
		case 1: // Mall Ingenieering
			query = query.concat(" AND @pa\\:sectionID:2 AND  @pa\\:mallID:" + entryPoint.getNodeId());
			break;
		case 2: // Mall project Ingenieering
			query = query.concat(" AND @pa\\:sectionID:2 AND @pa\\:projectID:" + entryPoint.getNodeId());
			break;
		case 3: // SUC
			query = query.concat(" AND (@pa\\:sectionID:1 OR @pa\\:sectionID:2) AND @pa\\:sucNumber:" + entryPoint.getNodeId());
			break;
		case 4: // Suc project
			Response<SucProject> sucProject = new Response<SucProject>();
			SucProjects sucService = new SucProjects();

			sucProject = sucService.getById(entryPoint.getNodeId());
			if(sucProject.getStatus()>-1){
				query = query.concat(" AND @pa\\:sectionID:1 AND  @pa\\:sucNumberID:" + sucProject.getResult().getSucEntity().getId() );
			}
			break;
		case 5: // Stage Engineering
			query = query.concat(" AND @pa\\:stageID:" + entryPoint.getNodeId());
			break;
		case 6: // Stage Architecture Project
			query = query.concat(" AND @pa\\:stageID:" + entryPoint.getNodeId());
			break;
		case 7: // Stage suc Project
			query = query.concat(" AND @pa\\:stageID:" + entryPoint.getNodeId());
			break;
		case 8: // Stage Licitaciones
			query = query.concat(" AND @pa\\:stageID:" + entryPoint.getNodeId());
			break;
		case 9: // Mall Architecture
			query = query.concat(" AND @pa\\:sectionID:1 AND  @pa\\:mallID:" + entryPoint.getNodeId());
			break;
		case 10: // Mall project Architecture
			query = query.concat(" AND @pa\\:sectionID:1 AND  @pa\\:projectID:" + entryPoint.getNodeId());
			break;
		};

		StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
		ResultSet resultSet=searchService.query(storeRef, SearchService.LANGUAGE_LUCENE,query);
		if(resultSet.length()>0){
			response=true;
		}

		return response;
	}

	public Response<List<String>> documentsByFilter(String query, EntryPoint entryPoint, Classification classification){
		Response<List<String>> response = new Response<List<String>>();
		List<String> resultList = new ArrayList<String>();
		Response<List<String>> recursiveResponse = new Response<List<String>>();
		Response<Classification> recursiveClassification = new Response<Classification>(); 

		NodeService nodeService = this.serviceRegistry.getNodeService();

		List<String> ASSOC_NAMES_TO_EXTRACT = Arrays.asList(new String[]{"classificationAssociation"});
		List<AssociationRef> documentsAssoc = null;
		documentsAssoc = nodeService.getTargetAssocs(classification.getNodeRef(), RegexQNamePattern.MATCH_ALL);
		for(AssociationRef each : documentsAssoc) {
			QName assocQname = each.getTypeQName();
			if (ASSOC_NAMES_TO_EXTRACT.contains(assocQname.getLocalName())) {
				if(this.checkEntryPoint(query, entryPoint, each.getTargetRef())){
					resultList.add(each.getTargetRef().getId());
				}
			}
		}

		List<ChildAssociationRef> associations = nodeService.getChildAssocs(classification.getNodeRef());

		for(ChildAssociationRef each : associations){
			if(nodeService.getType(each.getChildRef()).equals(TYPE_CLASSIFICATION)){
				recursiveClassification = this.getByUuid(each.getChildRef().getId());
				if(recursiveClassification.getStatus()>0 && recursiveClassification.getResult()!=null){
					recursiveResponse = this.documentsByFilter(query, entryPoint, recursiveClassification.getResult());
					if(recursiveResponse.getStatus()>-1 && recursiveResponse.getResult()!=null && recursiveResponse.getResult().size()>0){
						resultList.addAll(recursiveResponse.getResult());
					}
				}
			}
		}


		response.setStatus(1);
		response.setMessage("Operación realizada con éxito");
		response.setResult(resultList);
		return response;
	}


	public Response<Integer> count(EntryPoint entryPoint, Classification classification, boolean recurse, boolean countClassifications){
		Response<Integer> response = new Response<Integer>();
		int count = 0;

		NodeService nodeService = this.serviceRegistry.getNodeService();


		try{

			List<String> ASSOC_NAMES_TO_EXTRACT = Arrays.asList(new String[]{"classificationAssociation"});
			List<AssociationRef> documentsAssoc = null;
			documentsAssoc = nodeService.getTargetAssocs(classification.getNodeRef(), RegexQNamePattern.MATCH_ALL);
			for(AssociationRef each : documentsAssoc) {
				QName assocQname = each.getTypeQName();
				if (ASSOC_NAMES_TO_EXTRACT.contains(assocQname.getLocalName())) {
					if(this.checkEntryPoint(entryPoint, each.getTargetRef())){
						count = count + 1;
					}
				}
			}

			List<ChildAssociationRef> associations = nodeService.getChildAssocs(classification.getNodeRef());
			Response<Classification> tempResponse = new Response<Classification>();

			for(ChildAssociationRef each : associations){
				if(nodeService.getType(each.getChildRef()).equals(TYPE_CLASSIFICATION)){
					tempResponse = this.getByUuid(each.getChildRef().getId());
					if(tempResponse.getStatus()>-1){
						count = count + this.count(entryPoint, this.getByUuid(each.getChildRef().getId()).getResult(), recurse, countClassifications).getResult();
					}
				}
			}

			response.setStatus(1);
			response.setMessage("Operación realizada con éxito");
			response.setResult(count);

		}catch(Exception e){
			e.printStackTrace();
		}
		return response;
	}

	public int countElements(NodeRef node){

		NodeService nodeService = this.serviceRegistry.getNodeService();

		List<ChildAssociationRef> associations = nodeService.getChildAssocs(node, RegexQNamePattern.MATCH_ALL, ASSOC_CLASSIFICATION);

		return associations.size();
	}


	public Response<Classification> copy(Classification classification, Classification destination, boolean recurse, boolean onlyClassifications){
		Response<Classification> response = new Response<Classification>();


		return response;
	}


	public Response<Boolean> move(Classification classification, Classification destination, boolean recurse, boolean onlyClassifications){
		Response<Boolean> response = new Response<Boolean>();


		return response;
	}

	@SuppressWarnings("unchecked")
	public Response<Boolean> classify(Classification classification, NodeRef node){
		Response<Boolean> response = new Response<Boolean>();

		NodeService nodeService = this.serviceRegistry.getNodeService();

		if(!nodeService.hasAspect(node, ClassificationService.ASPECT_CLASSIFIABLE)){
			nodeService.addAspect(node, ClassificationService.ASPECT_CLASSIFIABLE, null);
		}

		ArrayList<Serializable> parents = new ArrayList<Serializable>();
		Map<QName, Serializable> properties = nodeService.getProperties(node);

		parents = (ArrayList<Serializable>) properties.get(ClassificationService.PROP_PARENT);
		boolean classificationExists=false;
		if(parents!=null){
			for(Serializable each : parents){
				if(each.equals(classification.getUuid())){
					classificationExists=true;
					break;
				}
			}
		}else{
			parents = new ArrayList<Serializable>();
		}
		if(!classificationExists){
			parents.add(classification.getUuid());
			properties.put(ClassificationService.PROP_PARENT, parents);
			nodeService.addProperties(node, properties);
			AssociationRef assocRef = nodeService.createAssociation(classification.getNodeRef(), node, ClassificationService.ASSOC_CLASSIFICATION);
			if(assocRef!=null && assocRef.getSourceRef()!=null){
				response.setStatus(1);
				response.setMessage("Operación finalizada con éxito");
			}else{
				response.setStatus(-1);
				response.setMessage("Se produjo un error al crear la asociación de clasificación");
			}
		}

		return response;
	}

	public Response<Boolean> classify(Classification classification, String uuid){
		Response<Boolean> response = new Response<Boolean>();

		SearchService searchService = this.serviceRegistry.getSearchService();

		StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
		ResultSet resultSet=searchService.query(storeRef, SearchService.LANGUAGE_LUCENE,"@sys\\:node-uuid:" + uuid);
		if(resultSet.length()>0){
			this.classify(classification, resultSet.getNodeRef(0));
		}else{
			response.setStatus(-1);
			response.setMessage("Documento no encontrado");
		}


		return response;
	}

	@SuppressWarnings("unchecked")
	public Response<Boolean> unClassify(Classification classification, NodeRef node){
		Response<Boolean> response = new Response<Boolean>();

		NodeService nodeService = this.serviceRegistry.getNodeService();

		ArrayList<Serializable> parents = new ArrayList<Serializable>();
		Map<QName, Serializable> properties = nodeService.getProperties(node);
		ArrayList<Serializable> newParents = new ArrayList<Serializable>();

		parents = (ArrayList<Serializable>) properties.get(ClassificationService.PROP_PARENT);
		boolean classificationExists=false;
		if(parents!=null){
			for(Serializable each : parents){
				if(each.equals(classification.getUuid())){
					classificationExists=true;
				}else{
					newParents.add(each);
				}
			}
		}else{
			parents = new ArrayList<Serializable>();
		}
		if(classificationExists){
			properties.put(ClassificationService.PROP_PARENT, newParents);
			nodeService.addProperties(node, properties);

			nodeService.removeAssociation(classification.getNodeRef(), node, ClassificationService.ASSOC_CLASSIFICATION);
			response.setStatus(1);
			response.setMessage("Operación finalizada con éxito");
		}

		return response;
	}

	public Response<Boolean> unClassify(Classification classification, String uuid){
		Response<Boolean> response = new Response<Boolean>();

		SearchService searchService = this.serviceRegistry.getSearchService();

		StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
		ResultSet resultSet=searchService.query(storeRef, SearchService.LANGUAGE_LUCENE,"@sys\\:node-uuid:" + uuid);
		if(resultSet.length()>0){
			response = this.unClassify(classification, resultSet.getNodeRef(0));
		}else{
			response.setStatus(-1);
			response.setMessage("Documento no encontrado");
		}


		return response;
	}

	public Response<Boolean> unClassify(NodeRef node){
		Response<Boolean> response = new Response<Boolean>();


		return response;
	}

	public Response<Boolean> unClassify(Classification classification, boolean recurse, boolean onlyDocuments){
		Response<Boolean> response = new Response<Boolean>();


		return response;
	}

	public ServiceRegistry getServiceRegistry() {
		return serviceRegistry;
	}

	public void setServiceRegistry(ServiceRegistry serviceRegistry) {
		this.serviceRegistry = serviceRegistry;
	}

	private Response<Classification> getRoot(String area){
		Response<Classification> response = new Response<Classification>();

		try{
			StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
			NodeRef systemFolder = null;
			SearchService searchService = this.serviceRegistry.getSearchService();

			ResultSet resultSet = searchService.query(storeRef , SearchService.LANGUAGE_LUCENE,"PATH:\"/app:company_home/app:dictionary/cm:" + ISO9075.encode(area) + "\"");
			if(resultSet.length()>0){
				systemFolder = resultSet.getNodeRef(0);
			}else{
				systemFolder = createBaseFolder(area);
			}

			response = this.getByUuid(systemFolder.getId());
		}catch(Exception e){
			e.printStackTrace();
		}

		return response;
	}

	private NodeRef createBaseFolder(String name){

		NodeRef folderReturn= null;

		try{
			StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");
			NodeRef systemFolder = null;
			SearchService searchService = this.serviceRegistry.getSearchService();
			FileFolderService fileFolderService = this.serviceRegistry.getFileFolderService();

			ResultSet resultSet = searchService.query(storeRef , SearchService.LANGUAGE_LUCENE,"PATH:\"/app:company_home/app:dictionary\"");
			if(resultSet.length()>0){
				systemFolder = resultSet.getNodeRef(0);
				NodeRef folder = fileFolderService.create(systemFolder, name, ContentModel.TYPE_FOLDER).getNodeRef();
				if(folder!=null){
					folderReturn=  folder;
				}
			}
		}catch(Exception e){
			e.printStackTrace();
		}

		return folderReturn;
	}

	public NodeService getNodeService() {
		return nodeService;
	}

	public void setNodeService(NodeService nodeService) {
		this.nodeService = nodeService;
	}

	public ResultSet getResultSet() {
		return resultSet;
	}

	public void setResultSet(ResultSet resultSet) {
		this.resultSet = resultSet;
	}

}
