var parent= args.parent ? args.parent : null;
var name= args.name ? args.name : null;


if(name!=null && parent!=null){
	var url = "/arauco/addClassification";
	
	var params = new Array();
	params["name"] = name;
	params["parent"] = parent;
	
	var connector = remote.connect("alfresco");
	var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");
	
	var result = eval('(' + data + ')');
	model.response = result;
}