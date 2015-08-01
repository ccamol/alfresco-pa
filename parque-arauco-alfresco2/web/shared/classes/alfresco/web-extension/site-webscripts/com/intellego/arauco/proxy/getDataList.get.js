var type= args.type ? args.type : null;
var prefix = args.prefix ? args.prefix : null;
var params = new Array();

if(type!=null && prefix!=null ){
	params["type"] = type;
	params["prefix"] = prefix;

	var url = "/arauco/listDataReports";
	
	var connector = remote.connect("alfresco");
	var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");
	model.resultSet = data;
}
