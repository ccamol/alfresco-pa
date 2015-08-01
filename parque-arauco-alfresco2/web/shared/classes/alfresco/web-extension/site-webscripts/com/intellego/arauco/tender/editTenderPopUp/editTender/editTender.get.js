var ALF_WEBSCRIPT_URL = "/arauco/editTender";
var idEdit= args.idEdit ? args.idEdit : null;
var area= args.area ? args.area : null;
var projectName= args.projectName ? args.projectName : null;
var TenderName= args.TenderName ? args.TenderName : null;
var initDate= args.initDate ? args.initDate : null;
var FinishDate= args.FinishDate ? args.FinishDate : null;
var statusAward= args.statusAward ? args.statusAward : null;
var awardApplicant= args.awardApplicant ? args.awardApplicant : null;
var tenderStatus= args.tenderStatus ? args.tenderStatus : null;

var params = new Array();
params["idEdit"] = idEdit;
params["area"] = area;
params["projectName"] = projectName;
params["TenderName"] = TenderName;
params["initDate"] = initDate;
params["FinishDate"] = FinishDate;
params["statusAward"] = statusAward;
params["awardApplicant"] = awardApplicant;
params["tenderStatus"] = tenderStatus;

var connector = remote.connect("alfresco");
var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
var result = eval('(' + data + ')');
//logger.log("RS: "+result.status);
model.resultSet = result.status;
model.projectTypeId = result.projectTypeId;
model.idTender = result.idTender;

