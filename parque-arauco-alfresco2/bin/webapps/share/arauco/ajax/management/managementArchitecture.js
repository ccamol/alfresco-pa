var id ="";
var idProject="";
var session="";
var mallData;
var mallIDSAP;
var varTicket="";
var prefix = "paList";

$(document).ready(function() {
	id = getUrlVars()["id"].replace(".","");
	idType = getUrlVars()["nodeType"];
	session = {idType:idType,
			idNode:id};
	mallData = detailsMall(id);
	mallIDSAP = mallData.idMallSap;
	getMallProject(id);	
	datePickerss();
	menuSearch(); 
	getSuc();
	getSucVirtual();
	getTicket();
	getImportantDocumet();
	$('#showRecord').click(function(){
		getSucVirtualHistory();
	});

	$('#showActive').click(function(){
		getSucVirtual();
	});

	$('#createSucVirtual').click(function(){
		createVirtualSuc();
	});

	$('#createProject').click(function(){
		createProject();
		getStatus();
		getProjectType();
		datePickerss();
//		getProjectOperator();
		getListOperator(2 , "getOperator");
	});

});

function getProjectOperator(){
	$.ajax({
		url:'/share/page/dashlets/getSPO',
		type: "get",
		dataType: "html", 
		data : {
			filter	: 1
		},
		success:   function(data) {
			$('#getOperator').html(data);
			$('.multiselect').multiselect({
				noneSelectedText: "Seleccionar un contratista...",
				checkAllText: "Marcar Todos",
				uncheckAllText: "Desmarcar Todos",
				selectedList: 2,
				selectedText: "# Seleccionados"
			}).multiselectfilter({
				label: "Filtro",
				placeholder: "Ingrese palabras"
			});
		}
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

function getSuc(){
	$.ajax({
		url:'/share/page/dashlets/getSuc',
		type: "get",
		dataType: "html",
		data: {
			filter : id,
			sucType : 0
		},
		success:   function(data) {
			$('#sucsMall').html(data);
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
function sucManagement(idSuc){
	window.location.href = '/share/page/site/arquitectura/managementVirtualSuc?id='+idSuc+'&nodeType=3';
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

/**
 * Obtiene la lista de proyectos del mall seleccionado
 * @param idMall
 */

function getMallProject(idMall){
	$.ajax({
		url:'/share/page/dashlets/getMallProjectArchitecture',
		type: "get",
		dataType: "html",
		data: {
			filter : idMall
		},
		success:   function(data) {
			$('#proyectMalls').html(data);
		}
	});
}

function addBuilder(builderProjectID){
	var operators = $("#getOperator").text();
	var foo = [];
	var operators;
	$('#getOperator :selected').each(function(i, selected){
		foo[i] = $(selected).text();
		if(i == 0){
			operators = $(selected).text();
		}else{
			operators= operators+","+$(selected).text();
		}
	});
	console.log(foo);
	console.log(operators);

	$.ajax({
		url:'/share/page/dashlets/addBuilder',
		type: "get",
		dataType: "html", 
		data : {
			operators : operators,
			builderProjectID : builderProjectID
		},
		success:   function(data) {
		}
	});
}
/**
 * Crea las etapas de un proyecto y redirige a la plantilla de etapas
 * @param idProject
 * @param idTypeProject
 */

function createStage(idProject,idTypeProject){
	$.ajax({
		url:'/share/page/dashlets/addProjectStage.json',
		type: "get",
		dataType: 'JSON', 
		data : {
			idProject	: idProject,
			idTypeProject	: idTypeProject, 
		},
		success:   function(data) {
			if(data != null && data.status != null && data.status != ""){
				window.location.href = '/share/page/site/arquitectura/projectManagement?idProject='+idProject+'&nodeType=6&id='+data.status;
			}else{
				popupAlert("No existen etapas disponibles para este proyecto");
			}
		}
	});
}

function sendToHistory(idEdit, sucCode, idMallSap, storeM2, terraseM2, mallId, warehousem2, escaparatem, description, sucStatus){
	bootbox.confirm("Está seguro que desea enviar al historial?", "Cancelar", "Aceptar", function(result) {
		if(result==true){
			$.ajax({
				url:'/share/page/dashlets/addVirtualSuc',
				type: "get",
				dataType: "html", 
				data : {
					idEdit : idEdit,
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
			removePopupConfirm();
		}
		removePopupConfirm();
	}).addClass("mdsuccess").attr('id','smallModal'); 
}

function vinculate(virtualSUC, realSUC){

	bootbox.confirm("Está seguro de vincular el SUC virtual con el SUC real? A partir de ese momento el SUC virtual dejará de existir.", "Cancelar", "Aceptar", function(result) {
		if(result==true){
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
						popupSuccess("SUC Vinculado con éxito");
						getSucVirtual();
					}else{
						popupAlert("SUC no pudo ser vinculado debido a un error!");
					}
				}
			});
			removePopupConfirm();
		}
		removePopupConfirm();
	}).addClass("mdsuccess").attr('id','smallModal'); 

	$('#smallModal').remove();
}

function linkSap(sucCode, sucName, description, storeM2){
	$('#vinculateSAP').remove();
	$.ajax({
		url:'/share/service/dashlets/vinculate?id=' + sucCode + "&mall=" + id + "&sucName=" + sucName + "&description=" + description + "&storeM2=" + storeM2,
		type: "get",
		dataType: "html",  
		async: false,  		
		success:   function(data) {
			popupBoxDialog(data);
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
	var idEdit = $("#idEdit").val();
	if(sucCode == null || sucCode == '' || sucCode == undefined){
		popupAlert('Debe ingresar el código de SUC');
	}else{
		$.ajax({
			url:'/share/page/dashlets/addVirtualSuc',
			type: "get",
			dataType: "html", 
			data : {
				idEdit : idEdit,
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
				popupSuccess('Suc virtual creado con éxito');
				getSucVirtual();
			}
		});
	}
}

function addArchitectureProject(){
	var projectName = $("#name").val();
	var finishDate = $("#finishDate").val();
	var startDate = $("#creationDate").val();
	var description = $("#description").val();
	var mallId = id;
	var operatorId = $("#getOperator option:selected").val();
	var projectTypeId = $("#getTypeProject option:selected").val();
	var projectStatusId = $("#getStatusProject option:selected").val();
	var nameManager = $('#nameManager option:selected').val();
	var nameCompany = $('#nameCompany option:selected').val();
//	var companyAwar = $('#companyAwar option:selected').val();
	var numberOC = $('#numberOC').val();
	var professionalName = $('#professionalName option:selected').val();
	var draftsmanName = $('#draftsmanName option:selected').val();

	if(projectName == null || projectName == '' || projectName == undefined){
		popupAlert('Debe ingresar el nombre del proyecto');
	}else if(projectTypeId == null || projectTypeId == '' || projectTypeId == undefined || projectTypeId == 0){
		popupAlert('Debe ingresar un tipo de proyecto');
	}else if(finishDate == null || finishDate == '' || finishDate == undefined){
		popupAlert('Debe ingresar una fecha de termino para el proyecto');
	}else if(projectStatusId == null || projectStatusId == '' || projectStatusId == undefined || projectStatusId == 'none'){
		popupAlert('Debe ingresar un estado');
	}else if(description == null || description == '' || description == undefined){
		popupAlert('Debe ingresar una descripci\u00f3n');
	}else{		
		$.ajax({
			url:'/share/page/dashlets/addProjectArchitecture',
			type: "get",
			dataType: "json", 
			async: false,
			data : {
				projectName : projectName,
				finishDate : finishDate,
				startDate : startDate,
				description : description,
				mallId : mallId,
				projectTypeId : projectTypeId,
				projectStatusId : projectStatusId,
				nameManager : nameManager,
				nameCompany : nameCompany,
//				companyAwar : companyAwar,
				numberOC : numberOC,
				professionalName : professionalName,
				draftsmanName : draftsmanName
			},
			success:   function(data) {
				builderProjectID = data.status;
				addBuilder(builderProjectID);
				getMallProject(mallId);
				popupSuccess('El proyecto ha sido creado correctamente');
			}
		});
	}
}

function createProject(){
	idProject ='';
	$.ajax({
		url:'/share/service/dashlets/createArchitectureProjectPopUp',
		type: "get",
		dataType: "html",  
		async: false,  		
		success:   function(data) {
			popupMedium(data);
			$("#creationDate").val(getCurrentDate());
			$("#creationDate").attr('disabled','true');
			getList("chiefArchitectNameParquearauco" , "nameManager");
			getList("nameCompanyAwarded" , "nameCompany");
//			getList("companyAwardedRut" , "companyAwar");
			getList("professionalNameResponsibleBy" , "professionalName");
			getList("draftsmanNameParquearauco" , "draftsmanName");
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


function editSuc(id,idSuc, idMallSap, storeM2, terraseM2, warehouseM2, escaparatem, description, status , sucType){
	$.ajax({
		url:'/share/service/dashlets/editSucPopUp',
		type: "get",
		dataType: "html",  
		async: false,  		
		success:   function(data) {
			popupMedium(data);
			$('#codeSuc').val(idSuc);
			$('#storeM2').val(storeM2);
			$('#warehousem2').val(warehouseM2);
			$('#idMallSap').val(idMallSap);
			$('#terraseM2').val(terraseM2);
			$('#escaparatem').val(escaparatem);
			$('#description').append(description);
			$('#idEdit').val(id);
			$('#sucType').val(sucType);
			$("#getStatusProject option[value="+status+"]").attr("selected",true);

		}
	});
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


function getImportantDocumet(){
	$.ajax({
		url:'/share/page/dashlets/getImportantDocument?nodeType=9&idType='+id,
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
		url:'/share/page/dashlets/getImportantDocument?nodeType=9&idType='+id,
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
		url:'/share/page/dashlets/removeImportantDocument?nodeType=9&idType='+id+'&uuid='+uuid,
		type: "get",
		dataType: "html", 
		success:   function(data) {
			popupSuccess("Documento quitado de la lista importante");
			refreshImportantDocumet();
		}
	});
}

function getSucDetails(idSuc){
	window.location.href = '/share/page/site/arquitectura/managementSuc?id='+idSuc+'&nodeType=3';
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

function searchSucSap(){
	var sucSearch = $("#sucMallSap").val();
	var statusFilterSuc = $('#statusFilterSuc option:selected').val();
	$.ajax({
		url:'/share/page/dashlets/getSuc',
		type: "get",
		dataType: "html",
		data: {
			filter : id,
			sucType : 0,
			sucSearch : sucSearch,
			statusFilterSuc : statusFilterSuc
		},
		success:   function(data) {
			$('#sucsMall').html(data);
			$('#statusFilterSuc').val('none');
		}
	});
}

function vinculateProject(id){
	$.ajax({
		url:'/share/page/dashlets/getGroupPopup',
		type: "get",
		dataType: "html",
		data: {
			idProject : id
		},
		success:   function(data) {
			securityUsers(id);
			securitySelected(id);
			popupMedium(data);
		}
	});
}

function securityUsers(id){
	$.ajax({
		url:'/share/page/dashlets/getAllGroup',
		type: "get",
		dataType: "html",
		data: {
			idProject : id
		},
		success:   function(data) {
			$("#securityUsers").html(data);
		}
	});
}

function securitySelected(id){
	$.ajax({
		url:'/share/page/dashlets/getGroupSelected',
		type: "get",
		dataType: "html",
		data: {
			idProject : id
		},
		success:   function(data) {
			$("#securitySelected").html(data);
		}
	});
}

function addGroup(group , idproject){
	$.ajax({
		url:'/share/page/dashlets/addGroup',
		type: "get",
		dataType: "html",
		data: {
			group : group,
			idproject : idproject
		},
		success:   function(data) {
			securityUsers(idproject);
			securitySelected(idproject);
			popupSuccessTender("Proyecto compartido con el grupo");
			
		}
	});
}

function deleteGroup(idGroup , idproject){
	$.ajax({
		url:'/share/page/dashlets/deleteGroup',
		type: "get",
		dataType: "html",
		data: {
			idproject : idGroup
		},
		success:   function(data) {
			securityUsers(idproject);
			securitySelected(idproject);
			popupSuccessTender("Proyecto desvinculado con el grupo");
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

function editProjectArchitecture(id , name , finishdate , createdDate , idMall , idProjectType , idStatus , description , chiefArchitect , companyAwarded , professionalName , draftsmanName , numberOC , companyAwardedRut){
	$.ajax({
		url:'/share/page/dashlets/editArchitectureProjectPopUp',
		type: "get",
		dataType: "html", 
		data: {
			filter : id
		},
		success:   function(data) {
			popupMedium(data);
			getStatus(idStatus);
			$('#idprojectArc').val(id);
			$('#name').val(name);
			$('#creationDate').val(createdDate);
			$('#finishDate').val(finishdate);
			$('#numberOC').val(numberOC);
			$('#description').val(description);
			datePickerss();
			getProjectType(idProjectType);
			getListSelect("chiefArchitectNameParquearauco" , "nameManager" , chiefArchitect);
			getListSelect("nameCompanyAwarded" , "nameCompany" , companyAwarded);
//			getListSelect("companyAwardedRut" , "companyAwar" , companyAwardedRut);
			getListSelect("professionalNameResponsibleBy" , "professionalName" , professionalName);
			getListSelect("draftsmanNameParquearauco" , "draftsmanName" , draftsmanName);
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


function editArchitectureProject(){
	var idprojectArc = $("#idprojectArc").val();
	var projectName = $("#name").val();
	var finishDate = $("#finishDate").val();
	var startDate = $("#creationDate").val();
	var description = $("#description").val();
	var mallId = id;
	var projectTypeId = $("#getTypeProject option:selected").val();
	var projectStatusId = $("#getStatusProject option:selected").val();
	var nameManager = $('#nameManager option:selected').val();
	var nameCompany = $('#nameCompany option:selected').val();
//	var companyAwar = $('#companyAwar option:selected').val();
	var numberOC = $('#numberOC').val();
	var professionalName = $('#professionalName option:selected').val();
	var draftsmanName = $('#draftsmanName option:selected').val();

	if(projectName == null || projectName == '' || projectName == undefined){
		popupAlert('Debe ingresar el nombre del proyecto');
	}else if(projectTypeId == null || projectTypeId == '' || projectTypeId == undefined || projectTypeId == 0){
		popupAlert('Debe ingresar un tipo de proyecto');
	}else if(finishDate == null || finishDate == '' || finishDate == undefined){
		popupAlert('Debe ingresar una fecha de termino para el proyecto');
	}else if(projectStatusId == null || projectStatusId == '' || projectStatusId == undefined || projectStatusId == 'none'){
		popupAlert('Debe ingresar un estado');
	}else if(description == null || description == '' || description == undefined){
		popupAlert('Debe ingresar una descripci\u00f3n');
	}else{	
		$.ajax({
			url:'/share/page/dashlets/editProjectArchitecture',
			type: "get",
			dataType: "html", 
			async: false,
			data : {
				idprojectArc : idprojectArc,
				projectName : projectName,
				finishDate : finishDate,
				startDate : startDate,
				description : description,
				mallId : mallId,
				projectTypeId : projectTypeId,
				projectStatusId : projectStatusId,
				nameManager : nameManager,
				nameCompany : nameCompany,
//				companyAwar : companyAwar,
				numberOC : numberOC,
				professionalName : professionalName,
				draftsmanName : draftsmanName

			},
			success:   function(data) {
				getMallProject(mallId);
				popupSuccess('El proyecto editado correctamente');
			}
		});
	}
}

function editSucsap(){
	var sucCode = $("#codeSuc").val();
	var idMallSap = $("#idMallSap").val();
	var storeM2 = $("#storeM2").val();
	var terraseM2 = $("#terraseM2").val();
	var mallId = id;
	var warehousem2 = $("#warehousem2").val();
	var escaparatem = $("#escaparatem").val();
	var description = $("#description").val();
	var sucType = $("#sucType").val();
	var sucStatus = $("#getStatusProject option:selected").val();
	var idEdit = $("#idEdit").val();
	if(sucCode == null || sucCode == '' || sucCode == undefined){
		popupAlert('Debe ingresar el código de SUC');
	}else{
		$.ajax({
			url:'/share/page/dashlets/addVirtualSuc',
			type: "get",
			dataType: "html", 
			data : {
				idEdit : idEdit,
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
				popupSuccess('Registro modificado con éxito');
				$('#sucsMall').html('');
				getSuc();
			}
		});
	}
}

function searchProject(){
	var nameProject = $("#nameProject").val();
	var statusProject = $('#statusFilterProject option:selected').val();
	var dateFrom =  $("#txDateFromProject").val().split("/").reverse().join("-");
	var dateTo =  $("#txDateToProject").val().split("/").reverse().join("-");

	$.ajax({
		url:'/share/page/dashlets/searchMallProjectArchitecture',
		type: "get",
		dataType: "html",
		data: {
			filter : id,
			nameProject : nameProject,
			statusProject : statusProject,
			dateFrom : dateFrom,
			dateTo : dateTo
		},
		success:   function(data) {
			$('#proyectMalls').html(data);
			$('#statusFilterProject').val('none');
		}
	});
}

function undoHistory(idHistory){
	$.ajax({
		url:'/share/page/dashlets/undoSucHistory',
		type: "get",
		dataType: "html",
		data: {
			idHistory : idHistory
		},
		success:   function(data) {
			getSucVirtualHistory();
			popupSuccess('El Suc virtual ha vuelto a ser vigente');
		}
	});
}

function deleteProjectArchitecture(idProject){
	$.ajax({
		url:'/share/page/dashlets/deleteProjectArchitecture',
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
			var total=data.length;
			if(total>0){
				for( var i=0;i<total;i++){
					if(data[i].description!='' && data[i].description!=null && data[i].description!=undefined){
						$("#"+idHtml).append('<option value="'+data[i].idList+'">'+data[i].description+'</option>');
					}
				}
			}
			$('.multiselect').multiselect({
				noneSelectedText: "Seleccionar un contratista...",
				checkAllText: "Marcar Todos",
				uncheckAllText: "Desmarcar Todos",
				selectedList: 2,
				selectedText: "# Seleccionados"
			}).multiselectfilter({
				label: "Filtro",
				placeholder: "Ingrese palabras"
			});
		},
		error:function (xhr, ajaxOptions, thrownError){
			popupAlert('Se produjo un problema al cargar la lista');
		}  
	});
}