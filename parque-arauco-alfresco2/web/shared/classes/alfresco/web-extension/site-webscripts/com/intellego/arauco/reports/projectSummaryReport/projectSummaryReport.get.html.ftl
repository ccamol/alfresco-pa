<head>

<script type="text/javascript" charset="utf-8" src="/share/arauco/js/excellentexport.min.js"></script>

<script>

$(document).ready(function(){
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

function showVersionTop15Report(){

	var dateFrom = $("#dateFromFilter").val();
	var dateTo = $("#dateToFilter").val();

	$.ajax({
		url:'/share/page/dashlets/projectSummaryReportResponse',
		type: "get",
		dataType: "html",  
		async: false,
		data : {
			dateFrom : dateFrom,
			dateTo : dateTo
		},  		
		success:   function(data) {
			$("#resultTable").html(data);
			$('#versionTop15Result').DataTable({
				"aaSorting": [[1,'desc']],
				"aLengthMenu": [[-1], ["All"]],
				"iDisplayLength": -1,
				"paging": false
			});		
		}
	});
}	

</script>


</head>
<body>
<div class="dashlet">
  <div class="title" id="dashletWolrd">Filtros: Proyectos mall en curso</div>
	  <div class="col-md-12 column bar">
		<div class="row clearfix">
			<div class="col-md-12 column" >
				<button id="searchVersionTopReport" onClick="showVersionTop15Report()" class="btn btn-second" value="Generar reporte">Generar reporte</button>
			</div>
		</div>
	</div>
		<div class="row clearfix">
			<div class="col-md-6 column">
				<label style="width: 150px" >Creado desde:</label>
				<input id="dateFromFilter" class="datePickers" type="text">
			</div>
			<div class="col-md-6 column">
				<label style="width: 150px" >Creado hasta:</label>
				<input id="dateToFilter" class="datePickers" type="text">
			</div>
		</div>
			
	</div>
</div>

<div class="dashlet">
  <div class="title" id="dashletWolrd">Resultados: Proyectos mall en curso</div>
  <div class="col-md-12 column bar">
	<div class="row clearfix">
	<div class="col-md-6 column">
	<a class="btn btn-second" download="reporte.xls" href="#" onclick="return ExcellentExport.excel(this, 'versionTop15Result', 'Reporte');">Exportar to Excel</a>
  	</div>
  	</div>
  </div>
	<div class="row clearfix" style="margin-left:14px; width: 97% ; 20px;">
		<div id="resultTable" class="col-md-12 column" >
	
	
		</div>
	</div>
</div>



</body>