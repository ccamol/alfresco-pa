var ALF_WEBSCRIPT_URL = "/arauco/removeTenderCategory";
var idTenderCategory= args.idTenderCategory ? args.idTenderCategory : null;
var result ='{"status": "-2"}';
if (idTenderCategory != null) {
	var params = new Array();
	params["idTenderCategory"] = idTenderCategory;
	
	var connector = remote.connect("alfresco");
	var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
//	logger.log(data);
	result = eval('(' + data + ')');
}else {
	result = eval('(' + result + ')');
}
model.resultSet = result;