// TODO include parámeters area, entrypointtype and entrypointid
//var filter= args.filter ? args.filter : null;

var url = "/arauco/root";

var params = new Array();
var site = args.site ? args.site : null;

if(site == "arauco"){
	params["area"] = "engineering";
}else{
	params["area"] = "architecture";
}

params["entryPointType"] = "none";
params["entryPointId"] = "none";

var connector = remote.connect("alfresco");
var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");

var result = eval('(' + data + ')');
//logger.log('DATA: ' + data);
model.resultSet = result;

var uuid = result.uuid;

url = "/arauco/childrens";

params = new Array();
params["parent"] = uuid;
params["entryPointType"] = "none";
params["entryPointId"] = "none";

connector = remote.connect("alfresco");
data = connector.post(url, jsonUtils.toJSONString(params), "application/json");

result = eval('(' + data + ')');
//logger.log('DATA: ' + data);
model.childrens = result["resultSet"];
model.childrenStatus = result["status"];
model.childrenMessage = result["message"];

model.remote = connector;
