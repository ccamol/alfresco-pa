var URLCREATEFORM = '/alfresco/service/components/createform';
var noOfDocuments=1;
var varTicket="";
var uuid="";
var uuidUploadDoc = "";
var mallData;
var projectData;
var projectDataMall;
var stageDataMall;
var sucProjectData;
var sucData;
var stageData;
var uuidArray = new Array();
var count = 0;
var idMall;
var idProject;
var idStage;
var idSuc;
var idSucProject;
var siteId;
var idSection = null;
var section = null;
var nodeType = null;
var index = 0;
var prefix = "paList";
var sucNumber; 
var storeName;
var projectID;
var project;
var validateNodeType = null;

$( document ).ready(function() {
	getTicket();
	datePickerss();
	siteId = $("#siteId").val();

	validateNodeType = getUrlVars()["nodeType"];
	if(validateNodeType != null && validateNodeType != undefined && validateNodeType !='' && validateNodeType != 'undefined'){
		nodeType = validateNodeType.replace(".","");
	}
	console.log("nodeType: "+nodeType);

	if (typeof idProjectOperator !== 'undefined' && typeof idStageOperator !== 'undefined') {

		nodeType = nodeTypeOperator;

	}
	switch(nodeType + "") {
	case "1":
		idMall = getUrlVars()["id"].replace(".","");
		console.log("idMall: "+idMall);
		break;
	case "2":
		idProject = getUrlVars()["id"].replace(".","");
		console.log("idProject: "+idProject);
		if (typeof idProjectThird !== 'undefined') {

			idProject = idProjectThird;
		}
		projectDataMall = detailsProject(idProject, siteId);
		if(projectDataMall != null){
			idMall = projectDataMall.mallId.replace(".","");
			projectID = projectDataMall.id.replace(".","");
			project = projectDataMall.name;
			console.log("idMall: "+idMall);
		}
		break;
	case "3":
		idSuc = getUrlVars()["id"].replace(".","");
		console.log("idSuc: "+idSuc);
		if(idSuc !== null){
			sucData = detailsSuc(idSuc);
			if(sucData !== null){
				idMall = sucData.mallId.replace(".","");
				sucNumber = sucData.id.replace(".","");
				storeName = sucData.sucCode;
				console.log("idMall: "+idMall);
			}
		}
		break;
	case "4":
		idProject = getUrlVars()["id"].replace(".","");
		console.log("idSucProject: "+idProject);
		sucProjectData = detailsSucProject(idProject);
		if(sucProjectData !== null){
			idSuc = sucProjectData.sucEntityId.replace(".","");
			console.log("idSuc: "+idSuc);
			if(idSuc !== null){
				sucData = detailsSuc(idSuc);
				if(sucData !== null){
					idMall = sucData.mallId.replace(".","");
					sucNumber = sucData.id.replace(".","");
					storeName = sucData.sucCode;
					console.log("idMall: "+idMall);
				}
			}
		}
		break;
	case "5":
		if (typeof idProjectOperator !== 'undefined' && typeof idStageOperator !== 'undefined') {
			idStage =  idStageOperator;
			idProject =  idProjectOperator;
		}else{

			idStage = getUrlVars()["id"].replace(".","");
			console.log("idStage: "+idStage);
			idProject = getUrlVars()["idProject"].replace(".","");
			console.log("idProject: "+idProject);
		}
		projectDataMall = detailsProject(idProject, siteId);
		if(projectDataMall != null){
			idMall = projectDataMall.mallId.replace(".","");
			projectID = projectDataMall.id.replace(".","");
			project = projectDataMall.name;
		}
		break;
	case "6":
		if (typeof idProjectOperator !== 'undefined' && typeof idStageOperator !== 'undefined') {
			idStage =  idStageOperator;
			idProject =  idProjectOperator;
		}else{

			idStage = getUrlVars()["id"].replace(".","");
			console.log("idStage: "+idStage);
			idProject = getUrlVars()["idProject"].replace(".","");
			console.log("idProject: "+idProject);
		}
		projectDataMall = detailsProject(idProject, siteId);
		if(projectDataMall != null){
			idMall = projectDataMall.mallId.replace(".","");
			projectID = projectDataMall.id.replace(".","");
			project = projectDataMall.name;
		}

		break;
	case "7":
		if (typeof idProjectOperator !== 'undefined' && typeof idStageOperator !== 'undefined') {
			idStage =  idStageOperator;
			idProject =  idProjectOperator;
		}else{

			idStage = getUrlVars()["id"].replace(".","");
			console.log("idStage: "+idStage);
			idProject = getUrlVars()["idProject"].replace(".","");
			console.log("idProject: "+idProject);
		}
		projectDataMall = detailsSucProject(idProject);
		console.log("projectDataMall: "+projectDataMall);
		if(projectDataMall != null){
			idMall = projectDataMall.mallId.replace(".","");
			console.log("idMall: "+idMall);
			projectID = projectDataMall.id.replace(".","");
			console.log("projectID: "+projectID);
			project = projectDataMall.name;
			console.log("project: "+project);
			sucNumber = projectDataMall.sucEntityId.replace(".","");
			console.log("sucNumber: "+sucNumber);
			storeName = projectDataMall.sucCode;
			console.log("storeName: "+storeName);
		}
		break;
	case "8":
		break;
	case "9":
		idMall = getUrlVars()["id"].replace(".","");
		console.log("idMall: "+idMall);
		break;
	case "10":
		idProject = getUrlVars()["id"].replace(".","");
		console.log("idProject: "+idProject);
		if (typeof idProjectThird !== 'undefined') {

			idProject = idProjectThird;
		}
		projectDataMall = detailsProject(idProject, siteId);
		if(projectDataMall != null){
			idMall = projectDataMall.mallId.replace(".","");
			projectID = projectDataMall.id.replace(".","");
			project = projectDataMall.name;
			console.log("idMall: "+idMall);
		}
		break;
	default:
	}

	/**
	 * Carga de paramétricas(Listas de datos)
	 */	
	if(siteId == "arauco"){
		idSection = 2;
		section = "Ingeniería";
		getListById(2, "subsection", "sectionID");
	}else{
		idSection = 1;
		section = "Arquitectura";
		getListById(1, "subsection", "sectionID");
	}
	$('#subsection').bind('change',function(){
		document.getElementById('serie').options.length = 0;
		document.getElementById('documentType').options.length=0;
		var id=$("#subsection").val();
		if(id == 0)
		{
			$("#serie").empty();
			$("#documentType").empty();
			$("#specialMetadata").empty();
		}
		if(id > 0){
			if(id!='' && id!=null && id!=undefined){
				$("#serie").empty();
				$("#documentType").empty();
				getListById(id, "serie", "subsectionID");
			}	
		}
	});
	$('#serie').bind('change',function(){
		document.getElementById('documentType').options.length=0;
		var idSerie=$("#serie").val();
		if(idSerie == 0)
		{
			$("#documentType").empty();
			$("#specialMetadata").empty();
		}
		if(idSerie > 0){
			if(idSerie!='' && idSerie!=null && idSerie!=undefined){
				$("#documentType").empty();
				getDocumentType(idSerie);
			}	
		}

	});
	$('#documentType').bind('change',function(){
		var idDoc = $('#idDocumentType').val();
		if(idDoc == 0){
			$("#specialMetadata").empty();
		}
		callCreateForm();
		number();
	});


	$('input[type=file]').change(function () {
		var input = $(this);
		if (input[0].files && input[0].files[0]) {
			var file = input[0].files[0]
			if (file) {
				$('#filename').html(file.name);
			}

		}
	});


});

