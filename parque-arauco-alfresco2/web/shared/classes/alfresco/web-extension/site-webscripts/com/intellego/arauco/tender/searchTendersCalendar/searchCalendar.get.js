var ALF_WEBSCRIPT_URL = "/arauco/getStageTenderCalendar";
var calendar= args.calendar ? args.calendar : null;


var params = new Array();
params["calendar"] = calendar;


var connector = remote.connect("alfresco");
var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
var result = eval('(' + data + ')');
model.resultSet = result["resultSet"];
