<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var bodyContent = eval('(' + requestbody.content + ')');

var idTender= bodyContent.idTender ? bodyContent.idTender : null;
var idApplicant= bodyContent.idApplicant ? bodyContent.idApplicant : null;
var EQUALS_TO = 0;

if(idTender !== null && idApplicant !== null){
	var applicantTender = new ApplicantTender();
	var applicantTenderFilter = ApplicantTenderFilter();
	applicantTenderFilter.tender.exact(idTender, EQUALS_TO);
	applicantTenderFilter.applicant.exact(idApplicant, EQUALS_TO);
	
	applicantTender = ApplicantTenderSrv.getListByFilter(applicantTenderFilter);
	var response = ApplicantTenderSrv.remove(applicantTender.result.get(0));
//	logger.log("response: "+response);
	if(response.status > -1){
		model.resultSet = response;	
	}else{
		model.resultSet = null;
	}
}else{
	model.resultSet = null;
}