<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');
var idProject= bodyContent.idProject ? bodyContent.idProject : null;
var EQUALS_TO = 0;
var getProjects = null;

thirdPartyProjectFilter = new ThirdPartyProjectFilter();
thirdPartyProjectFilter.architectureProjectEntity.exact(idProject, EQUALS_TO);
getProjects = ThirdPartyProjectsService.getListByFilter(thirdPartyProjectFilter).result;

if(getProjects != null){
	model.resultSet = getProjects;
	model.idProject = idProject;
}else{
	model.resultSet = null;
}





