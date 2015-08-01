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
	getMallProject(id);
	getStatus();
	getImportantDocumet();
	
	$('#createProject').click(function(){
		createProject();
		getStatus();
		getProjectType();	
		datePickerss();
		$('#description').keypress(function(e){
		    if(e.shiftKey){
		        if(e.keyCode == 13){
		            e.preventDefault();
		        }
		    }
		    if(e.keyCode == 13){
		         e.preventDefault();
		    }
		});
	});
	
	getSucVirtual();

	$('#showRecord').click(function(){
		getSucVirtualHistory();
	});

	$('#showActive').click(function(){
		getSucVirtual();
	});

	$('#createSucVirtual').click(function(){
		createVirtualSuc();
	});
});

function sucManagement(idSuc){
	window.location.href = '/share/page/site/arauco/managementVirtualSuc?id='+idSuc+'&nodeType=3&selected=arauco';
}

function createVirtualSuc(){
	$.ajax({
		url:'/share/service/dashlets/virtualSucPopup',
		type: "get",
		dataType: "html",  
		async: false,  		
		success:   function(data) {
			popupMedium(data);
			$('#idMallSap').val(mallIDSAP);
			$('#idMallSap').attr('disabled', 'disabled');
		}
	});
}

function getSucVirtual(){
	$.ajax({
		url:'/share/page/dashlets/getVirtualSuc',
		type: "get",
		dataType: "html",
		data: {
			filter : id,
			sucType : 1
		},
		success:   function(data) {
			$('#virtualSuc').html(data);
		}
	});
}

function getSucVirtualHistory(){
	$.ajax({
		url:'/share/page/dashlets/getVirtualSucHistory',
		type: "get",
		dataType: "html",
		data: {
			filter : id,
			sucType : 2
		},
		success:   function(data) {
			$('#virtualSuc').html(data);
		}
	});
}

function sendToHistory(id, sucCode, idMallSap, storeM2, terraseM2, mallId, warehousem2, escaparatem, description, sucStatus){
	$.ajax({
		url:'/share/page/dashlets/addVirtualSuc',
		type: "get",
		dataType: "html", 
		data : {
			id : id,
			sucType : 2,
			sucCode : sucCode,
			idMallSap : idMallSap,
			storeM2 : storeM2,
			terraseM2 : terraseM2,
			mallId : mallId,
			warehousem2 : warehousem2,
			escaparatem : escaparatem,
			description : description,
			sucStatus : sucStatus
		},
		success:   function(data) {
			popupSuccess('El registro se ha guardado en el historial');
			getSucVirtual();
		}
	});
}

function vinculate(virtualSUC, realSUC){
	$.ajax({
		url:'/share/page/dashlets/linkSUCSAP.json',
		type: "get",
		dataType: "json", 
		data : {
			virtualSUC	: virtualSUC,
			realSUC	: realSUC 
		},
		success:   function(data) {
			if(data.estatus="1"){
				popupSuccess(data.message);
				getSucVirtual();
			}else{
				popupAlert(data.message);
			}
		}
	});
}

function linkSap(sucCode){
	$('#vinculateSAP').remove();
	$.ajax({
		url:'/share/service/dashlets/vinculate?id=' + sucCode + "&mall=" + id,
		type: "get",
		dataType: "html",  
		async: false,  		
		success:   function(data) {
			popupDefault(data);
		}
	});
}

