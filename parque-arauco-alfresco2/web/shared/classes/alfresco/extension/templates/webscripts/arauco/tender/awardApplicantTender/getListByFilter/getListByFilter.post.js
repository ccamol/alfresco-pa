<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');

var idTender= bodyContent.idTender ? bodyContent.idTender : null;
var userName= person.properties.userName;
var EQUALS_TO = 0;


var awardapplicantTender = new AwardApplicantTender();
var awardapplicantTenderFilter = new AwardApplicantTenderFilter();
var result = null;


if(idTender !== null && userName !== null){
	awardapplicantTenderFilter.tender.exact(idTender, EQUALS_TO);
	awardapplicantTenderFilter.userName.exact(userName, EQUALS_TO);
	var resultAAT = AwardApplicantTenderSrv.getListByFilter(awardapplicantTenderFilter).result;
	if(resultAAT.size() > 0){
		model.status = "1";
	}else{
		model.status = "-2";
	}
}else{
	model.status = "-1";
}

