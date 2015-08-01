package com.intellego.parquearauco.baseprocessorextension;

import java.util.Iterator;

import org.alfresco.repo.processor.BaseProcessorExtension;
import org.alfresco.service.ServiceRegistry;
import org.alfresco.service.cmr.repository.StoreRef;
import org.alfresco.service.cmr.search.ResultSet;
import org.alfresco.service.cmr.search.SearchService;
import org.alfresco.service.cmr.version.Version;
import org.alfresco.service.cmr.version.VersionHistory;
import org.alfresco.service.cmr.version.VersionService;
import org.alfresco.service.cmr.workflow.WorkflowService;

import com.intellego.parquearauco.dto.Response;

public class VersioningService extends BaseProcessorExtension {

	private ServiceRegistry serviceRegistry;

	public Response<Boolean> promote(String uuid, String versionLabel) {

		System.out.println("------------- 0 ------------------");
		System.out
				.println("uuid ->" + uuid + " versionLabel ->" + versionLabel);
		
		// obteniendo servicios
		Response<Boolean> response = new Response<Boolean>();
		VersionService versionService = serviceRegistry.getVersionService();
		SearchService searchService = serviceRegistry.getSearchService();
		WorkflowService workflowService = serviceRegistry.getWorkflowService();

		// busqueda del nodo
		StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE,
				"SpacesStore");
		ResultSet resultSet = searchService.query(storeRef,
				SearchService.LANGUAGE_LUCENE, "@sys\\:node-uuid:" + uuid);

		// si encuentra el nodo
		if (resultSet.length() > 0) {

			// workflowService.getWorkflowsForContent(arg0, arg1)

			VersionHistory versionHistory = versionService.getVersionHistory(resultSet.getNodeRef(0));
			Version version = versionHistory.getVersion(versionLabel);
			// Version currentVersion =
			// versionService.getCurrentVersion(resultSet
			// .getNodeRef(0));

			System.out.println("--- iterando todas las versiones ---");
			Iterator<Version> allVersions = versionHistory.getAllVersions()
					.iterator();
			while (allVersions.hasNext()) {
				Version element = allVersions.next();
				System.out.print("VersionLabel: " + element.getVersionLabel()
						+ " Tipo: " + element.getVersionType());
				System.out.println("\n");
			}
			System.out.println("--- Fin iterando todas las versiones ---");

			System.out.println("versioned: "
					+ version.getVersionedNodeRef().getId());
			System.out.println("VersionLabel: " + version.getVersionLabel());
			System.out.println("Frozen: " + version.getFrozenStateNodeRef());
			System.out.println("Frozen id: " + version.getFrozenStateNodeRef().getId());
			System.out.println("versionType: " + version.getVersionType());
			System.out.println("------------- 0 ------------------");
			
			versionService.revert(resultSet.getNodeRef(0), version, true);
			
			response.setMessage("Versión promovida");
			response.setStatus(1);
			
		} else {
			
			response.setMessage("Nodo no entrado");
			response.setStatus(-1);
			
		}
		
		return response;
	}

	public ServiceRegistry getServiceRegistry() {
		return serviceRegistry;
	}

	public void setServiceRegistry(ServiceRegistry serviceRegistry) {
		this.serviceRegistry = serviceRegistry;
	}

}
