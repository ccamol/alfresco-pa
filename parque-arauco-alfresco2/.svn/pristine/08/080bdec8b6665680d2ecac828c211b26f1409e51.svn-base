var uuid= args.uuid ? args.uuid : null;

if(uuid!=null ){
	
	var url="/arauco/parentRecurseFolders";
	
	var params = new Array();
	params["uuid"]= uuid;
	
	var connector = remote.connect("alfresco");
	var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");
	
	
	
	model.resultSet = data;
	
}

