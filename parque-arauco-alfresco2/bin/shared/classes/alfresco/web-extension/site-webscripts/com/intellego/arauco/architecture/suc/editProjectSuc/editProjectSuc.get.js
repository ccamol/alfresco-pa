var idSucProject= args.idSucProject ? args.idSucProject : null;
var sucProjectName= args.sucProjectName ? args.sucProjectName : null;
var finishDate= args.finishDate ? args.finishDate : null;
var startDate= args.startDate ? args.startDate : null;
var description= args.description ? args.description : null;
var sucId= args.sucId ? args.sucId : null;
var operatorId= args.operatorId ? args.operatorId : null;
var projectTypeId= args.projectTypeId ? args.projectTypeId : null;
var projectStatusId= args.projectStatusId ? args.projectStatusId : null;
var nameManager= args.nameManager ? args.nameManager : null;
var professionalName= args.professionalName ? args.professionalName : null;
var draftsmanName= args.draftsmanName ? args.draftsmanName : null;

if(sucProjectName !== null &&  finishDate !== null && startDate !== null && description !== null && sucId !== null && operatorId !== null && projectTypeId !== null && projectStatusId !== null){
	var url = "/arauco/editSucProject";
	var params = new Array();
	params["idSucProject"] = idSucProject;
	params["sucProjectName"] = sucProjectName;
	params["finishDate"] = finishDate;
	params["startDate"] = startDate;
	params["description"] = description;
	params["sucId"] = sucId;
	params["operatorId"] = operatorId;
	params["projectTypeId"] = projectTypeId;
	params["projectStatusId"] = projectStatusId;
	params["nameManager"] = nameManager;
	params["professionalName"] = professionalName;
	params["draftsmanName"] = draftsmanName;

	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");

	var result = eval('(' + data + ')');

	model.resultSet = result["resultSet"];
}else{
	model.resultSet = null;
}