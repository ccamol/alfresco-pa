var parent= args.parent ? args.parent : null;
var uuid= args.uuid ? args.uuid : null;


if(uuid!=null && parent!=null){
	var url = "/arauco/removeClassification";
	var params = new Array();
	params["uuid"] = uuid;
	params["parent"] = parent;
	
	var connector = remote.connect("alfresco");
	var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");
	
	var result = eval('(' + data + ')');
	model.response = result;
}