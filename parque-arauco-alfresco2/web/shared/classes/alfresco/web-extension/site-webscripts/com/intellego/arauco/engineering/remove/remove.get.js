var nodeType = args.nodeType ? args.nodeType : null;
var uuid = args.uuid ? args.uuid : null;
var siteId = args.siteId ? args.siteId : null;


if(nodeType!=null && uuid!=null){
	var url = "/arauco/remove";

	var params = new Array();
	params["nodeType"]=nodeType;
	params["uuid"]=uuid;
    params["siteId"]=siteId;

	var connector = remote.connect("alfresco");
	var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");

	model.response = data;
}
