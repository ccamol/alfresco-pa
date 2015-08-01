var filter= args.filter ? args.filter : null;

if(filter!=null){
	var url = "/arauco/mallProjectArchitecture";

	var params = new Array();
	params["filter"] = filter;

	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");
	logger.log(data);
	var result = eval('(' + data + ')');
	logger.log(result);
	model.resultSet = result["resultSet"];
}else{
	model.resultSet = null;
}

