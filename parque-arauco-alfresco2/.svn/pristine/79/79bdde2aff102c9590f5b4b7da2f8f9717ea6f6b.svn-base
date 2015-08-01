var idHistory= args.idHistory ? args.idHistory : null;

var url = "/arauco/undoSucHistory";
var params = new Array();
//logger.log("looooog get " +idHistory );
params["idHistory"] = idHistory;
var connector = remote.connect("alfresco");
var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");
