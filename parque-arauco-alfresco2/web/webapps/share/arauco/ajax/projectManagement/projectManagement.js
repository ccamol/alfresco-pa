var nodeType;
var idProject;
var firstValue;
var idStage;
$(document).ready(function() {

	idProject = getUrlVars()["idProject"].replace(".","");
	idStage = getUrlVars()["id"].replace(".","");
	nodeType = getUrlVars()["nodeType"];
	
	datePickerss();
	getProjectStage();
	$('.dataTableClass').dataTable();
});


function uploadDocument()
{
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
		popupAlert("Selecciona un nodo del arbol para subir documentos");
	}

}
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getProjectStage(){
	$.ajax({
		url:'/share/page/dashlets/getStage',
		type: "get",
		dataType: "html",
		data: {
			filter : idProject,
			nodeType : nodeType
		},
		success:   function(data) {
			$('#stageProject').html(data);
			firstValue = $("#firstValue").val();
			document.getElementById("stage"+idStage).focus();
			$('#stage'+idStage).focus();
//			document.getElementById(firstValue).focus();
		}
	});
	return firstValue;
}

function sharedDocumentGroup(uuid){
	$.ajax({
		url:'/share/page/dashlets/sharedDocumentPopup',
		type: "get",
		dataType: "html",
		success:   function(data) {
			popupDefault(data);
			securityUsers(idProject , uuid);
			securitySelected(idProject , uuid);
		}
	});
}

function securityUsers(id , uuid){
	$.ajax({
		url:'/share/page/dashlets/getSharedDocumentAll',
		type: "get",
		dataType: "html",
		data: {
			idProject : id,
			uuid : uuid,
			idStage : idStage
		},
		success:   function(data) {
			$("#securityUsers").html(data);
		}
	});
}

function securitySelected(id , uuid){
	$.ajax({
		url:'/share/page/dashlets/sharedDocumentSelected',
		type: "get",
		dataType: "html",
		data: {
			idProject : id,
			uuid : uuid,
			idStage : idStage
		},
		success:   function(data) {
			$("#securitySelected").html(data);
		}
	});
}



function addSharedDocument(idProject , uuid , idthirdProject){
	$.ajax({
		url:'/share/page/dashlets/addSharedDocument',
		type: "get",
		dataType: "html",
		data: {
			idProject : idProject,
			uuid : uuid,
			idthirdProject : idthirdProject,
			idStage : idStage
			
		},
		success:   function(data) {
			securityUsers(idProject , uuid);
			securitySelected(idProject , uuid);
			popupSuccessTender("Compartido para Terceros");
			
		}
	});
}

function deleteSharedDocument(idSharedDocument , uuid){
	$.ajax({
		url:'/share/page/dashlets/deleteSharedDocument',
		type: "get",
		dataType: "html",
		data: {
			idSharedDocument : idSharedDocument
		},
		success:   function(data) {
			securityUsers(idProject , uuid);
			securitySelected(idProject , uuid);
			popupSuccessTender("No compartido con Terceros");
		}
	});
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