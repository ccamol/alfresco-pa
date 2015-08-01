	var url = "/arauco/getStatusProject";
	
	var connector = remote.connect("alfresco");
	
	
	
	var data = connector.post(url,jsonUtils.toJSONString(""),"application/json");
//logger.log("JSON:"+ data);
	var result = eval('(' + data + ')');

	model.resultSet = result["resultSet"];
