var filter= args.filter ? args.filter : null;

var url = "/arauco/mallDetails";

var params = new Array();
//logger.log("filter param: "+filter);
params["filter"] = filter;

var connector = remote.connect("alfresco");
var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");

var result = eval('(' + data + ')');
//logger.log('DATA: ' + data);
model.resultSet = result;