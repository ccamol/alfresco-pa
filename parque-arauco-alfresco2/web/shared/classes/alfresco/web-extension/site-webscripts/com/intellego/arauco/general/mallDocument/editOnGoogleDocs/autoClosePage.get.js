function main() {

	if (args.uuid != null && args.documentName != null) {
		// recibidos por parametros
		var uuid = args.uuid;
		var documentName = args.documentName;
		var nodeRef = "workspace://SpacesStore/" + uuid

		// llama al repo para buscar propiedades del documento actual
		var connector = remote.connect("alfresco");
		var documentData = connector
				.get("/arauco/getDocumentMetadata.json?uuid=" + uuid
						+ "&aspect=documentTypeAspectsList&prefix=pa");
		// crea el objeto json desde los datos del documento
		var documentResult = eval('(' + documentData + ')');
		var document = documentResult['document'];
		var documentMimetype = document.docinfo.mimetype;
		var documentLocked = document.docinfo.locked;
		var stateUrl = 'http://192.168.210.129:8080/share/page/site/arauco/projectManagement';
		var returnUrl = 'site/arauco/projectManagement';

		// solo los documentos no bloqueados se pueden editar en linea
		if (documentLocked == 'No') {
			
//			logger.log("documento no bloqueado");

			// llama al repo para autenticar google docs
			// http://192.168.210.129:8080/alfresco/service/googledocs/authurl?state=http://192.168.210.129:8080/share/page/site/arauco/projectManagement&override=true
			var authUrl = connector.call("/googledocs/authurl?state=" + stateUrl + "&override=true");
			var authUrlResult = eval('(' + authUrl + ')');
			var authenticated = authUrlResult.authenticated;

			// si autenticacion es correcta
			if (authenticated == true) {

				// exportable
				// http://192.168.210.129:8080/share/proxy/alfresco/googledocs/exportable?mimetype=application/vnd.openxmlformats-officedocument.spreadsheetml.sheet&
				var exportable = connector.call("/googledocs/exportable?mimetype="
								+ documentMimetype + "&");
				var exportableResult = eval('(' + exportable + ')');

				// complete auth
				// http://192.168.210.129:8080/alfresco/service/googledocs/completeauth?access_token={access_token}
				// var access_token = authUrlResult.authURL;
				// var completeAuth =
				// connector.get("/googledocs/completeauth?access_token="+access_token);
				// var completeAuthResult = eval('(' + completeAuth + ')');

				// upload content
				// http://192.168.210.129:8080/share/proxy/alfresco/googledocs/uploadContent?nodeRef=workspace%3A%2F%2FSpacesStore%2F038afec1-0762-4602-8ff0-d2d8bbea6746
				var uploadContent = connector.call("/googledocs/uploadContent?nodeRef=" + nodeRef);
				var uploadContentResult = eval('(' + uploadContent + ')');
				if (uploadContentResult.nodeRef) {
					// http://192.168.210.129:8080/share/page/site/arauco/googledocsEditor?nodeRef=workspace%3A%2F%2FSpacesStore%2F038afec1-0762-4602-8ff0-d2d8bbea6746&return=site/arauco/projectManagement
					var editUrl = "http://192.168.210.129:8080/share/page/site/arauco/googledocsEditor?nodeRef="
							+ uploadContentResult.nodeRef
							+ "&return="
							+ returnUrl;
					model.editUrl = editUrl;
					model.status = true;
				} else {
//					logger.log("no se subio");
					model.status = false;
					model.statusmessage = "No se pudo subir el documento en Google Docs";
				}

//				logger.log("editando en google docs");
//				logger.log("uuid -> " + uuid);
//				logger.log("documentName -> " + documentName);
//				logger.log("nodeRef -> " + nodeRef);
//				logger.log("mimetype -> " + documentMimetype);
//				logger.log("stateUrl -> " + stateUrl);
//				logger.log("returnUrl -> " + returnUrl);
//				logger.log("authUrlResult.authenticated -> "
						+ authUrlResult.authenticated);
				if (exportableResult)
//					logger.log("export_action ->"
							+ exportableResult.export_action);
				if (uploadContentResult) {
//					logger.log("nodeRef -> " + uploadContentResult.nodeRef);
//					logger.log("editUrl -> " + editUrl);
				}
			}
		} else {
//			logger.log("documento BLOQUEADO");
			model.status = false;
			model.statusmessage = "El documento se encuentra bloqueado y no se puede editar en linea";
		}
			
	}
}

main();