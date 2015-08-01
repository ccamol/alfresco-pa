var ALF_WEBSCRIPT_URL = "/arauco/getAllConsultsQuestions";
var idCategory= args.idCategory ? args.idCategory : null;
var idTender= args.idTender ? args.idTender : null;
var status = args.status ? args.status : null;
var stageStatus = args.stageStatus ? args.stageStatus : null;
var statusQueries = args.statusQueries ? args.statusQueries : null;
//logger.log("ENTRANDO A JS AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
	var params = new Array();
	params["idCategory"] = idCategory;
	params["idTender"] = idTender;
	params["status"] = status;
	params["stageStatus"] = status;
	var connector = remote.connect("alfresco");
	var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
//	logger.log("IMPRIMIENDO JSON");
//	logger.log(data);
	var result = eval('(' + data + ')');
	var resultSet = result["resultSet"];
model.resultSet = resultSet;
if(statusQueries == null){
	model.statusQueries = "0";
}else{
	model.statusQueries = statusQueries;
}
model.stageStatus = stageStatus;
model.idCategory = idCategory;
