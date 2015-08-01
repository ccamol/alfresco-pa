var ALF_WEBSCRIPT_URL = "/arauco/enableParticipants";
var idTender= args.idTender ? args.idTender : null;
var participant= args.participant ? args.participant : null;


var params = new Array();
params["idTender"] = idTender;
params["participant"] = participant;


var connector = remote.connect("alfresco");
var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
var result = eval('(' + data + ')');
model.resultSet = result;