function getList(typeList, idHtml){
	$.ajax({
		url: '/alfresco/service/arauco/getDataList?alf_ticket='+varTicket,
		type: "POST",
		dataType: "json", 
		async: false,
		data: { 
			type : typeList,
			prefix : prefix
		} ,
		success:function(data){
			$("#"+idHtml).html('');
			$("#"+idHtml).append('<option value="">Seleccionar</option>');
			var total=data.length;
			if(total>0){
				for( var i=0;i<total;i++){
					if(data[i].description!='' && data[i].description!=null && data[i].description!=undefined){
						$("#"+idHtml).append('<option value="'+data[i].idList+'">'+data[i].description+'</option>');
					}
				}
			}else{
				select.options[0] = new Option("","0");
			}
		},
		error:function (xhr, ajaxOptions, thrownError){
			popupAlert('Se produjo un problema al cargar la lista');
		}  
	});
}

function getListById(id, type, propertyId){	
	$.ajax({					
		url: '/alfresco/service/arauco/getListById?alf_ticket='+varTicket,
		type: "POST",
		dataType: "json", 
		async: false,
		data: { 
			id : id,
			type : type,
			prefix : prefix, 
			propertyId: propertyId


		} ,
		success:function(data){
			var total=data.length;
			var select = document.getElementById(type);
			if(select != null){
				select.options.length = 0;
				if(total>0){
					var counter = 1;
					for( var i=0;i<total;i++){
						if(counter==1){
							select.options[0] = new Option("Seleccionar","0");
						}
						if(data[i].description!='' && data[i].description!=null && data[i].description!=undefined){
							select.options[counter++] = new Option(data[i].description,data[i].id);
						}
					}
				}else{
					select.options[0] = new Option("","0");
				}		

			}
		},
		error:function (xhr, ajaxOptions, thrownError){
			popupAlert('Se produjo un problema al cargar la lista');
		}  
	})
}

