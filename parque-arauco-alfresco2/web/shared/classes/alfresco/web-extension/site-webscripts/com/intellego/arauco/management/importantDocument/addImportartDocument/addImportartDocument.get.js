var nodeType= args.nodeType ? args.nodeType : null;
var uuid= args.uuid ? args.uuid : null;
var idType= args.idType ? args.idType : null;
//logger.log("entro a agregar documento importante");
if(nodeType!=null &&  uuid!=null && idType!=null ){
	var url = "/arauco/addImportantDocument";
	var params = new Array();
	params["nodeType"] = nodeType;
	params["uuid"] = uuid;
	params["idType"] = idType;
	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");
//	logger.log("CTL- 1 ===================================================");
//	logger.log(data);
//	logger.log("CTL- 1 ===================================================");
	var result = eval('(' + data + ')');
//	logger.log("CTL - 2 ====================================================");
	//var lala = result["resultSet"];
//	logger.log("el estado es: "+ lala[0].status);
	
//logger.log("CTL - 2 ====================================================");

	model.resultSet = result["resultSet"];
	
	
}else{
	model.resultSet = null;
}