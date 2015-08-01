<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var bodyContent = eval('(' + requestbody.content + ')');
var response = null;
var projectTypeId = null;
var responseStages = null;
var filter= bodyContent.filter ? bodyContent.filter : null;
var nodeType = bodyContent.nodeType ? bodyContent.nodeType : null;

var projectStageFilter = new ProjectStageFilter();


if(nodeType == 5){

	response = EngineeringProjectSrv.getById(filter);
}
if(nodeType == 6){
	response = ArchitectureProjectSrv.getById(filter);
}
if(nodeType == 7){
	response = SucProjectSrv.getById(filter);
}

if(response !== null){
	projectTypeId = response.result.projectType.id;
}	

//logger.log("projectTypeId: "+projectTypeId);
var EQUALS_TO = 0;


projectStageFilter.idProject.exact(filter, EQUALS_TO);

if(projectTypeId !== null && projectTypeId !== undefined && projectTypeId !== null){
//	logger.log("apply filter ........................................");

	projectStageFilter.idProjectType.exact(projectTypeId, EQUALS_TO);
}


responseStages = ProjectStagesSrv.getListByFilter(projectStageFilter, "id", true);

if(responseStages.status > -1){
	model.response = responseStages;
}else{
	model.response = null;
}

//logger.log("#############################################################################################");
//logger.log("response:"+responseStages.result);
//logger.log("#############################################################################################");
//



