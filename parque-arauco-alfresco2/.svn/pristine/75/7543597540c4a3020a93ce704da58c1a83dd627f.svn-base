var	siteId = null;
var	nodeType = null;
$(document).ready(function() {
	siteId = "arquitectura";
	nodeType ="6";
	getProjectMall();
	$('#tableGetProjectMall').dataTable();

});

function getProjectMall(){
	$.ajax({
		url:'/share/service/dashlets/getProjectMallThirdPartyArchitecture',
		type: "get",
		dataType: "html",

		success:   function(data) {
			document.getElementById('projectMallThirdPartyArchitecture').innerHTML = data;
			$('.dataTableFuntionGetProjectMall').dataTable();
		}
	});
	$('.dataTableFuntionGetProjectMall').dataTable();
}

function getAssociatedDocuments(stageId, idProject) {

	$.ajax({
		url:'/share/service/dashlets/getAssociatedThirdPartyArchitectureDocuments',
		type: "get",
		dataType: "html",
		data: {
			stageId : stageId
		},
		success: function(data) {
			$('#thirdPartyDocument').html(data);
			loadCheckList(stageId);
		}
	});
}

function loadCheckList(id){
	$.ajax({
		url:'/share/page/dashlets/getCheckListRequestedDocumentThirdParty',
		type: "get",
		dataType: "html",
		data: {
			nodeType : "6",
			nodeId : id
		},
		success:   function(data) {
			$('#tableRequestedDocumentThirdParty').html(data);

			$('.dataTableFuntion').dataTable();

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

														bootbox.dialog('No se pudo cargar el documento en Google Docs',[{

															backdrop: true,
															"label" : "Salir",
															"callback": function() {

																$('#alertparameters').remove();	
																$('#delete').remove();
																$('#Share').removeClass('modal-open');
																$('#Share').removeClass('modal-backdrop fade in');


															}
														}]).addClass("mdalert").attr('id','alertparameters');
														$('.modal-backdrop').attr('id','delete');



													}
												}
											});

										},
										scope : this
									},
									override : true
								})

							} else {


								bootbox.dialog('Tipo de documento no valido para editar en Google Docs',[{

									backdrop: true,
									"label" : "Salir",
									"callback": function() {

										$('#alertparameters').remove();	
										$('#delete').remove();
										$('#Share').removeClass('modal-open');
										$('#Share').removeClass('modal-backdrop fade in');


									}
								}]).addClass("mdalert").attr('id','alertparameters');
								$('.modal-backdrop').attr('id','delete');





							}

							// fin exportable
						},
						error: function (request, status, error) {
							//alert(request.responseText);

							bootbox.dialog('Tipo de documento no valido para editar en Google Docs',[{

								backdrop: true,
								"label" : "Salir",
								"callback": function() {

									$('#alertparameters').remove();	
									$('#delete').remove();
									$('#Share').removeClass('modal-open');
									$('#Share').removeClass('modal-backdrop fade in');


								}
							}]).addClass("mdalert").attr('id','alertparameters');
							$('.modal-backdrop').attr('id','delete');




						}
					});

					// fin auth	
				},
				error: function (request, status, error) {
					//alert(request.responseText);

					bootbox.dialog('No se puede autenticar la URL para editar en Google Docs',[{

						backdrop: true,
						"label" : "Salir",
						"callback": function() {

							$('#alertparameters').remove();	
							$('#delete').remove();
							$('#Share').removeClass('modal-open');
							$('#Share').removeClass('modal-backdrop fade in');


						}
					}]).addClass("mdalert").attr('id','alertparameters');
					$('.modal-backdrop').attr('id','delete');


				}

			});

		}
	});

}

function commentPdf(uuid) {

	var commentPdfUrl = '/share/page/site/arauco/comment-pdf?uuid=workspace://SpacesStore/' + uuid;
	var win = window.open(commentPdfUrl, '_blank');
	win.focus();

}

function uploadDocumentOperator(){
	$.ajax({
		url:'/share/service/dashlets/uploadDocumentPopup',
		type: "get",
		dataType: "html",  
		async: false,  		
		success:   function(data) {
			bootbox.dialog(data, [{				
				backdrop: true,
				"label" : "Salir",
				"callback": function() {
					$('#readDocumentPreviewDialog').remove();	
					$('#delete').remove();
					$('#Share').removeClass('modal-open');
					$('#Share').removeClass('modal-backdrop fade in');
					searchDocumentModule(idProjectThird);
				}
			}])
			.attr('id','readDocumentPreviewDialog');
			$('.modal-backdrop').attr('id','delete');

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
			window.location.replace("/share/page/thirdPartyArchitecture");
		}
	});
}