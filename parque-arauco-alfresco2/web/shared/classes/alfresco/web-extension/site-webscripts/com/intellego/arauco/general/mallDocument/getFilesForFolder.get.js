var parent= args.parent ? args.parent : null;
var nodeType= args.nodeType ? args.nodeType : null;
var nodeId= args.nodeId ? args.nodeId : null;

var url = "/arauco/folderFiles";

var params = new Array();
params["parent"] = parent;
params["nodeType"] = nodeType;
params["nodeId"] = nodeId;

var connector = remote.connect("alfresco");
var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");

//logger.log('DATA: ' + data);
result = eval('(' + data + ')');
model.resultSet = result["resultSet"];
model.resultSetStatus = result["status"];
model.resultSetMessage = result["message"];