function getDocumentType(id){	
	$.ajax({
		url: '/alfresco/service/arauco/getDocumentType?alf_ticket='+varTicket,
		type: "POST",
		dataType: "json", 
		async: false,
		data: { 
			id : id,
			type : "serie",
			prefix : prefix

		} ,
		success:function(data){
			var total=data.length;
			var select = document.forms['formMetadata'].documentType;
			select.options.length = 0;
			if(total>0){
				var counter = 1;
				for( var i=0;i<total;i++){
					if(counter==1){
						select.options[0] = new Option("Seleccionar","0");
					}
					if(data[i].description!='' && data[i].description!=null && data[i].description!=undefined){
						select.options[counter++] = new Option(data[i].description,data[i].id);
					}
				}
			}		   
		},
		error:function (xhr, ajaxOptions, thrownError){
			popupAlert('Se produjo un problema al cargar la lista tipo de documento');
		}  
	})
}


function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}

function callCreateForm(){
	var id=$("#documentType").val();
	$.ajax({
		url: URLCREATEFORM+"?alf_ticket="+varTicket,
		type: "get",
		dataType: "html",  
		async: false,  		
		data: 	{
			prefix : "pa",
			name : "documentTypeAspectsList",
			id : id
		},
		success:   function(data) {
			$("#divMeta").html(data);
			datePickerss();
		},
	});
}

