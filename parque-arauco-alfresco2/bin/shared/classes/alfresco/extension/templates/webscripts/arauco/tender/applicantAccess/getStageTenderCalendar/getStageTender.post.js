<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');
var calendar= bodyContent.calendar ? bodyContent.calendar : null;

var CONTAINS = 8;
var EQUALS_TO = 0;
var tenderStagesFilter = TenderStagesFilter();
var stageObject = null;

if(calendar !== null && calendar !== '' && calendar !== undefined){
	tenderStagesFilter.tender.exact(calendar, EQUALS_TO);

	stageObject = TenderStagesSrv.getListByFilter(tenderStagesFilter).result;
	model.resultSet = stageObject;	

}else{
	model.resultSet = null;
}

