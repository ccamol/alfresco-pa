var filter= args.filter ? args.filter : null;
var projectSuc= args.projectSuc ? args.projectSuc : null;
var statusFilterProject= args.statusFilterProject ? args.statusFilterProject : null;

if(filter!=null){
	var url = "/arauco/getSucProject";

	var params = new Array();
	params["filter"] = filter;
	params["projectSuc"] = projectSuc;
	params["statusFilterProject"] = statusFilterProject;

	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");

//	logger.log("data: "+data);
	
	var result = eval('(' + data + ')');

	model.resultSet = result["resultSet"];
}else{
	model.resultSet = null;
}
