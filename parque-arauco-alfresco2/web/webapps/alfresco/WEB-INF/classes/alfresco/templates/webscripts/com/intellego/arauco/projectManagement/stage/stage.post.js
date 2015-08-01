<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
logger.log("================entro a sgate post====================");
var bodyContent = eval('(' + requestbody.content + ')');

var filter= bodyContent.filter ? bodyContent.filter : null;

var projectStageFilter = new ProjectStageFilter();
var StageType = new StageType();

logger.log("================el filter es====================");
logger.log(filter);

if(filter!=null){
	var EQUALS_TO = 0;
	
	projectStageFilter.id.exact(filter, EQUALS_TO);
	
}

model.resultSet = ProjectTypeSrv.getListByFilter(projectStageFilter);
var hola = ProjectTypeSrv.getListByFilter(projectStageFilter);
logger.log("=======================el hola es===============================");


for(var i=0;i<hola.result.size(); i++){
	logger.log("el nombre es: "+ hola.result.get(i).stageTypes);
	
	var stage = hola.result.get(i).stageTypes;
	
   logger.log("el stage es: "+stage);
}



