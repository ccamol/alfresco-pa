<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
//logger.log("**********************  ALFRESCO ***********************");

var bodyContent = eval('(' + requestbody.content + ')');
var id = bodyContent.id? bodyContent.id: null;

//logger.log("PRiMER VALOR INGRESO ID POST " + id);
var projectStatus = new Array();
var EQUALS_TO = 0; 

var projectStageFilter = ProjectStageFilter(); //con esto crea un objeto de tipo filtro ha buscar 
projectStageFilter.idProject.exact(id,EQUALS_TO); //con esto le dijo que busque algo al filtro en una tabla 
var statusResponse =ProjectStagesSrv.getListByFilter(projectStageFilter); //el filtro busca dentro de la tabla a buscar 

//logger.log("segundo  VALOR INGRESO ID POST :" + statusResponse.status);

if(statusResponse.status>-1){           
	projectStatus = statusResponse.result;
}

model.resultSet = projectStatus;        
model.status=statusResponse.status;  
model.message=statusResponse.message;


