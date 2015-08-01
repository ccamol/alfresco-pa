var ALF_WEBSCRIPT_URL = "/arauco/getStageTender";
var calendar= args.calendar ? args.calendar : null;


var params = new Array();
params["calendar"] = calendar;


var connector = remote.connect("alfresco");
var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
//logger.log("data: "+data);
var result = eval('(' + data + ')');
model.resultSet = result["resultSet"];
