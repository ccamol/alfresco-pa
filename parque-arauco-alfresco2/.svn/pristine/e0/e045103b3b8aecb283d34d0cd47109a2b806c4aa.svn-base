<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');
var idTender= bodyContent.idTender ? bodyContent.idTender : null;

var CONTAINS = 8;
var EQUALS_TO = 0;
var applicantTenderFilter = ApplicantTenderFilter();
var awardApplicantTenderFilter = AwardApplicantTenderFilter();
var applicantObject = null;
var arrayApplicant = [];
arrayApplicant.properties = [];
var resultSet = [];

if(idTender !== null){
	awardApplicantTenderFilter.tender.exact(idTender, EQUALS_TO);
	var result = AwardApplicantTenderSrv.getListByFilter(awardApplicantTenderFilter).result;
	applicantTenderFilter.tender.exact(idTender, EQUALS_TO);
	applicantObject = ApplicantTenderSrv.getListByFilter(applicantTenderFilter).result;

	
	for (var x = 0; x < applicantObject.size(); x++) {
		arrayApplicant = null;
		arrayApplicant = [];
		arrayApplicant.properties = [];
		arrayApplicant.properties["id"] = applicantObject.get(x).applicant.id;
		arrayApplicant.properties["identificationNumber"] = applicantObject.get(x).applicant.identificationNumber;
		arrayApplicant.properties["idTender"] = applicantObject.get(x).tender.id;
		arrayApplicant.properties["nameTender"] = applicantObject.get(x).tender.name;
		arrayApplicant.properties["name"] = applicantObject.get(x).applicant.name;
		arrayApplicant.properties["mail"] = applicantObject.get(x).applicant.mail;
		arrayApplicant.properties["additionalInfo"] = applicantObject.get(x).applicant.additionalInfo;
		arrayApplicant.properties["mallId"] = applicantObject.get(x).applicant.mall.id;
		arrayApplicant.properties["countryId"] = applicantObject.get(x).applicant.country.id;
		for (var i = 0; i < result.size(); i++) {
			if(applicantObject.get(x).applicant.name.equals(result.get(i).userName)){
				arrayApplicant.properties["awardApplicant"] = "true";
			}
		}
		resultSet.push(arrayApplicant);
	}
	
	
	
	
	
	
	model.resultSet = resultSet;	

}else{
	model.resultSet = null;
}
