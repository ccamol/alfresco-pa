package com.intellego.parquearauco.baseprocessorextension;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.alfresco.model.ContentModel;
import org.alfresco.repo.processor.BaseProcessorExtension;
import org.alfresco.service.ServiceRegistry;
import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.service.cmr.repository.NodeService;
import org.alfresco.service.cmr.repository.StoreRef;
import org.alfresco.service.cmr.search.ResultSet;
import org.alfresco.service.cmr.search.SearchService;
import org.alfresco.service.cmr.workflow.WorkflowInstance;
import org.alfresco.service.cmr.workflow.WorkflowService;
import org.alfresco.service.cmr.workflow.WorkflowTask;
import org.alfresco.service.cmr.workflow.WorkflowTaskQuery;
import org.alfresco.service.cmr.workflow.WorkflowTaskState;
import org.alfresco.service.namespace.QName;

import com.intellego.parquearauco.dto.DocumentWorkflow;
import com.intellego.parquearauco.dto.DocumentWorkflowTask;

public class DocumentWorkflowService extends BaseProcessorExtension {

	private ServiceRegistry serviceRegistry;

	public ServiceRegistry getServiceRegistry() {
		return serviceRegistry;
	}

	public void setServiceRegistry(ServiceRegistry serviceRegistry) {
		this.serviceRegistry = serviceRegistry;
	}

	public List<DocumentWorkflowTask> getTasksByWorkflow(String workflowid) {

		// lista para retorno
		List<DocumentWorkflowTask> workflowTaskList = new ArrayList<DocumentWorkflowTask>();

		// servicios
		WorkflowService workflowService = serviceRegistry.getWorkflowService();

		
		// consulta por las tareas
		WorkflowTaskQuery query = new WorkflowTaskQuery();
		query.setProcessId(workflowid);
		query.setTaskState(WorkflowTaskState.IN_PROGRESS);

		
		List<WorkflowTask> workflowTasks = workflowService.queryTasks(query,true);
		for (WorkflowTask workflowTask : workflowTasks) {
			
			DocumentWorkflowTask dwfTask = new DocumentWorkflowTask();
			dwfTask.setId(workflowTask.getId());
			dwfTask.setTitle(workflowTask.getTitle());
			dwfTask.setState(workflowTask.getState().name());
			if (workflowTask.getProperties().get(QName.createQName("http://www.alfresco.org/model/content/1.0","created")) != null)
				dwfTask.setCreated((Date) workflowTask.getProperties().get(QName.createQName("http://www.alfresco.org/model/content/1.0","created")));
			System.out.println("TITLE: " + workflowTask.getTitle());
			if(workflowTask.getTitle().equals("Flujo finalizado")){
				dwfTask.setState("Finalizado");
				if (workflowTask.getProperties().get(QName.createQName("http://www.alfresco.org/model/content/1.0","created")) != null)
					dwfTask.setCompletionDate((Date) workflowTask.getProperties().get(QName.createQName("http://www.alfresco.org/model/content/1.0","created")));
			}else{
				if (workflowTask.getProperties().get(QName.createQName("http://www.alfresco.org/model/bpm/1.0", "completionDate")) != null)
					dwfTask.setCompletionDate((Date) workflowTask.getProperties().get(QName.createQName("http://www.alfresco.org/model/bpm/1.0", "completionDate")));
			}
			if (workflowTask.getProperties().get(QName.createQName("http://www.alfresco.org/model/content/1.0","owner")) != null)
				dwfTask.setOwner(workflowTask.getProperties().get(QName.createQName("http://www.alfresco.org/model/content/1.0","owner")).toString());
			if(workflowTask.getProperties().get(QName.createQName("http://www.alfresco.org/model/bpm/1.0","comment")) != null)
				dwfTask.setComment(workflowTask.getProperties().get(QName.createQName("http://www.alfresco.org/model/bpm/1.0","comment")).toString());

			workflowTaskList.add(dwfTask);
		}

		query = new WorkflowTaskQuery();
		query.setProcessId(workflowid);
		query.setTaskState(WorkflowTaskState.COMPLETED);

		
		workflowTasks = workflowService.queryTasks(query,true);
		for (WorkflowTask workflowTask : workflowTasks) {
			
			DocumentWorkflowTask dwfTask = new DocumentWorkflowTask();
			dwfTask.setId(workflowTask.getId());
			dwfTask.setTitle(workflowTask.getTitle());
			dwfTask.setState(workflowTask.getState().name());
			if (workflowTask.getProperties().get(QName.createQName("http://www.alfresco.org/model/content/1.0","created")) != null)
				dwfTask.setCreated((Date) workflowTask.getProperties().get(QName.createQName("http://www.alfresco.org/model/content/1.0","created")));
			if (workflowTask.getProperties().get(QName.createQName("http://www.alfresco.org/model/bpm/1.0", "completionDate")) != null)
				dwfTask.setCompletionDate((Date) workflowTask.getProperties().get(QName.createQName("http://www.alfresco.org/model/bpm/1.0", "completionDate")));
			if (workflowTask.getProperties().get(QName.createQName("http://www.alfresco.org/model/content/1.0","owner")) != null)
				dwfTask.setOwner(workflowTask.getProperties().get(QName.createQName("http://www.alfresco.org/model/content/1.0","owner")).toString());
			if(workflowTask.getProperties().get(QName.createQName("http://www.alfresco.org/model/bpm/1.0","comment")) != null)
				dwfTask.setComment(workflowTask.getProperties().get(QName.createQName("http://www.alfresco.org/model/bpm/1.0","comment")).toString());

			workflowTaskList.add(dwfTask);
		}

		return workflowTaskList;

	}

