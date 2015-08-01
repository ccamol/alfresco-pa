var idTender;
var idTypeStage;
var stageTenderDetails=null;
$(document).ready(function() {	
	idTender = getUrlVars()["idTender"].replace(".","");
	idTypeStage  = getUrlVars()["id"].replace(".","");

	getRequestDocumentApplicant();

	stageTenderDetails =  getStagesTenderDetails(3);

	if (stageTenderDetails.questionsStatus+""=="0") {
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

function getRequestDocumentApplicant(){
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
			popupDefault(data);
		},
		error: function (request, status, error) {
			popupAlert("La previsualización aún no se encuentra disponible");
		}
	});
}

//function downloadDocument(uuid, name) {
//$.ajax({

//url:'/share/proxy/alfresco/arauco/downloadApplicant?uuid='+uuid,
//type: "get", 
//dataType: "html",
//async: false,
//success: function(data) {

//}
//});
//}


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

function commentPdf(uuid , nameDocument) {

	alert(uuid);
	alert(nameDocument);
//	var commentPdfUrl = '/share/page/site/licitaciones/comment-pdf?uuid=workspace://SpacesStore/' + uuid;
//	window.location.assign(commentPdfUrl);
	var commentPdfUrl = '/share/page/site/arauco/comment-pdf?uuid=workspace://SpacesStore/' + uuid;
	window.location.assign(commentPdfUrl);


}

function uploadDocument(){
	var validate = validateStatusStages();
	if(validate){
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
}

function documentHistory(uuid, documentName) {
	$.ajax({
		url:'/share/page/dashlets/documentHistoryPopup?uuid=' + uuid + '&documentName=' + documentName,
		type: "get",
		dataType: "html",
		async: false,
		success: function(data) {
			popupDefault(data);
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

function downloadDocument(uuid, documentName) {
	$.ajax({
		url:'/share/page/dashlets/externalUsersDownloadDocument?uuid=' + uuid + '&documentName=' + documentName,
		type: "get", 
		dataType: "html",
		async: false,
		success: function(data) {
			popupBoxDialog(data);
		}
	});
}

function updateDocument(uuid, documentName) {
	var validate = validateStatusStages();
	if(validate){
		$.ajax({
			url:'/share/page/dashlets/displayUpdateDocument?uuid=' + uuid,
			type: "get",
			dataType: "html",
			async: false,
			success: function(data) {
				popupDefault(data);
			}
		});
	}
}

function StartValidateStatusStages(){
	var stageStatus = getStagesTenderDetails(2);
	if(stageStatus.stageStatus != 1){
		bootbox.confirm("La etapa se ha cerrado, no puede realizar esta acción", "Aceptar" , "Salir", function(result) {
			window.location.replace("/share/page/applicantAccess");
		}).addClass("mdalert").attr('id','mdalert'); 
	}
}

function validateStatusStages(){
	var stageStatus = getStagesTenderDetails(2);
	var validate = true;
	if(stageStatus.stageStatus != 1){
		popupAlert("La etapa se ha cerrado, no puede realizar esta acción");
		validate = false;
	}else{
		validate = true;
	}

	return validate;
}