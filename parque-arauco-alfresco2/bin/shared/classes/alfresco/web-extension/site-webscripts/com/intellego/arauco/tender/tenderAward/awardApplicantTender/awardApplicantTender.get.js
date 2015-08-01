var ALF_WEBSCRIPT_URL = "/arauco/editTenderAward";
var idTender= args.idTender ? args.idTender : null;
var userName= args.userName ? args.userName : null;
var awardStatus= args.awardStatus ? args.awardStatus : null;

var params = new Array();
params["idTender"] = idTender;
params["awardApplicant"] = userName;
params["awardStatus"] = awardStatus;

var connector = remote.connect("alfresco");
var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
//logger.log(data);
var result = eval('(' + data + ')');

model.resultSet = result;
//model.resultSet = result["resultSet"];