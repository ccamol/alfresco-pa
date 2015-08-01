<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');

var area= bodyContent.area ? bodyContent.area : null;
var projectName= bodyContent.projectName ? bodyContent.projectName : null;
var TenderName= bodyContent.TenderName ? bodyContent.TenderName : null;
var initDate= bodyContent.initDate ? bodyContent.initDate : null;
var FinishDate= bodyContent.FinishDate ? bodyContent.FinishDate : null;

var tender = new Tender();
var organizationalArea = new OrganizationalArea();
organizationalArea = OrganizationalAreasSrv.getById(area);

tender.tenderStatus = 1;
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

if(prefix.equals("proArc")){
	result = ArchitectureProjectSrv.getById(indexProject).result;
	idproject = result.id;
	nameProject = result.name;
	GetprojectType = new ProjectType();
	GetprojectType = ProjectTypeSrv.getById(result.projectType.id);
	projectTypeId = result.projectType.id;
	//nodeType
	var typeNode = new NodeType();
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
	var typeNode = new NodeType();
	typeNode = NodeTypesService.getById(4);
}
if(prefix.equals("proEng")){
	result = EngineeringProjectSrv.getById(indexProject).result;
	idproject = result.id;
	nameProject = result.name;
	GetprojectType = new ProjectType();
	GetprojectType = ProjectTypeSrv.getById(result.projectType.id);
	projectTypeId = result.projectType.id;
	var typeNode = new NodeType();
	typeNode = NodeTypesService.getById(2);
}


tender.projectNodeType = typeNode.result;
tender.projectId = projectName;
tender.projectName = nameProject;
tender.projectType = GetprojectType.result;
tender.awardStatus = 0;
tender.participant = 1;
var response = TendersSrv.add(tender);
model.resultSet = response;
model.projectTypeId = projectTypeId;


function formatDate(text){
	var dateValues = text.split("/");
	return new Date(dateValues[2],dateValues[1]-1,dateValues[0], 16,5,4,567);
}


