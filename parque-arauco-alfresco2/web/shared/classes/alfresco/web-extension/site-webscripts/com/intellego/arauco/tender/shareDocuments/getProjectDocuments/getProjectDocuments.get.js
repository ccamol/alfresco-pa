var ALF_WEBSCRIPT_URL = "/arauco/getProjectDocuments";
var params = new Array();
var paramsToCompare = new Array();
var projectId = args.projectId ? args.projectId : null;
var nodeType = args.nodeType ? args.nodeType : null;
var idTender = args.idTender ? args.idTender : null;
var type = args.type ? args.type : null;
var stageStatus = args.stageStatus ? args.stageStatus : null;

params["nodeType"] = nodeType;
params["projectId"] = projectId;
paramsToCompare["idTender"] = idTender;
paramsToCompare["type"] = type;

var connector = remote.connect("alfresco");
var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");

var result = eval('(' + data + ')');
model.resultSet = result["resultSet"];


var ALF_WEBSCRIPT_URL_TO_COMPARE = "/arauco/getDocsToCarryByTender";

var dataWS = connector.post(ALF_WEBSCRIPT_URL_TO_COMPARE, jsonUtils.toJSONString(paramsToCompare), "application/json");

var resultWS = eval('(' + dataWS + ')');
model.response = resultWS["resultSet"];

model.stageStatus = stageStatus;