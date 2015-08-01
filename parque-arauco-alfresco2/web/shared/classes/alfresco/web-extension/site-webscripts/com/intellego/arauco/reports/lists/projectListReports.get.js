var type= args.type ? args.type : null;
var id = args.id ? args.id : null;
var typeProject = args.typeProject ? args.typeProject : null;
var params = new Array();

if(type!=null && id!=null ){
	params["id"] = id;
	params["type"] = type;
	params["typeProject"] = typeProject;

	var url = "/arauco/projectListReports";
	
	var connector = remote.connect("alfresco");
	var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");
	model.resultSet = data
}
