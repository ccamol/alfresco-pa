var ALF_WEBSCRIPT_URL = "/arauco/createApplicant";
var userName= args.userName ? args.userName : null;
var identificationNumber= args.identificationNumber ? args.identificationNumber : null;
var mail= args.mail ? args.mail : null;
var password= args.password ? args.password : null;
var countryId= args.countryId ? args.countryId : null;
var mallId= args.mallId ? args.mallId : null;
var additionalInfo = args.additionalInfo ? args.additionalInfo : null;
var id = args.id ? args.id : null;

var params = new Array();
params["id"] = id;
params["userName"] = userName;
params["identificationNumber"] = identificationNumber;
params["mail"] = mail;
params["password"] = password;
params["countryId"] = countryId;
params["mallId"] = mallId;
params["additionalInfo"] = additionalInfo;


var connector = remote.connect("alfresco");
var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
//logger.log(data);
var result = eval('(' + data + ')');

model.resultSet = result;
model.validate = result.validate;