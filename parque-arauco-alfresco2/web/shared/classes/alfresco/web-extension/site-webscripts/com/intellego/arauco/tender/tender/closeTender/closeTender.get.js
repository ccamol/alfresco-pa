var ALF_WEBSCRIPT_URL = "/arauco/closeTender";
var idTender= args.idTender ? args.idTender : null;


var params = new Array();
params["idTender"] = idTender;


var connector = remote.connect("alfresco");
var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
var result = eval('(' + data + ')');
model.resultSet = result;
