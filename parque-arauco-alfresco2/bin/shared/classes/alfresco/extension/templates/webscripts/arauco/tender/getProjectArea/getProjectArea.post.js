<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');
var filter= bodyContent.filter ? bodyContent.filter : null;
var engineeringProjectFiler = new EngineeringProjectFiler();
var resultSetEng =null;
var StatusProject=1;
var EQUALS_TO = 0;
var resultSetArch =null;
var resultSetSucPro =null;
model.resultSetSucPro = [];
model.resultSetArch=[];
model.resultSetEng = [];

if (filter!=null) {
	if (filter==2) {
		engineeringProjectFiler.projectStatusEntity.exact(StatusProject,EQUALS_TO);
		resultSetEng=EngineeringProjectSrv.getListByFilter(engineeringProjectFiler);

		if(resultSetEng.status > -1){

			model.resultSetEng = resultSetEng.result;

		}else{

		}
	}
	if (filter==1) {
		var architectureProjectFilter = new  ArchitectureProjectFilter();
		architectureProjectFilter.projectStatusEntity.exact(StatusProject,EQUALS_TO);

		var sucProjectFilter = new SucProjectFilter();
		sucProjectFilter.projectStatusEntity.exact(StatusProject,EQUALS_TO);

		resultSetSucPro = SucProjectSrv.getListByFilter(sucProjectFilter);
		resultSetArch = ArchitectureProjectSrv.getListByFilter(architectureProjectFilter);

		if(resultSetArch.status > -1){
			model.resultSetArch = resultSetArch.result;

		}

		if(resultSetSucPro.status > -1){
			model.resultSetSucPro = resultSetSucPro.result;

		}
	}
}

