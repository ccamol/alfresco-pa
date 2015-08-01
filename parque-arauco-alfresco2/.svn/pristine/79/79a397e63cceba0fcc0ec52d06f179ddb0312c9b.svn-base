var nodeType= args.nodeType ? args.nodeType : null;
var idType= args.idType ? args.idType : null;
//logger.log("entro a ver documentos getTmportante");

if(nodeType!=null && idType!=null ){
	
//	logger.log("CTL--1");
	var url = "/arauco/getImportantDocument";
	var params = new Array();
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