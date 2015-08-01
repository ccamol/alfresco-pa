<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');

var EQUALS_TO = 0;
var idTender= bodyContent.idTender ? bodyContent.idTender : null;
var stageTypeId= bodyContent.stageTypeId ? bodyContent.stageTypeId : null;
//logger.log("idTender: "+idTender);
//logger.log("stageTypeId: "+stageTypeId);

var tenderStageFilter = TenderStageFilter();

if(idTender !== null && stageTypeId !== null){
	tenderStageFilter.tender.exact(idTender, EQUALS_TO);
	tenderStageFilter.stageTypesTender.exact(stageTypeId, EQUALS_TO);
	
	var resultSet = TenderStagesSrv.getListByFilter(tenderStageFilter);
	if(resultSet.status > -1){
		model.resultSet = resultSet.result.get(0);
	}else{
		model.resultSet = null;
	}
}else{
	model.resultSet = null;
}