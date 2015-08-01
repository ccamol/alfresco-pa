var nodeType= args.nodeType ? args.nodeType : null;
var nodeId= args.nodeId ? args.nodeId : null;


var url = "/arauco/checkComplete";

var params = new Array();
params["nodeType"] = nodeType;
params["nodeId"] = nodeId;

var connector = remote.connect("alfresco");
var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");

var result = eval('(' + data + ')');
//logger.log('DATA: ' + data);
model.resultSet = result;