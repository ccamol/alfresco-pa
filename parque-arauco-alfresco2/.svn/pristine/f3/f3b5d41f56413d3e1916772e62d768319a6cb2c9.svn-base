var filter= args.filter ? args.filter : null;

var url = "/arauco/rolList";

var params = new Array();
params["filter"] = filter;

var connector = remote.connect("alfresco");
var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");

var result = eval('(' + data + ')');
model.resultSet = result["resultSet"];
model.status = result["status"];
model.message = result["message"];