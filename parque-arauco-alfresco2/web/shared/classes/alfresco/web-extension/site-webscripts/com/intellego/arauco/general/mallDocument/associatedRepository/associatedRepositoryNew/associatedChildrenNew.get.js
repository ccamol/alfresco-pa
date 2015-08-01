var parent= args.parent ? args.parent : null;
var entryPointType= args.entryPointType ? args.entryPointType : null;
var entryPointId= args.entryPointId ? args.entryPointId : null;

var url = "/arauco/childrens";

var params = new Array();
params["parent"] = parent;
params["entryPointType"] = entryPointType;
params["entryPointId"] = entryPointId;

var connector = remote.connect("alfresco");
var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");

result = eval('(' + data + ')');
//logger.log('DATA: ' + data);
model.childrens = result["resultSet"];
model.childrenStatus = result["status"];
model.childrenMessage = result["message"];