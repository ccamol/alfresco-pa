function main() {

	var workflowid = args.workflowid ? args.workflowid : null;
	
	if (workflowid != null) {
		
		// llama al repo para buscar propiedades del documento actual
		var connector = remote.connect("alfresco");
		var tasksData = connector.get("/arauco/getTasksByWorkflow.json?workflowid=" + workflowid);
		
		// crea el objeto json desde la data
		var tasks = eval('(' + tasksData + ')');
		
		model.workflowid = workflowid;
		model.tasks = tasks;
		
	}
}

main();