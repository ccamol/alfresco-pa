$(document).ready(function() {	
	getArea();
	getStageTender();
	datePickers();
	$("#area").change(function(){
		idArea=$("#area").val();
		getProjectArea(idArea);
	});

});
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

function getProjectArea(idArea){

	$.ajax({
		url:'/share/service/dashlets/getProjectArea?filter='+idArea,
		type: "get",
		dataType: "html",  
		async: true,  		
		success:   function(data) {
			$('#projectName').html(data);
		}
	});
}

function getArea(){

	$.ajax({
		url:'/share/page/dashlets/getArea',
		type: "get",
		dataType: "html",  
		async: true,  		

		success:   function(data) {
			$('#area').html(data);


		}
	});
}


function getStageTender(){

	$.ajax({
		url:'/share/page/dashlets/getStageTender',
		type: "get",
		dataType: "html",  
		async: true,  		

		success:   function(data) {
			$('#calendar').html(data);
			datePickers();
		}
	});
}

