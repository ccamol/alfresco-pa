var nodeType = args.nodeType ? args.nodeType : null;
var nodeId = args.nodeId ? args.nodeId : null;
var documentId = args.documentId ? args.documentId : null;
var uuid = args.uuid ? args.uuid : null;
var comment = args.comment ? args.comment : null;

var url = "/arauco/saveComment";

var params = new Array();
params["nodeType"] = nodeType;
params["nodeId"] = nodeId;
params["documentId"] = documentId;
params["uuid"] = uuid;
params["comment"] = comment;

var connector = remote.connect("alfresco");
var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");

model.resultSet = data;

