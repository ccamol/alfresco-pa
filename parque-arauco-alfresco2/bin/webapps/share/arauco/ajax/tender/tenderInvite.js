var idTender = null;
var nodeType = null
var initApplicantName = null;
$(document).ready(function() {	

	idTender = getUrlVars()["idTender"].replace(".","");
	nodeType = getUrlVars()["nodeType"].replace(".","");

	$('#createApplicant').click(function(){
		createApplicant();
		getCountries(null);
	});

	$('#existingApplicants').click(function(){
		existingApplicants();
	});

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


function createApplicant(){
	$.ajax({
		url:'/share/page/dashlets/createApplicant',
		type: "get",
		dataType: "html",  
		async: false,  		
		success:   function(data) {
			popupMedium(data);
		}
	});
}

function getCountries(id){
	$.ajax({
		url:'/share/service/dashlets/getCountries',
		type: "get",
		dataType: "html",  
		async: true,  
		data : {
			id : id
		},
		success:   function(data) {
			$('#country').html(data);
		}
	});
}
function getMalls(idCountry, idMall){
	$.ajax({
		url:'/share/service/dashlets/getMalls',
		type: "get",
		dataType: "html",  
		async: true,  
		data : {
			countryId : idCountry,
			mallId : idMall
		},
		success:   function(data) {
			$('#mall').html(data);
		}
	});
}

function editApplicant(id, identificationNumber, name, countryId, mallId, mail, additionalInfo){

	$.ajax({
		url:'/share/page/dashlets/editApplicant',
		type: "get",
		dataType: "html",  
		async: false,
		success:   function(data) {
			popupMedium(data);
		}
	});
	getCountries(countryId);
	getMalls(countryId, mallId);
	$('#identificationNumber').val(identificationNumber);
	$('#idApplicant').val(id);
	$('#applicantName').val(name);
	$('#mail').val(mail);
	$('#additionalInfo').val(additionalInfo);
	initApplicantName = name;
	$("#pass").hide();
	$("#confirm").hide();
}

function viewApplicant(id, identificationNumber, name, countryId, mallId, mail, additionalInfo){

	$.ajax({
		url:'/share/page/dashlets/viewApplicant',
		type: "get",
		dataType: "html",  
		async: false,
		success:   function(data) {
			popupMedium(data);
		}
	});
	getCountries(countryId);
	getMalls(countryId, mallId);
	$('#identificationNumber').val(identificationNumber);
	$('#idApplicant').val(id);
	$('#applicantName').val(name);
	$('#mail').val(mail);
	$('#additionalInfo').val(additionalInfo);
}

function existingApplicants(){
	$.ajax({
		url:'/share/page/dashlets/existingApplicants',
		type: "get",
		dataType: "html",  
		async: false,
		data : {
			idTender : idTender
		},
		success:   function(data) {
			popupDefault(data);
		}
	});
	getApplicatByTender();
	getAllApplicants();


}
function getAllApplicants(){
	$.ajax({
		url:'/share/service/dashlets/getAllApplicants',
		type: "get",
		dataType: "html",  
		async: false,  
		data : {
			idTender : idTender
		},
		success:   function(data) {
			$('#applicantsTable').html(data);
		}
	});
}

function getApplicatByTender(){
	$.ajax({
		url:'/share/service/dashlets/getApplicantByTender',
		type: "get",
		dataType: "html",  
		async: false,  
		data : {
			idTender : idTender
		},
		success:   function(data) {
			$('#applicantsByTenderTable').html(data);
		}
	});
}
