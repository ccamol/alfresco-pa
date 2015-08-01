<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var bodyContent = eval('(' + requestbody.content + ')');

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

//var resultOperator = OperatorSrv.getById(sucId).result;
//if(resultOperator.size()<=0){
//	var operatorFilter = OperatorSrv.getAll();
//	var Operator = new Operator();
//	Operator.id = operatorId;
//	Operator.name = "test" + operatorFilter.size();
//	OperatorSrv.addOrUpdate(Operador);
//}

if(sucId !== null){
	var suc = SucSrv.getById(sucId);
	if(suc !== null && projectTypeId !== null){
		var projectType = ProjectTypeSrv.getById(projectTypeId);
		if(projectType !== null && operatorId !== null){
			var operator = OperatorSrv.getById(operatorId);
			if(operator !== null){
					var sucProject = new SucProject();
					sucProject.name=sucProjectName;
					sucProject.finishDate=formatDate(finishDate);
					sucProject.startDate= formatDate(startDate);
					sucProject.description=description;
					sucProject.sucEntity=suc.result;
					sucProject.operator = operator.result;
					if(projectStatusId != 'none'){
						var getStatusProjectObject = ProjectStatusSrv.getById(projectStatusId);
						sucProject.projectStatusEntity = getStatusProjectObject.result;
					}
					sucProject.projectType= projectType.result;
					
					sucProject.chiefArchitect = nameManager;
					sucProject.professionalName = professionalName;
					sucProject.draftsmanName = draftsmanName;
					model.resultSet = SucProjectSrv.addOrUpdate(sucProject);
				}
			}	
		}
	}

function formatDate(text){
	var dateValues = text.split("/");
	return new Date(dateValues[2],dateValues[1]-1,dateValues[0], 16,5,4,567);
}
