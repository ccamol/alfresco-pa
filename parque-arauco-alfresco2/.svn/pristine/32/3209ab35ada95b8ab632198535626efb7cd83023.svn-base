<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var bodyContent = eval('(' + requestbody.content + ')');

var status= bodyContent.status ? bodyContent.status : null;

var projectFilter = new ProjectFilter();
//logger.log("entro a alfresco");
if(status!=null){
//	logger.log("CTL-1: EL STATUS ES: "+status );
	var EQUALS_TO = 0;
	projectFilter.engineeringProjectStatusEntity.exact(status, EQUALS_TO);
}
model.resultSet = EngineeringProjectSrv.getListByFilter(projectFilter);
//logger.log("===========================================")
//logger.log(EngineeringProjectSrv.getListByFilter(projectFilter));
