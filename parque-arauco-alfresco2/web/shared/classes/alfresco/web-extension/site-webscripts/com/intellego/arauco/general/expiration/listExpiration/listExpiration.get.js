var ALF_WEBSCRIPT_URL = "/arauco/listExpiration";
var params = new Array();
var id = args.id ? args.id : null;
var nodeType = args.nodeType ? args.nodeType : null;
var nodeId = args.nodeId ? args.nodeId : null;

params["id"] = id;
params["nodeType"] = nodeType;
params["nodeId"] = nodeId;

var connector = remote.connect("alfresco");
var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");

var result = eval('(' + data + ')');
//logger.log(data);
if(result!=null && result!=undefined){
	model.resultSet = result["resultSet"];
}

