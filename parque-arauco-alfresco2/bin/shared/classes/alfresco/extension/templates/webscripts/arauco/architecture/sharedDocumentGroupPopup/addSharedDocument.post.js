<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');

var idProject= bodyContent.idProject ? bodyContent.idProject : null;
var uuid= bodyContent.uuid ? bodyContent.uuid : null;
var idthirdProject= bodyContent.idthirdProject ? bodyContent.idthirdProject : null;
var idStage= bodyContent.idStage ? bodyContent.idStage : null;
var getGroup = null;
var resultArchitecture = null;
var resultStages = null;
var now = new Date();
var day = now.getDate();
var month = now.getMonth()+1;
var year = now.getFullYear();
var date = day+"/"+month+"/"+ year;
//thirdPartyProjectFilter = new ThirdPartyProjectFilter();
//thirdPartyProjectFilter.architectureProjectEntity.exact(idthirdProject, EQUALS_TO);
getGroup = ThirdPartyProjectsService.getById(idthirdProject).result;
resultArchitecture = ArchitectureProjectSrv.getById(idProject).result;
resultStages = ProjectStagesSrv.getById(idStage).result;

var thirdPartySharedDocument = new ThirdPartySharedDocument();
thirdPartySharedDocument.uuidDocument = uuid;
thirdPartySharedDocument.thirdPartyName = getGroup.thirdPartyName;
thirdPartySharedDocument.architectureProject = resultArchitecture;
thirdPartySharedDocument.projectStages = resultStages;
thirdPartySharedDocument.sharedDate = formatDate(date);


//private String uuidDocument;
//private String thirdPartyName;
//private ArchitectureProject architectureProject;
//private ProjectStages projectStages;

//thirdPartyProject.architectureProjectEntity = idproject;
//thirdPartyProject.fullNameGroup = group;
//groupValidate = people.getGroup(group);
//thirdPartyProject.thirdPartyName = groupValidate.properties["cm:authorityDisplayName"];

ThirdPartySharedDocumentsService.add(thirdPartySharedDocument);

function formatDate(text){
	var dateValues = text.split("/");
	return new Date(dateValues[2],dateValues[1]-1,dateValues[0], 00,0,0,000);
}