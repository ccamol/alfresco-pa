<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');
var idStageTender= bodyContent.idStageTender ? bodyContent.idStageTender : null;
var statusQueries= bodyContent.statusQueries ? bodyContent.statusQueries : null;


//logger.log("idStageTender: "+idStageTender);

var CONTAINS = 8;
var EQUALS_TO = 0;
var tenderStages = new TenderStages();
var tenderStagesObject = new TenderStages();
var resultSet = null;

if(idStageTender !== null){
	tenderStagesObject = TenderStagesSrv.getById(idStageTender);
	if(tenderStagesObject.status > -1){
		tenderStages.id = tenderStagesObject.result.id;
		tenderStages.tender = tenderStagesObject.result.tender;
		tenderStages.idProjectType = tenderStagesObject.result.idProjectType;
		tenderStages.stageTypesTender = tenderStagesObject.result.stageTypesTender;
		tenderStages.initDate = tenderStagesObject.result.initDate;
		tenderStages.endDate = tenderStagesObject.result.endDate;
		tenderStages.stageStatus = tenderStagesObject.result.stageStatus;
		tenderStages.questionsStatus = statusQueries;
		var resultSet = TenderStagesSrv.addOrUpdate(tenderStages);
		if(resultSet.status > -1){
			model.resultSet = resultSet.status;
		}else{
			model.resultSet = -1;
		}
	}else{
		model.resultSet = -1;
	}
}else{
	model.resutlSet = -1;
}

