var nodeType= args.nodeType ? args.nodeType : null;
var nodeId= args.nodeId ? args.nodeId : null;
var aclId= args.aclId ? args.aclId : null;
var rolId= args.rolId ? args.rolId : null;
var username= args.username ? args.username : null;

var url = "/arauco/addUpdateAcl";

var params = new Array();
params["nodeType"] = nodeType;
params["nodeId"] = nodeId;
params["aclId"] = aclId;
params["rolId"] = rolId;
params["username"] = username;

var connector = remote.connect("alfresco");
var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");

model.response = data;







