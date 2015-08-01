var uuid= args.uuid ? args.uuid : null;
var nodeType= args.nodeType ? args.nodeType : null;
var idType= args.idType ? args.idType : null;


//logger.log("CTL-1 Enter remove");

if(uuid!=null &&  nodeType!=null  && idType!=null){
	
//	logger.log("CTL-2");
	var url = "/arauco/removeImportantDocument";
	var params = new Array();
	params["uuid"] = uuid;
	params["nodeType"] = nodeType;
	params["idType"] = idType;
	
	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");
	
//	logger.log("ctl-data: "+ data);
	
	var result = eval('(' + data + ')');
    
	model.resultSet = result["resultSet"];
}else{
	model.resultSet = null;
}