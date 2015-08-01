package com.intellego.parquearauco.workflow.delegate;

import java.util.Set;

import org.activiti.engine.delegate.DelegateExecution;
import org.activiti.engine.delegate.Expression;
import org.activiti.engine.delegate.JavaDelegate;
import org.activiti.engine.impl.cfg.ProcessEngineConfigurationImpl;
import org.activiti.engine.impl.context.Context;
import org.activiti.engine.impl.persistence.entity.VariableScopeImpl;
import org.alfresco.repo.processor.BaseProcessorExtension;
import org.alfresco.repo.security.authentication.AuthenticationUtil;
import org.alfresco.repo.workflow.activiti.ActivitiConstants;
import org.alfresco.service.ServiceRegistry;
import org.alfresco.service.cmr.security.AuthorityService;

public class AssignReviewers implements JavaDelegate{
	
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
	protected String setReviewers(String reviewersSelected, String counterExpression){
		String newReviewer= null;
		String[] reviewerList = reviewersSelected.split(",");
		int counterExpressionValue = Integer.parseInt(counterExpression);
		if(counterExpressionValue  != reviewerList.length){
			if(reviewerList[counterExpressionValue] != ""){
				newReviewer = reviewerList[counterExpressionValue];
			}
		}
		return newReviewer;
		
	}
	private Expression reviewers;  
	private Expression counter;
	@Override
	public void execute(DelegateExecution execution) throws Exception {
		String reviewersSelected = reviewers.getValue(execution).toString();
		String counterExpression = counter.getValue(execution).toString();
		String newReviewer = setReviewers(reviewersSelected,counterExpression);
		execution.setVariable("pawf_newReviewer", newReviewer);
		int counterExpressionValue = Integer.parseInt(counterExpression);
		counterExpressionValue++;
		execution.setVariable("pawf_counter", String.valueOf(counterExpressionValue));
		String[] reviewerList = reviewersSelected.split(",");
		if(counterExpressionValue  != reviewerList.length){
			execution.setVariable("pawf_conditionReviewer", "1");
		}else{	
			execution.setVariable("pawf_conditionReviewer", "0");
		}

	}
}
