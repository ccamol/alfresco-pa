function main() {
	var uuid = args.uuid ? args.uuid : null;
	var id = args.id ? args.id : null;

	if (uuid != null) {

		var params = new Array();
		params["uuid"] = uuid;
		params["id"] = id;

		// llama al repo para buscar propiedades del documento actual
		var connector = remote.connect("alfresco");
		var url = "/arauco/deleteDocumentApplicant.json";
		var deleteData = connector.post(url, jsonUtils.toJSONString(params), "application/json");

		// crea el objeto json desde los datos
		var deleteResult = eval('(' + deleteData + ')');

		// modelo para template
		model.uuid = uuid;
		model.status = deleteResult.status;

	}
}

main();
