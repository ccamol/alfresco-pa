var group= args.group ? args.group : null;
var idproject= args.idproject ? args.idproject : null;

var url = "/arauco/addGroup";

var params = new Array();
params["group"] = group;
params["idproject"] = idproject;

var connector = remote.connect("alfresco");
var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");