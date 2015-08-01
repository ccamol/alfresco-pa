<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');
var idTender= bodyContent.idTender ? bodyContent.idTender : null;

var CONTAINS = 8;
var EQUALS_TO = 0;
var username = person.properties.userName;
var applicantFilter = ApplicantFilter();
var applicantTenderFilter = ApplicantTenderFilter();
var applicant = null;
var idApplicant = null;
var applicantTender = new ApplicantTender();


if(username !== null){
	applicantFilter.name.exact(username, CONTAINS);
	applicant = ApplicantSrv.getListByFilter(applicantFilter);

	if(applicant !== null &&  applicant !== null){
		idApplicant = applicant.result.get(0).id;
		if(idApplicant !== null){
			applicantTenderFilter.applicant.exact(idApplicant, EQUALS_TO);
			applicantTenderFilter.tender.exact(idTender, EQUALS_TO);
			applicantTender = ApplicantTenderSrv.getListByFilter(applicantTenderFilter);
			if(applicantTender !== null && applicantTender !== undefined && applicantTender.result.size() > 0){
				var response = ApplicantTenderSrv.remove(applicantTender.result.get(0));
				if(response.status > -1){
					model.response = response;	
				}else{
					model.response = null;
				}
			}else{
				model.response = null;
			}
		}
	}else{
		model.response = null;
	}
}else{
	model.response = null;
}


