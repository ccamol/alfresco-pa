//var filter= args.filter ? args.filter : null;

var url = "/arauco/outletSelection";

//var params = new Array();
//params["filter"] = filter;

var connector = remote.connect("alfresco");
var data = connector.post(url,jsonUtils.toJSONString(""),"application/json");

var result = eval('(' + data + ')');

logger.log("==============Log=============");


model.resultSet = result;

logger.log(result);