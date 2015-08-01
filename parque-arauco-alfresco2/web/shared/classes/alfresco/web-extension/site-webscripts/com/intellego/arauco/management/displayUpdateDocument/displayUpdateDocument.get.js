var uuid = (args.uuid == null) ? null : args.uuid;

if (uuid == null || uuid == undefined || uuid == '') {
	model.resultSet = null;
	model.dictState = "false";
} else {
	var connector = remote.connect("alfresco");
	
	var data = connector.get("/arauco/getDocumentMetadata.json?uuid="+uuid+"&aspect=documentTypeAspectsList&prefix=pa");
//	logger.log("### ACTUALIZAR DOCUMENTO ### RESPUESTA JSON: " + data);
	var result = eval('(' + data + ')');
	var document = result["document"];
	
	model.uuid = uuid;
	model.document = document;
}