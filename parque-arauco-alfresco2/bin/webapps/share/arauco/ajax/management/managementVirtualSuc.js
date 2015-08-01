var id ="";
var idProject="";
var session="";
$(document).ready(function() {
	id = getUrlVars()["id"].replace(".","");
	idType = getUrlVars()["nodeType"];
	session = {idType:idType,
			idNode:id};
	datePickerss();
	menuSearch(); 
	getImportantDocumet();
});

function menuSearch() {
	$('.dropdown-menu').click(function(e) {
		e.stopPropagation();
	})
};

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

function uploadDocument(){
	if(selectedElement != "" && selectedElement != null){
		$.ajax({
			url:'/share/service/dashlets/uploadDocumentPopup',
			type: "get",
			dataType: "html",  
			async: false,  		
			success:   function(data) {
				popupDefault(data);
			}
		});
	}else{
		popupAlert('Selecciona un nodo del arbol para subir documentos');
	}
}

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}

function addDocument() {
	$('#addText').append('<input  type="text">');
}

function disableElements(divContainer) {
	for (var i = 0; i < divContainer.length; i++) {
		divContainer[i].disabled = true;
		disableElements(divContainer[i].children);
	}
}

function getImportantDocumet(){
	$.ajax({
		url:'/share/page/dashlets/getImportantDocument?nodeType=3&idType='+id,
		type: "get",
		dataType: "html", 

		success:   function(data) {

			$("#importantDocument").append('<table cellpadding="0" cellspacing="0" border="0" class="dataTableClass table table-striped table-bordered" id="example">'+
			'<thead><tr><th>Tipo de Documento</th><th>Fecha Inicio</th><th>Fecha Termino</th><th>Acciones</th></tr></thead><tbody id="getImportantData">');
			$('#getImportantData').append(data);
			$("#importantDocument").append('</tbody></table>');

			$('#example').dataTable();
		}
	});
}

function refreshImportantDocumet(){
	$.ajax({
		url:'/share/page/dashlets/getImportantDocument?nodeType=3&idType='+id,
		type: "get",
		dataType: "html", 
		success:   function(data) {
			$("#importantDocument").html("");
			$("#importantDocument").append('<table cellpadding="0" cellspacing="0" border="0" class="dataTableClass table table-striped table-bordered" id="example">'+
			'<thead><tr><th>Tipo de Documento</th><th>Fecha Inicio</th><th>Fecha Termino</th><th>Acciones</th></tr></thead><tbody id="getImportantData">');
			$('#getImportantData').html("");
			$('#getImportantData').append(data);
			$("#importantDocument").append('</tbody></table>');
			$('#example').dataTable();
		}
	});
}

function removeImportantDocument(uuid){
	$.ajax({
		url:'/share/page/dashlets/removeImportantDocument?nodeType=3&idType='+id+'&uuid='+uuid,
		type: "get",
		dataType: "html", 
		success:   function(data) {
			alert("Documento Eliminado");

			refreshImportantDocumet();

		}
	});
}

function closePopUp(){
	$('#readDocumentPreviewDialog').remove();	
	$('#delete').remove();
	$('#Share').removeClass('modal-open');
	$('#Share').removeClass('modal-backdrop fade in');
}

function getCurrentDate(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
		dd='0'+dd
	} 

	if(mm<10) {
		mm='0'+mm
	} 

	today = dd+'/'+mm+'/'+yyyy;
	return today;
}


function getProjectDocument(idProject, idProjectType){

	window.location.href = '/share/page/site/arquitectura/managementSucDocuments?id='+idProject+'&nodeType=4';

}