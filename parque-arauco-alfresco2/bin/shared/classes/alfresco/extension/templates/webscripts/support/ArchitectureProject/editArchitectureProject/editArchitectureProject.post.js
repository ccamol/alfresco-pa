<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');

var idprojectArc= bodyContent.idprojectArc ? bodyContent.idprojectArc : null;
var name = bodyContent.name ? bodyContent.name : null;
var startDate = bodyContent.startDate ? bodyContent.startDate : null;
var finishDate = bodyContent.finishDate ? bodyContent.finishDate : null;
var description = bodyContent.description ? bodyContent.description : null;
var mallId = bodyContent.mallId ? bodyContent.mallId : null;
var projectTypeId = bodyContent.projectTypeId ? bodyContent.projectTypeId : null;
var projectStatusId = bodyContent.projectStatusId ? bodyContent.projectStatusId : null;
var nameManager= bodyContent.nameManager ? bodyContent.nameManager : null;
var nameCompany= bodyContent.nameCompany ? bodyContent.nameCompany : null;
var companyAwar= bodyContent.companyAwar ? bodyContent.companyAwar : null;
var numberOC= bodyContent.numberOC ? bodyContent.numberOC : null;
var professionalName= bodyContent.professionalName ? bodyContent.professionalName : null;
var draftsmanName= bodyContent.draftsmanName ? bodyContent.draftsmanName : null;

//logger.log("########--------- idprojectArc " + idprojectArc + "		----------- ###########"); 
//logger.log(mallId);
//logger.log(projectTypeId);
if(mallId != null){
	var mall = MallSrv.getById(mallId);
	if(projectTypeId != null){
		var projectType = ProjectTypeSrv.getById(projectTypeId);
		var architectureProject = new ArchitectureProject();
//		logger.log("########--------- idprojectArc " + idprojectArc + "		----------- ###########");
		architectureProject.id=idprojectArc;
		architectureProject.name=name;
		architectureProject.createDate=formatDate(startDate);
		architectureProject.finishDate=formatDate(finishDate);
		architectureProject.description=description;
		architectureProject.mall=mall.result;
		architectureProject.projectType= projectType.result;
		if(projectStatusId != 'none'){
			var getStatusProjectObject = ProjectStatusSrv.getById(projectStatusId);
			architectureProject.projectStatusEntity = getStatusProjectObject.result;
		}
		architectureProject.chiefArchitect = nameManager;
		architectureProject.companyAwarded = nameCompany;
		architectureProject.professionalName = professionalName;
		architectureProject.draftsmanName = draftsmanName;
		architectureProject.numberOC = numberOC;
		architectureProject.companyAwardedRut = companyAwar;

		var resultSet = ArchitectureProjectSrv.addOrUpdate(architectureProject);
		model.resultSet = resultSet;
	}
}

function formatDate(text){
	var dateValues = text.split("/");
	return new Date(dateValues[2],dateValues[1]-1,dateValues[0], 16,5,4,567);
}

