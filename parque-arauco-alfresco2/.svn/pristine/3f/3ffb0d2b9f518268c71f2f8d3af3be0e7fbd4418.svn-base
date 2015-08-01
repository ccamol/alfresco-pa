var status= args.status ? args.status : null;

if(status!=null){
	var url = "/arauco/mallProjectContractor";

	var params = new Array();
	params["status"] = status;

	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");
	
//	logger.log("data: "+data);
	
	var result = eval('(' + data + ')');

	model.resultSet = result["resultSet"];
	
	
}else{
	model.resultSet = null;
}