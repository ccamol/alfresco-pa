package com.intellego.parquearauco.workflow.delegate;

import java.util.List;

import org.activiti.engine.delegate.DelegateExecution;
import org.activiti.engine.delegate.Expression;
import org.activiti.engine.delegate.JavaDelegate;
import org.activiti.engine.impl.cfg.ProcessEngineConfigurationImpl;
import org.activiti.engine.impl.context.Context;
import org.alfresco.repo.security.authentication.AuthenticationUtil;
import org.alfresco.repo.workflow.activiti.ActivitiConstants;
import org.alfresco.service.ServiceRegistry;
import org.alfresco.service.cmr.repository.ChildAssociationRef;
import org.alfresco.service.cmr.repository.NodeRef;
import org.alfresco.service.cmr.repository.NodeService;
import org.alfresco.service.cmr.workflow.WorkflowInstance;
import org.alfresco.service.cmr.workflow.WorkflowPath;
import org.alfresco.service.cmr.workflow.WorkflowService;
import org.alfresco.service.cmr.workflow.WorkflowTask;

public class DeleteDocument implements JavaDelegate{

	DelegateExecution execution;
	ServiceRegistry serviceRegistry = getServiceRegistry();

	protected ServiceRegistry getServiceRegistry() {

		ProcessEngineConfigurationImpl config = Context.getProcessEngineConfiguration();

		if (config != null) {

			// Fetch the registry that is injected in the activiti spring-configuration

			ServiceRegistry registry = (ServiceRegistry) config.getBeans().get(ActivitiConstants.SERVICE_REGISTRY_BEAN_KEY);

			if (registry == null) {

				throw new RuntimeException(

						"Service-registry not present in ProcessEngineConfiguration beans, expected ServiceRegistry with key" + 

	                           ActivitiConstants.SERVICE_REGISTRY_BEAN_KEY);

			}

			return registry;

		}

		throw new IllegalStateException("No ProcessEngineCOnfiguration found in active context");

	}

	public Expression idTask;

	@Override
	public void execute(DelegateExecution execution) throws Exception {
		this.execution = execution;
		this.remove(idTask.getValue(execution).toString());

	}
	
	private Boolean remove(final String taskId){
		return AuthenticationUtil.runAs(new AuthenticationUtil.RunAsWork<Boolean>() {
			public Boolean doWork(){
				Boolean response = false;
				WorkflowService workflowService = serviceRegistry.getWorkflowService();
				NodeService nodeService = serviceRegistry.getNodeService();
				try{
					WorkflowTask task = workflowService.getTaskById("activiti$" + taskId);

					WorkflowPath path = task.getPath();
					WorkflowInstance instance = path.getInstance();

					NodeRef itemPackage = instance.getWorkflowPackage();
					List<ChildAssociationRef> childs = nodeService.getChildAssocs(itemPackage);

					for(ChildAssociationRef each : childs){
						nodeService.deleteNode(each.getChildRef());
						response=true;
					}
				}catch(Exception e){
					e.printStackTrace();
				}
				return response;
			}

		}, "admin");
	}

}
