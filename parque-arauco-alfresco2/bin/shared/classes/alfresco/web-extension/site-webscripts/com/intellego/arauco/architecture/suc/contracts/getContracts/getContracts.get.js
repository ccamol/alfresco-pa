var filter= args.filter ? args.filter : null;
var currentDate = args.currentDate ? args.currentDate : null;

if(filter!=null){
	var url = "/arauco/detailsSucContracts";

	var params = new Array();
	params["filter"] = filter;

	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");

	var result = eval('(' + data + ')');
	if(result !== null){
		model.resultSet = result["resultSet"];
		model.currentDate = currentDate;
	}else{
		model.resultSet = null;
	}
}else{
	model.resultSet = null;
}