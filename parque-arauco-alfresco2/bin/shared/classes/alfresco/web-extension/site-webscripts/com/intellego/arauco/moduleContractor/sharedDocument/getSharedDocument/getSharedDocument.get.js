var idProject= args.idProject ? args.idProject : null;
if(idProject!=null){
	var url = "/arauco/sharedDocument";
	var params = new Array();
	params["idProject"] = idProject;
	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");
	model.resultSet = data
}else{
	model.resultSet = null;
}