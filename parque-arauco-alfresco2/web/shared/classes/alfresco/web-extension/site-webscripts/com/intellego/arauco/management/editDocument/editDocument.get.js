var uuid = (args.uuid == null || args.uuid == undefined || args.uuid == '') ? null : args.uuid;


if (uuid == null) {
//	logger.log("##### uuid UUID");
	model.resultSet = null;	
} else {
//	logger.log("##### uuid NOT NULL2");
	var url = "/arauco/editDocument";
	var params = new Array();
	var strParameters = "";
	
	for (arg in args) {
//		logger.log("##################### ADDING PARAMETER: " + arg + " = " + args[arg]);
		params[arg] = (args[arg] == '' || args[arg] == undefined || args[arg] == null) ? null : args[arg];
	}

//	logger.log("#7## ### ### ATTEMPTING TO CONNECT TO ALF");
	var connector = remote.connect("alfresco");
	connector.post(url, jsonUtils.toJSONString(params), "application/json");
}