function saveDocumentMetadata(uuid){


	var sectionID = idSection;
	var stageID = idStage;
	var subsection = $("#subsection option:selected").text();
	var subsectionID =$("#subsection option:selected").val(); //num
	var serie =$("#serie option:selected").text();
	var serieID =$("#serie option:selected").val(); //num
	var documentType =$("#documentType option:selected").text();
	var documentTypeID =$("#documentType option:selected").val(); //num
	var mall = null;
	var mallID = null;
	var country = null;
	var countryID = null;
	var mallIDSAP = null;
	var mallType = null;
	var stage = null;

	if(idMall != null && idMall != undefined && idMall != ''){
		console.log("idMall: "+idMall);
		mallData = detailsMall(idMall);
		if(mallData != null && mallData != undefined && mallData != ''){
			console.log("mallData: "+mallData);
			mall = mallData.name;
			mallID = mallData.id;
			country = mallData.countryName;
			countryID = mallData.countryId;
			mallIDSAP = mallData.idMallSap;
			mallType = mallData.mallType;
		}
	}
	if(idStage != null && idStage != undefined && idStage != ''){
		stageData  = detailsStage(idStage);
		console.log("stageData: "+stageData);
		if(stageData != null && stageData != undefined && stageData != ''){
			stage = stageData.stageName;
			console.log("stage: "+stage);
		}
	}

	var parameters = {};
	parameters["nodeType"] = $.trim(nodeType);
	parameters["site"] = $.trim(siteId);
	parameters["mall"] = $.trim(mall);
	parameters["mallID"] = $.trim(mallID);
	parameters["country"] = $.trim(country);
	parameters["countryID"] = $.trim(countryID);
	parameters["mallIDSAP"] = $.trim(mallIDSAP);
	parameters["mallType"] = $.trim(mallType);
	parameters["projectID"] = $.trim(projectID);
	parameters["project"] = $.trim(project);
	parameters["stage"] = $.trim(stage);
	parameters["stageID"] = $.trim(stageID);
	parameters["section"] = $.trim(section);
	parameters["sectionID"] = $.trim(sectionID);
	parameters["subsection"] = $.trim(subsection);
	parameters["subsectionID"] = $.trim(subsectionID);
	parameters["serie"] = $.trim(serie);
	parameters["serieID"] = $.trim(serieID);
	parameters["documentType"] = $.trim(documentType);
	parameters["documentTypeID"] = $.trim(documentTypeID);
	parameters["selectedElement"] = $.trim(selectedElement);
	parameters["uuid"] = $.trim(uuid);
	parameters["storeName"] = $.trim(storeName);
	parameters["sucNumber"] = $.trim(sucNumber);
	parameters["sucNumberID"] = $.trim(sucNumber);
	parameters['documentDate$isDate'] = $('#documentDate').val();
	console.log("params chckpoint1");

	$("div > input").each(function() {
		if ($(this).parent().attr('name') == "regularProperty") {
			if ($(this).attr("class").indexOf("datePickers") !== -1) {
				parameters[$(this).attr("id") + '$isDate'] = $(this).val().replace("-", '/');
				console.log("param - " + $(this).attr("id") + '$isDate: ' + $(this).val().replace("-", '/'));
			} else if ($(this).attr("class") == "numeric") {
				parameters[$(this).attr("id") + "$isInt"] = $(this).val();
				console.log("param - " + $(this).attr("id") + "$isInt: " + $(this).val());
			} else {
				parameters[$(this).attr("id")] = $(this).val();
				console.log("param - " + $(this).attr("id") + ": " + $(this).val());
			}
		}
	});
	$("div > select").each(function() {
		if ($(this).parent().attr('name') == "listProperty") {
			parameters[$(this).attr('id')] = $(this).val();
			console.log("new select param - " + $(this).attr("id") + ": " + $(this).val());
		}
	});
	console.log("params chckpoint2");

	$.ajax({
		url:'/share/service/dashlets/saveDocumentMetadataArauco',
		type: "GET",
		dataType: "json",  
		async: false,
		data: parameters,
		success:function(data){
			if(data =="2"){
				popupSuccessTender('Su documento ha sido enviado a un flujo de aprobación');
			}else{
				addDocumentToCount(selectedElement);
			}
		}
	});
}

function addDocumentToCount(classification) {

	var oldVal = null;
	var one = null;
	var two = null;
	var oneFinal = null;
	var twoFinal = null;
	var part1 = null;
	var part2 = null;
	var currentClassificationValue=0;

	var parents = new Array();
	$.ajax({
		url : '/share/page/dashlets/parentRecurseFolders.json',
		type : "get",
		dataType : "json",
		async : true,
		data : {
			uuid : classification
		},
		success : function(data){
			if(data.status>-1){
				oldVal= $("#label_"+classification).html();
				one = oldVal.lastIndexOf('(');
				two = oldVal.lastIndexOf(')');
				oneFinal = one +1;
				twoFinal = two +1;
				part1 = oldVal.slice(0,oneFinal);
				part2 = oldVal.slice(two,twoFinal);
				currentClassificationValue=parseInt(oldVal.slice(oneFinal,two))+1;
				$("#label_"+classification).html(part1 + currentClassificationValue + part2);


				for(var i=0; i < data.resultSet.length;i++ ){
					parents[i] =data.resultSet[i].uuid;

					oldVal= $("#label_"+parents[i]).html();
					one = oldVal.lastIndexOf('(');
					two = oldVal.lastIndexOf(')');
					oneFinal = one +1;
					twoFinal = two +1;
					part1 = oldVal.slice(0,oneFinal);
					part2 = oldVal.slice(two,twoFinal);
					currentClassificationValue=parseInt(oldVal.slice(oneFinal,two))+1;
					$("#label_"+parents[i]).html(part1 + currentClassificationValue + part2);

				}
			}
		}
	});
}



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

