var ALF_WEBSCRIPT_URL = "/arauco/getAllConsults";
var idTender= args.idTender ? args.idTender : null;
var statusQueries = args.statusQueries ? args.statusQueries : null;
var status = args.status ? args.status : null;
var stageStatus = args.stageStatus ? args.stageStatus : null;
//logger.log("statusQueries: "+statusQueries);

if (idTender != null && status !== null) {
	var params = new Array();
	params["idTender"] = idTender;
	params["status"] = status;
	var connector = remote.connect("alfresco");
	var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
//	logger.log("IMPRIMIENDO JSON");
//	logger.log(data);
	var result = eval('(' + data + ')');
	var resultSet = result["resultSet"];
}else {
	resultSet = null;
}
model.resultSet = resultSet;
if(statusQueries == null){
	model.statusQueries = "0";
}else{
	model.statusQueries = statusQueries;
}
model.stageStatus = stageStatus;
