var ALF_WEBSCRIPT_URL = "/arauco/getReqDocApplicantTender";
var idTender= args.idTender ? args.idTender : null;
var username= args.username ? args.username : null;
var stageStatus= args.stageStatus ? args.stageStatus : null;
//logger.log("###########################################  stageStatus: "+stageStatus);
var resulSetUploaded =null;
var resulSettDocumentToCarry =null;

if (idTender != null) {
	var params = new Array();
	params["idTender"] = idTender;
	params["username"] = username;
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


model.stageStatus = stageStatus;
model.resulSetUploaded = resulSetUploaded;
model.resulSettDocumentToCarry = resulSettDocumentToCarry;