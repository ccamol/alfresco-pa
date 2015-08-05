	var url = "/arauco/getMallProjectThirdParty";
	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(""),"application/json");
//	logger.log("data: "+data);
	var result = eval('(' + data + ')');
	model.resultSet = result;
