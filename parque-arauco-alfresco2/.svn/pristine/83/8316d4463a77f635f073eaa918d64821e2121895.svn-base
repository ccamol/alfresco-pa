var idProject= args.idProject ? args.idProject : null;	
var urlAll = "/arauco/getAllGroup";

var paramsAll = new Array();
paramsAll["idProject"] = idProject;

var connectorAll = remote.connect("alfresco");
var dataAll = connectorAll.post(urlAll, jsonUtils.toJSONString(paramsAll), "application/json");
//logger.log(dataAll);
var result = eval('(' + dataAll + ')');
model.resultSet = result["resultSet"];
