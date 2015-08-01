var aclId= args.aclId ? args.aclId : null;

var url = "/arauco/deleteAcl";

var params = new Array();
params["aclId"] = aclId;

var connector = remote.connect("alfresco");
var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");

model.response = data;







