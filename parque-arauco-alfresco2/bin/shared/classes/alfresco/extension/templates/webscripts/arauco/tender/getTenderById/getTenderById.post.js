<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');
var filter= bodyContent.filter ? bodyContent.filter : null;

//logger.log("filter: "+filter);

var resultSet = TendersSrv.getById(filter);


if(resultSet.status > -1){
	model.resultSet = resultSet;
}else{
	model.resultSet = null;
}

