var varTicket;
var index = 0;
var noOfDocuments=1;
var uuidArray = new Array();
var count = 0;

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

function uploadFile(nodeType , nodeId , idProject, documentType, docTypeName) {
	var filename = $('#fileOperator').val();
	getTicket();
	if (filename !== null && filename !== undefined && filename !== '') {
		var cut = filename.lastIndexOf("\\");
		var end  =  filename.length;
		var res = filename.substring(cut+1,end);
//		var validDoc=validDocument(res);
		console.log("about to upload files");
		//llamada ajax subida de documento
		var file = document.getElementById("fileOperator");
		$("#loading").ajaxStart(function(){
			$(this).show();
		})
		.ajaxComplete(function(){
			$(this).hide();
		});

		$.ajaxFileUpload({
			url:"/alfresco/service/arauco/saveDocumentOperator?alf_ticket="+varTicket,
			secureuri:false,
			type: "POST",
			fileElementId:'fileOperator',
			dataType: 'JSON',
			async : false,
			data :{},
			success: function (data){
				saveDocumentMetadataOperator(data, idProject.replace(".",""), documentType, nodeType, nodeId, docTypeName.trim());
				loadCheckList(nodeId , idProject.replace(".",""), 1);				
			},
			error: function (data, status, e){
				popupAlert('Se produjo un problema en la carga del documento, E: ' + e + " data: " + data);
			}
		}
		)
		return false;

	}
}

function saveDocumentMetadataOperator(uuid, idProject, documentType, nodeType, stage, docTypeName){
	var sucProjectData = detailsSucProject(idProject);
	idSuc = sucProjectData.sucEntityId.replace(".","");
	var sucData = detailsSuc(idSuc);
	var idMall = sucData.mallId.replace(".","");
	var sucNumber = sucData.id.replace(".","");
	var storeName = sucData.sucCode;
	var mallData = detailsMall(idMall);
	var mall = mallData.name;
	var mallID = mallData.id;
	var country = mallData.countryName;
	var countryID = mallData.countryId;
	var mallIDSAP = mallData.idMallSap;
	var mallType = mallData.mallType;
	var docTypeName = docTypeName.trim();

	$.ajax({
		url: '/share/page/dashlets/saveDocMetadataOperator.json',
		type: "get",
		dataType: "json",  
		async: false,  
		data: {
			uuid : uuid, 
			stage : stage,
			documentType : documentType, 
			nodeType : nodeType,
			sucNumber : sucNumber,
			idProject : idProject,
			storeName : storeName, 
			mall : mall, 
			mallID : mallID,
			country : country,
			countryID : countryID,
			mallIDSAP : mallIDSAP,
			mallType : mallType,
			docTypeName : docTypeName
		},
		success:   function(data) {
			
		},

	});
}

function detailsSucProject(idProject){

	var resultData = null;

	$.ajax({
		url: '/share/page/dashlets/detailsSucProject',
		type: "get",
		dataType: "json",  
		async: false,  
		data: {
			filter : idProject
		},
		success:   function(data) {
			console.log(data);
			if(data.status > -1){
				resultData = data;
			}
		},

	});

	return resultData;

}

function detailsMall(idMall){
	var resultData = null;
	$.ajax({
		url: '/share/page/dashlets/editMall',
		type: "get",
		dataType: "json",  
		async: false,  
		data: {
			filter : idMall
		},
		success:   function(data) {
			console.log(data);
			if(data.status>0){
				resultData = data;
			}
		},
	});
	return resultData;
}


function detailsSuc(idSuc){
	var resultData = null;
	$.ajax({
		url: '/share/page/dashlets/sucDetails',
		type: "get",
		dataType: "json",  
		async: false,  
		data: {
			filter : idSuc
		},
		success:   function(data) {
			console.log(data);
			if(data.status >  -1){
				resultData = data;
			}
		},
	});
	return resultData;
}