function importDocument(docNo) {
	$("#importFile" + docNo).trigger('click');
}

function setDocNameInput(docNo){
	$('#documentName' + docNo).val($('#importFile' + docNo).val());
}

function pushUuid(uuid, order){

	if(uuid != null && uuid != undefined && uuid != ""){
		console.log("uuid push: "+uuid);
		uuidArray[order -1]=uuid;
		count ++;
		console.log("count: "+count);
	}
	if(noOfDocuments == count){
		callPublishDocuments(uuidArray);
	}
}

function uploadMultiple(){
	var filename = null;
	var uuidUF;
	var docCounter = getDocumentCount();

	if(!validateMetadata()){
		return false;
	}
	if(jQuery("#formMetadata").valid() == false){
		popupAlert('Atención, existen campos vacios');
		return false;
	}else{

		if(docCounter == noOfDocuments){
			console.log("noOfDocuments: "+noOfDocuments);
			for (i = 1; i<=noOfDocuments; i++) {
				filename = $('#importFile' + i).val();
				if(filename !== "" && filename !== null){
					uploadDocuments(i);
				}
			}
			loadChkList();
		}else{
			popupAlert('Debe seleccionar documentos para cargar');
		}
	}

}

function loadChkList(){
	$.ajax({
		url:'/share/page/dashlets/checkList',
		type: "get",
		dataType: "html",
		data: {
			nodeType : nodeType,
			nodeId : id
		},
		success:   function(data) {
			$('#checkStageMall').html(data);
		}
	});
}

function loadFilesInFolder(){
	$.ajax({
		url:'/share/page/dashlets/folderFiles',
		type: "get",
		dataType: "html",
		data : {
			parent : element,
			nodeType : nodeType,
			nodeId : nodeId
		},
		success:   function(data) {
			$("#filesInFolder").html(data);
		}
	});
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

function callPublishDocuments(uuidArray){
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

		saveDocumentMetadata(uuidBase);
		if(uuidPreview !== null && uuidPreview !== undefined && uuidPreview !== ""){
			generatePreview(uuidPreview, uuidBase);
			popupSuccess('Documento subido correctamente');
			loadChkList();
			selectNode(selectedElement);
		}else{
			popupAlert('Debe seleccionar un documento para generar la previsualizaci\u00f3n');
		}
	}
	disableElements($('#uploadDocumentContainer').children());
	disableElements($('#divMeta').children());
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
			site : siteId
		},
		success:function(data){

		},
		error:function (xhr, ajaxOptions, thrownError){
			popupAlert('Se produjo un problema en la llamada al servicio de asociaci\u00f3n para descargas');
		}  
	})
}


