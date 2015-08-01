var ALF_WEBSCRIPT_URL = "/arauco/getApplicants";
var idTender= args.idTender ? args.idTender : null;
var stageStatus= args.stageStatus ? args.stageStatus : null;
var awardStatus= args.awardStatus ? args.awardStatus : null;
var awardApplicant= args.awardApplicant ? args.awardApplicant : null;


var params = new Array();
params["idTender"] = idTender;


var connector = remote.connect("alfresco");
var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");

var result = eval('(' + data + ')');
model.resultSet = result["resultSet"];
model.stageStatus = stageStatus;
if(awardApplicant !== null){
	model.awardApplicant = awardApplicant;
}else{
	model.awardApplicant = "";
}

model.awardStatus = awardStatus;