var ALF_WEBSCRIPT_URL = "/arauco/addDocumentToCarry";
var uuid= args.uuid ? args.uuid : null;
var description= args.description ? args.description : null;
var idTender= args.idTender ? args.idTender : null;
var type= args.type ? args.type : null;
var format= args.format ? args.format : null;
var name= args.name ? args.name : null;
var documentType= args.documentType ? args.documentType : null;
var createdDate= args.createdDate ? args.createdDate : null;

var params = new Array();

params["uuid"] = uuid;
params["description"] = description;
params["idTender"] = idTender;
params["type"] = type;
params["format"] = format;
params["name"] = name;
params["documentType"] = documentType;
params["createdDate"] = createdDate;


var connector = remote.connect("alfresco");
var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
//logger.log(data);
var result = eval('(' + data + ')');

model.resultSet = result;