var id ="";
var idProject="";
var session="";
var varTicket="";
var prefix = "paList";

$(document).ready(function() {

	id = getUrlVars()["id"].replace(".","");
	idType = getUrlVars()["nodeType"];

	session = {idType:idType,
			idNode:id};
	datePickerss();
	menuSearch(); 
	getSucProjects(id);
	getContracts(id);
	getImportantDocumet();
	getTicket();

	$('#createProject').click(function(){
		datePickerss();
		createProject();
		getStatus();
		getProjectType();
		getListOperator(1 , "getOperator");
		datePickerss();
	});

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
function getContracts(idSuc){

	var currentDate = new Date();
	var currentMonth=currentDate.getMonth() +1;
	if (currentMonth < 10) { currentMonth = '0' + currentMonth; }
	var currentDay=currentDate.getDate();
	if (currentDay < 10) { currentDay = '0' + currentDay; }
	currentDate = currentDate.getFullYear() + "" + currentMonth + "" + currentDay;

	$.ajax({
		url:'/share/page/dashlets/getContracts',
		type: "get",
		dataType: "html", 
		async: false, 
		data: {
			filter : idSuc,
			currentDate : currentDate
		},
		success:   function(data) {


			$("#contracts").append('<table cellpadding="0" cellspacing="0" border="0" class="dataTableClass table table-striped table-bordered" id="contractsTable">'+
			'<thead><tr><th>Operador</th><th>Fecha Inicio</th><th>Fecha Termino</th><th>Contrato Vigente</th></tr></thead><tbody id="getContractData">');
			$('#getContractData').append(data);
			$("#contracts").append('</tbody></table>');

			$('#contractsTable').dataTable();
		}
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

function getSucProjects(idSuc){
	$.ajax({
		url:'/share/page/dashlets/getSucProject',
		type: "get",
		dataType: "html",
		data: {
			filter : idSuc
		},


		success:   function(data) {

			$('#sucProjects').html(data);
		}
	});
}

function getSuc(){
	$.ajax({
		url:'/share/page/dashlets/getSuc',
		type: "get",
		dataType: "html",
		data: {
			filter : id
		},
		success:   function(data) {
			$('#sucsMall').html(data);
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

function editSuc(idSuc, idMallSap, storeM2, terraseM2, warehouseM2, escaparatem, description, status){
	$.ajax({
		url:'/share/service/dashlets/editSucPopUp',
		type: "get",
		dataType: "html",  
		async: false,
		success:   function(data) {
			popupDefault(data);
			$('#codeSuc').val(idSuc);
			$('#storeM2').val(storeM2);
			$('#warehousem2').val(warehouseM2);
			$('#idMallSap').val(idMallSap);
			$('#terraseM2').val(terraseM2);
			$('#escaparatem').val(escaparatem);
			$('#description').append(description);
			if(status == 0){
				$("#inactive").attr('checked', 'checked');
			}
			if(status == 1){
				$("#active").attr('checked', 'checked');
			}
			//disableElements($("#sucData").children());
		}
	});
}

function disableElements(divContainer) {
	for (var i = 0; i < divContainer.length; i++) {
		divContainer[i].disabled = true;

		disableElements(divContainer[i].children);
	}
}

function getProjectType(idProject){
	$.ajax({
		url:'/share/page/dashlets/getProjectType',
		type: "get",
		dataType: "html", 
		success:   function(data) {
			if(idProject == null && idProject == undefined && idProject==''){
				$('#getTypeProject').html(data);
			}else{
				$('#getTypeProject').html(data);
				$('#getTypeProject  option[value='+idProject+']').attr('selected' , true);
			}

		}
	});
}

function getSucProjectOperator(operatorId){
	$.ajax({
		url:'/share/page/dashlets/getSPO',
		type: "get",
		dataType: "html", 
		data : {
			filter	: 0
		},
		success:   function(data) {
			if(operatorId == null && operatorId == undefined && operatorId == ''){
				$('#getOperator').html(data);
			}else{
				$('#getOperator').html(data);
				$('#getOperator  option[value='+operatorId+']').attr('selected' , true);
			}
		}
	});
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

function createProject(){
	idProject ='';
	$.ajax({
		url:'/share/service/dashlets/createSucProjectPopUp',
		type: "get",
		dataType: "html",  
		async: false,  		

		success:   function(data) {
			popupMedium(data);
			$("#creationDate").val(getCurrentDate());
			$("#creationDate").attr('disabled','true');
			getList("chiefArchitectNameParquearauco" , "nameManager");
			getList("professionalNameResponsibleBy" , "professionalName");
			getList("draftsmanNameParquearauco" , "draftsmanName");
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
			idTypeProject	: idTypeProject, 
		},
		success:   function(data) {
			if(data != null && data.status != null && data.status != ""){
				window.location.href = '/share/page/site/arquitectura/projectManagement?idProject='+idProject+'&nodeType=7&id='+data.status;
			}else{
				popupAlert("No existen etapas disponibles para este proyecto");
			}
		}
	});
}

function deleteProject(idProject){
	bootbox.confirm("¿Está seguro que desea eliminar el proyecto?", "Cancelar", "Aceptar", function(result) {
		if(result==true){
			$.ajax({
				url:'/share/page/dashlets/deleteSucProject',
				type: "get",
				dataType: "html", 
				data : {
					filter: idProject
				},
				success:   function(data) {
					popupAlert(data);
					getSucProjects(id);
				}
			});
		}
	}).addClass("mdsuccess").attr('id','smallModal'); 
}

function addSucProject(){
	var sucProjectName = $("#name").val();
	var finishDate = $("#finishDate").val();
	var startDate = $("#creationDate").val();
	var description = $("#description").val();
	var sucId = id;
	var operatorId = $("#getOperator option:selected").val();
	var projectTypeId = $("#getTypeProject option:selected").val();
	var projectStatusId = $("#getStatusProject option:selected").val();
	var nameManager = $('#nameManager option:selected').val();
	var professionalName = $('#professionalName option:selected').val();
	var draftsmanName = $('#draftsmanName option:selected').val();
	if(sucProjectName == null || sucProjectName == '' || sucProjectName == undefined){
		popupAlert('Debe ingresar el nombre del proyecto');
	}else if(operatorId == null || operatorId == '' || operatorId == undefined || operatorId == 0){
		popupAlert('Debe seleccionar un operador');	
	}else if(projectTypeId == null || projectTypeId == '' || projectTypeId == undefined || projectTypeId == 0){
		popupAlert('Debe ingresar un tipo de proyecto');	
	}else if(finishDate == null || finishDate == '' || finishDate == undefined){
		popupAlert('Debe ingresar una fecha de termino para el proyecto');
	}else if(projectStatusId == null || projectStatusId == '' || projectStatusId == undefined || projectStatusId == 'none'){
		popupAlert('Debe ingresar un estado al proyecto');
	}else if(description == null || description == '' || description == undefined){
		popupAlert('Debe ingresar una descripci\u00f3n');
	}else{
		$.ajax({
			url:'/share/page/dashlets/addProjectSuc',
			type: "get",
			dataType: "html", 
			data : {
				sucProjectName : sucProjectName,
				finishDate : finishDate,
				startDate : startDate,
				description : description,
				sucId : sucId,
				operatorId : operatorId,
				projectTypeId : projectTypeId,
				projectStatusId : projectStatusId,
				nameManager : nameManager,
				professionalName : professionalName,
				draftsmanName : draftsmanName
			},
			success:   function(data) {
				getSucProjects(id);
				popupSuccess('Proyecto creado con éxito');
			}
		});
	}
}

function removeImportantDocument(uuid){
	$.ajax({
		url:'/share/page/dashlets/removeImportantDocument?nodeType=3&idType='+id+'&uuid='+uuid,
		type: "get",
		dataType: "html", 
		success:   function(data) {
			popupSuccess("Documento quitado de la lista importante");
			refreshImportantDocumet();
		}
	});
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

function SearchSucProjects(){
	var projectSuc = $("#projectSuc").val();
	var statusProjectSuc = $('#statusProjectSuc option:selected').val();
	$.ajax({
		url:'/share/page/dashlets/getSucProject',
		type: "get",
		dataType: "html",
		data: {
			filter : id,
			projectSuc : projectSuc,
			statusFilterProject : statusProjectSuc
		},

		success:   function(data) {
			$('#sucProjects').html(data);
			$('#statusProjectSuc').val('0');
		}
	});
}

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
			}
		},
		error:function (xhr, ajaxOptions, thrownError){
			popupAlert('Se produjo un problema al cargar la lista');
		}  
	});
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

function editSucProjectPopup(id,name,finishdate,createdDate,description,idProjectType,chiefArchitect,professionalName,draftsmanName,idStatus,operatorId){
	$.ajax({
		url:'/share/page/dashlets/editSucProjectPopUp',
		type: "get",
		dataType: "html", 
		data: {
			filter : id
		},
		success:   function(data) {
			popupMedium(data);
			getStatus(idStatus);
			$('#idSucProject').val(id);
			$('#name').val(name);
			$('#creationDate').val(createdDate);
			$('#finishDate').val(finishdate);
			$('#description').val(description);
			datePickerss();
			getProjectType(idProjectType);
			getListOperatorSelect(1 , "getOperator" , operatorId);
			getListSelect("chiefArchitectNameParquearauco" , "nameManager" , chiefArchitect);
			getListSelect("professionalNameResponsibleBy" , "professionalName" , professionalName);
			getListSelect("draftsmanNameParquearauco" , "draftsmanName" , draftsmanName);

//			if ($('#getTypeProject').prop("disabled") == false) {
//			popupSuccessTender('AVISO: Puede modificar el tipo de proyecto');
//			}else{
//			popupAlert('AVISO: No Puede modificar el tipo de proyecto');
//			}
		}
	});
}

function getListSelect(typeList, idHtml , idSelected){
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
						if(data[i].idList == idSelected){
							$('#'+idHtml + ' option[value='+idSelected+']').attr('selected' , true);
						}
					}
				}
			}
		},
		error:function (xhr, ajaxOptions, thrownError){
			popupAlert('Se produjo un problema al cargar la lista');
		}  
	});
}

function editSucProject(){
	var idSucProject = $("#idSucProject").val();
	var sucProjectName = $("#name").val();
	var finishDate = $("#finishDate").val();
	var startDate = $("#creationDate").val();
	var description = $("#description").val();
	var sucId = id;
	var operatorId = $("#getOperator option:selected").val();
	var projectTypeId = $("#getTypeProject option:selected").val();
	var projectStatusId = $("#getStatusProject option:selected").val();
	var nameManager = $('#nameManager option:selected').val();
	var professionalName = $('#professionalName option:selected').val();
	var draftsmanName = $('#draftsmanName option:selected').val();
	if(sucProjectName == null || sucProjectName == '' || sucProjectName == undefined){
		popupAlert('Debe ingresar el nombre del proyecto');
	}else if(operatorId == null || operatorId == '' || operatorId == undefined || operatorId == 0){
		popupAlert('Debe seleccionar un operador');	
	}else if(projectTypeId == null || projectTypeId == '' || projectTypeId == undefined || projectTypeId == 0){
		popupAlert('Debe ingresar un tipo de proyecto');	
	}else if(finishDate == null || finishDate == '' || finishDate == undefined){
		popupAlert('Debe ingresar una fecha de termino para el proyecto');
	}else if(projectStatusId == null || projectStatusId == '' || projectStatusId == undefined || projectStatusId == 'none'){
		popupAlert('Debe ingresar un estado al proyecto');
	}else if(description == null || description == '' || description == undefined){
		popupAlert('Debe ingresar una descripci\u00f3n');
	}else{
		$.ajax({
			url:'/share/page/dashlets/editProjectSuc',
			type: "get",
			dataType: "html", 
			data : {
				idSucProject : idSucProject,
				sucProjectName : sucProjectName,
				finishDate : finishDate,
				startDate : startDate,
				description : description,
				sucId : sucId,
				operatorId : operatorId,
				projectTypeId : projectTypeId,
				projectStatusId : projectStatusId,
				nameManager : nameManager,
				professionalName : professionalName,
				draftsmanName : draftsmanName
			},
			success:   function(data) {
				getSucProjects(id);
				popupSuccess('Proyecto editado con éxito');
			}
		});
	}
}


function getListOperator(typeOperator, idHtml){
	$.ajax({
		url: '/alfresco/service/arauco/getDataOperator?alf_ticket='+varTicket,
		type: "POST",
		dataType: "json", 
		async: false,
		data: { 
			typeOperator : typeOperator
		} ,
		success:function(data){
			$("#"+idHtml).html('');
			$("#"+idHtml).append('<option value="">Seleccionar</option>');
			var total=data.length;
			if(total>0){
				for( var i=0;i<total;i++){
					if(data[i].description!='' && data[i].description!=null && data[i].description!=undefined){
						$("#"+idHtml).append('<option value="'+data[i].idList+'">'+data[i].description+ i + '</option>');
					}
				}
			}
		},
		error:function (xhr, ajaxOptions, thrownError){
			popupAlert('Se produjo un problema al cargar la lista');
		}  
	});
}

function getListOperatorSelect(typeOperator, idHtml , idSelected){
	$.ajax({
		url: '/alfresco/service/arauco/getDataOperator?alf_ticket='+varTicket,
		type: "POST",
		dataType: "json", 
		async: false,
		data: { 
			typeOperator : typeOperator
		} ,
		success:function(data){
			$("#"+idHtml).html('');
			$("#"+idHtml).append('<option value="">Seleccionar</option>');
			var total=data.length;
			if(total>0){
				for( var i=0;i<total;i++){
					if(data[i].description!='' && data[i].description!=null && data[i].description!=undefined){
						$("#"+idHtml).append('<option value="'+data[i].idList+'">'+data[i].description+'</option>');
						if(data[i].idList == idSelected){
							$('#'+idHtml + ' option[value='+idSelected+']').attr('selected' , true);
						}
					}
				}
			}
		},
		error:function (xhr, ajaxOptions, thrownError){
			popupAlert('Se produjo un problema al cargar la lista');
		}  
	});
}

function removeProjectSuc(idProjectSuc){
	$.ajax({
		url:'/share/page/dashlets/deleteSucProject',
		type: "get",
		dataType: "json", 
		data : {
			filter : idProjectSuc
		},
		success:   function(data) {
			if (data==1) {
				popupAlert('AVISO: Existen documentos dentro del proyecto');
			}else{
				getSucProjects(id);
				popupSuccess('Se ha removido el proyecto');				
			}
		}
	});
}
