var uuid = (args.uuid == null || args.uuid == undefined || args.uuid == '') ? null : args.uuid;

if (uuid == null) {
//	logger.log("### /dashlets/setTenderDocumentMetadata ### NULL FILE UUID - UPLOAD FAILED");
	model.resultSet = null;
} else {
//	logger.log("### /dashlets/setTenderDocumentMetadata ### FILE UUID: " + uuid);
	var url = "/arauco/setTenderDocumentMetadata";
	var params = new Array();
	
	for (arg in args) {
//		logger.log("### ADDING PARAMETER - " + arg + " = " + args[arg]);
		params[arg] = (args[arg] == '' || args[arg] == undefined || args[arg] == null) ? null : args[arg];
	}
	
	var connector = remote.connect("alfresco");
	var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");
//	logger.log("DATA RESPONSE: " + data);
	var result = eval('(' + data + ')');
}