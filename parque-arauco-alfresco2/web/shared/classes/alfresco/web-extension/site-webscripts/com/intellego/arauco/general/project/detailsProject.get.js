var filter= args.filter ? args.filter : null;
var site= args.site ? args.site : null;

var url = "/arauco/projectDetails";

var params = new Array();
params["filter"] = filter;
params["site"] = site;

var connector = remote.connect("alfresco");
var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");

var result = eval('(' + data + ')');
//logger.log('DATA: ' + data);
model.resultSet = result;