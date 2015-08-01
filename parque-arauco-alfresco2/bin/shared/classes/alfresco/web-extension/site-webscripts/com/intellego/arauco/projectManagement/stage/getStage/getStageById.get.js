var filter= args.filter ? args.filter : null;
var nodeType= args.nodeType ? args.nodeType : null;

var url = "/arauco/stages";

var params = new Array();
//logger.log("filter param: "+filter);
params["filter"] = filter;
params["nodeType"] = nodeType;

var connector = remote.connect("alfresco");
var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");

var result = eval('(' + data + ')');
//logger.log('DATA: ' + data);
model.resultSet = result;