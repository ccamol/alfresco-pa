<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var bodyContent = eval('(' + requestbody.content + ')');

var filter= bodyContent.filter ? bodyContent.filter : null;

var projectFilter = new ProjectFilter();

if(filter!=null){
	var EQUALS_TO = 0;
	projectFilter.mall.exact(filter, EQUALS_TO);
}
model.resultSet = EngineeringProjectSrv.getListByFilter(projectFilter);
logger.log("===========================================")
logger.log(EngineeringProjectSrv.getListByFilter(projectFilter));
