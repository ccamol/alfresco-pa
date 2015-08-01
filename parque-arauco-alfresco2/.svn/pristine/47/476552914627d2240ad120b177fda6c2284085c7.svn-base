<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');

var idTender= bodyContent.idTender ? bodyContent.idTender : null;
var userName= bodyContent.userName ? bodyContent.userName : null;
var EQUALS_TO = 0;


var awardapplicantTender = new AwardApplicantTender();
var awardapplicantTenderFilter = new AwardApplicantTenderFilter();
var result = null;


if(idTender !== null && userName !== null){
	awardapplicantTenderFilter.tender.exact(idTender, EQUALS_TO);
	awardapplicantTenderFilter.userName.exact(userName, EQUALS_TO);
	var resultAAT = AwardApplicantTenderSrv.getListByFilter(awardapplicantTenderFilter).result;
	if(resultAAT.size() > 0){
		for (var i = 0; i < resultAAT.size(); i++) {
			awardapplicantTender = AwardApplicantTenderSrv.getById(resultAAT.get(i).id).result;
			result = AwardApplicantTenderSrv.remove(awardapplicantTender);
			if(result.status == 1){
				model.status = "1";
			}else{
				model.resultSet = "-1";
			}
		}
		
		
	}else{
		model.status = "-2";
	}
}else{
	model.status = "-1";
}

