var operators= args.operators ? args.operators : null;
var builderProjectID= args.builderProjectID ? args.builderProjectID : null;
//logger.log(operators + "			OPERATORS");
//logger.log(builderProjectID + "			builderProjectID");

if(operators !== null){
	var url = "/arauco/createThirdParty";
	var params = new Array();
	params["builderProjectID"] = builderProjectID;
	params["operators"] = operators;

	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");

	var result = eval('(' + data + ')');

	model.resultSet = result["resultSet"];
}else{
	model.resultSet = null;
}