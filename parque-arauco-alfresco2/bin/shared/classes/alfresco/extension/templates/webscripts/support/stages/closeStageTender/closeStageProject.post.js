<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var bodyContent = eval('(' + requestbody.content + ')');
var id= bodyContent.id ? bodyContent.id : null;
var idTender = bodyContent.tenderId ? bodyContent.tenderId : null;
var closeStage = 0;
var openStage = 1;
var EQUALS_TO = 0;
var tenderStageFilter = new TenderStageFilter();
var response = TendersSrv.getById(idTender);
var projectTypeId = response.result.projectTypeId;
var tenderStages = new TenderStages();
var projectStageOpen = new ProjectStages();
var idStage = null;
var idNextStage = null;

tenderStageFilter.idProjectType.exact(projectTypeId, EQUALS_TO);

if(idTender !== null && idTender !== undefined && idTender !== null){
	tenderStageFilter.tender.exact(idTender, EQUALS_TO);
}

var responseStages = TenderStagesSrv.getListByFilter(tenderStageFilter, "id", true);

for ( var i = 0; i < responseStages.result.size(); i++) {
	idStage = responseStages.result.get(i).id;
	if(id == idStage){
//		logger.log("Etapas coinciden: "+responseStages.result.size()+" valor de i: "+ (i +1) );
		if((i + 1) <responseStages.result.size()){
//			logger.log("Next Stage...");
			idNextStage = responseStages.result.get(i + 1).id;
		}

	}
}
tenderStages = TenderStagesSrv.getById(id);
if(tenderStages.status != -1){
	if(id != null && id != undefined ){
//		logger.log("id: "+id+ " and status: "+tenderStages.status);
		tenderStages = tenderStages.result;
//		logger.log("================================Cierra Etapa=============================");
//		logger.log("=========================================================================");
		tenderStages.stageStatus = closeStage;
		TenderStagesSrv.addOrUpdate(tenderStages);

	}
}
//logger.log("_________________________________________________________________________________________________________");
//logger.log("_________________________________________________________________________________________________________");
//logger.log("idClosingStage: "+idNextStage);
if(idNextStage != null && idNextStage != undefined){
	stageStageOpen =  TenderStagesSrv.getById(idNextStage);
	if(stageStageOpen.status != -1){
		stageStageOpen = stageStageOpen.result;
//		logger.log("================================Abre Etapa===============================");
//		logger.log("idClosingStage: "+idNextStage);
//		logger.log("=========================================================================");
		if(stageStageOpen.status != -1){
//			logger.log("ctrl-002");
			stageStageOpen.stageStatus = openStage;
			TenderStagesSrv.addOrUpdate(stageStageOpen);
		}
	}
}


