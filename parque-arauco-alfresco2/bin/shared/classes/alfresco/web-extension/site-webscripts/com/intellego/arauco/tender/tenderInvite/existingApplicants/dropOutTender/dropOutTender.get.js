var ALF_WEBSCRIPT_URL = "/arauco/dropOutTender";
var idTender= args.idTender ? args.idTender : null;
var idApplicant= args.idApplicant ? args.idApplicant : null;


var params = new Array();
params["idTender"] = idTender;
params["idApplicant"] = idApplicant;


var connector = remote.connect("alfresco");
var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
var result = eval('(' + data + ')');
model.resultSet = result;
