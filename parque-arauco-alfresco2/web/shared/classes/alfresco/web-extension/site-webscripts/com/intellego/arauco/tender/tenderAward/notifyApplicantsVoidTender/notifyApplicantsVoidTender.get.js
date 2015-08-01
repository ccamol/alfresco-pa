var ALF_WEBSCRIPT_URL = "/arauco/notifyApplicantsVoidTender";
var idTender= args.idTender ? args.idTender : null;


var params = new Array();
params["idTender"] = idTender;

var connector = remote.connect("alfresco");
var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
//logger.log(data);
var result = eval('(' + data + ')');

model.resultSet = result;