var url = "/arauco/getType";
var connector = remote.connect("alfresco");
var data = connector.post(url,jsonUtils.toJSONString(""),"application/json");
var result = eval('(' + data + ')');


logger.log("==================Log===================");
model.resultSet = result["resultSet"];
logger.log(result);