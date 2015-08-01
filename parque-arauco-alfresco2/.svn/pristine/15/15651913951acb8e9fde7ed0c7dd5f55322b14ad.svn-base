var ALF_WEBSCRIPT_URL = "/arauco/getProjectArea";
var connector = remote.connect("alfresco");
var filter= args.filter ? args.filter : null;
var idProject= args.idProject ? args.idProject : null;

var params = new Array();
params["filter"] = filter;
var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
//logger.log(data);
var result = eval('(' + data + ')');

if(idProject !== null && idProject !== undefined && idProject !== ''){
//	logger.log("idProject: "+idProject);
	model.idProject = idProject;
}
model.resultSetArch = result["resultSetArch"];
model.resultSetEng = result["resultSetEng"];
model.resultSetSucPro = result["resultSetSucPro"];
