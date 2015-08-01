	var url = "/arauco/getSucGroup";
	var params = new Array();
	params["filter"] = "";

	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");

	var result = eval('(' + data + ')');

	model.resultSet = result["resultSet"];



