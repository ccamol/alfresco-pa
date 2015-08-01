var	idArea=null;
var NameArea;
var organizationalAreaId = null;
var idTenderManaging = null;
var tenderId = null;
$(document).ready(function() {	
	getTender();
	$('#createTender').click(function(){
		createTenderPopUp();
	});

});

function getTender(){
	$.ajax({
		url:'/share/page/dashlets/searchTender',
		type: "get",
		dataType: "html",  
		async: true,  		
		data : {
		},
		success:   function(data) {
			$('#listTendering').html(data);
			$('#searchTender').dataTable();
		}
	});
}


function createTenderPopUp(){

	$.ajax({
		url:'/share/page/dashlets/createTenderPopUp',
		type: "get",
		dataType: "html",  
		async: true,  		
		success:   function(data) {
			popupMedium(data);
		}
	});
}
function showTender(id){
	$.ajax({
		url:'/share/page/dashlets/editTenderPopUp',
		type: "get",
		dataType: "html",  
		async: false,
		data : {
			filter : id
		},
		success:   function(data) {
			popupMedium(data);
		}
	});

	getStageTenderById(id);
	datePickers();

	var idArea = $(':hidden#idArea').val();
	var idProject = $(':hidden#idProject').val();

	console.log("idArea: "+idArea);
	console.log("idProject: "+idProject);

	getAreaEdit(idArea, idProject);
}

function getAreaEdit(idArea, idProject){
	$.ajax({
		url:'/share/page/dashlets/getArea',
		type: "get",
		dataType: "html",  
		async: false,  		
		data: {
			idArea : idArea
		},
		success:   function(data) {
			$('#area').html(data);

			getProjectAreaEdit(idArea, idProject);
		}
	});
}

function getProjectAreaEdit(idArea, idProject){

	$.ajax({
		url:'/share/service/dashlets/getProjectArea?filter='+idArea+'&idProject='+idProject,
		type: "get",
		dataType: "html",  
		async: true,  
		data : {
		},
		success:   function(data) {
			$('#projectName').html(data);
		}
	});
}


function biddingHandle(idTender){
	var stagesTenderObject = getStagesTenderDetails(idTender);
	
	switch(parseInt(stagesTenderObject.stageType)) {
	case 1:
		window.location.href = '/share/page/site/licitaciones/tenderStageInvite?id='+stagesTenderObject.stageType+'&idTender='+idTender+'&nodeType=8';
		break;
	case 2:
		window.location.href = '/share/page/site/licitaciones/handingOverDocumentation?id='+stagesTenderObject.stageType+'&idTender='+idTender+'&nodeType=8';
		break;
	case 3:
		window.location.href = '/share/page/site/licitaciones/questionsAndAnswers?id='+stagesTenderObject.stageType+'&idTender='+idTender+'&nodeType=8';
		break;
	case 4:
		window.location.href = '/share/page/site/licitaciones/offersDelivery?id='+stagesTenderObject.stageType+'&idTender='+idTender+'&nodeType=8';
		break;
	case 5:
		window.location.href = '/share/page/site/licitaciones/offersAnalysis?id='+stagesTenderObject.stageType+'&idTender='+idTender+'&nodeType=8';
		break;
	case 6:
		window.location.href = '/share/page/site/licitaciones/awarding?id='+stagesTenderObject.stageType+'&idTender='+idTender+'&nodeType=8';
		break;
	default:
	}
	
//	window.location.href = '/share/page/site/licitaciones/tenderStageInvite?idTender='+idTender+'&id='+stagesTenderObject.stageType+'&nodeType=8';
}

