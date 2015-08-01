<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');

var idTender= bodyContent.idTender ? bodyContent.idTender : null;
var idApplicant= bodyContent.idApplicant ? bodyContent.idApplicant : null;


var applicantTender = new ApplicantTender();
var tender = new Tender();
var applicant = new Applicant();


if(idTender !== null && idApplicant !== null){
	tender = TendersSrv.getById(idTender);
	applicant = ApplicantSrv.getById(idApplicant);
	if(tender !== null && applicant !== null){
		applicantTender.tender = tender.result;
		applicantTender.applicant = applicant.result;
		response = ApplicantTenderSrv.add(applicantTender);
		if(response.status > - 1 ){
			model.resultSet = response;
		}else{
			model.resultSet = null;
		}
		
	}else{
		model.resultSet = null;
	}
}else{
	model.resultSet = null;
}