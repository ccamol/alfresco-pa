<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');

var idEdit= bodyContent.idEdit ? bodyContent.idEdit : null;
var area= bodyContent.area ? bodyContent.area : null;
var projectName= bodyContent.projectName ? bodyContent.projectName : null;
var TenderName= bodyContent.TenderName ? bodyContent.TenderName : null;
var initDate= bodyContent.initDate ? bodyContent.initDate : null;
var FinishDate= bodyContent.FinishDate ? bodyContent.FinishDate : null;
var awardStatus= bodyContent.awardStatus ? bodyContent.awardStatus : null;
var awardApplicant= bodyContent.awardApplicant ? bodyContent.awardApplicant : null;
var tenderStatus= bodyContent.tenderStatus ? bodyContent.tenderStatus : null;


var tender = new Tender();
var organizationalArea = new OrganizationalArea();
organizationalArea = OrganizationalAreasSrv.getById(area);
tender.id = idEdit;
tender.tenderStatus = tenderStatus;
tender.name = TenderName;
tender.organizationalArea = organizationalArea.result;
tender.initDate = formatDate(initDate);
tender.endDate = formatDate(FinishDate);

//==== diferenciacion de SUC ENG ARQ

var prefix = projectName.substr(0,6);
var indexProject = projectName.substr(6);
var projectFilter = null;
var idproject = null;
var nameProject = null;
var idTypeProject = null;
var EQUALS_TO = 0;
var result = null;
var GetprojectType = null;
var projectTypeId = null;
var typeNode = new NodeType();

if(prefix.equals("proArc")){
	result = ArchitectureProjectSrv.getById(indexProject).result;
	idproject = result.id;
	nameProject = result.name;
	GetprojectType = new ProjectType();
	GetprojectType = ProjectTypeSrv.getById(result.projectType.id);
	projectTypeId = result.projectType.id;
	//nodeType
	typeNode = NodeTypesService.getById(10);
}
if(prefix.equals("ProSuc")){
	result = SucProjectSrv.getById(indexProject).result;
	idproject = result.id;
	nameProject = result.name;
	GetprojectType = new ProjectType();
	GetprojectType = ProjectTypeSrv.getById(result.projectType.id);
	projectTypeId = result.projectType.id;
	//nodetype
	typeNode = NodeTypesService.getById(4);
}
if(prefix.equals("proEng")){
	result = EngineeringProjectSrv.getById(indexProject).result;
	idproject = result.id;
	nameProject = result.name;
	GetprojectType = new ProjectType();
	GetprojectType = ProjectTypeSrv.getById(result.projectType.id);
	projectTypeId = result.projectType.id;
	//nodetype
	typeNode = NodeTypesService.getById(2);
}

tender.projectNodeType = typeNode.result;
tender.projectId = projectName;
tender.projectName = projectName;
tender.projectType = GetprojectType.result;
var tenderObject = TendersSrv.getById(idEdit).result;
tender.participant = tenderObject.participant;
if(awardStatus !== null){
	tender.awardStatus = awardStatus;
}else{
	tender.awardStatus = tenderObject.awardStatus;
}
if(awardApplicant !== null){
	tender.awardApplicant = awardApplicant;
}else{
	tender.awardApplicant = tenderObject.awardApplicant;
}
//tender.awardApplicant = awardApplicant;
var response = TendersSrv.addOrUpdate(tender);
model.resultSet = response;
model.projectTypeId = projectTypeId;
model.idTender = idEdit;

function formatDate(text){
	var dateValues = text.split("/");
	return new Date(dateValues[2],dateValues[1]-1,dateValues[0], 16,5,4,567);
}


