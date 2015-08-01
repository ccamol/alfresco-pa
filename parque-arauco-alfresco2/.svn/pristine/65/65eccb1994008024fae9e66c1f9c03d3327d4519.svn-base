$(document).ready(function() {
	getSharedDocument();
	var	siteId = $("#siteId").val();
	$('.dataTableFuntion').dataTable();
	datePickerss();

	jQuery.extend({
		handleError: function( s, xhr, status, e ) {
			// If a local callback was specified, fire it
			if ( s.error )
				s.error( xhr, status, e );
			// If we have some XML response text (e.g. from an AJAX call) then log it in the console
			else if(xhr.responseText)
				console.log(xhr.responseText);
		}
	});
});


function datePickerss(){
	$(".datePickers").datepicker({ 
		dateFormat:"dd/mm/yy",
		closeText:"Cerrar",
		prevText: '<Ant',
		nextText: 'Sig>',
		showButtonPanel: false,
		changeYear: true,
		monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
		dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
		dayNamesShort: ['Dom','Lun','Mar','Mie','Juv','Vie','Sab'],
		dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sa'],
		weekHeader: 'Sm'
	});
}


var idSucOperator=null;
var idProjectOperator=null;
var idStageOperator=null;
var nodeTypeOperator = 7;

function getSharedDocument(){
	$.ajax({
		url:'/share/service/dashlets/getSucGroup',
		type: "get",
		dataType: "html",
		data: {
		},
		success:   function(data) {
			$('#contentSuc').html(data);
			$('.dataTableFuntionSuc').dataTable();
		}
	});
}




function getSucProject(idSuc , elem){
	$('#tableSharedDocumentOperator').empty();
	$('#checkListTable').empty();
	$('#tablesuc tr').each(function() {
		$(this).removeClass("success");
	});
	$(elem).closest('tr').addClass("success");
	$.ajax({
		url:'/share/service/dashlets/getSucProjectGroup?filter='+idSuc,
		type: "get",
		dataType: "html",
		data: {
		},
		success:   function(data) {
			$('#sucProject').html(data);
			$('.dataTableFuntionProjectSuc').dataTable();
		}
	});
}


function searchSucTerm(){
	var termsSuc = $("#txTermsSuc").val();
	$.ajax({
		url:'/share/service/dashlets/searchSucTerm?txTermsSuc='+termsSuc,
		type: "get",
		dataType: "html",
		data: {
		},
		success:   function(data) {
			$('#contentSuc').html(data);
		}
	});
}


function getSucProjectStageDocument(idStage,idProjectOp,stageStatus, elem){
	$('#tableGetProjectSuc tr').each(function() {
		$(this).removeClass("success");
	});
	$(elem).closest('tr').addClass("success");
	idStageOperator = idStage;
	idProjectOperator = idProjectOp;
	$.ajax({
		url:'/share/service/dashlets/getSucProjectStageDocument?idStage='+idStage,
		type: "get",
		dataType: "html",
		data: {
		},
		success:   function(data) {
			$('#tableSharedDocumentOperator').html(data);
			loadCheckList(idStage , idProjectOp, stageStatus);

		}
	});
}

function loadCheckList(id , idProjectOp, stageStatus){
	$.ajax({
		url:'/share/page/dashlets/getChecklistOperator',
		type: "get",
		dataType: "html",
		data: {
			nodeType : "7",
			nodeId : id,
			idProject : idProjectOp,
			stageStatus : stageStatus
		},
		success:   function(data) {
			$('#tableRequestedDocumentOperator').html(data);
			$('.dataTableFuntion').dataTable();
			var numberOfChecked = $('input:checkbox:checked').length;
			var totalCheckboxes = $('input:checkbox').length;
			var numberNotChecked = totalCheckboxes - numberOfChecked;
			if(numberNotChecked == 0){
				popupSuccessTender('No hay documentos pendientes');
			}else{
				if(numberNotChecked == 1){
					popupAlert('Queda '+numberNotChecked+' documento por subir');
				}else{
					popupAlert('Quedan '+numberNotChecked+' documentos por subir');
				}
			}
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

function updateDocument(uuid, documentName) {
	$.ajax({
		url:'/share/page/dashlets/updateContentDocument?uuid=' + uuid,
		type: "get",
		dataType: "html",
		async: false,
		success: function(data) {
			popupBoxDialog(data);
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
			popupMedium(data);
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

function commentPdf(uuid){
	var commentPdfUrl = '/share/page/site/arauco/comment-pdf?uuid=workspace://SpacesStore/' + uuid;
	window.location.assign(commentPdfUrl);
}

function uploadDocumentOperatorPopUp(nodeType , nodeId , idProject , documentType , documentName){
	$.ajax({
		url:'/share/page/dashlets/uploadDocumentPopupOperator',
		type: "get",
		dataType: "html",
		async: false,
		data : {
			nodeType : nodeType,
			nodeId : nodeId,
			idProject : idProject,
			documentType : documentType,
			documentName : documentName
		},
		success: function(data) {
			popupBoxDialog(data);
		}
	});	
}
function uploadDocumentOperator(nodeType , nodeId , idProject , documentType , documentName){
	$.ajax({
		url:'/share/service/dashlets/uploadDocumentOperator',
		type: "get",
		dataType: "html",  
		async: false,
		data: {
			nodeType : nodeType,
			nodeId : nodeId,
			documentType : documentType,
			documentName : documentName,
			idProject : idProject
		},
		success:   function(data) {
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
			window.location.replace("/share/page/operators");
		}
	});
}

function commentPdf(uuid) {
	var commentPdfUrl = '/share/page/site/arquitectura/comment-pdf?uuid=workspace://SpacesStore/' + uuid;
	window.location.assign(commentPdfUrl);
}

//function uploadDocument(nodeType , nodeId , documentType){
//var file = $('#fileOperator').val();
//if(file == null && file == '' && file == undefined){
//popupAlert("Debe seleccionar un documento");
//}else{
//uploadFile(nodeType , nodeId , documentType);
//}
//}

//function uploadFile(nodeType , nodeId , documentType) {
//var filename = $('#fileOperator').val();
//if (filename !== null && filename !== undefined && filename !== '') {

//var cut = filename.lastIndexOf("\\");
//var end  =  filename.length;
//var res = filename.substring(cut+1,end);
//var flag = false;
//console.log("*** calling /arauco/uploadDocumentArauco ***");

////llamada ajax subida de documento
//var file = document.getElementById("fileOperator");
//$("#loading").ajaxStart(function() {
//$(this).show();
//})
//.ajaxComplete(function(){
//$(this).hide();
//});
//$.ajaxFileUpload({
//url:"/alfresco/service/arauco/saveDocumentOperator?alf_ticket="+varTicket,
//secureuri:false,
//type: "POST",
//fileElementId:'fileOperator',
//dataType: 'JSON',
//async : false,
//data: {
//nodeType : nodeType,
//nodeId : nodeId,
//documentType : documentType,
//},	
//success: function (data){
//popupSuccess("Documento subido con exito");
//},
//error: function (data, status, e){
//popupAlert('Se produjo un problema en la carga del documento, E: ' + e + " data: " + data);
//}
//}
//)
//if (flag == true) {
//$('#saveDocument').disabled;
//}
//return false;
//}
//}


