$(document).ready(function() {	
	searchTenderApplicant();
});

function searchTenderApplicant(){

	$.ajax({
		url:'/share/page/dashlets/searchTenderApplicant',
		type: "get",
		dataType: "html",  
		async: true,  		
		data : {
		},
		success:   function(data) {
			$('#listTenders').html(data);
			$('#searchTendersApplicant').dataTable();

		}
	});
}

function showCalendar(id){
	$.ajax({
		url:'/share/page/dashlets/calendarPopUp',
		type: "get",
		dataType: "html",  
		async: true,  		
		data : {
		},
		success:   function(data) {
			popupDefault(data);
			calendar(id);
		}
	});
}

function calendar(id){
	$.ajax({
		url:'/share/page/dashlets/searchTenderCalenadar',
		type: "get",
		dataType: "html",  
		async: true,  		
		data : {
			calendar : id
		},
		success:   function(data) {
			$('#listStagesCalendar').html(data);
			$('#stagesCalendarApplicant').dataTable();
		}
	});
}

function calendarShowTender(id, idHtml){
	$.ajax({
		url:'/share/page/dashlets/searchTenderCalenadar',
		type: "get",
		dataType: "html",  
		async: true,  		
		data : {
			calendar : id
		},
		success:   function(data) {
			$('#'+idHtml).html(data);
			$('#stagesCalendarApplicant').dataTable();
		}
	});
}

function biddingHandleType2(idTender,idTypeStage){
	window.location.href = '/share/page/deliveryDocument?idTender='+idTender+'&id='+idTypeStage+'&nodeType=12';
}

function biddingHandleType3(idTender,idTypeStage){
	window.location.href = '/share/page/questionAnswersApplicantAccess?idTender='+idTender+'&id='+idTypeStage+'&nodeType=12';
}
function biddingHandleType4(idTender,idTypeStage){
	window.location.href = '/share/page/offerDeliveryApplicant?idTender='+idTender+'&id='+idTypeStage+'&nodeType=12';
}

function biddingHandleType5(idTender,idTypeStage){
	window.location.href = '/share/page/offerAnalysisApplicant?idTender='+idTender+'&id='+idTypeStage+'&nodeType=12';
}
function biddingHandleType6(idTender,idTypeStage){
	window.location.href = '/share/page/awardEvaluationApplicantAccess?idTender='+idTender+'&id='+idTypeStage+'&nodeType=12';
}

function showTender(id){
	$.ajax({
		url:'/share/page/dashlets/viewTenderPopUp',
		type: "get",
		dataType: "html",  
		async: true,  		
		data : {
			filter : id
		},
		success:   function(data) {
			popupDefault(data);
			disableElements($('#tenderData').children());
			calendarShowTender(id, "calendar");
		}
	});
}

function leaveTender(idTender){
	bootbox.confirm("Abandonar\u00e1 la Licitaci\u00f3n actual. <br> ¿Est\u00e1 seguro?", "Cancelar", "Aceptar", function(result) {
		if(result==true){
			$.ajax({
				url:'/share/page/dashlets/leaveTender',
				type: "get",
				dataType: "html",  
				async: true,  		
				data : {
					idTender : idTender,
				},
				success:   function(data) {
					bootbox.alert(data).addClass("mdalert");
					searchTenderApplicant();
					$('#listStagesCalendar').html(data);
					$('#stagesCalendarApplicant').dataTable();
				}
			});
		}
	}).addClass("mdsuccess").attr('id','smallModal'); 
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