var ALF_WEBSCRIPT_URL = "/arauco/getConsultsApplicant";
var idTender= args.idTender ? args.idTender : null;
var idTypeStage = args.idTypeStage ? args.idTypeStage : null;
if (idTender != null && idTypeStage != null) {
	var params = new Array();
	params["idTender"] = idTender;
	params["idTypeStage"] = idTypeStage;
	
	var connector = remote.connect("alfresco");
	var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
//	logger.log(data);
	var result = eval('(' + data + ')');
	var resultSet = result["resultSet"];
}else {
	resultSet = null;
}
model.resultSet = resultSet;