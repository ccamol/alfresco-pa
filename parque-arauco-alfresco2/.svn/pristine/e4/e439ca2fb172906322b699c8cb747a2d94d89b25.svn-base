var ALF_WEBSCRIPT_URL = "/arauco/closeTenderQueries";
var idStageTender= args.idStageTender ? args.idStageTender : null;
var statusQueries= args.statusQueries ? args.statusQueries : null;


var params = new Array();
params["idStageTender"] = idStageTender;
params["statusQueries"] = statusQueries;


var connector = remote.connect("alfresco");
var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
var result = eval('(' + data + ')');
model.resultSet = result;
