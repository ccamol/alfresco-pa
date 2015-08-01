<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');

var idTender= bodyContent.idTender ? bodyContent.idTender : null;
var AInit= bodyContent.AInit ? bodyContent.AInit : null;
var Afinish= bodyContent.Afinish ? bodyContent.Afinish : null;
var IDone= bodyContent.IDone ? bodyContent.IDone : null;
var Stageone= bodyContent.Stageone ? bodyContent.Stageone : null;
var BInit= bodyContent.BInit ? bodyContent.BInit : null;
var Bfinish= bodyContent.Bfinish ? bodyContent.Bfinish : null;
var IDtwo= bodyContent.IDtwo ? bodyContent.IDtwo : null;
var Stagetwo= bodyContent.Stagetwo ? bodyContent.Stagetwo : null;
var CInit= bodyContent.CInit ? bodyContent.CInit : null;
var Cfinish= bodyContent.Cfinish ? bodyContent.Cfinish : null;
var IDthree= bodyContent.IDthree ? bodyContent.IDthree : null;
var Stagethree= bodyContent.Stagethree ? bodyContent.Stagethree : null;
var DInit= bodyContent.DInit ? bodyContent.DInit : null;
var Dfinish= bodyContent.Dfinish ? bodyContent.Dfinish : null;
var IDfour= bodyContent.IDfour ? bodyContent.IDfour : null;
var Stagefour= bodyContent.Stagefour ? bodyContent.Stagefour : null;
var EInit= bodyContent.EInit ? bodyContent.EInit : null;
var Efinish= bodyContent.Efinish ? bodyContent.Efinish : null;
var IDfive= bodyContent.IDfive ? bodyContent.IDfive : null;
var Stagefive= bodyContent.Stagefive ? bodyContent.Stagefive : null;
var FInit= bodyContent.FInit ? bodyContent.FInit : null;
var Ffinish= bodyContent.Ffinish ? bodyContent.Ffinish : null;
var IDsix= bodyContent.IDsix ? bodyContent.IDsix : null;
var Stagesix= bodyContent.Stagesix ? bodyContent.Stagesix : null;
var projectTypeId= bodyContent.projectTypeId ? bodyContent.projectTypeId : null;

addTenderBD(idTender, IDone, AInit, Afinish , projectTypeId , Stageone);
addTenderBD(idTender, IDtwo, BInit, Bfinish , projectTypeId , Stagetwo);
addTenderBD(idTender, IDthree, CInit, Cfinish , projectTypeId , Stagethree);
addTenderBD(idTender, IDfour, DInit, Dfinish , projectTypeId , Stagefour);
addTenderBD(idTender, IDfive, EInit, Efinish , projectTypeId , Stagefive);
addTenderBD(idTender, IDsix, FInit, Ffinish , projectTypeId , Stagesix);

function formatDate(text){
	var dateValues = text.split("/");
	return new Date(dateValues[2],dateValues[1]-1,dateValues[0], 16,5,4,567);
}

function addTenderBD(TenderID , splitID , toDate , fromDate , projectTypeId , Stage){
	var tenderStages = new TenderStages();
	var tender = null;
	var result;
	var stageTypeTender = new StageTypeTender();
//	logger.log(TenderID + "        ++++++++++++++++++++++++");
	tenderStages.id = Stage;
	tender = TendersSrv.getById(TenderID).result;
	tenderStages.tender = tender;
	tenderStages.idProjectType = projectTypeId;
	var index = splitID.substr(0,1);
	var stageTypeTender = new StageTypeTender();
	stageTypeTender = StageTypeTenderSrv.getById(index).result;
	tenderStages.stageTypesTender = stageTypeTender;
	var estado = new TenderStages();
	estado = TenderStagesSrv.getById(Stage);
	tenderStages.stageStatus = estado.result.stageStatus;
	tenderStages.questionsStatus = estado.result.questionsStatus;
	
	if(toDate!=null && toDate!=undefined && toDate!="" && toDate!="null"){
//		logger.log("============   " + toDate);
		tenderStages.initDate = formatDate(toDate);
	}
//	logger.log("===== flag 8");
	if(fromDate!=null && fromDate!=undefined && fromDate!="" && fromDate!="null"){
		logger.log("============   " + fromDate);
		tenderStages.endDate = formatDate(fromDate);
	}
	
	TenderStagesSrv.addOrUpdate(tenderStages);
}


