function main() {
	var uuid = args.uuid ? args.uuid : null;
	var documentName = args.documentName ? args.documentName : null;
	if (uuid != null && documentName != null) {
		// habilitando el conector a alfresco
		var connector = remote.connect("alfresco");
		var data = connector.get("/arauco/getDocumentMetadata.json?uuid="+ uuid + "&aspect=documentTypeAspectsList&prefix=pa");
//		logger.log("### ACTUALIZAR DOCUMENTO ### RESPUESTA JSON: " + data);
		var result = eval('(' + data + ')');
		var document = result["document"];
		model.uuid = uuid;
		model.document = document;
		
		
//		// crea el objeto json desde los datos
//		var result = eval('(' + data + ')');
//		var document = result['document'];
//		logger.log("result: "+document);
//		// modelo para vista
//		model.document = document;
//		model.docinfo = document.docinfo;
//		logger.log("CUSTOM PROPERTIES: "+document.customproperties);
//		if (document.customproperties != undefined
//				&& document.customproperties != null) {
//			logger.log("ctrl-001");
//			
//			var cpgrouped = groupCustomProperties(document.customproperties);
//			logger.log("cpgrouped: "+cpgrouped);
//			for (var i = 0; i < cpgrouped.length; i++) {
//				logger.log("Aspecto: " + cpgrouped[i].titleAspect);
//				var cp = cpgrouped[i].customproperties;
//				for (var j = 0; j < cp.length; j++) {
//					logger.log("-->");
//					logger.log("--> cp.name: " + cp[j]);
//					logger.log("--> cp.name: " + cp[j].name);
//					logger.log("--> cp.title: " + cp[j].title);
//					logger.log("--> cp.value: " + cp[j].value);
//				}
//			}
//			
//			model.customProp = document.customproperties;
//			model.cpgrouped = cpgrouped;
//		}
//		model.aspects = document.aspects;
//		model.uuid = uuid;
	}

}

function groupCustomProperties(orig) {
	var newArr = [], aspects = {}, newItem, i, j, cur;
	for (i = 0, j = orig.length; i < j; i++) {
		cur = orig[i];
		if (!(cur.aspect in aspects)) {
			aspects[cur.aspect] = {
				aspect : cur.aspect,
				titleAspect: cur.titleAspect,
				customproperties : []
			};
			newArr.push(aspects[cur.aspect]);
		}
		var cp = {name: cur.name, title: cur.title, value: cur.value};
		aspects[cur.aspect].customproperties.push(cp);
	}
	return newArr;
}

main();