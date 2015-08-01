<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');

var username = person.properties.userName;
var CONTAINS = 8;
var EQUALS_TO = 0;
var tenderStagesFilter = TenderStagesFilter();
var applicantTenderFilter = ApplicantTenderFilter();
var applicantFilter = ApplicantFilter();
var tenderFilter = TenderFilter();
var tenderStagesObject = new Array();
var tenders = null;
var resultSet = null;
var stageObject = null;
var tenderObject = null;

if(username !== null){
	applicantFilter.name.exact(username, CONTAINS);
	tenders = ApplicantSrv.getListByFilter(applicantFilter);

	if(tenders !== null && tenders !== undefined && tenders.result.size() > 0){
		var idApplicant = tenders.result.get(0).id;
		applicantTenderFilter.applicant.exact(idApplicant, EQUALS_TO);
		var applicantTenderArray  = ApplicantTenderSrv.getListByFilter(applicantTenderFilter).result;
		for ( var i = 0; i < applicantTenderArray.size(); i++) {
			stageObject = null;
			tenderFilter.id.exact(applicantTenderArray.get(i).tender.id, EQUALS_TO);
			tenderFilter.participant.exact(1, EQUALS_TO);
			tenderObject = TendersSrv.getListByFilter(tenderFilter).result;
			if(tenderObject.size() > 0){
				tenderStagesFilter.tender.exact(tenderObject.get(0).id, EQUALS_TO);
				tenderStagesFilter.stageStatus.exact(1, EQUALS_TO);

				stageObject = TenderStagesSrv.getListByFilter(tenderStagesFilter).result;
			}
			if(stageObject !== null && stageObject !== undefined && stageObject.size() > 0){
				tenderStagesObject.push(stageObject);
			}
		}
		model.resultSet = tenderStagesObject;
		model.username = username;

	}else{
		model.resultSet = null;
		model.username = null;
	}
}else{
	model.resultSet = null;
	model.username = null;
}

