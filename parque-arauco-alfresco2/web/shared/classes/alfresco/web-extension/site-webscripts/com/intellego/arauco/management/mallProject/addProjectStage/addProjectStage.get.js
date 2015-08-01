var idProject= args.idProject ? args.idProject : null;
var idTypeProject= args.idTypeProject ? args.idTypeProject : null;



if(idProject!=null &&  idTypeProject!=null ){
	var url = "/arauco/addProjectStage";
//    logger.log("=====  CTL-1 ===========  La idproject es ::"+idProject);
	var params = new Array();
	params["idProject"] = idProject;
	params["idTypeProject"] = idTypeProject;
	

	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");
	var result = eval('(' + data + ')');

if(result !== null && result !== '' && result !== undefined){
	model.resultSet = result;
}else{
	model.resultSet = null;
}
	
}else{
	model.resultSet = null;
}