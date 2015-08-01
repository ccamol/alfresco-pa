<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');

var EQUALS_TO = 0;
var filter= bodyContent.filter ? bodyContent.filter : null;

var tenderStagesFilter = new TenderStagesFilter();
tenderStagesFilter.tender.exact(filter, EQUALS_TO);

var resultSet = TenderStagesSrv.getListByFilter(tenderStagesFilter, "id", true);

if(resultSet.status > -1){
	model.resultSet = resultSet;
}else{
	model.resultSet = null;
}