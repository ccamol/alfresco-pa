var filter= args.filter ? args.filter : null;

if(filter!=null){
	filter = filter.replace(".", "");
	var url = "/arauco/getSucProjectGroup";

	var params = new Array();
	params["filter"] = filter;

	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");

	var result = eval('(' + data + ')');
	model.resultSet = result["resultSet"];
}else{
	model.resultSet = null;
}
