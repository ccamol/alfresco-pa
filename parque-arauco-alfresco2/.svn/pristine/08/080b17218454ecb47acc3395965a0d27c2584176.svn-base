var ALF_WEBSCRIPT_URL = "/arauco/filterExpiration";
var params = new Array();
var id = args.id ? args.id : null;
var nodeType = args.nodeType ? args.nodeType : null;
var nodeId = args.nodeId ? args.nodeId : null;
var textExpiration = args.textExpiration ? args.textExpiration : null;
var amountDay = args.amountDay ? args.amountDay : null;
var amountMonth = args.amountMonth ? args.amountMonth : null;
var txExpirationFrom = args.txExpirationFrom ? args.txExpirationFrom : null;
var txExpirationTo = args.txExpirationTo ? args.txExpirationTo : null;

params["id"] = id;
params["nodeType"] = nodeType;
params["nodeId"] = nodeId;
params["textExpiration"] = textExpiration;
params["amountDay"] = amountDay;
params["amountMonth"] = amountMonth;
params["txExpirationFrom"] = txExpirationFrom;
params["txExpirationTo"] = txExpirationTo;

var connector = remote.connect("alfresco");
var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");

var result = eval('(' + data + ')');
//logger.log(data);

if(result!=null && result!=undefined){
	model.resultSet = result["resultSet"];
}

