<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

//logger.log("**********************  ALFRESCO ***********************");
var bodyContent = eval('(' + requestbody.content + ')');

var id = bodyContent.id? bodyContent.id : null;
//logger.log("VALOR ID POST =" +id );
var projectList = new Array();
var EQUALS_TO = 0; // se crea para inicializar las busqueda  

var engineeringProjectFiler = EngineeringProjectFiler(); //con esto crea un objeto de tipo filtro ha buscar 
engineeringProjectFiler.mall.exact(id, EQUALS_TO); //con esto le dijo que busque algo al filtro en un campo especifico ejemplo mall
var projectResponse =EngineeringProjectSrv.getListByFilter(engineeringProjectFiler); //el filtro busca dentro de la tabla 


if(projectResponse.status>-1){           
	projectList = projectResponse.result;
}

model.resultSet = projectList;        
model.status=projectResponse.status;  
model.message=projectResponse.message;





