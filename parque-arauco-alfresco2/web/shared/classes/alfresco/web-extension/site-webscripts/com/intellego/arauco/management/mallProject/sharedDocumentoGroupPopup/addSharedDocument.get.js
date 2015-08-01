var idProject= args.idProject ? args.idProject : null;
var uuid= args.uuid ? args.uuid : null;
var idthirdProject= args.idthirdProject ? args.idthirdProject : null;
var idStage= args.idStage ? args.idStage : null;

var url = "/arauco/addSharedDocument";

var params = new Array();
params["idProject"] = idProject;
params["uuid"] = uuid;
params["idthirdProject"] = idthirdProject;
params["idStage"] = idStage;

var connector = remote.connect("alfresco");
var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");