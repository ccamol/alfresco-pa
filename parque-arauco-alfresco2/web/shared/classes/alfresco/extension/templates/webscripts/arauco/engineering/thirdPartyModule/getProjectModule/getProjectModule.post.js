<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var bodyContent = eval('(' + requestbody.content + ')');

var filter= bodyContent.filter ? bodyContent.filter : null;

var projectFilter = new ProjectFilter();

if(filter!=null){
	var EQUALS_TO = 0;
	projectFilter.mall.exact(filter, EQUALS_TO);
}

var resultSet = EngineeringProjectSrv.getListByFilter(projectFilter);

for(var i=0; i<resultSet.result.size();i++){
	if(!SecurityService.checkSecurity(resultSet.result.get(i).id, 2, 13)){
		resultSet.result.remove(i);
	}
}

model.SecurityService=SecurityService;
model.resultSet = resultSet;



