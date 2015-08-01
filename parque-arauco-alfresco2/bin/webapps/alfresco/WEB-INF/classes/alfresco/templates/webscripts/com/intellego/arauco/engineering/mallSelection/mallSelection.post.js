<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');
var filter= bodyContent.filter ? bodyContent.filter : null;
var idCountry= bodyContent.idCountry ? bodyContent.idCountry : null;
var EQUALS_TO = 0;
var mallFilter = new MallFilter();

if(filter!=null){
	mallFilter.mallType.exact(filter, EQUALS_TO);
}
if(idCountry!=null){
	mallFilter.country.exact(idCountry, EQUALS_TO);
}

var resultado = MallSrv.getListByFilter(mallFilter);
if(resultado.status>-1){
	model.resultSet=resultado.result;
}else{
	model.resultSet = new Array();
}

model.SecurityService=SecurityService;
