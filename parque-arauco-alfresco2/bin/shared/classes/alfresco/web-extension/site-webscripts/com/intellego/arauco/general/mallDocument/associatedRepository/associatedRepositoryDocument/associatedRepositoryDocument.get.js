var nodeType= args.nodeType ? args.nodeType : null;
var nodeId= args.nodeId ? args.nodeId : null;
var uuidDocument= args.uuidDocument ? args.uuidDocument : null;
var uuidFolder= args.uuidFolder ? args.uuidFolder : null;

var url = "/arauco/associatedRepositoryDocument";

var params = new Array();
params["nodeType"] = nodeType;
params["nodeId"] = nodeId;
params["uuidDocument"] = uuidDocument;
params["uuidFolder"] = uuidFolder;

var connector = remote.connect("alfresco");
var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");

logger.log('DATA: ' + data);