function uploadDocument(nodeType , nodeId, idProject, documentType, docTypeName){
	var file = $('#fileOperator').val();
	if(file == null || file == '' || file == undefined){
		popupAlert("Debe seleccionar un documento");
	}else{
		uploadFile(nodeType , nodeId, idProject, documentType, docTypeName.trim());
	}
}


function validTableCheck(){
	var cont = 0;
	if($('#checkListTable').length != 0){
		$('#checkListTable tr').each(function(i) {
			var elem = $(this).find("input");
			if(elem.prop('checked')==false){
				cont = cont + 1;
			}
		});
		if(cont==0){
			popupSuccess("Se han subido todos los documentos");
		}else{
			popupAlert("Faltan " + cont + " documentos por subir");
		}
	}
}

//Cargador multiple

function addDocument() {
	$('#uploadDocumentContainer').append('<tr id="elements'+index+'">');
	noOfDocuments++;
	$('#elements'+index).append('<td><input id="documentName' + noOfDocuments + '" type="text" readOnly="true"></td>');
	$('#elements'+index).append('<td class="btnSearchContainer"><a class="btn btn-primary" id="btnSearch' + noOfDocuments + '" onclick="importDocument(' + noOfDocuments + ')">Buscar</a></td>');
	$('#elements'+index).append('<td class="previewRadio"><input type="radio" name="radPreview" value='+(noOfDocuments - 1)+' id="radPreview' + noOfDocuments + '" unchecked></td>');
	$('#elements'+index).append('<td><input type="file" name="file" id="importFile' + noOfDocuments + '" style="display:none;" onchange="return setDocNameInput(' + noOfDocuments + ');"/></td>');
	$('#uploadDocumentContainer').append('</tr>');
	index++;
}

function deleteInputext() {
	var validate = $('#uploadDocumentContainer tbody tr').last().attr('id');
	console.log(validate);
	if(validate != undefined && validate != 'undefined' && validate != null){
		$('#uploadDocumentContainer tbody tr').last().remove();
	}
}

