//logger.log("SHARE uuid: " + uuid);
var uuid = args.uuid ? args.uuid : null;

if (uuid != null) {
	
	var params = new Array();
	params["uuid"] = uuid;
	
	// llama al repo para buscar propiedades del documento actual
	var connector = remote.connect("alfresco");
	var url = "/components/arauco/deleteComments";
	var deleteData = connector.post(url, jsonUtils.toJSONString(params), "application/json");
}
