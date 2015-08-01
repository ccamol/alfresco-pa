<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');

var EQUALS_TO = 0;
var idTender= bodyContent.idTender ? bodyContent.idTender : null;
//logger.log("idTender: "+idTender);

var tenderStageFilter = TenderStageFilter();

if(idTender !== null){
	tenderStageFilter.tender.exact(idTender, EQUALS_TO);
	tenderStageFilter.stageStatus.exact(1, EQUALS_TO);
	
	var resultSet = TenderStagesSrv.getListByFilter(tenderStageFilter);
	if(resultSet.status > -1){
		model.resultSet = resultSet.result.get(0);
	}else{
		model.resultSet = null;
	}
}else{
	model.resultSet = null;
}