var idProject= args.idProject ? args.idProject : null;	
var uuid= args.uuid ? args.uuid : null;	
var idStage= args.idStage ? args.idStage : null;	
var urlSelected = "/arauco/sharedDocumentSelected";

var paramSelected = new Array();
paramSelected["idProject"] = idProject;
paramSelected["uuid"] = uuid;
paramSelected["idStage"] = idStage;

var connectorSelected = remote.connect("alfresco");
var dataSelected = connectorSelected.post(urlSelected, jsonUtils.toJSONString(paramSelected), "application/json");
//logger.log(dataSelected);
var result = eval('(' + dataSelected + ')');
model.resultSet = result["resultSet"];