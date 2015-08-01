<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var bodyContent = eval('(' + requestbody.content + ')');
var id= bodyContent.id ? bodyContent.id : null;
var projectId = bodyContent.projectId ? bodyContent.projectId : null;
var siteId = bodyContent.siteId ? bodyContent.siteId : null;
var stageStatus = bodyContent.stageStatus ? bodyContent.stageStatus : null;
var EQUALS_TO = 0;
var projectStageFilter = new ProjectStageFilter();
var response = null;
if(siteId=='6'){
	response = ArchitectureProjectSrv.getById(projectId);
}
if(siteId=='5'){
	response = EngineeringProjectSrv.getById(projectId);
}
if(siteId=='7'){
	response = SucProjectSrv.getById(projectId);
}
var projectTypeId = response.result.projectType.id;
var projectStages = new ProjectStages();
var projectStageOpen = new ProjectStages();
var idStage = null;

projectStages = ProjectStagesSrv.getById(id);
if(projectStages.status != -1){
	if(id != null && id != undefined ){
//		logger.log("id: "+id+ " and status: "+projectStages.status);
		projectStages = projectStages.result;
//		logger.log("================================Cierra Etapa=============================");
//		logger.log("=========================================================================");
		projectStages.stageStatus = stageStatus;
		ProjectStagesSrv.addOrUpdate(projectStages);

	}
}



