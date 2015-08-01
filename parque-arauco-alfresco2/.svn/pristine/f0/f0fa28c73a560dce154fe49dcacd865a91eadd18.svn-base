var ALF_WEBSCRIPT_URL = "/arauco/getRequestedDocumentApplicant";
var idTender= args.idTender ? args.idTender : null;
var resulSetUploaded =null;
var resulSettDocumentToCarry =null;

if (idTender != null) {
	var params = new Array();
	params["idTender"] = idTender;
	var connector = remote.connect("alfresco");
	var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
//	logger.log(data);
	var result = eval('(' + data + ')');
	 resulSetUploaded = result["resulSetUploaded"];
	 resulSettDocumentToCarry = result["resulSettDocumentToCarry"];
	
	
}else {
	resulSetUploaded =null;
	resulSettDocumentToCarry =null;
}



model.resulSetUploaded = resulSetUploaded;
model.resulSettDocumentToCarry = resulSettDocumentToCarry;