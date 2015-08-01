<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');

var idTender= bodyContent.idTender ? bodyContent.idTender : null;
var userName= bodyContent.userName ? bodyContent.userName : null;
var d = new Date, dformat = [d.getDate(), d.getMonth()+1, d.getFullYear(),].join('-')+''+[d.getHours(),d.getMinutes(),d.getSeconds()].join(':');
var awardDate = d;
var EQUALS_TO = 0;


var awardapplicantTender = new AwardApplicantTender();
var awardapplicantTenderFilter = new AwardApplicantTenderFilter();
var tender = new Tender();


if(idTender !== null && userName !== null){
	awardapplicantTenderFilter.tender.exact(idTender, EQUALS_TO);
	awardapplicantTenderFilter.userName.exact(userName, EQUALS_TO);
	var resultAAT = AwardApplicantTenderSrv.getListByFilter(awardapplicantTenderFilter);
	if(resultAAT.result.size() == 0){
		tender = TendersSrv.getById(idTender);
		if(tender !== null){
			awardapplicantTender.tender = tender.result;
			awardapplicantTender.userName = userName;
			if(awardDate !== null){
				awardapplicantTender.awardDate = awardDate;
			}
			response = AwardApplicantTenderSrv.add(awardapplicantTender);
			if(response.status > - 1 ){
				model.status = response.status;
			}else{
				model.status = "-3";
			}

		}else{
			model.status = "0";
		}
	}else{
		model.status = "-2";
	}
}else{
	model.status = "-1";
}

