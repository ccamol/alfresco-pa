var idProject= args.idProject ? args.idProject : null;	
var uuid= args.uuid ? args.uuid : null;	
var idStage= args.idStage ? args.idStage : null;	
var urlAll = "/arauco/getSharedDocument";

var paramsAll = new Array();
paramsAll["idProject"] = idProject;
paramsAll["uuid"] = uuid;
paramsAll["idStage"] = idStage;

var connectorAll = remote.connect("alfresco");
var dataAll = connectorAll.post(urlAll, jsonUtils.toJSONString(paramsAll), "application/json");
//logger.log(dataAll);
var result = eval('(' + dataAll + ')');
model.resultSet = result["resultSet"];

