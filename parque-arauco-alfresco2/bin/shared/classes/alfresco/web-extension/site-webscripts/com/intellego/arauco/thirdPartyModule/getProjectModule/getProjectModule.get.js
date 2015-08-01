var filter= args.filter ? args.filter : null;

if(filter!=null){
	var url = "/arauco/getProjectModule";

	var params = new Array();
	params["filter"] = filter;

	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");

	var result = eval('(' + data + ')');

//	logger.log("RESPUESTA: " + data);
	
	model.resultSet = result["resultSet"];
}else{
	model.resultSet = null;
}
