var idStage= args.idStage ? args.idStage : null;

var url = "/arauco/getStageById";

var params = new Array();
params["idStage"] = idStage;

var connector = remote.connect("alfresco");
var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");

//logger.log("data: "+data);

var result = eval('(' + data + ')');
model.resultSet = result;