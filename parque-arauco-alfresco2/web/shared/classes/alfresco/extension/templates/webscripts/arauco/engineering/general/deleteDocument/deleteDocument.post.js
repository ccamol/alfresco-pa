function main() {

	var bodyContent = eval('(' + requestbody.content + ')');	
	var uuid = bodyContent.uuid ? bodyContent.uuid : null;
	var status = false;

	if (uuid != null) {

		var query = '@sys\\:node-uuid:' + uuid;
		var resultSet = search.luceneSearch(query);
		if (resultSet.length > 0) {

			var workflowDefinition = workflow
					.getDefinitionByName("activiti$deleteDocumentProcess");
			var workflowPackage = workflow.createPackage();

			var workflowParameters = [];
			workflowParameters.workflowName = "activiti$deleteDocumentProcess";
			workflowParameters["bpm:workflowDescription"] = "Solicitud de eliminación para documento "
					+ resultSet[0].properties["pa:documentType"];
			workflowParameters["bpm:percentComplete"] = "100";
			workflowParameters["bpm:startDate"] = new Date();
			workflowParameters["bpm:workflowPriority"] = 2;
			var workflowPath = workflowDefinition.startWorkflow(
					workflowPackage, workflowParameters);

			var tasks = workflowPath.getTasks();
			for (task in tasks) {
				WorkflowUtils.addDocument(tasks[task].getId(), uuid);
				for ( var assocNode in resultSet[0].assocs["pa:downlaodAssoc"]) {
					WorkflowUtils.addDocument(tasks[task].getId(),
							resultSet[0].assocs["pa:downlaodAssoc"][assocNode]
									.getId());
				}
				tasks[task].endTask(null);
			}
			status = true;
		}
	}
	
	model.status = status;
}

main();