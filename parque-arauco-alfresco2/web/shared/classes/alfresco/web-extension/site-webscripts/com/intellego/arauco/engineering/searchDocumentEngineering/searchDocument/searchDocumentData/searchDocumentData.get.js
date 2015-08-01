var ALF_WEBSCRIPT_URL = "/arauco/searchDocumentFilter";
var params = new Array();
var keyWords = args.keyWords ? args.keyWords : null;
var documentType = args.documentType ? args.documentType : null;
var yearSince = args.yearSince ? args.yearSince : null;
var yearUntil = args.yearUntil ? args.yearUntil : null;
var country = args.country ? args.country : null;
var mall = args.mall ? args.mall : null;

params["keyWords"] = keyWords;
params["documentType"] = documentType;
params["yearSince"] = yearSince;
params["yearUntil"] = yearUntil;
params["country"] = country;
params["mall"] = mall;

var connector = remote.connect("alfresco");
var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");

var result = eval('(' + data + ')');
logger.log(result);
model.resultSet = result["resultSet"];
//model.resultSet = result["resultSet"];