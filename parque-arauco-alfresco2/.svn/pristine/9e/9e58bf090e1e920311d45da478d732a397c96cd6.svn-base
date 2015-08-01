var txTermsSuc= args.txTermsSuc ? args.txTermsSuc : null;

if(txTermsSuc!=null){
	var url = "/arauco/searchSucTerm";

	var params = new Array();
	params["txTermsSuc"] = txTermsSuc;

	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");

	var result = eval('(' + data + ')');

	model.resultSet = result["resultSet"];
}else{
	model.resultSet = "[]";
}
