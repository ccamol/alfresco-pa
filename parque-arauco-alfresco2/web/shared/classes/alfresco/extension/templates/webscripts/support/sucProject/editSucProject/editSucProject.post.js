<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var bodyContent = eval('(' + requestbody.content + ')');

var idSucProject= bodyContent.idSucProject ? bodyContent.idSucProject : null;
var sucProjectName = bodyContent.sucProjectName ? bodyContent.sucProjectName : null;
var finishDate = bodyContent.finishDate ? bodyContent.finishDate : null;
var startDate = bodyContent.startDate ? bodyContent.startDate : null;
var description = bodyContent.description ? bodyContent.description : null;
var sucId = bodyContent.sucId ? bodyContent.sucId : null;
var operatorId = bodyContent.operatorId ? bodyContent.operatorId : null;
var projectTypeId = bodyContent.projectTypeId ? bodyContent.projectTypeId : null;
var projectStatusId = bodyContent.projectStatusId ? bodyContent.projectStatusId : null;
var nameManager= bodyContent.nameManager ? bodyContent.nameManager : null;
var professionalName= bodyContent.professionalName ? bodyContent.professionalName : null;
var draftsmanName= bodyContent.draftsmanName ? bodyContent.draftsmanName : null;

//var resultOperator = OperatorSrv.getById(operatorId).result;
//logger.log(resultOperator);
//if(resultOperator = "" || resultOperator == null || resultOperator == undefined){
//	logger.log("CTL-1");
//	logger.log("CTL-2");
//	var Operator = new Operator();
//	logger.log("CTL-3");
//	Operator.name = "test" + operatorId;
//	Operator.typeOperator = 1;
//	OperatorSrv.add(Operator);
//}
//var Operator = new Operator();
//for (var x = 701; x < 1500; x++) {
//	logger.log("CTL-2");
//	logger.log("CTL-3");
//	Operator.name = "test" + x;
//	logger.log("CTL-4");
//	Operator.typeOperator = 1;
//	logger.log("CTL-5");
//	OperatorSrv.add(Operator);
//}

if(sucId !== null){
	var suc = SucSrv.getById(sucId);
	if(suc !== null && projectTypeId !== null){
		var projectType = ProjectTypeSrv.getById(projectTypeId);
		if(projectType !== null && operatorId !== null){
			var operator = OperatorSrv.getById(operatorId);
			if(operator !== null){
			var getStatusProjectObject = ProjectStatusSrv.getById(projectStatusId);
				if(getStatusProjectObject !== null){
					var sucProject = new SucProject();
					sucProject.id=idSucProject;
					sucProject.name=sucProjectName;
					sucProject.finishDate=formatDate(finishDate);
					sucProject.startDate= formatDate(startDate);
					sucProject.description=description;
					sucProject.sucEntity=suc.result;
					sucProject.operator = operator.result;
					sucProject.projectType= projectType.result;
					sucProject.projectStatusEntity = getStatusProjectObject.result;
					sucProject.chiefArchitect = nameManager;
					sucProject.professionalName = professionalName;
					sucProject.draftsmanName = draftsmanName;
					model.resultSet = SucProjectSrv.addOrUpdate(sucProject);
				}
			}	
		}
	}
}

function formatDate(text){
	var dateValues = text.split("/");
	return new Date(dateValues[2],dateValues[1]-1,dateValues[0], 16,5,4,567);
}
