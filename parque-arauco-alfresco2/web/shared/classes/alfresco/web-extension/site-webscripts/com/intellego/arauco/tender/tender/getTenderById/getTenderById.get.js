var ALF_WEBSCRIPT_URL = "/arauco/getTenderById";
var filter= args.filter ? args.filter : null;


var params = new Array();
params["filter"] = filter;


var connector = remote.connect("alfresco");
var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
//logger.log(data);
var result = eval('(' + data + ')');

model.resultSet = result;
//model.resultSet = result["resultSet"];