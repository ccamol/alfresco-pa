var idTender = null;
var idStageType = null;
var stageTenderDetails = null;
var stageStatus  = null;
var idStage = null;
var tenderData = null;
$(document).ready(function() {

	idTender = getUrlVars()["idTender"].replace(".","");
	idStageType = getUrlVars()["id"].replace(".","");
	getTenderStages(idTender, idStageType);

	switch(idStageType){
	case "1":
		stageTenderDetails = getStagesTenderDetails(1);
		stageStatus = stageTenderDetails.stageStatus;
		if(stageStatus == 0){
			disableElements($('#applicantsContainer').children());
		}
		getApplicantByTender(idTender, stageStatus);
		break;
	case "2":
		stageTenderDetails = getStagesTenderDetails(2);
		stageStatus = stageTenderDetails.stageStatus;
		getProjectDocuments(stageStatus);
		getDocsToCarryByTender(stageStatus);
		getAllDocType(stageStatus);
		getRequestDocs(stageStatus);
		if(stageStatus == 0){
			$("#uploadDocumentTender").prop( "disabled", true );
		}
		break;
	case "3":
		stageTenderDetails = getStagesTenderDetails(3);
		stageStatus = stageTenderDetails.stageStatus;

		if(stageStatus == 0){
			disableElements($('#queriesContainer').children());
		}

		if(stageTenderDetails.questionsStatus == '' || stageTenderDetails.questionsStatus == 0){
			$("#openQueries").prop( "disabled", true );
			$("#publishingQueries").prop( "disabled", true );
		}else{
			$("#closeQueries").prop( "disabled", true );
			$("#createConsult").prop( "disabled", true );
		}
		getAllQuestions(stageTenderDetails.questionsStatus, stageStatus);
		getTenderDocs();
		getApplicantOnlyRead(idTender);
		getProjectDocuments(stageStatus);
		getDocsToCarryByTender(stageStatus);
		$('#exportExcel').click(function(){
			exportExcel(stageTenderDetails.questionsStatus, stageStatus);
		});
		if(stageStatus == 0){
			$("#uploadDocumentTender").prop( "disabled", true );
		}
		break;
	case "4":
		stageTenderDetails = getStagesTenderDetails(4);
		stageStatus = stageTenderDetails.stageStatus;
		getTenderDocs();
		getAllDocType(stageStatus);
		getRequestDocs(stageStatus);
		getApplicantsOD(idTender, stageStatus);
		break;
	case "5":
		stageTenderDetails = getStagesTenderDetails(5);
		stageStatus = stageTenderDetails.stageStatus;
		getTenderDocs();
		getApplicantsOD(idTender, stageStatus);
		getProjectDocuments(stageStatus);
		getDocsToCarryByTender(stageStatus);
		if(stageStatus == 0){
			$("#uploadDocumentTender").prop( "disabled", true );
		}
		break;
	case "6":
		tenderData = getTenderById();
//		$("#publishingQueries").prop( "disabled", true );
		stageTenderDetails = getStagesTenderDetails(6);
		stageStatus = stageTenderDetails.stageStatus;
		idStage = stageTenderDetails.id;
		getRequestDocs(stageStatus);
		getProjectDocuments(stageStatus);
		getDocsToCarryByTender(stageStatus);
		if(stageStatus == 0){
			disableElements($('#queriesContainer').children());
		}

		if(stageTenderDetails.questionsStatus == '' || stageTenderDetails.questionsStatus == 0){
			$("#openQueries").prop( "disabled", true );
			$("#publishingQueries").prop( "disabled", true );
		}else{
			$("#closeQueries").prop( "disabled", true );
			$("#createConsult").prop( "disabled", true );
		}

		getAllQuestions(stageTenderDetails.questionsStatus, stageStatus);
		getTenderDocs();
		getAllDocType(stageStatus);
		getApplicantToAward(idTender, stageStatus, tenderData.awardStatus, tenderData.awardApplicant);
		$('#exportExcel').click(function(){
			exportExcel(stageTenderDetails.questionsStatus, stageStatus);
		});
		break;
	default:
	}

	$('#uploadDocumentTender').click(function(){
		uploadDocumentTender();
	});

});

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}

