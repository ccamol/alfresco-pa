var id= args.id ? args.id : null;
var projectId= args.projectId ? args.projectId : null;
var siteId= args.siteId ? args.siteId : null;
var stageStatus= args.stageStatus ? args.stageStatus : null;

//logger.log("id: "+id);
//logger.log("projectId: "+projectId);

var url = "/arauco/closeStage";

if(id != null){

//	logger.log("Id: "+id);
	var params = new Array();
	params["id"] = id;
	params["projectId"] = projectId;
	params["siteId"] = siteId;
	params["stageStatus"] = stageStatus;

	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");

	var result = eval('(' + data + ')');

	model.resultSet = result["resultSet"];
}else{
	model.resultSet = null;
}