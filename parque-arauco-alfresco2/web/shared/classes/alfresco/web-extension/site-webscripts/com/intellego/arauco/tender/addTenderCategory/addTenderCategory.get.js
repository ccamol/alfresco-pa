var ALF_WEBSCRIPT_URL = "/arauco/addTenderCategory";
var idTender= args.idTender ? args.idTender : null;
var idCategory = args.idCategory ? args.idCategory : null;

var result ='{"status": "-2"}';
if (idTender != null && idCategory!=null) {
	var params = new Array();
	params["idTender"] = idTender;
	params["idCategory"] = idCategory;
	var connector = remote.connect("alfresco");
	var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
//	logger.log(data);
	result = eval('(' + data + ')');
}else {
	result = eval('(' + result + ')');
}
model.resultSet = result;