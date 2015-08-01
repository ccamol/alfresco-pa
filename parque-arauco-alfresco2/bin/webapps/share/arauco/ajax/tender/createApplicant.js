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

$("#applicantName").focusout(function(){
	var validName = $("#applicantName").val();
	if(initApplicantName != validName){
		$("#password").prop('disabled', false);
		$("#confirmPass").prop('disabled', false);
		$("#pass").show();
		$("#confirm").show();
	}else{
		$("#password").prop('disabled', true);
		$("#confirmPass").prop('disabled', true);
		$("#pass").hide();
		$("#confirm").hide();
	}
});

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
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

function createAlfrescoUser(){

	var identificationNumber = $("#idApplicant").val();
	var userName = $("#applicantName").val();
	var mail = $("#mail").val();
	var countryId =  $("#country option:selected").val();
	var mallId =  $("#mall option:selected").val();
	var additionalInfo = $("#additionalInfo").val();
	var password = $("#password").val();
	var confirmPass = $("#confirmPass").val();

	if(identificationNumber == null || identificationNumber == undefined || identificationNumber == ''){
		popupAlert("Debe ingresar numero de identificación");
	}else if(mail == null || mail == undefined || mail == ''){
		popupAlert("Debe ingresar E-mail");
	}else if(mail.indexOf('@', 0) == -1 || mail.indexOf('.', 0) == -1){
			popupAlert("E-mail no válido");
	}else if(countryId == null || countryId == undefined || countryId == '' || countryId == 0 || countryId == '0'){
		popupAlert("Debe seleccionar un país");
	}else if (userName == null || userName == undefined || userName == ''){
		popupAlert("Debe ingresar nombre de usuario");
	}else if (password == null || password == undefined || password == ''){
		popupAlert("Debe ingresar una contraseña");
	}else if (confirmPass == null || confirmPass == undefined || confirmPass == ''){
		popupAlert("Debe confirmar contraseña");
	}else if(password != confirmPass){
		popupAlert("Debe confirmar contraseña");
	}else if(mallId == null || mallId == undefined || mallId == '' || mallId == 0 || mallId == '0'){
		popupAlert("Debe seleccionar un mall");
	}else{
		$.ajax({
			url:'/share/service/dashlets/createAlfrescoUser',
			type: "get",
			dataType: "json",  
			async: true,  
			data : {
				userName : userName,
				password : confirmPass,
				mail: mail
			},
			success:   function(data) {
				if(data.response == "1"){
					addApplicant(identificationNumber, userName, confirmPass, mail, countryId, mallId, additionalInfo);
				}else{
					popupAlert("El postulante ya existe");
				}
			}
		});
	}
}

function addApplicant(identificationNumber, userName, password, mail, countryId, mallId, additionalInfo){
	$.ajax({
		url:'/share/service/dashlets/addApplicant',
		type: "get",
		dataType: "json",  
		async: true,  
		data : {
			userName : userName,
			password : password,
			mail: mail,
			identificationNumber : identificationNumber,
			countryId : countryId,
			mallId : mallId,
			additionalInfo : additionalInfo
		},
		success:   function(data) {
			if(data.resultSet > -1){
				popupSuccess("Postulante creado exitosamente");
				stageTenderDetails = getStagesTenderDetails(1);
				var stageStatus = stageTenderDetails.stageStatus
				getAllApplicants();
				getApplicatByTender();
				getApplicantByTender(idTender, stageStatus);
			}else{
				popupAlert("Se produjo un problema al crear al postulante");
			}
		}
	});
}

function saveApplicant(){
	var identificationNumber = $("#identificationNumber").val();
	var id = $("#idApplicant").val();
	var userName = $("#applicantName").val();
	var mail = $("#mail").val();
	var countryId =  $("#country option:selected").val();
	var mallId =  $("#mall option:selected").val();
	var additionalInfo = $("#additionalInfo").val();
	var password = $("#password").val();
	var confirmPass = $("#confirmPass").val();
	if(identificationNumber == null || identificationNumber == undefined || identificationNumber == ''){
		popupAlert("Debe ingresar numero de identificación");
	}else if(mail == null || mail == undefined || mail == ''){
		popupAlert("Debe ingresar mail");
	}else if(countryId == null || countryId == undefined || countryId == '' || countryId == 0 || countryId == '0'){
		popupAlert("Debe seleccionar un país");
	}else if (userName == null || userName == undefined || userName == ''){
		popupAlert("Debe ingresar nombre de usuario");
	}else if ($('#password').prop("disabled") == false){
		if(password == null || password == undefined || password == ''  ){
			popupAlert("Debe ingresar una contraseña");
		}
	}else if ($("#confirmPass").prop("disabled") == false){
		if(confirmPass == null || confirmPass == undefined || confirmPass == ''){
			popupAlert("Debe confirmar contraseña");
		}
	}else if(password != confirmPass){
		popupAlert("La confirmacion de contraseña es incorrecta");
	}else if(mallId == null || mallId == undefined || mallId == '' || mallId == 0 || mallId == '0'){
		popupAlert("Debe seleccionar un mall");
	}else{
		$.ajax({
			url:'/share/service/dashlets/addApplicant',
			type: "get",
			dataType: "json",  
			async: true,  
			data : {
				id : id,
				userName : userName,
				mail: mail,
				identificationNumber : identificationNumber,
				countryId : countryId,
				mallId : mallId,
				additionalInfo : additionalInfo,
				password : confirmPass
			},
			success:   function(data) {
				//Si es 1 , se modifico el name
				if(data.validate == 1){
					editUserAlfresco(userName , confirmPass , mail);
				}

				if(data.resultSet > -1){
					popupSuccess("Postulante modificado con \u00c9xito");
					stageTenderDetails = getStagesTenderDetails(1);
					var stageStatus = stageTenderDetails.stageStatus
					getAllApplicants();
					getApplicatByTender();
					getApplicantByTender(idTender, stageStatus);
				}else{
					popupAlert("Se produjo un problema al modificar al postulante");
				}
			}
		});
	}
}

function editUserAlfresco(userName , password , mail){	
	$.ajax({
		url:'/share/service/dashlets/createAlfrescoUser',
		type: "get",
		dataType: "json",  
		async: true,  
		data : {
			userName : userName,
			password : password,
			mail: mail
		},
		success:   function(data) {
		}
	});

}

function isNumber(evt) {
	evt = (evt) ? evt : window.event;
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		return false;
	}
	return true;
}