function getApplicantByTender(id, stageStatus){
	$.ajax({
		url:'/share/service/dashlets/getApplicants',
		type: "get",
		dataType: "html",  
		async: true,  
		data : {
			idTender : id,
			stageStatus : stageStatus

		},
		success:   function(data) {
			$('#applicant').html(data);
			$('#applicantsTender').dataTable();
		}
	});
}

function getApplicantOnlyRead(id){
	$.ajax({
		url:'/share/service/dashlets/getApplicantsOnlyRead',
		type: "get",
		dataType: "html",  
		async: true,  
		data : {
			idTender : id

		},
		success:   function(data) {
			$('#applicantOnlyRead').html(data);
			$('#applicantsTender').dataTable();
		}
	});
}
function getApplicantsOD(id, stageStatus){
	$.ajax({
		url:'/share/service/dashlets/getApplicantsOD',
		type: "get",
		dataType: "html",  
		async: true,  
		data : {
			idTender : id,
			stageStatus : stageStatus

		},
		success:   function(data) {
			$('#applicantOnlyRead').html(data);
			$('#applicantsTender').dataTable();
		}
	});
}
function getApplicantToAward(id, stageStatus, awardStatus, awardApplicant){
	$.ajax({
		url:'/share/service/dashlets/getApplicantsAward',
		type: "get",
		dataType: "html",  
		async: true,  
		data : {
			idTender : id,
			stageStatus : stageStatus,
			awardStatus : awardStatus,
			awardApplicant : awardApplicant

		},
		success:   function(data) {
			$('#applicantOnlyRead').html(data);
			$('#applicantsTender').dataTable();
		}
	});
}
/**
 * Etapas de licitación
 * 
 */


function getTenderStages(idTender, idStageType){
	$.ajax({
		url:'/share/page/dashlets/stageTenderById',
		type: "get",
		dataType: "html",
		data: {
			filter : idTender,
		},
		success:   function(data) {
			$('#stageProject').html(data);
			document.getElementById("stage"+idStageType).focus();
			$('#stage'+idStageType).focus();
		}
	});
}

function selectProject(id, idStage){
	switch(parseInt(id)) {
	case 1:
		window.location.href = '/share/page/site/licitaciones/tenderStageInvite?id='+id+'&idTender='+idTender+'&nodeType=8';
		break;
	case 2:
		window.location.href = '/share/page/site/licitaciones/handingOverDocumentation?id='+id+'&idTender='+idTender+'&nodeType=8';
		break;
	case 3:
		window.location.href = '/share/page/site/licitaciones/questionsAndAnswers?id='+id+'&idTender='+idTender+'&nodeType=8';
		break;
	case 4:
		window.location.href = '/share/page/site/licitaciones/offersDelivery?id='+id+'&idTender='+idTender+'&nodeType=8';
		break;
	case 5:
		window.location.href = '/share/page/site/licitaciones/offersAnalysis?id='+id+'&idTender='+idTender+'&nodeType=8';
		break;
	case 6:
		window.location.href = '/share/page/site/licitaciones/awarding?id='+id+'&idTender='+idTender+'&nodeType=8';
		break;
	default:
	}

}

function getTenderById(){
	var tenderData = null;
	$.ajax({
		url:'/share/page/dashlets/getTenderById',
		type: "get",
		dataType: "json",
		async : false,
		data: {
			filter : idTender,
		},
		success:   function(data) {
			tenderData = data;

		}
	});

	return tenderData;

}

