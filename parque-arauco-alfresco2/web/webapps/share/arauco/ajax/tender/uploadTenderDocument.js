var varTicket;
var isValid = false;

var tenderId;
var tenderName;
var documentTypeId;
var documentName;
var uuidUploadDoc;
var docRequiredId;
var userName = "hola";

$( document ).ready(function() {
	tenderId = $("#tenderId").val();
	documentTypeId = $("#documentTypeId").val();
	documentName = $("#targetName").val();
	docRequiredId = $("#docRequiredId").val();
	getTicket();
});

function getTicket() {
	$.ajax({
		url : '/share/page/dashlets/getTicket',
		type : "GET",
		dataType : "json",
		async : false,
		success : function(data) {
			varTicket = data.ticket;
		}
	});
}

function uploadFile() {
	var filename = $('#importFile').val();

	if (filename !== null && filename !== undefined && filename !== '') {

		var cut = filename.lastIndexOf("\\");
		var end  =  filename.length;
		var res = filename.substring(cut+1,end);
		var flag = false;

		console.log("*** calling /arauco/uploadDocumentArauco ***");

		//llamada ajax subida de documento
		var file = document.getElementById("importFile");
		$("#loading").ajaxStart(function() {
			$(this).show();
		})
		.ajaxComplete(function(){
			$(this).hide();
		});
//		openWaiting();
		$.ajaxFileUpload
		(
				{
					url:"/alfresco/service/arauco/uploadTenderDocument?alf_ticket="+varTicket,
					secureuri:false,
					type: "POST",
					fileElementId:'importFile',
					dataType: 'JSON',
					async : false,
					success: function (data){
						flag = true;
						uuidUploadDoc= data;
						callPublishDocument(uuidUploadDoc);
//						closeWaiting();
						$("#btnUpload").prop( "disabled", true );
						popupSuccess("Documento subido correctamente");
						if($("#requestedDocument").length){
							getRequestDocumentApplicant();
						}

					},
					error: function (data, status, e){
						closeWaiting();
						popupAlert('Se produjo un problema en la carga del documento, E: ' + e + " data: " + data);
					}
				}
		)
		if (flag == true) {
			$('#btnUpload').disabled;
			console.log("*** file upload complete *** uuid: " + uuidUploadDoc);
			if (typeof getRequestDocumentApplicant != 'undefined' && $.isFunction(getRequestDocumentApplicant)) {
				getRequestDocumentApplicant();
			}
		}
		return false;
	}
}

function callPublishDocument(uuid){	
	if (uuid !== null && uuid !== undefined && uuid !== '') {
//		generatePreviewTender(uuid);
		setDocumentMetadata(uuid, documentTypeId, tenderName, userName)
	} else {
	}
}

function generatePreviewTender(uuid) {
	var varHost = window.location.hostname;
	var varPort = window.location.port;

	console.log("*** calling /arauco/generatePreview ***");

	$.ajax({					
		url: '/alfresco/service/components/arauco/generatePreview?alf_ticket='+varTicket+"&host="+varHost+"&port="+varPort,
		type: "POST",
		dataType: "html", 
		async: false,
		data : {
			uuid : uuid,
			type : "tender"
		},
		success:function(data){
			$("#previewContainer").html(data);
			$("#previewContainer").show();
		},
		error:function (xhr, ajaxOptions, thrownError){
			popupAlert('Se produjo un problema en general la previsualizaci\u00f3n del documento');
		}  
	});
}

function setDocumentMetadata(uuid, documentTypeId, tenderName, userName) {
	var parameters = {};
	parameters["uuid"] = uuid;
	parameters["documentTypeId"] = documentTypeId;
	parameters["tenderName"] = tenderName;
	parameters["userName"] = userName;
	parameters["documentName"] = documentName;
	parameters["tenderId"] = tenderId;
	parameters["docRequiredId"] = docRequiredId;

	//meta data dump
	console.log("*** meta data dump ***");
	console.log("uuid: " + uuid);
	console.log("documentTypeId: " + documentTypeId);
	console.log("tenderName: " + tenderName);
	console.log("userName: " + userName);
	console.log("documentName: " + documentName);
	console.log("tenderId" + tenderId);
	console.log("docRequiredId" + docRequiredId);

	$.ajax({
		url:'/share/service/dashlets/setTenderDocumentMetadata',
		type: "GET",
		dataType: "json",  
		async: false,
		data: parameters,
		success:   function(data) {

		}
	});
}

function validateFile() {
	var validate = validateStatusStages();
	if(validate){
		if ($("#documentName").val() == '') {
			popupAlert('Debe seleccionar documentos para cargar');
		}else if (validateMetadata()) {
			var extensionTender = documentName.substr((documentName.lastIndexOf('.') +1));
			var extensionBase = $("#documentName").val().substr(($("#documentName").val().lastIndexOf('.') +1));
//			alert(extensionTender + "	NOMBRE QUE DEBE TENER");
//			alert(extensionBase + "		NOMBRE BASE");
			if(extensionBase.toLowerCase() == extensionTender.toLowerCase()){
				uploadFile();
			}else{
				popupAlert('El documento no corresponde a lo solicitado. El formato debe ser ' + extensionTender.toUpperCase());
			}
		}
	}
}

function validateMetadata(){
	tenderName = getTenderById();

	if(documentTypeId == "" || documentTypeId == null || documentTypeId == "0") {
		popupAlert('Tipo de documento no definido');
		return false;
	} else if (tenderName == null) {
		popupAlert('Nombre de Licitacion no definido');
		return false;
	}
	return true;
}

function setDocNameInput(){
	$('#documentName').val($('#importFile').val());
}

function importDocument() {
	$("#importFile").trigger('click');
}

function getTenderById() {
	var tenderData = null;
	$.ajax({
		url:'/share/page/dashlets/getTenderById',
		type: "get",
		dataType: "json",
		async : false,
		data: {
			filter : tenderId,
		},
		success: function(data) {
			tenderData = data;
		}
	});
	return tenderData;
}