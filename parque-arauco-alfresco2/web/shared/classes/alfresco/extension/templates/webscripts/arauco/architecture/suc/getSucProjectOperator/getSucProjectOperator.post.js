//<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

//var bodyContent = eval('(' + requestbody.content + ')');

//var filter= bodyContent.filter ? bodyContent.filter : null;
//var operatorFilter = new OperatorFilter();

//if(filter !== null){
//filter = filter.replace(".", "");
//var EQUALS_TO = 0;
//operatorFilter.typeOperator.exact(filter, EQUALS_TO);
//}

//resultSet = OperatorSrv.getListByFilter(operatorFilter);

//if(resultSet.status > -1){
//model.resultSet = resultSet;
//}else{
//model.resultSet = null;
//}

var listgroup = groups.getGroup("TERCEROS").getChildGroups();  
if(listgroup.length > 0){
	model.resultSet = listgroup;
}else{
	model.resultSet = null;
}