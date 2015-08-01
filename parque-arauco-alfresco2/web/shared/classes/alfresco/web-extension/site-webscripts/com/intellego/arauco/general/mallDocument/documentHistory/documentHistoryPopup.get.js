if (args.uuid != null)
{
	// recibidos por parametros
	var uuid = args.uuid;
	var documentName = args.documentName;
	var nodeRef = "workspace://SpacesStore/"+uuid

	// llama al repo para buscar propiedades del documento actual
	var connector = remote.connect("alfresco");
	var documentData = connector.get("/arauco/getDocumentMetadata.json?uuid="+uuid+"&aspect=documentTypeAspectsList&prefix=pa");
	//crea el objeto json desde los datos
	var documentResult = eval('('+documentData+')');
	var document = documentResult['document'];


	// Llama al repo para buscar las versiones
	//var versionsResult = remote.call("/api/version?nodeRef=" + nodeRef);
	var versionsResult = connector.get("/api/version?nodeRef=" + nodeRef);
//	logger.log(versionsResult);
	// Crea objetos javascript desde la respuesta del server
	var versions = eval('(' + versionsResult + ')');

	// clasificando las versiones
	var foundCurrent = false;
	var versionGroup = "newerVersion";
	var htmlAssocs = null;
	for (var i=0;i<versions.length;i++)
	{
		if(i>0){
			versions[i].downloadURL = "/share/proxy/alfresco/api/node/content/" + versions[i].nodeRef.replace(":/", "") + "/" + versions[i].name + "?a=true";
			var htmlAssocs = connector.get("/components/arauco/documentsForVersion?uuid="+uuid+"&label=" + versions[i].label);
			versions[i].htmlAssocs=htmlAssocs;
		}else{
			versions[i].downloadURL = "/share/proxy/alfresco/api/node/content/" + nodeRef.replace(":/", "") + "/" + nodeRef.name + "?a=true";
			var htmlAssocs = connector.get("/components/arauco/documentsForCurrentVersion?uuid="+uuid);
			versions[i].htmlAssocs=htmlAssocs;
		}

	}

	// modelo para template
	model.uuid = uuid;
	model.nodeRef = nodeRef;
	model.versions = versions;  
	model.document = document;
	model.docinfo = document.docinfo;

	// propiedades personalizadas para el modelo
	if(document.customproperties != undefined && document.customproperties != null) {
		model.customproperties = document.customproperties;

		// en busca de las propiedades
		var mall = findObjectByKeyValue(document.customproperties, 'name', 'mall');
		var sucNumber = findObjectByKeyValue(document.customproperties, 'name', 'sucNumber');
		var section = findObjectByKeyValue(document.customproperties, 'name', 'section');
		var documentType = findObjectByKeyValue(document.customproperties, 'name', 'documentType');
		// si se encuentra la propiedad se crea objeto en modelo
		if (mall != null) model.mall = mall;
		if (sucNumber != null) model.sucNumber = sucNumber;
		if (section != null) model.section = section;
		if (documentType != null) model.documentType = documentType;
	}

}

function findObjectByKeyValue(array, key, value){
	// buscando un objeto en el arreglo segun el valor 
	// de la clave entregada
	for (var i = 0; i < array.length; i++) {
		if (array[i][key] === value) {
			return array[i];
		}
	}
	return null;
}