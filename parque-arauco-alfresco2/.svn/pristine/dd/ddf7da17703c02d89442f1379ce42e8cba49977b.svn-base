<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

//logger.log("**********************  ALFRESCO SUC***********************");
var bodyContent = eval('(' + requestbody.content + ')');

var id = bodyContent.id? bodyContent.id : null;
//logger.log("VALOR ID POST =" +id );
var sucList = new Array();
var EQUALS_TO = 0;
var NO_EQUALS_TO = 9;// se crea para inicializar las busqueda  

var sucFilter =  SucFilter(); //con esto crea un objeto de tipo filtro ha buscar 
sucFilter.mall.exact(id, EQUALS_TO); //con esto le dijo que busque algo al filtro en un campo especifico ejemplo mall
sucFilter.sucType.exact(2, NO_EQUALS_TO);
var projectResponse =SucSrv.getListByFilter(sucFilter); //el filtro busca dentro de la tabla 


if(projectResponse.status>-1){           
	sucList = projectResponse.result;
}

model.resultSet = sucList;        
model.status=projectResponse.status;  
model.message=projectResponse.message;





