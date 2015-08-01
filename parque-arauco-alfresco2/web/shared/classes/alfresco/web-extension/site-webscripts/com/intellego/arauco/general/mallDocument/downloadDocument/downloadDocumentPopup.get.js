function main() {

	var uuid = args.uuid ? args.uuid : null;		
	var documentName = args.documentName ? args.documentName : null;
	
	if (uuid != null && documentName != null){
		
		// llama al repo para buscar propiedades del documento actual
		var connector = remote.connect("alfresco");
		var documentData = connector.get("/arauco/getDownloadAssocs.json?uuid="+uuid);
//		logger.log(documentData);
		//crea el objeto json desde los datos
		var downloables = eval('('+documentData+')');		

		model.downloables = downloables["resultSet"];
		model.uuid = uuid;
		model.documentName = documentName;
	}
	
}

main();

//var documentDownloadUrl = "/share/proxy/alfresco/api/node/content/workspace/SpacesStore/"+ uuid +"/"+ documentName +"?a=true";