	private Date getEndDate(String workflowid) {

		// lista para retorno
		Date endDate = null;
		
		// servicios
		WorkflowService workflowService = serviceRegistry.getWorkflowService();

		
		WorkflowTaskQuery query = new WorkflowTaskQuery();
		query.setProcessId(workflowid);
		query.setTaskState(WorkflowTaskState.IN_PROGRESS);

		
		List<WorkflowTask> workflowTasks = workflowService.queryTasks(query,true);
		for (WorkflowTask workflowTask : workflowTasks) {

			if(workflowTask.getTitle().equals("Flujo finalizado")){
				if (workflowTask.getProperties().get(QName.createQName("http://www.alfresco.org/model/content/1.0","created")) != null)
					endDate = (Date) workflowTask.getProperties().get(QName.createQName("http://www.alfresco.org/model/content/1.0","created"));
			}
		}

		return endDate;

	}

	private boolean isActive(String workflowid) {

		// lista para retorno
		boolean active = true;
		
		// servicios
		WorkflowService workflowService = serviceRegistry.getWorkflowService();

		
		WorkflowTaskQuery query = new WorkflowTaskQuery();
		query.setProcessId(workflowid);
		query.setTaskState(WorkflowTaskState.IN_PROGRESS);

		
		List<WorkflowTask> workflowTasks = workflowService.queryTasks(query,true);
		for (WorkflowTask workflowTask : workflowTasks) {

			if(workflowTask.getTitle().equals("Flujo finalizado")){
				active = false;
			}
		}
		
		return active;

	}
	
	public List<DocumentWorkflow> getWorkflowsByDocument(String uuid) {

		// lista para retorno
		List<DocumentWorkflow> documentWorkflowList = new ArrayList<DocumentWorkflow>();

		// servicios
		SearchService searchService = serviceRegistry.getSearchService();
		WorkflowService workflowService = serviceRegistry.getWorkflowService();
		NodeService nodeService = serviceRegistry.getNodeService();

		// buscando el documento
		StoreRef storeRef = new StoreRef(StoreRef.PROTOCOL_WORKSPACE,
				"SpacesStore");
		ResultSet resultSet = searchService.query(storeRef,
				SearchService.LANGUAGE_LUCENE, "@sys\\:node-uuid:" + uuid);

		// si encuentra el documento
		if (resultSet.length() > 0) {

			// buscando los workflows del documento
			NodeRef documentNodeRef = resultSet.getNodeRef(0);
			List<WorkflowInstance> workflowInstances = workflowService
					.getWorkflowsForContent(documentNodeRef, true);

			// iterando los workflow
			Iterator<WorkflowInstance> wfIterator = workflowInstances
					.iterator();
			while (wfIterator.hasNext()) {

				WorkflowInstance wfInstance = wfIterator.next();

				// propiedades del iniciador del flujo
				NodeRef initiator = wfInstance.getInitiator();
				Map<QName, Serializable> initiatorProps = nodeService
						.getProperties(initiator);
				boolean active = this.isActive(wfInstance.getId());
				if(active) active= wfInstance.isActive();
				
				DocumentWorkflow documentWorkflow = new DocumentWorkflow(
						wfInstance.getId(), wfInstance.getDefinition()
								.getTitle().toString(), wfInstance
								.getDefinition().getDescription().toString(),
						wfInstance.getStartDate(), this.getEndDate(wfInstance.getId()),
						active, initiatorProps.get(
								ContentModel.PROP_FIRSTNAME).toString(),
						initiatorProps.get(ContentModel.PROP_LASTNAME)
								.toString());
				documentWorkflowList.add(documentWorkflow);
			}

		}

		return documentWorkflowList;

	}

}