function getStagesTenderDetails(idTender){
	var tenderStagesData = null;
	$.ajax({
		url:'/share/page/dashlets/getStageTenderDetailsActive',
		type: "get",
		dataType: "json",
		async : false,
		data: {
			idTender : idTender

		},
		success:   function(data) {
			tenderStagesData = data;

		}
	});

	return tenderStagesData;

}
function datePickers(){
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


function showCalendar(id){
	$.ajax({
		url:'/share/page/dashlets/calendarPopUp',
		type: "get",
		dataType: "html",  
		async: true,  		
		data : {
		},
		success:   function(data) {
			popupDefault(data);
			calendar(id);
		}
	});
}

function calendar(id){
	$.ajax({
		url:'/share/page/dashlets/searchTenderCalenadar',
		type: "get",
		dataType: "html",  
		async: true,  		
		data : {
			calendar : id
		},
		success:   function(data) {
			$('#listStagesCalendar').html(data);
			$('#stagesCalendarApplicant').dataTable();

		}
	});
}

function getStageTenderById(idTender){

	$.ajax({
		url:'/share/page/dashlets/getStageTenderById',
		type: "get",
		dataType: "html",  
		async: false,
		data : {
			filter : idTender
		},

		success:   function(data) {
			$('#calendar').html(data);

		}
	});
}


function addTender(){
	var area = $("#area").val();
	var projectName = $("#projectName").val();
	var TenderName = $("#TenderName").val();
	var initDate = $("#initDate").val();
	var FinishDate = $("#FinishDate").val();
	var result = validateTenderForm(area, projectName, TenderName, initDate, FinishDate);

	var AInit = $("#1Init").val();
	var Afinish = $("#1finish").val();

	var BInit = $("#2Init").val();
	var Bfinish = $("#2finish").val();

	var CInit = $("#3Init").val();
	var Cfinish = $("#3finish").val();


	var DInit = $("#4Init").val();
	var Dfinish = $("#4finish").val();

	var EInit = $("#5Init").val();
	var Efinish = $("#5finish").val();

	var FInit = $("#6Init").val();
	var Ffinish = $("#6finish").val();


	if(result != false){
		var validForm = validateTenderStageForm(AInit, Afinish, BInit, Bfinish, CInit, Cfinish, DInit, Dfinish, EInit, Efinish, FInit, Ffinish);
		if(validForm != false){
			$.ajax({
				url:'/share/page/dashlets/addTender',
				type: "get",
				dataType: "json",  
				async: false,  		
				data : {
					area : area,
					projectName : projectName,
					TenderName : TenderName,
					initDate : initDate,
					FinishDate : FinishDate
				},
				success:   function(data) {
					if(data.status > -1){
						addStageTender(data.status , data.projectTypeId, AInit, Afinish, BInit, Bfinish, CInit, Cfinish, DInit, Dfinish, EInit, Efinish, FInit, Ffinish);
					}
				}
			});
			popupSuccess("Licitación creada con éxito");
		}
	}
}

function addStageTender(id , projectTypeId, AInit, Afinish, BInit, Bfinish, CInit, Cfinish, DInit, Dfinish, EInit, Efinish, FInit, Ffinish){

	var IDone = $("#1Init").attr("id");
	var IDtwo = $("#2Init").attr("id");
	var IDthree = $("#3Init").attr("id");
	var IDfour = $("#4Init").attr("id");
	var IDfive = $("#5Init").attr("id");
	var IDsix = $("#6Init").attr("id");

	$.ajax({
		url:'/share/page/dashlets/addStageTender',
		type: "get",
		dataType: "html",  
		async: false,  		
		data : {
			idTender : id,
			AInit : AInit,
			Afinish : Afinish,
			IDone : IDone,
			BInit : BInit,
			Bfinish : Bfinish,
			IDtwo : IDtwo,
			CInit : CInit,
			Cfinish : Cfinish,
			IDthree : IDthree,
			DInit : DInit,
			Dfinish : Dfinish,
			IDfour : IDfour,
			EInit : EInit,
			Efinish : Efinish,
			IDfive : IDfive,
			FInit : FInit,
			Ffinish : Ffinish,
			IDsix : IDsix,
			projectTypeId : projectTypeId
		},
		success:   function(data) {
			getTender();
		}
	});
}

function closeTender(idTender){
	bootbox.confirm("¿Est\u00e1 seguro que desea cerrar la licitaci\u00f3n?", "Cancelar", "Aceptar", function(result) {
		if(result==true){
			$.ajax({
				url:'/share/page/dashlets/closeTender',
				type: "get",
				dataType: "html",
				data: {
					idTender : idTender
				},
				success:   function(data) {
					getTender();
					popupSuccess("Licitación cerrada exitosamente");
				}
			});
		}
	}).addClass("mdsuccess").attr('id','smallModal'); 
}

function editTender(idEdit){

	var area = $("#area").val();
	var projectName = $("#projectName").val();
	var TenderName = $("#TenderName").val();
	var initDate = $("#initDate").val();
	var FinishDate = $("#FinishDate").val();
	var tenderStatus = $("#tenderStatus").val();

	var AInit = $("#1Init").val();
	var Afinish = $("#1finish").val();

	var BInit = $("#2Init").val();
	var Bfinish = $("#2finish").val();

	var CInit = $("#3Init").val();
	var Cfinish = $("#3finish").val();

	var DInit = $("#4Init").val();
	var Dfinish = $("#4finish").val();

	var EInit = $("#5Init").val();
	var Efinish = $("#5finish").val();

	var FInit = $("#6Init").val();
	var Ffinish = $("#6finish").val();

	var result = validateTenderForm(area, projectName, TenderName, initDate, FinishDate);

	if(result != false){
		var validForm = validateTenderStageForm(AInit, Afinish, BInit, Bfinish, CInit, Cfinish, DInit, Dfinish, EInit, Efinish, FInit, Ffinish);
		if(validForm != false){
			$.ajax({
				url:'/share/page/dashlets/editTender',
				type: "get",
				dataType: "json",  
				async: false,  		
				data : {
					idEdit : idEdit,
					area : area,
					projectName : projectName,
					TenderName : TenderName,
					initDate : initDate,
					FinishDate : FinishDate,
					tenderStatus : tenderStatus
				},
				success:   function(data) {
					if(data.status > -1){
						editStageTender(data.idTender , data.projectTypeId, AInit, Afinish, BInit, Bfinish, CInit, Cfinish, DInit, Dfinish, EInit, Efinish, FInit, Ffinish);

					}
				}
			});
			popupSuccess("Licitación modificada con éxito");
		}
	}
}



////////////////EDIT STAGE TENDER
function editStageTender(id , projectTypeId, AInit, Afinish, BInit, Bfinish, CInit, Cfinish, DInit, Dfinish, EInit, Efinish, FInit, Ffinish){

	var IDone = $("#1Init").attr("id");
	var Stageone = $("#1Stage").val();

	var IDtwo = $("#2Init").attr("id");
	var Stagetwo = $("#2Stage").val();

	var IDthree = $("#3Init").attr("id");
	var Stagethree = $("#3Stage").val();

	var IDfour = $("#4Init").attr("id");
	var Stagefour = $("#4Stage").val();

	var IDfive = $("#5Init").attr("id");
	var Stagefive = $("#5Stage").val();

	var IDsix = $("#6Init").attr("id");
	var Stagesix = $("#6Stage").val();

	$.ajax({
		url:'/share/page/dashlets/editStageTender',
		type: "get",
		dataType: "html",  
		async: false,  		
		data : {
			idTender : id,
			AInit : AInit,
			Afinish : Afinish,
			IDone : IDone,
			Stageone : Stageone,
			BInit : BInit,
			Bfinish : Bfinish,
			IDtwo : IDtwo,
			Stagetwo : Stagetwo,
			CInit : CInit,
			Cfinish : Cfinish,
			IDthree : IDthree,
			Stagethree : Stagethree,
			DInit : DInit,
			Dfinish : Dfinish,
			IDfour : IDfour,
			Stagefour : Stagefour,
			EInit : EInit,
			Efinish : Efinish,
			IDfive : IDfive,
			Stagefive : Stagefive,
			FInit : FInit,
			Ffinish : Ffinish,
			IDsix : IDsix,
			Stagesix : Stagesix,
			projectTypeId : projectTypeId
		},
		success:   function(data) {
			getTender();
		}
	});
}



function showManagingParameters(idTenderMana){
	idTenderManaging = idTenderMana;
	$.ajax({
		url:'/share/page/dashlets/managingParameters',
		type: "get",
		dataType: "html",  
		async: false,

		success:   function(data) {
			popupMedium(data);
		}
	});
}

function validateTenderStageForm(start1, end1, start2, end2, start3, end3, start4, end4, start5, end5, start6, end6){

	var validDate = null;
	var status=false;

	if(start1 == "" || start1 == null || end1 == "" || end1 == null){
		popupAlert("Debe ingresar una fecha de inicio y termino para la etapa de inivitación");
	}else if(start1 !== null && start1 !== "" && end1 !== null && end1 !== ""){
		validDate = validateDate(start1, end1);
		if(validDate == false){
			popupAlert("La fecha de inicio no puede ser superior a la fecha de termino de la etapa de invitación");
		}else if(start2 == "" || start2 == null || end2 == "" || end2 == null){
			popupAlert("Debe ingresar una fecha de inicio y termino para la etapa de entrega de documentación");
		}else if(start2 !== null && start2 !== "" && end2 !== null && end2 !== ""){
			validDate = validateDate(start2, end2);
			if(validDate == false){
				popupAlert("La fecha de inicio no puede ser superior a la fecha de termino de la etapa de entrega de documentación");
			}else if(start3 == "" || start3 == null || end3 == "" || end3 == null){
				popupAlert("Debe ingresar una fecha de inicio y termino para la etapa de preguntas y respuestas");
			}else if(start3 !== null && start3 !== "" && end3 !== null && end3 !== ""){
				validDate = validateDate(start3, end3);
				if(validDate == false){
					popupAlert("La fecha de inicio no puede ser superior a la fecha de termino de la etapa de preguntas y respuestas");
				}else if(start4 == "" || start4 == null || end4 == "" || end4 == null){
					popupAlert("Debe ingresar una fecha de inicio y termino para la etapa de entrega de ofertas");
				}else if(start4 !== null && start4 !== "" && end4 !== null && end4 !== ""){
					validDate = validateDate(start4, end4);
					if(validDate == false){
						popupAlert("La fecha de inicio no puede ser superior a la fecha de termino de la etapa de entrega de ofertas");
					}else if(start5 == "" || start5 == null || end5 == "" || end5 == null){
						popupAlert("Debe ingresar una fecha de inicio y termino para la etapa de análisis de ofertas");
					}else if(start5 !== null && start5 !== "" && end5 !== null && end5 !== ""){
						validDate = validateDate(start5, end5);
						if(validDate == false){
							popupAlert("La fecha de inicio no puede ser superior a la fecha de termino de la etapa de análisis de ofertas");
						}else if(start6 == "" || start6 == null || end6 == "" || end6 == null){
							popupAlert("Debe ingresar una fecha de inicio y termino para la etapa de adjudicación y contrato");
						}else if(start6 !== null && start6 !== "" && end6 !== null && end6 !== ""){
							validDate = validateDate(start6, end6);
							if(validDate == false){
								popupAlert("La fecha de inicio no puede ser superior a la fecha de termino de la etapa de adjudicación y contrato");
							}else{
								status = true;
							}
						}
					}
				}
			}
		}
	}else{
		status = true;
	}

	return status;

}

function validateTenderForm(area, projectName, TenderName, initDate, FinishDate){

	var validDate = null;

	var status=false;

	if(area == "" || area == null || area == "0"){
		popupAlert("Debe seleccionar un área");
	}else if(projectName == "" || projectName == null || projectName == "0"){
		popupAlert("Debe seleccionar un proyecto ");
	}else if(TenderName == "" || TenderName == null){
		popupAlert("Debe ingresar un nombre de licitación ");
	}else if(initDate == "" || initDate == null || FinishDate == "" || FinishDate == null){
		popupAlert("Debe ingresar una fecha de inicio y termino para la licitación");
	}else if(initDate !== null && initDate !== "" && FinishDate !== null && FinishDate !== ""){
		validDate = validateDate(initDate, FinishDate);
		if(validDate == false){
			popupAlert("La fecha de inicio no puede ser superior a la fecha de termino de la licitación");
		}else{
			status = true;
		}
	}else{
		status=true;
	}
	return status;
}

function validateDate(startDate, FinishDate){
	var result = false;
	var start= formatDate(startDate);
	var end= formatDate(FinishDate);
	if(start <= end){
	result = true;
	}
	return result;
	}

function formatDate(text){
	var dateValues = text.split("/");
	return new Date(dateValues[2],dateValues[1]-1,dateValues[0], 16,5,4,567);
}
