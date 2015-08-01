var idTender;
var idTypeStage;
var stageTenderDetails=null;
$(document).ready(function() {	
	idTender = getUrlVars()["idTender"].replace(".","");
	idTypeStage  = getUrlVars()["id"].replace(".","");
	getSharedDocument();
	getConsult();

	stageTenderDetails =  getStagesTenderDetails(3);

	if (stageTenderDetails.questionsStatus+""=="1") {
		$("#createConsult").prop( "disabled", true );
	}

	StartValidateStatusStages();

});


function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}


function createConsult(){
	var validate = validateStatusStages();
	if(validate){
		$.ajax({
			url:'/share/page/dashlets/addConsultApplicantPopUp',
			type: "get",
			dataType: "html",  
			async: false,  		

			success:   function(data) {
				popupMedium(data);
			}
		});
		getTenderCategories();
	}
}


function addConsult(){
//	var d = new Date();
//	alert(d.toLocaleDateString());
	var author = $("#author").val();
//	var topicTitle = $("#topicTitle").val();
	var question = $("#question").val();
	var category = $("#category option:selected").val();
	var questionDate = getCurrentDate();
	var status = idTypeStage;
	var publicationStatus = 0;

	var validForm = validateConsultForm(category, question);
	if(validForm != false){
		$.ajax({
			url:'/share/page/dashlets/addConsultApplicant',
			type: "get",
			dataType: "json",
			async : false,
			data: {
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
				popupSuccess("Consulta creada exitosamente");
			}
		});
		getConsult();
	}
}

function validateConsultForm(category, question){
	var status=false;
	stageTenderDetails =  getStagesTenderDetails(3);
	if(category == "" || category == null || category == "0"){
		popupAlert("Debe seleccionar una categoría");
	}else if(question == "" || question == null){
		popupAlert("Debe ingresar una pregunta");
	}else if(stageTenderDetails.stageStatus != 1){
		$("#createConsult").prop( "disabled", true );
		popupAlert("La etapa se ha cerrado, no puede realizar esta acción");
//		window.location.replace("/share/page/applicantAccess");
	}else{
		status=true;
	}
	return status;
}


/**
 * general functions
 * 
 */

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
			$("#category").html(data);
		}
	});

}

function getConsult(){
	$.ajax({
		url:'/share/page/dashlets/getConsultigApplicant',
		type: "get",
		dataType: "html",
		async : false,
		data: {
			idTender : idTender,
			idTypeStage : idTypeStage
		},
		success: function(data) {
			$('#consult').html(data);
		}
	});

}

function viewQuestions(idCategory , cont){
	$.ajax({
		url:'/share/page/dashlets/getConsultisApplicantQuestions',
		type: "get",
		dataType: "html",  
		async: false,
		data : {
			idCategory : idCategory,
			idTender : idTender,
			idTypeStage : idTypeStage
		},
		success:   function(data) {
//			popupDefault(data);
			$('#categoryAdmin'+cont).html(data);
		}
	});
//	$('#AnswersForConsult').dataTable();
}


function viewAnswers(idConsult , cont, idCategory){
	$.ajax({
		url:'/share/page/dashlets/getAnswerForConsult',
		type: "get",
		dataType: "html",  
		async: false,
		data : {
			idConsult : idConsult
		},
		success:   function(data) {
//			popupDefault(data);
			$('#answersAdmin'+idCategory+cont).html(data);
		}
	});
//	$('#AnswersForConsult').dataTable();
}

function getSharedDocument(){
	$.ajax({
		url:'/share/page/dashlets/getDocsTenderOld',
		type: "get",
		dataType: "html",
		async : false,
		data: {
			idTender : idTender,
			type : 0
		},
		success: function(data) {
			$('#sharedDocument').html(data);
		}
	});

}


function previewDocument(uuid, documentName) {
	$.ajax({
		url:'/share/page/dashlets/previewDocumentPopup?uuid=' + uuid + '&documentName=' + documentName,
		type: "get",
		dataType: "html",
		async: false,
		success: function(data) {
			popupDefault(data)
		},
		error: function (request, status, error) {
			popupAlert("La previsualización aún no se encuentra disponible");
		}
	});
}

function downloadDocument(uuid, documentName) {
	$.ajax({
		url:'/share/page/dashlets/externalUsersDownloadDocument?uuid=' + uuid + '&documentName=' + documentName,
		type: "get", 
		dataType: "html",
		async: false,
		success: function(data) {
			popupBoxDialog(data)

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

function uploadDocument(docRequiredId,documentTypeId,documentType,docName){
	$.ajax({
		url:'/share/service/dashlets/uploadTenderDocument?tenderId='+idTender+'&documentTypeId='+documentTypeId+'&extension='+documentType+'&docName='+docName+'&docRequiredId='+docRequiredId,
		type: "get",
		dataType: "html",  
		async: false,  		

		success:   function(data) {
			popupDefault(data);
			getRequestDocumentApplicant();
		}
	});

	getRequestDocumentApplicant();
}

function documentHistory(uuid, documentName) {
	$.ajax({
		url:'/share/page/dashlets/documentHistoryPopup?uuid=' + uuid + '&documentName=' + documentName,
		type: "get",
		dataType: "html",
		async: false,
		success: function(data) {
			popupBoxDialog(data);
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
		success: function(data) {
			tenderStagesData = data;
		}
	});

	return tenderStagesData;

}

function callbackAlert(msg){
	bootbox.alert(msg, function() {
		$('#alertMsg').remove();	
		$('#delete').remove();

	}).attr('id','alertMsg').addClass("mdalert");
	$('.modal-backdrop').attr('id','delete');
}

function disableElements(divContainer) {
	for (var i = 0; i < divContainer.length; i++) {
		divContainer[i].disabled = true;

		disableElements(divContainer[i].children);
	}
}

function dologout(){
	$.ajax({
		url:'/share/page/dologout',
		type: "get",
		dataType: "html",  
		async: false,
		success:   function(data) {
			window.location.replace("/share/page/applicantAccess");
		}
	});
}

function StartValidateStatusStages(){
	var stageStatus = getStagesTenderDetails(3);
	if(stageStatus.stageStatus != 1){
		bootbox.confirm("La etapa se ha cerrado, no puede realizar esta acción", "Aceptar" , "Salir", function(result) {
			window.location.replace("/share/page/applicantAccess");
		}).addClass("mdalert").attr('id','mdalert'); 
	}
}

function validateStatusStages(){
	var stageStatus = getStagesTenderDetails(3);
	var validate = true;
	if(stageStatus.stageStatus != 1){
		popupAlert("La etapa se ha cerrado, no puede realizar esta acción");
		validate = false;
	}else{
		validate = true;
	}

	return validate;
}