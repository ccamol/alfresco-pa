var ALF_WEBSCRIPT_URL = "/arauco/getStagesTenderById";
var connector = remote.connect("alfresco");
var filter= args.filter ? args.filter : null;

var params = new Array();
params["filter"] = filter;


var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
var result = eval('(' + data + ')');


model.resultSet = result["resultSet"];
