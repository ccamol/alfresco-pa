var filterOne = args.filterOne ? args.filterOne : null;
var filterTwo = args.filterTwo ? args.filterTwo : null;
logger.log("==================Entro =============");

	var url = "/arauco/getCommerce";
logger.log("==================Inicia array=============");
	var params = new Array();
	
	
	logger.log("==================SETEA array=============");
	if(filterOne!=null){
		params["filterOne"] = filterOne;
	}
	if(filterTwo !=null){
		params["filterTwo"] = filterTwo;
	}
	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");
	var result = eval('(' + data + ')');
	model.resultSet = result["resultSet"];

