var idSharedDocument= args.idSharedDocument ? args.idSharedDocument : null;

var url = "/arauco/deleteSharedDocument";

var params = new Array();
params["idSharedDocument"] = idSharedDocument;

var connector = remote.connect("alfresco");
var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");