function uploadMultiple(nodeType, nodeId, idProject, documentType, documentName){
	var filename = null;
	var uuidUF;
	var docCounter = getDocumentCount();

	if(docCounter == noOfDocuments){
		console.log("noOfDocuments: "+noOfDocuments);
		for (i = 1; i<=noOfDocuments; i++) {
			filename = $('#importFile' + i).val();
			if(filename !== "" && filename !== null){
				uploadDocuments(i, nodeType, nodeId, idProject, documentType, documentName);
			}
		}
	}else{
		popupAlert('Debe seleccionar documentos para cargar');
	}

}
function getDocumentCount(){
	var documentCounter = 0;

	for (i = 1; i<=noOfDocuments; i++) {
		filename = $('#importFile' + i).val();
		if(filename !== "" && filename !== null){
			documentCounter ++;
		}
	}
	return documentCounter;
}
function uploadDocuments(noOfDocuments, nodeType, nodeId, idProject, documentType, documentName) {
	var filename = $('#importFile' + noOfDocuments).val();
	getTicket();

	if (filename !== null && filename !== undefined && filename !== '') {

		var cut = filename.lastIndexOf("\\");
		var end  =  filename.length;
		var res = filename.substring(cut+1,end);
//		var validDoc=validDocument(res);

		console.log("about to upload files");
		//llamada ajax subida de documento
		var file = document.getElementById("importFile" + noOfDocuments);
		$("#loading").ajaxStart(function(){
			$(this).show();
		})
		.ajaxComplete(function(){
			$(this).hide();
		});
		openWaiting();
		$.ajaxFileUpload
		(
				{
					url:"/alfresco/service/arauco/uploadDocumentArauco?alf_ticket="+varTicket,
					secureuri:false,
					type: "POST",
					fileElementId:'importFile'+noOfDocuments,
					dataType: 'JSON',
					async : false,
					success: function (data){
						uuidUploadDoc= data;
						console.log("uuid: "+uuidUploadDoc);
						pushUuid(uuidUploadDoc, noOfDocuments, nodeType, nodeId, idProject, documentType, documentName);
						closeWaiting();

					},
					error: function (data, status, e){
						closeWaiting();
						popupAlert('Se produjo un problema en la carga del documento, E: ' + e + " data: " + data);
					}
				}
		)
		return false;

	}
}
function pushUuid(uuid, order, nodeType, nodeId, idProject, documentType, documentName){

	if(uuid != null && uuid != undefined && uuid != ""){
		console.log("uuid push: "+uuid);
		uuidArray[order -1]=uuid;
		count ++;
		console.log("count: "+count);
	}
	if(noOfDocuments == count){
		callPublishDocuments(uuidArray, nodeType, nodeId, idProject, documentType, documentName);
	}
}
function callPublishDocuments(uuidArray, nodeType, nodeId, idProject, documentType, documentName){
	var radioSelected = $('input[name=radPreview]:checked').val();
	var uuidDownloadAssoc = null;
	var count = 0;
	var uuidPreview = uuidArray[radioSelected];
	var uuidBase = uuidArray[0];


	if(uuidBase !== null && uuidBase !== undefined && uuidBase !== ""){
		for (var i = 0; i < uuidArray.length; i++) {
			if(uuidBase !== uuidArray[i]){
				if(count == 0){
					uuidDownloadAssoc = uuidArray[i];
					count ++;
				}else{
					uuidDownloadAssoc += "##" + uuidArray[i];
				}
			}
		}
		if(uuidDownloadAssoc != null && uuidDownloadAssoc != ""  && uuidDownloadAssoc != undefined){
			createAssocDownload(uuidBase, uuidDownloadAssoc);
		}
		
		saveDocumentMetadataOperator(uuidBase, idProject.replace(".",""), documentType, nodeType, nodeId, documentName);
		popupSuccess("Documento cargado exitosamente");
		loadCheckList(nodeId , idProject.replace(".",""), 1);
		if(uuidPreview !== null && uuidPreview !== undefined && uuidPreview !== ""){
			generatePreview(uuidPreview, uuidBase);
		}else{
			popupAlert('Debe seleccionar un documento para generar la previsualizaci\u00f3n');
		}
	}
	disableElements($('#uploadDocumentContainer').children());
	disableElements($('#generalMetadata').children());

	$('#btnUpload').disabled;

}
function createAssocDownload(uuidBase, uuidDownloadAssoc){

	$.ajax({		
		url:'/alfresco/service/components/createAssocDownload?alf_ticket='+varTicket,
		type: "POST",
		dataType: "html", 
		async: false,
		data : {
			uuid : uuidDownloadAssoc,
			uuidBase : uuidBase,
			site : 'arquitectura'
		},
		success:function(data){

		},
		error:function (xhr, ajaxOptions, thrownError){
			popupAlert('Se produjo un problema en la llamada al servicio de asociaci\u00f3n para descargas');
		}  
	})
}
function generatePreview(uuidPreview, uuid){
	var varHost = window.location.hostname;
	var varPort = window.location.port;
	
	$.ajax({					
		url: '/alfresco/service/components/arauco/generatePreview?alf_ticket='+varTicket+"&host="+varHost+"&port="+varPort,
		type: "POST",
		dataType: "html", 
		async: false,
		data : {
			uuid : uuid,
			uuidPreview: uuidPreview
		},
		success:function(data){

			$("#index").html(data);
			$("#index").show();

		},
		error:function (xhr, ajaxOptions, thrownError){
			popupAlert('Se produjo un problema en generar la previsualizaci\u00f3n del documento');
		}  
	})

}
function disableElements(divContainer) {
	for (var i = 0; i < divContainer.length; i++) {
		divContainer[i].disabled = true;

		disableElements(divContainer[i].children);
	}
}
function setDocNameInput(docNo){
	$('#documentName' + docNo).val($('#importFile' + docNo).val());
}
function importDocument(docNo) {
	$("#importFile" + docNo).trigger('click');
}
