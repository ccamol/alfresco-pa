var ALF_WEBSCRIPT_URL = "/arauco/addTender";
var area= args.area ? args.area : null;
var projectName= args.projectName ? args.projectName : null;
var TenderName= args.TenderName ? args.TenderName : null;
var initDate= args.initDate ? args.initDate : null;
var FinishDate= args.FinishDate ? args.FinishDate : null;

var params = new Array();
params["area"] = area;
params["projectName"] = projectName;
params["TenderName"] = TenderName;
params["initDate"] = initDate;
params["FinishDate"] = FinishDate;

var connector = remote.connect("alfresco");
var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
var result = eval('(' + data + ')');
//logger.log("RS: "+result.status);
model.resultSet = result.status;
model.projectTypeId = result.projectTypeId;

