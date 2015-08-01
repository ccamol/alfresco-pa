var ALF_WEBSCRIPT_URL = "/arauco/getDocsToCarryByTender";
var params = new Array();
var idTender = args.idTender ? args.idTender : null;
var type = args.type ? args.type : null;
var stageStatus = args.stageStatus ? args.stageStatus : null;

params["idTender"] = idTender;
params["type"] = type;

var connector = remote.connect("alfresco");
var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");

var result = eval('(' + data + ')');
model.resultSet = result["resultSet"];
model.stageStatus = stageStatus;
model.type = type;