	var url = "/arauco/getTypeProject";
	
	var connector = remote.connect("alfresco");
	
	
	
	var data = connector.post(url,jsonUtils.toJSONString(""),"application/json");

	var result = eval('(' + data + ')');
//logger.log(data);
	model.resultSet = result["resultSet"];
