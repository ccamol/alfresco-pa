function main() {
	
	var uuid = args.uuid ? args.uuid : null;
	var aspect = args.aspect ? args.aspect : null;  // aspecto = documentTypeAspectList
	var prefix = args.prefix ? args.prefix : null;
	
	if (uuid != null && aspect != null && prefix != null) {

		// busqueda del documento por uuid
		var node = search.findNode("workspace://SpacesStore/" + uuid);
		var documentId = node.properties["pa:documentTypeID"];
		var customproperties = "";

		// si contiene propiedad pa:documentTypeID
		if (documentId != null) {
			// buscando aspectos personalizadas
			customproperties = GetDictionaryService.service(aspect, documentId,
					prefix);
			
			model.customproperties = customproperties;
		}

		model.prefix = prefix;
		model.document = node;
	}
}

main();
