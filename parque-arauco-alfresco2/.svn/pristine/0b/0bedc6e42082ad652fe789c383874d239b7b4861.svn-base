function main() {

	var uuid = args.uuid ? args.uuid : null;
	
	if (uuid != null) {

		var documentWorkflows = DocumentWorkflowService.getWorkflowsByDocument(uuid);
		
		model.documentWorkflows = documentWorkflows;
		
	}
}

main();