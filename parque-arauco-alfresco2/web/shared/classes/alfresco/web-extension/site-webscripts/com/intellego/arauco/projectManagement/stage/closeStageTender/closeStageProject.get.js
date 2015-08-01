var id= args.id ? args.id : null;
var tenderId= args.tenderId ? args.tenderId : null;

//logger.log("id: "+id);
//logger.log("tenderId: "+tenderId);

var url = "/arauco/closeStageTender";

if(id != null){

	var params = new Array();
	params["id"] = id;
	params["tenderId"] = tenderId;

	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");

	var result = eval('(' + data + ')');

	model.resultSet = result["resultSet"];
}else{
	model.resultSet = null;
}