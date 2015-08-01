var ALF_WEBSCRIPT_URL = "/arauco/getAllApplicants";
var ALF_WEBSCRIPT = "/arauco/getApplicants";
var idTender= args.idTender ? args.idTender : null;


var params = new Array();
params["idTender"] = idTender;


var connector = remote.connect("alfresco");
var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(""), "application/json");
var response = connector.post(ALF_WEBSCRIPT, jsonUtils.toJSONString(params), "application/json");
var resultSet = eval ('('+response+')');
var result = eval('(' + data + ')');
//logger.log("result= "+result);
model.resultSet = result["resultSet"];
model.resultSetApplicants = resultSet["resultSet"];