function uploadDocuments(noOfDocuments) {
	var filename = $('#importFile' + noOfDocuments).val();

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
						pushUuid(uuidUploadDoc, noOfDocuments);
						closeWaiting();
						listExpiration(idMall , nodeType , nodeId);

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
function getPreview(uuid){
	var varHost = window.location.hostname;
	var varPort = window.location.port;
	var dataPreview = null;

	$.ajax({					
		url: '/alfresco/service/components/arauco/getPreview?alf_ticket='+varTicket+"&host="+varHost+"&port="+varPort,
		type: "POST",
		dataType: "html", 
		async: false,
		data : {
			uuid : uuid
		},
		success:function(data){
			$("#index").html(data);
			$("#index").show();

		},
		error:function (xhr, ajaxOptions, thrownError){
			popupAlert('Se produjo un problema en la llamada al servicio getPreview');
		}  
	})

}

function getTicket(){

	$.ajax({
		url: '/share/page/dashlets/getTicket',
		type: "GET",
		dataType: "json",  
		async: false,  		


		success:   function(data) {

			varTicket = data.ticket;

		},

	});

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
function detailsProject(idProject, site){

	var resultData = null;

	$.ajax({
		url: '/share/page/dashlets/detailsProject',
		type: "get",
		dataType: "json",  
		async: false,  
		data: {
			filter : idProject,
			site: site
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

function detailsStage(idStage){

	var resultData = null;

	$.ajax({
		url: '/share/page/dashlets/detailsStage',
		type: "get",
		dataType: "json",  
		async: false,  
		data: {
			idStage : idStage
		},
		success:   function(data) {
			console.log(data);
			if(data.status != "-1"){
				resultData = data;
			}
		},

	});

	return resultData;

}


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
function validateMetadata(){
	var subsection=$("#subsection").val();
	var serie=$("#serie").val();
	var documentType=$("#documentType").val();
	var documentDate=$("#documentDate").val();
	var docNum=$("#documentNumberGenralMeta").val();
	var status=false;


	if(subsection == "" || subsection == null || subsection == "0"){
		popupAlert('Debe seleccionar una sub-secci\u00f3n');
	}else if(serie == "" || serie == null|| serie == "0"){
		popupAlert('Debe seleccionar una serie');
	}else if(documentType == "" || documentType == null || documentType == "0"){
		popupAlert('Debe seleccionar un tipo de documento');
	}else if(documentDate== "" || documentDate == null){
		popupAlert('Debe ingresar una fecha v\u00e1lida');
	}else{
		status=true;
	}
	return status;
}

function disableElements(divContainer) {
	for (var i = 0; i < divContainer.length; i++) {
		divContainer[i].disabled = true;

		disableElements(divContainer[i].children);
	}
}

jQuery.fn.reset = function () {
	$(this).each (function() { this.reset(); });
}
function isNumberKey(evt)
{
	var charCode = (evt.which) ? evt.which : event.keyCode
			if (charCode > 31 && (charCode < 48 || charCode > 57))
			{
				//showmodal("En el campo numero de documento, solo se pueden ingresar numeros");
				return true;
			}
			else{return true;}
}


function number(){
	$(".numeric").keypress(function(evt) {
		var charCode = (evt.which) ? evt.which : event.keyCode
				if (charCode > 31 && (charCode < 48 || charCode > 57))
					return false;
		return true;
	});
}

function deleteInputext() {
	var validate = $('#uploadDocumentContainer tbody tr').last().attr('id');
	console.log(validate);
	if(validate != undefined && validate != 'undefined' && validate != null){
		$('#uploadDocumentContainer tbody tr').last().remove();
	}
}

function updateUploadNewDocument(){
	var filename = $('#newDocumentFile').val();
	var uuidNewDocumentUpdate = null;

	if (filename !== null && filename !== undefined && filename !== '') {
		$.ajaxFileUpload
		(
				{
					url:"/alfresco/service/arauco/uploadDocumentArauco?alf_ticket="+varTicket,
					secureuri:false,
					type: "POST",
					fileElementId:'newDocumentFile',
					dataType: 'JSON',
					async : false,
					success: function (data){
						uuidNewDocumentUpdate= data;
						$('#newDocumentFile').attr('id','fileUpdate_' + uuidNewDocumentUpdate);
						createAssocDownload($("#hiddenUuid").val(), uuidNewDocumentUpdate);
						proccessUploadUpdateContent();
					},
					error: function (data, status, e){
						closeWaiting();
						popupAlert('Se produjo un problema en la carga del documento, E: ' + e + " data: " + data);
					}
				}
		)


	}

	return uuidNewDocumentUpdate;
}


function uploadUpdateContent(){
	if($('#newDocumentFile').val()!=null && $('#newDocumentFile').val() !== undefined && $('#newDocumentFile').val() !== ''){
		updateUploadNewDocument();
	}else{
		proccessUploadUpdateContent();
	}
}	

function uploadUpdateContentApplicant(){
	var validate = validateStatusStages();
	if(validate){
		if($('#newDocumentFile').val()!=null && $('#newDocumentFile').val() !== undefined && $('#newDocumentFile').val() !== ''){
			updateUploadNewDocument();
		}else{
			proccessUploadUpdateContent();
		}
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

function proccessUploadUpdateContent(){
	var arrayFiles = $("[id^=fileUpdate]");
	var nameFileUpdateArray = new Array();
	for(i=0; i<arrayFiles.length;i++){
		filename = $('#' + arrayFiles[i].id).val();
		if(filename == null || filename==undefined || filename==''){
			nameFileUpdateArray = arrayFiles[i].id.split("_");
			if(nameFileUpdateArray.length==1){
				updateContentWithNoFile(filename);
			}
		}else{
			nameFileUpdateArray = arrayFiles[i].id.split("_");
			if(nameFileUpdateArray.length>1){
				updateContentWithUuid(filename, nameFileUpdateArray[1], arrayFiles[i].id);
			}else{
				updateContent(filename);
			}
		}

	}


}

function updateContentWithUuid(filename, fileUpdateUuid, fileUpdateName) {
	var uuid = fileUpdateUuid;
	var comments = $("#versionComments").val();
	var version = "attachment";
	if (filename !== null && filename !== undefined && filename !== '') {
		var cut = filename.lastIndexOf("\\");
		var end  =  filename.length;
		var res = filename.substring(cut+1,end);
//		var validDoc=validDocument(res);
		console.log("about to upload files");
		//llamada ajax subida de documento
		var file = document.getElementById(fileUpdateName);
		$("#loading").ajaxStart(function(){
			$(this).show();
		})
		.ajaxComplete(function(){
			$(this).hide();
		});
		$.ajaxFileUpload({
			url:"/alfresco/service/components/arauco/versionContentDocument?alf_ticket="+varTicket,
			secureuri:false,
			type: "POST",
			fileElementId:fileUpdateName,
			dataType: 'JSON',
			async : false,
			data: {
				uuid : uuid,
				name : filename,
				version : version,
				comments : comments
			},
			success: function (data){
			},
			error: function (data, status, e){
				popupAlert('Se produjo un problema en la carga del documento, E: ' + e + " data: " + data);
			}
		}
		)
		return false;

	}
}

function updateContentWithNoFile(filename) {
	var uuid = $("#hiddenUuid").val();
	var comments = $("#versionComments").val();
	var version = "minor";
	if($('input[name=majorVersion]:checked').val()=='true'){
		version = "major";
	}
	var cut = filename.lastIndexOf("\\");
	var end  =  filename.length;
	var res = filename.substring(cut+1,end);
//	var validDoc=validDocument(res);
	console.log("about to upload files");
	//llamada ajax subida de documento
	var file = document.getElementById("fileUpdate");
	$.ajax({
		url: "/alfresco/service/components/arauco/versionContentDocumentWithoutFile?alf_ticket="+varTicket,
		type: "POST",
		dataType: "html",  
		async: false,  
		data: {
			uuid : uuid,
			version : version,
			comments : comments					
		},
		success:   function(data) {
			popupSuccess("Documento subido");
		}
	});
	return false;
}

function updateContent(filename) {
	var successUpdate=false;
	var uuid = $("#hiddenUuid").val();
	var comments = $("#versionComments").val();
	var version = "minor";
	if($('input[name=majorVersion]:checked').val()=='true'){
		version = "major";
	}
	if (filename !== null && filename !== undefined && filename !== '') {
		var cut = filename.lastIndexOf("\\");
		var end  =  filename.length;
		var res = filename.substring(cut+1,end);
//		var validDoc=validDocument(res);
		console.log("about to upload files");
		//llamada ajax subida de documento
		var file = document.getElementById("fileUpdate");
		$("#loading").ajaxStart(function(){
			$(this).show();
		})
		.ajaxComplete(function(){
			$(this).hide();
		});
		$.ajaxFileUpload({
			url:"/alfresco/service/components/arauco/versionContentDocument?alf_ticket="+varTicket,
			secureuri:false,
			type: "POST",
			fileElementId:'fileUpdate',
			dataType: 'JSON',
			async : false,
			data: {
				uuid : uuid,
				name : filename,
				version : version,
				comments : comments					},
				success: function (data){
					successUpdate=true;
					popupSuccess("Documento subido");
					deleteComments();
				},
				error: function (data, status, e){
					popupAlert('Se produjo un problema en la carga del documento, E: ' + e + " data: " + data);
				}
		}
		)

		return false;

	}
}

function deleteComments(){

	var uuid = $("#hiddenUuid").val();

	$.ajax({
		url: '/share/page/dashlets/deleteComments',
		type: "get",
		dataType: "html",  
		async: false,  
		data: {
			uuid : uuid
		},
		success:   function(data) {
		},

	});
}