function addSucVirtual(){
	var sucCode = $("#codeSuc").val();
	var idMallSap = $("#idMallSap").val();
	var storeM2 = $("#storeM2").val();
	var terraseM2 = $("#terraseM2").val();
	var mallId = id;
	var warehousem2 = $("#warehousem2").val();
	var escaparatem = $("#escaparatem").val();
	var description = $("#description").val();
	var sucType = 1;
	var sucStatus = 0;

	if(sucCode == null || sucCode == '' || sucCode == undefined){
		popupAlert('Debe ingresar el código de SUC');
	}else if(storeM2 == null || storeM2 == '' || storeM2 == undefined){
		popupAlert('Debe ingresar los M&sup2; Local');
	}else if(terraseM2 == null || terraseM2 == '' || terraseM2 == undefined){
		popupAlert('Debe ingresar los M&sup2; Terraza');
	}else if(warehousem2 == null || warehousem2 == '' || warehousem2 == undefined){
		popupAlert('Debe ingresar los M&sup2; Bodega');
	}else if(escaparatem == null || escaparatem == '' || escaparatem == undefined){
		popupAlert('Debe ingresar los M Vitrina');
	}else if(description == null || description == '' || description == undefined){
		popupAlert('Debe ingresar una descripci\u00f3n');
	}else{
		$.ajax({
			url:'/share/page/dashlets/addVirtualSuc',
			type: "get",
			dataType: "html", 
			data : {
				sucCode : sucCode,
				idMallSap : idMallSap,
				storeM2 : storeM2,
				terraseM2 : terraseM2,
				mallId : mallId,
				warehousem2 : warehousem2,
				escaparatem : escaparatem,
				description : description,
				sucType : sucType,
				sucStatus : sucStatus
			},
			success:   function(data) {
				popupSuccess('Registro creado con éxito');
				getSucVirtual();
			}
		});
	}
}

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
	}).click(function(){
		$('#ui-datepicker-div').click(function(e){
			e.stopPropagation();
		});
	});
}

function createProject(){

	idProject ='';
	
	$.ajax({
		url:'/share/service/dashlets/createProjectPopUp',
		type: "get",
		dataType: "html",  
		async: false,  		

		success:   function(data) {
			popupMedium(data);
		}
	});

}


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

