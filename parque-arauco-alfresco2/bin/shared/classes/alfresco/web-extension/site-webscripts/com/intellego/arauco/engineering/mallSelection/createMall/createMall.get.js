var url = "/arauco/getCountries";

var params = new Array();
var id= args.id ? args.id : null;

var connector = remote.connect("alfresco");
var data = connector.post(url, jsonUtils.toJSONString(""), "application/json");




var result = eval('(' + data + ')');
model.resultSet = result["resultSet"];
