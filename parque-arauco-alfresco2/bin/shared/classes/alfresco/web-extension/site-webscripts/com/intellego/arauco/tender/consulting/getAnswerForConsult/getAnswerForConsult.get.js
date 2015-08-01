var ALF_WEBSCRIPT_URL = "/arauco/getAnswerForConsult";
var idConsult= args.idConsult ? args.idConsult : null;

if (idConsult != null ) {
	var params = new Array();
	params["idConsult"] = idConsult;
	var connector = remote.connect("alfresco");
	var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
	var result = eval('(' + data + ')');
	var resultSet = result["resultSet"];
}else {
	resultSet = null;
}
model.resultSet = resultSet;