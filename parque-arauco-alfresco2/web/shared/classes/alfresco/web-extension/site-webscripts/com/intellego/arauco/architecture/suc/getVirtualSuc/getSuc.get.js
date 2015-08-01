var filter= args.filter ? args.filter : null;
var sucType= args.sucType ? args.sucType : null;

if(filter!=null){
	var url = "/arauco/getSuc";

	var params = new Array();
	params["filter"] = filter;
//	logger.log("filter: "+filter);
	params["sucType"] = sucType;
//	logger.log("sucType: "+sucType);

	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");

	var result = eval('(' + data + ')');

	model.resultSet = result["resultSet"];
}else{
	model.resultSet = null;
}

connector = remote.connect("alfresco");
model.remote = connector;
