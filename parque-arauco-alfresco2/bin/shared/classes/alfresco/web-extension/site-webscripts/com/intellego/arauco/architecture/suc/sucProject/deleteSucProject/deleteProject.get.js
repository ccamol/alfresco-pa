var filter= args.filter ? args.filter : null;

var url = "/arauco/deleteSucProject";

var params = new Array();
//logger.log("filter param: "+filter);
params["filter"] = filter;

var connector = remote.connect("alfresco");
var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");
//logger.log('DATA: ' + data);
var result = eval('(' + data + ')');

model.resultSet = result;