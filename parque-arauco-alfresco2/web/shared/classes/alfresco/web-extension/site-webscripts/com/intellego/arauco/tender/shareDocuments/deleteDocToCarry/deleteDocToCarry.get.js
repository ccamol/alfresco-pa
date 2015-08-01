var ALF_WEBSCRIPT_URL = "/arauco/deleteDocToCarry";
var idDocToCarry= args.idDocToCarry ? args.idDocToCarry : null;

var params = new Array();

params["idDocToCarry"] = idDocToCarry;


var connector = remote.connect("alfresco");
var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
//logger.log(data);
var result = eval('(' + data + ')');

model.resultSet = result;