var filter= args.filter ? args.filter : null;

var url = "/arauco/rolList";

var params = new Array();
params["filter"] = filter;

var connector = remote.connect("alfresco");
var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");

var result = eval('(' + data + ')');
model.rolList = result["resultSet"];


url = "/arauco/areaList";

params = new Array();

connector = remote.connect("alfresco");
data = connector.post(url, jsonUtils.toJSONString(params), "application/json");

result = eval('(' + data + ')');
model.areaList = result["resultSet"];





