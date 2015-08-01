var idProject= args.idProject ? args.idProject : null;	
var urlSelected = "/arauco/getGroupSelected";
var paramSelected = new Array();
paramSelected["idProject"] = idProject;

var connectorSelected = remote.connect("alfresco");
var dataSelected = connectorSelected.post(urlSelected, jsonUtils.toJSONString(paramSelected), "application/json");
//logger.log(dataSelected);
var result = eval('(' + dataSelected + ')');
model.resultSet = result["resultSet"];







