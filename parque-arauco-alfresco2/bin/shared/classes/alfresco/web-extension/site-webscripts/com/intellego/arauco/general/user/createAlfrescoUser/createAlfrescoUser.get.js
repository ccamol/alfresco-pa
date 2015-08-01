var userName= args.userName ? args.userName : null;
var password= args.password ? args.password : null;
var mail= args.mail ? args.mail : null;


var url = "/arauco/createAlfrescoUser";

var params = new Array();
params["userName"] = userName;
params["password"] = password;
params["mail"] = mail;

var connector = remote.connect("alfresco");
var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");

//logger.log("data: "+data);

var result = eval('(' + data + ')');
model.resultSet = result;