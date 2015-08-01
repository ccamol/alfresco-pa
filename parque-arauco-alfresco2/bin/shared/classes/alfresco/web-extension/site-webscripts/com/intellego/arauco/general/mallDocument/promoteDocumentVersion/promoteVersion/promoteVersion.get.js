var params = new Array();
var uuid = args.uuid ? args.uuid : null;
var description = args.description ? args.description : null;
var majorVersion = args.majorVersion ? args.majorVersion : null;
var label = args.label ? args.label : null;

var ALF_WEBSCRIPT_URL = "/arauco/promoteDocumentVersion";

params["uuid"] = uuid;
params["description"] = description;
params["majorVersion"] = majorVersion;
params["label"] = label;

var connector = remote.connect("alfresco");
var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
var result = eval('(' + data + ')');

//logger.log(result + "		result");
//logger.log(result.status + "		status");
model.status = result.status;

