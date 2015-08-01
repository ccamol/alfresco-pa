var ALF_WEBSCRIPT_URL = "/arauco/publishTenderQueries";
var idTender= args.idTender ? args.idTender : null;
var publicationStatus= args.publicationStatus ? args.publicationStatus : null;


var params = new Array();
params["idTender"] = idTender;
params["publicationStatus"] = publicationStatus;


var connector = remote.connect("alfresco");
var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
var result = eval('(' + data + ')');
model.resultSet = result;
