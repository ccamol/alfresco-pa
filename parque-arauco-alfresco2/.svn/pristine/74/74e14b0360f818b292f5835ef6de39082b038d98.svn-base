function main() {

	if (args.uuid!=null && args.label!=null) {

		var uuid = args.uuid;
		var label = args.label;
		
		// llama al repo para buscar propiedades del documento actual
		var connector = remote.connect("alfresco");
		var documentData = connector.get("/arauco/getDocumentMetadata.json?uuid="+uuid+"&aspect=documentTypeAspectsList&prefix=pa");
		//crea el objeto json desde los datos
		var documentResult = eval('('+documentData+')');
		var document = documentResult['document'];
		

		// datos para el modelo
		model.uuid = uuid;
		model.label = label;
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

main();