function deleteApplicant(idApplicant, idTender){
	bootbox.confirm("¿Est\u00e1 seguro que desea desvincular este postulante?", "Cancelar", "Aceptar", function(result) {
		if(result==true){
			$.ajax({
				url:'/share/service/dashlets/dropOutTender',
				type: "get",
				dataType: "html",  
				async: false,  
				data : {
					idTender : idTender,
					idApplicant : idApplicant
				},
				success:   function(data) {
					popupSuccess("Se ha desvinculado el postulante de la licitaci\u00f3n");
					getApplicantByTender(idTender, stageStatus);
				}

			});
		}
	}).addClass("mdsuccess").attr('id','smallModal'); 
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

function showApplicantDocuments(username){

	$.ajax({
		url:'/share/page/dashlets/getReqDocTender',
		type: "get",
		dataType: "html",  
		async: false,
		data : {
			idTender : idTender,
			username: username,
			stageStatus : stageStatus
		},
		success:   function(data) {
			popupDefault(data);
		}
	});
}
function closeStageFinal(id, idStage){
	bootbox.confirm("¿Est\u00e1 seguro que desea cerrar la etapa?", "Cancelar", "Aceptar", function(result) {
		if(result==true){
			$.ajax({
				url:'/share/page/dashlets/closeStageTender',
				type: "get",
				dataType: "html",
				data: {
					id : idStage,
					tenderId : idTender
				},
				success:   function(data) {
					sendMailCloseStage(idTender, id);
					if(parseInt(id) >= 6){
						selectProject(parseInt(id), idStage);
					}else{
						selectProject(parseInt(id) +1, idStage);
					}
				}
			});
		}
	}).addClass("mdsuccess").attr('id','smallModal'); 
}

function sendMailCloseStage(idTender, idStageType){
	var data = {};
	data["url"] = "/mailService/sendMail";
	data["idTender"] = idTender;
	data["idStageType"] = idStageType;
	var data = generalCall(data);
}

function notifyApplicantsVoidTender(){
	$.ajax({
		url:'/share/page/dashlets/notifyApplicantsVoidTender',
		type: "get",
		dataType: "json",
		async : false,
		data: {
			idTender : idTender

		},
		success:   function(data) {
		}
	});
}
/**
 * Entrega de documentación
 */

function getProjectDocuments(stageStatus){
	var tenderData = getTenderById();
	var projectId = tenderData.projectId;
	var nodeType = tenderData.nodeTypeId;

	$.ajax({
		url:'/share/page/dashlets/getProjectDocuments',
		type: "get",
		dataType: "html",
		async : false,
		data: {
			projectId : projectId,
			nodeType : nodeType,
			idTender : idTender,
			type : 0,
			stageStatus : stageStatus
		},
		success:   function(data) {
			$('#shareDocumentsContainer').html(data);
			$('#projectDocuments').dataTable();
		}
	});
}

function getDocsToCarryByTender(stageStatus){
	$.ajax({
		url:'/share/page/dashlets/getDocsToCarryByTender',
		type: "get",
		dataType: "html",
		async : false,
		data: {
			idTender : idTender,
			type : 0,
			stageStatus : stageStatus
		},
		success:   function(data) {
			$('#loadingDocuments').html(data);
			$('#loadingDocuments').dataTable();
		}
	});
}
function getTenderDocs(){
	$.ajax({
		url:'/share/page/dashlets/getDocsTender',
		type: "get",
		dataType: "html",
		async : false,
		data: {
			idTender : idTender,
			type : 0
		},
		success:   function(data) {
			$('#fileTable').html(data);
			$('#fileTable').dataTable();
		}
	});
}

function getRequestDocs(stageStatus){
	$.ajax({
		url:'/share/page/dashlets/getDocsToCarryByTender',
		type: "get",
		dataType: "html",
		async : false,
		data: {
			idTender : idTender,
			type : 1,
			stageStatus: stageStatus
		},
		success:   function(data) {
			$('#requestDocumentTable').html(data);
			$('#documentsTorequest').dataTable();
		}
	});
}

function addDocument(uuid, name, documentType, createdDate){
	var description = $("#description").val();

	$.ajax({
		url:'/share/page/dashlets/addDocumentToCarry',
		type: "get",
		dataType: "json",
		async : false,
		data: {
			description : description,
			idTender : idTender,
			uuid : uuid,
			type : 0,
			name : name,
			documentType : documentType, 
			createdDate : createdDate
		},
		success:   function(data) {
			popupSuccess("Documento añadido exitosamente");
			getProjectDocuments(stageStatus);
			getDocsToCarryByTender(stageStatus);
		}
	});
}

function addDocType(uuid){
	var description = $("#description").val();
	var name = $("#name").val();
	var format = $("#formats option:selected").val();

	if(name == null || name == undefined || name == '' || name =='null'){
		popupAlert('Debe ingresar un nombre');
	}else if(description == null || description == undefined || description == '' || description =='null'){
		popupAlert('Debe ingresar una descripción');
	}else{
		$.ajax({
			url:'/share/page/dashlets/addDocumentToCarry',
			type: "get",
			dataType: "json",
			async : false,
			data: {
				description : description,
				idTender : idTender,
				uuid : uuid,
				type : 1,
				name : name+"."+format,
				format : format
			},
			success:   function(data) {
				popupSuccess("Documento añadido exitosamente");
				getRequestDocs(stageStatus);
			}
		});
	}
}

function getAllDocType(stageStatus){
	$.ajax({
		url:'/share/page/dashlets/getAllDocTypes',
		type: "get",
		dataType: "html",
		async : false,
		data: {
			type : 1,
			idTender : idTender,
			stageStatus : stageStatus
		},
		success:   function(data) {
			$('#DocumentTypes').html(data);
			$('#DocumentTypes').dataTable();
		}
	});
}

function addDocumentPopUp(uuid, name, documentType, createdDate){
	$.ajax({
		url:'/share/page/dashlets/addDocumentPopUp',
		type: "get",
		dataType: "html",  
		async: false,
		data : {
			uuid: uuid,
			name : name,
			documentType : documentType,
			createdDate : createdDate
		},
		success:   function(data) {
			popupMedium(data);
			var baseName = name.substr(0 , (name.indexOf('.')));
			$("#description").val(baseName);
		}
	});
}
function addDocTypePopUp(id){
	$.ajax({
		url:'/share/page/dashlets/addDocTypesPopUp',
		type: "get",
		dataType: "html",  
		async: false,
		data : {
			uuid: id
		},
		success:   function(data) {
			popupMedium(data);
		}
	});
}

function deleteDocToCarry(idDocToCarry){
	$.ajax({
		url:'/share/page/dashlets/deleteDocToCarry',
		type: "get",
		dataType: "json",
		async : false,
		data: {
			idDocToCarry : idDocToCarry
		},
		success: function(data) {
			getProjectDocuments(stageStatus);
			getDocsToCarryByTender(stageStatus);
			getRequestDocs(stageStatus);
		}
	});

}

/**
 * Questions and answers
 * 
 */

function getAllQuestions(statusQueries, stageStatus){
	var status = stageTenderDetails.stageType;
	$.ajax({
		url:'/share/page/dashlets/getAllConsults',
		type: "get",
		dataType: "html",
		async : false,
		data: {
			idTender : idTender,
			statusQueries : statusQueries,
			status : status,
			stageStatus : stageStatus
		},
		success:   function(data) {
			$('#consultsTable').html(data);
//			$('#consultsTable').dataTable();
		}
	});
}
function createConsult(){
	$.ajax({
		url:'/share/page/dashlets/addConsultPopUp',
		type: "get",
		dataType: "html",  
		async: false,
		data : {
		},
		success:   function(data) {
			popupMedium(data);
		}
	});
	getTenderCategories();
}
function tenderAward(user){
	bootbox.confirm("Se adjudicara la licitaci\u00f3n al postulante: " + user + "<br>¿Desea continuar?", "Cancelar", "Aceptar", function(result) {
		if(result==true){
			var data = {};
			data["url"] = "/arauco/awardApplicantTender";
			data["idTender"] = idTender;
			data["userName"] = user;
			var data = generalCall(data);
			if(parseInt(data.status) > 0){
				tenderData = getTenderById();
				getApplicantToAward(idTender, stageStatus, tenderData.awardStatus, tenderData.awardApplicant);
			}
//			$.ajax({
//			url:'/share/page/dashlets/awardApplicantTender',
//			type: "get",
//			dataType: "json",
//			async : false,
//			data: {
//			userName : user,
//			idTender : idTender,
//			awardStatus : 1
//			},
//			success: function(data) {
//			tenderData = getTenderById();
//			getApplicantToAward(idTender, stageStatus, tenderData.awardStatus, tenderData.awardApplicant);
//			}
//			});
		}
	}).addClass("mdsuccess").attr('id','smallModal'); 
}

function tenderUnlink(user){
	bootbox.confirm("Se anular\u00e1 la adjudicaci\u00f3n para el postulante: " + user + "<br>¿Desea continuar?", "Cancelar", "Aceptar", function(result) {
		if(result==true){
			var data = {};
			data["url"] = "/arauco/nullifyAwardTender";
			data["idTender"] = idTender;
			data["userName"] = user;
			var data = generalCall(data);
			if(parseInt(data.status) == 1){
				tenderData = getTenderById();
				getApplicantToAward(idTender, stageStatus, tenderData.awardStatus, tenderData.awardApplicant);
			}
		}
	}).addClass("mdsuccess").attr('id','smallModal'); 
}

function answerPopUp(consultId){
	$.ajax({
		url:'/share/page/dashlets/answerPopUp',
		type: "get",
		dataType: "html",  
		async: false,
		data : {
			consultId : consultId
		},
		success:   function(data) {
			popupMedium(data);
		}
	});
}

function addAnswer(consultId){
	var answer = $("#answer").val();
	var author = $("#author").val();
	var answerDate = getCurrentDate();

	if(answer !== null && answer !== ""){

		$.ajax({
			url:'/share/page/dashlets/addAnswer',
			type: "get",
			dataType: "json",
			async : false,
			data: {
				answer : answer,
				author : author,
				consultId : consultId,
				answerDate : answerDate
			},
			success:   function(data) {
				popupSuccess("Se ha ingresado su respuesta");
			}
		});
	}else{
		popupAlert("Debe ingresar una respuesta");
	}
}

function getTenderCategories(){
	$.ajax({
		url:'/share/page/dashlets/getTenderCategoriesList',
		type: "get",
		dataType: "html",
		async : false,
		data: {
			idTender : idTender
		},
		success: function(data) {
			$('#category').html(data);
		}
	});

}

function editConsultPopUp(id, categoryId, author, question){
	$.ajax({
		url:'/share/page/dashlets/editConsultPopUp',
		type: "get",
		dataType: "html",  
		async: false,
		data : {
			id : id
		},
		success:   function(data) {
			popupMedium(data);
		}
	});
	getTenderCategories();

//	$('#topicTitle').val(topicTitle);
//	$("#topicTitle").attr('disabled','disabled');

	$('#author').val(author);
	$("#author").attr('disabled','disabled');

	$('#category option[value='+categoryId+']').attr("selected", "selected");

	$('#question').val(question);
//	$("#question").attr('disabled','disabled');

//	$('#description').val(description);
//	$("#description").attr('disabled','disabled');


}

//MODIFICANDO

function viewQuestions(idCategory , cont , statusQueries){
	var status = stageTenderDetails.stageType;
	$.ajax({
		url:'/share/page/dashlets/getAllConsultsQuestions',
		type: "get",
		dataType: "html",  
		async: false,
		data : {
			statusQueries , statusQueries,
			idCategory : idCategory,
			idTender : idTender,
			status : status,
			stageStatus : stageStatus
		},
		success:   function(data) {
			$('#categoryAdmin'+cont).html(data);
		}
	});
//	$('#AnswersForConsult').dataTable();
}

function viewAnswers(idConsult , cont , idCategory){
	$.ajax({
		url:'/share/page/dashlets/getAnswerForConsult',
		type: "get",
		dataType: "html",  
		async: false,
		data : {
			idConsult : idConsult
		},
		success:   function(data) {
			$('#answersAdmin'+idCategory+cont).html(data);
		}
	});
//	$('#AnswersForConsult').dataTable();
}

function publishingQueries(publicationStatus){
	bootbox.confirm("Todas las consultas quedar\u00e1n p\u00fablicas <br> ¿Desea Continuar?", "Cancelar", "Aceptar", function(result) {
		if(result==true){
			$.ajax({
				url:'/share/page/dashlets/publishTenderQueries',
				type: "get",
				dataType: "html",
				async : false,
				data: {
					idTender : idTender, 
					publicationStatus : publicationStatus
				},
				success: function(data) {
					if(data > -1){
						stageTenderDetails = getStagesTenderDetails(stageTenderDetails.stageType);
						getAllQuestions(stageTenderDetails.questionsStatus, stageStatus);
					}
				}
			});
		}
	}).addClass("mdsuccess").attr('id','smallModal'); 
}

function closeQueries(){
	var idStageTender = stageTenderDetails.id;

	bootbox.confirm("Se cerrar\u00e1n todos las consultas actualmente abiertas. <br> ¿Desea continuar?", "Cancelar", "Aceptar", function(result) {
		if(result==true){
			$.ajax({
				url:'/share/page/dashlets/closeTenderQueries',
				type: "get",
				dataType: "html",
				async : false,
				data: {
					idStageTender : idStageTender,
					statusQueries : 1
				},
				success: function(data) {
					if(data > -1){
						$("#publishingQueries").prop( "disabled", false );
						$("#createConsult").prop( "disabled", true );
						$("#closeQueries").prop( "disabled", true );
						$("#openQueries").prop( "disabled", false );
						stageTenderDetails = getStagesTenderDetails(stageTenderDetails.stageType);
						getAllQuestions(stageTenderDetails.questionsStatus, stageStatus);
					}
				}
			});
		}
	}).addClass("mdsuccess").attr('id','smallModal'); 
}

function openQueries(){
	var idStageTender = stageTenderDetails.id;

	$.ajax({
		url:'/share/page/dashlets/closeTenderQueries',
		type: "get",
		dataType: "html",
		async : false,
		data: {
			idStageTender : idStageTender,
			statusQueries : 0
		},
		success: function(data) {
			if(data > -1){
				$("#publishingQueries").prop( "disabled", true );
				$("#createConsult").prop( "disabled", false );
				$("#closeQueries").prop( "disabled", false );
				$("#openQueries").prop( "disabled", true );
				stageTenderDetails = getStagesTenderDetails(stageTenderDetails.stageType);
				publishingQueries(0);
				getAllQuestions(stageTenderDetails.questionsStatus, stageStatus);
			}
		}
	});
}
function validateConsultForm(category, question){

	var status=false;

//	if(topicTitle == "" || topicTitle == null){
//	popupAlert("Debe ingresar una consulta");
//	}else 
	if(category == "" || category == null || category == "0"){
		popupAlert("Debe seleccionar una categoría");
	}else if(question == "" || question == null){
		popupAlert("Debe ingresar una pregunta");
//		}else if(description == "" || description == null ){
//		popupAlert("Debe ingresar una descripción");
	}else{
		status=true;
	}

	return status;
}
function addConsult(){

//	var description = $("#description").val();
	var idConsult = $("#idConsult").val();
	var author = $("#author").val();
//	var topicTitle = $("#topicTitle").val();
	var question = $("#question").val();
	var category = $("#category option:selected").val();
	var questionDate = getCurrentDate();
	var status = stageTenderDetails.stageType;
	var publicationStatus = 0;
	var validForm = validateConsultForm(category, question);

	if(validForm != false){
		$.ajax({
			url:'/share/page/dashlets/addConsult',
			type: "get",
			dataType: "json",
			async : false,
			data: {
				id : idConsult,
//				description : description,
				idTender : idTender,
				author : author,
//				topicTitle : topicTitle,
				question : question,
				category : category,
				questionDate : questionDate,
				status : status,
				publicationStatus : publicationStatus
			},
			success:   function(data) {
				stageTenderDetails = getStagesTenderDetails(stageTenderDetails.stageType);
				getAllQuestions(stageTenderDetails.questionsStatus, stageStatus);

				popupSuccess("Consulta guardada exitosamente");

			}
		});
	}
}


/**
 * general functions
 * 
 */

function callbackAlert(msg){
	bootbox.alert(msg, function() {
		$('#alertMsg').remove();	
		$('#delete').remove();

	}).attr('id','alertMsg').addClass("mdalert");
	$('.modal-backdrop').attr('id','delete');
}

function getCurrentDate(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	var hh = today.getHours();
	var minutes = today.getMinutes();
	var ss = today.getSeconds();

	if(dd<10) {
		dd='0'+dd
	} 

	if(mm<10) {
		mm='0'+mm
	} 
	if(hh<10) {
		hh='0'+hh
	} 
	if(minutes<10) {
		minutes='0'+minutes
	} 
	if(ss<10) {
		ss='0'+ss
	} 

	today = dd+'/'+mm+'/'+yyyy+'/'+hh+'/'+minutes+'/'+ss;
	return today;
}

function disableElements(divContainer) {
	for (var i = 0; i < divContainer.length; i++) {
		divContainer[i].disabled = true;

		disableElements(divContainer[i].children);
	}
}

function previewDocument(uuid, documentName) {
	$.ajax({
		url:'/share/page/dashlets/previewDocumentPopup?uuid=' + uuid + '&documentName=' + documentName,
		type: "get",
		dataType: "html",
		async: false,
		success: function(data) {
			popupDefault(data);
		},
		error: function (request, status, error) {
			popupAlert("La previsualización aún no se encuentra disponible");
		}
	});
}

function downloadDocument(uuid, documentName) {
	$.ajax({
		url:'/share/page/dashlets/downloadDocumentPopup?uuid=' + uuid + '&documentName=' + documentName,
		type: "get", 
		dataType: "html",
		async: false,
		success: function(data) {
			popupBoxDialog(data);
		}
	});
}


function editOnGoogleDocs(uuid, documentName) {

	var protocol = window.location.protocol;
	var host = window.location.host;
	var pathname = window.location.pathname;
	var protocolhost = protocol + "//" + host;
	var stateUrl = protocol + "//" + host + "/share/proxy/alfresco/";
	var returnUrl = pathname.split("/share/page/");
	var searchUrl = window.location.search;
	var autoclosepage = "dashlets/autoClosePage";

	var authUrl = protocolhost + "/share/proxy/alfresco/googledocs/authurl?state="+stateUrl+"&override=true";
	var uploadUrl = protocolhost + "/share/proxy/alfresco/googledocs/uploadContent?nodeRef=workspace%3A%2F%2FSpacesStore%2F"+uuid;
	//var editUrl = protocolhost + "/share/page/site/arauco/googledocsEditor?nodeRef=workspace%3A%2F%2FSpacesStore%2F"+uuid+"&return="+returnUrl[1]+searchUrl;
	var editUrl = protocolhost + "/share/page/site/arauco/googledocsEditor?nodeRef=workspace%3A%2F%2FSpacesStore%2F"+uuid+"&return="+autoclosepage;

	$.ajax({
		url:'/share/proxy/alfresco/arauco/getDocumentMetadata?uuid='+uuid+'&aspect=documentTypeAspectsList&prefix=pa', 
		type: "get",
		dataType: "json",
		async: false,
		success: function(md) {

			var mimetype = md.document.docinfo.mimetype;
			var locked = md.document.docinfo.locked;
			//var exportableUrl = protocolhost + "/share/proxy/alfresco/googledocs/exportable?mimetype=application/vnd.openxmlformats-officedocument.spreadsheetml.sheet&";
			var exportableUrl = protocolhost + "/share/proxy/alfresco/googledocs/exportable?mimetype="+mimetype+"&";

			$.ajax({
				url: authUrl, 
				type: "get",
				dataType: "json",
				async: false,
				success: function(data) {

					$.ajax({
						url: exportableUrl, 
						type: "get",
						dataType: "json",
						async: false,
						success: function(data2) {

							if (data2.export_action == 'default')
							{
								// si el mimetype es valido se sube drive

								Alfresco.GoogleDocs.requestOAuthURL({
									onComplete : {
										fn : function() {

											// upload
											$.ajax({
												url: uploadUrl, 
												type: "get",
												dataType: "json",
												async: false,
												success: function(data3) {												

													// mostrando iframe
													//window.location.assign(editUrl);
													window.open(editUrl,'_blank');

													// fin upload
												},
												error: function (request, status, error) {

													// si esta bloqueado editar directamente en google docs
													if (locked == 'Yes') {
														window.open(editUrl,'_blank');
													} else {														
														//alert(request.responseText);

														popupAlert('No se pudo cargar el documento en Google Docs');

													}
												}
											});

										},
										scope : this
									},
									override : true
								})

							} else {

								popupAlert('Tipo de documento no valido para editar en Google Docs');


							}

							// fin exportable
						},
						error: function (request, status, error) {
							//alert(request.responseText);

							popupAlert('Tipo de documento no valido para editar en Google Docs');


						}
					});

					// fin auth	
				},
				error: function (request, status, error) {
					//alert(request.responseText);

					popupAlert('No se puede autenticar la URL para editar en Google Docs');

				}

			});

		}
	});

}





function commentPdf(uuid) {

	var commentPdfUrl = '/share/page/site/licitaciones/comment-pdf?uuid=workspace://SpacesStore/' + uuid;
	window.location.assign(commentPdfUrl);

}


function uploadDocument()
{

	$.ajax({
		url:'/share/service/dashlets/uploadDocumentPopup',
		type: "get",
		dataType: "html",  
		async: false,  		
		success:   function(data) {
			popupDefault(data);
			searchDocumentModule(idProjectThird);
		}
	});


}
function documentHistory(uuid, documentName) {
	$.ajax({
		url:'/share/page/dashlets/documentHistoryPopup?uuid=' + uuid + '&documentName=' + documentName,
		type: "get",
		dataType: "html",
		async: false,
		success: function(data) {
			popupMedium(data);
		}
	});
}


function generalCall(variableData){
	var result = null;
	$.ajax({
		url:'/share/page/proxyService/generalCall',
		type: "get",
		dataType: "JSON",
		async: false,
		data : variableData,
		success:   function(data) {
			result = data;
		}
	});
	return result;
}

function uploadDocumentTender(){
	var tenderData = getTenderById();
	var projectId = tenderData.projectId;
	var nodeType = tenderData.nodeTypeId;
	$.ajax({
		url:'/share/page/dashlets/uploadDocumentTenderPopup',
		type: "get",
		dataType: "html",
		async: false,
		data: {
			nodeType : nodeType,
			projectId : projectId
		},
		success:   function(data) {
			popupBoxDialog(data);
		}
	});
}

function generalCall(variableData){
	var result = null;
	$.ajax({
		url:'/share/page/proxyService/generalCall',
		type: "get",
		dataType: "JSON",
		async: false,
		data : variableData,
		success:   function(data) {
			result = data;
		}
	});
	return result;
}

function exportExcel(questionsStatus , stageStatus){
	var status = stageTenderDetails.stageType;
	window.open('/alfresco/service/documentService/exportExcel?idTender='+idTender+'&status='+status+'&stageStatus='+stageStatus+'&questionsStatus='+questionsStatus);
//	$.ajax({
//		url:'/alfresco/service/documentService/exportExcel',
//		type: "get",
//		dataType: "html",
//		async: false,
//		data: {
//			questionsStatus : questionsStatus,
//			stageStatus : stageStatus,
//			status : status,
//			idTender : idTender
//		},
//		success:	function(data) {
//			
//		}
//	});
}
