var ALF_WEBSCRIPT_URL = "/arauco/getTenders";



var connector = remote.connect("alfresco");
var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(""), "application/json");
//logger.log(data);
var result = eval('(' + data + ')');

model.resultSet = result["resultSet"];
//model.resultSet = result["resultSet"];