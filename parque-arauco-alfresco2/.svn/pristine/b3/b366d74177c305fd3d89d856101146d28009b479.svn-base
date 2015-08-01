var idTender = null;

$(document).ready(function() {	

	idTender = getUrlVars()["idTender"].replace(".","");	


	$("#country").bind('change',function(){
		idCountry = $("#country").val();
		if(idCountry == 0){
			$("#mall").empty();
		}else{
			getMalls(idCountry, null);
		}

	});
});

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}

function addApplicantToTender(idApplicant){
	$.ajax({
		url:'/share/service/dashlets/addApplicantToTender',
		type: "get",
		dataType: "html",  
		async: false,  
		data : {
			idTender : idTender,
			idApplicant : idApplicant
		},
		success:   function(data) {
			stageTenderDetails = getStagesTenderDetails(1);
			var stageStatus = stageTenderDetails.stageStatus
			popupSuccessTender('Postulante agregado');
			getAllApplicants();
			getApplicatByTender();
			getApplicantByTender(idTender, stageStatus);
		}
	});	
}
function getStagesTenderDetails(stageTypeId){
	var tenderStagesData = null;
	$.ajax({
		url:'/share/page/dashlets/getStageTenderDetails',
		type: "get",
		dataType: "json",
		async : false,
		data: {
			idTender : idTender,
			stageTypeId : stageTypeId

		},
		success:   function(data) {
			tenderStagesData = data;

		}
	});

	return tenderStagesData;

}