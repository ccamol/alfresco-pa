$(document).ready(function() {
	datePickerss();
});

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