function getMallProject(idProyect){
	$.ajax({
		url:'/share/page/dashlets/getMallProject',
		type: "get",
		dataType: "html",
		data: {
			filter : idProyect
		},
		success:   function(data) {
			$('#proyectMalls').html(data);
		}
	});
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

function editProject(id,idMall,nameMall,nameProject, finishdate,description,idStatus,idType,createdDate){
	idProject = id;
	$.ajax({
		url:'/share/service/dashlets/editProjectPopUp',
		type: "get",
		dataType: "html",  
		async: false,  		

		success:   function(data) {
			popupMedium(data);
			
			$('#addText').append(id);
			$('#mall').val(nameMall).prop('disabled',true);
			$('#name').val(nameProject);
			getProjectType(idType);
			getStatus(idStatus);
			datePickerss();
			
			$('#finishDate').val(finishdate);
			$('#creationDate').val(createdDate);
			$('#description').append(description); 
			$('#description').keypress(function(e){
			    if(e.shiftKey){
			        if(e.keyCode == 13){
			            e.preventDefault();
			        }
			    }
			    if(e.keyCode == 13){
			         e.preventDefault();
			    }
			});
		}
	});
}


function searchProject(){
	var nameProject = $("#nameProject").val();
	var status =  $("#statusFilterProject").val();
	var dateFrom =  $("#txDateFromProject").val().split("/").reverse().join("-");
	var dateTo =  $("#txDateToProject").val().split("/").reverse().join("-");
	$.ajax({
		url:'/share/page/dashlets/searchProject',
		type: "get",
		dataType: "html",
		data: {
			id : id,
			nameProject : nameProject,
			status :  status,
			dateFrom : dateFrom,
			dateTo : dateTo
		},
		success:   function(data) {
			document.getElementById('proyectMalls').innerHTML = data;
			$('#statusFilterProject').val('none');
		}
	});
}

function getStatus(OptionStatus){
	$.ajax({
		url:'/share/page/dashlets/getProjectStatus',
		type: "get",
		dataType: "html", 

		success:   function(data) {
			if(OptionStatus!=null || OptionStatus!=undefined){
				$('#statusProject').html(data);
				$('#getStatusProject').html(data);
				$("#getStatusProject option[value="+OptionStatus+"]").attr("selected",true);
			}else{
			$('#statusProject').html(data);
			$('#getStatusProject').html(data);
			}
		}
	});
}

function addProject(){
	var name = $("#name").val();
	var type = $("#getTypeProject").val();
	var status = $("#getStatusProject").val();
	var creation = $("#creationDate").val();
	var finish = $("#finishDate").val();
	var validCreation = formatDate(creation);
	var validFinish = formatDate(finish);

	if(name == null || name == '' || name == undefined){
		popupAlert("Ingrese el nombre del Proyecto");
	}else if(type == null || type == '' || type == undefined || type == 0 || type =='0' ){
		popupAlert("Ingrese el tipo del Proyecto");
	}else if(status == null || status == '' || status == undefined || status == 'none'){
		popupAlert("Ingrese el estado del Proyecto"); 
	}else if(creation == null || creation == '' || creation == undefined){
		popupAlert("Ingrese la fecha de creación");
	}else if(finish == null || finish == '' || finish == undefined){
		popupAlert("Ingrese la fecha de termino");
	}else if(validCreation >= validFinish){
		popupAlert("La fecha de termino debe ser superior a la fecha de inicio");
	}else{
	$.ajax({
		url:'/share/page/dashlets/addProjectMall?id='+idProject,
		type: "get",
		dataType: "html", 
		data : {
			name	:  $("#name").val(),
			mall	: id, 
			getTypeProject : $("#getTypeProject").val(), 
			getStatusProject : $("#getStatusProject").val(), 
			creationDate : $("#creationDate").val(), 
			finishDate : $("#finishDate").val(), 
			description : $("#description").val()
		},
		success:   function(data) {
			getMallProject(id);
			popupSuccess("Proyecto creado con éxito");
		}
	});
	}
}

function getProjectType(OptionType){
	$.ajax({

		url:'/share/page/dashlets/getProjectType',
		type: "get",
		dataType: "html", 
		success:   function(data) {

			if(OptionType!=null || OptionType!=undefined){
				$('#getTypeProject').html(data);
				$("#getTypeProject option[value="+OptionType+"]").attr("selected",true);
			}else{
				$('#getTypeProject').html(data);
			}
		}
	});
}


function getImportantDocumet(){
	$.ajax({
		url:'/share/page/dashlets/getImportantDocument?nodeType=1&idType='+id,
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
		url:'/share/page/dashlets/getImportantDocument?nodeType=1&idType='+id,
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
		url:'/share/page/dashlets/removeImportantDocument?nodeType=1&idType='+id+'&uuid='+uuid,
		type: "get",
		dataType: "html", 
		success:   function(data) {
			popupSuccess("Documento quitado de la lista importante");
			refreshImportantDocumet();
		}
	});
}

function createStage(idProject,idTypeProject){
	$.ajax({
		url:'/share/page/dashlets/addProjectStage.json',
		type: "get",
		dataType: "json", 
		data : {
			idProject	: idProject,
			idTypeProject	: idTypeProject 
		},
		success:   function(data) {
			if(data != null && data.status != null && data.status != ""){
				window.location.href = '/share/page/site/arauco/projectManagement?idProject='+idProject+'&nodeType=5&id='+data.status;
			}else{
				popupAlert("No existen etapas disponibles para este proyecto");
			}
		}
	});
}

function formatDate(text){
	var dateValues = text.split("/");
	return new Date(dateValues[2],dateValues[1]-1,dateValues[0], 16,5,4,567);
}

function deleteEngineeringProject(idProject){
	$.ajax({
		url:'/share/page/dashlets/deleteEngineeringProject',
		type: "get",
		dataType: "json", 
		data : {
			filter : idProject
		},
		success:   function(data) {
			if (data==1) {
				popupAlert('AVISO: Existen documentos dentro del proyecto');
			}else{
				getMallProject(id);
				popupSuccess('Se ha removido el proyecto');				
			}
		}
	});
}
