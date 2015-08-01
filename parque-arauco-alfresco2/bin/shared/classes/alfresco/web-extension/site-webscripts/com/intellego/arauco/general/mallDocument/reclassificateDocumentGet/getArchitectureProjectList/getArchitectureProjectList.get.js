var id= args.id;
//logger.log("VALOR ID GET =" +id );
if(id!=null ){
	var url="/arauco/postArchitectureProjectList";
	var params = new Array();
	params["id"]= id;
//	logger.log("2 VALOR ID ="	+ params["id"] );
	var connector = remote.connect("alfresco");
	var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");
//	logger.log("3 VALOR ID ="	+ data.status );
	model.resultSet = data;
	
}



