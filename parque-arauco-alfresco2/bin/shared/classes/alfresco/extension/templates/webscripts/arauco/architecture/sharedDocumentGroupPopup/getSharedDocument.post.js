<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');
var idProject= bodyContent.idProject ? bodyContent.idProject : null;
var uuid= bodyContent.uuid ? bodyContent.uuid : null;
var idStage= bodyContent.idStage ? bodyContent.idStage : null;
var EQUALS_TO = 0;
var groupList = new Array();
var getShared = null;
var subgroup = [];

var thirdPartyProjectFilter = new ThirdPartyProjectFilter();
thirdPartyProjectFilter.architectureProjectEntity.exact(idProject, EQUALS_TO);
var getProjects = ThirdPartyProjectsService.getListByFilter(thirdPartyProjectFilter).result;

var result = ArchitectureProjectSrv.getById(idProject).result;
var thirdPartySharedDocument = new ThirdPartySharedDocumentFilter();

thirdPartySharedDocument.architectureProject.exact(result.id, EQUALS_TO);
thirdPartySharedDocument.uuidDocument.exact(uuid, EQUALS_TO);
thirdPartySharedDocument.projectStages.exact(idStage, EQUALS_TO);
getShared = ThirdPartySharedDocumentsService.getListByFilter(thirdPartySharedDocument).result;

if(getProjects != null){
	for (var j = 0; j < getProjects.size(); j++) {
		var vali = false;
		for ( var y = 0; y < getShared.size(); y++){
			if(""+getProjects.get(j).thirdPartyName == ""+getShared.get(y).thirdPartyName){
				vali = true;
				break;
			}else{
				vali = false;
			}
		}

		if(!vali){
			subgroup.push(getProjects.get(j));
		}
	}	
	model.resultSet = subgroup;
	model.uuid = uuid;
}else{
	model.resultSet = null;
}

