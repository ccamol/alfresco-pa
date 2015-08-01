<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');
var idProject= bodyContent.idProject ? bodyContent.idProject : null;
var uuid= bodyContent.uuid ? bodyContent.uuid : null;
var idStage= bodyContent.idStage ? bodyContent.idStage : null;
var EQUALS_TO = 0;
var getShared = null;
var result = null;

result = ArchitectureProjectSrv.getById(idProject).result;

//logger.log(result.id);

var thirdPartySharedDocument = new ThirdPartySharedDocumentFilter();
thirdPartySharedDocument.architectureProject.exact(result.id, EQUALS_TO);
thirdPartySharedDocument.uuidDocument.exact(uuid, EQUALS_TO);
thirdPartySharedDocument.projectStages.exact(idStage, EQUALS_TO);
getShared = ThirdPartySharedDocumentsService.getListByFilter(thirdPartySharedDocument).result;

if(getShared != null ){
	model.resultSet = getShared;
}else{
	model.resultSet = null;
}
