function main() {

	var workflowid = args.workflowid ? args.workflowid : null; 
	
	if (workflowid != null) {

		var workflowTasks = DocumentWorkflowService.getTasksByWorkflow(workflowid);
		
		model.workflowTasks = workflowTasks;
		
	}
}

main();