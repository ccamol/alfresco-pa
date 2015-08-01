<head>

<script type="text/javascript" charset="utf-8" src="/share/arauco/js/excellentexport.min.js"></script>

<script>

$(document).ready(function(){
	getList("section", "reportAreaFilter");
	getMalls();
});

function loadArea(){
	projectList();
	clearStageList();
}

function getList(typeList, idHtml){
	$.ajax({
		url: '/share/page/dashlets/getDataList.json',
		type: "get",
		dataType: "json", 
		async: false,
		data: { 
			type : typeList,
			prefix : "paList"
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
		}
	});
}

function projectList(){
	var mallId = $("#reportMallFilter").val();
	var type = $("#reportAreaFilter").val();
	var typeProject = $("#projectType").val();
	
	$.ajax({					
		url: '/share/page/dashlets/projectListReports.json',
		type: "get",
		dataType: "json", 
		async: false,
		data: { 
			type : type,
			id : mallId,
			typeProject : typeProject
		},
		success:function(data){
			$("#reportProjectFilter").html('');
			$("#reportProjectFilter").append('<option value="">Seleccionar</option>');
			var total=data.resultSet.length;
			if(total>0){
				for( var i=0;i<total;i++){
					if(data.resultSet[i].name!='' && data.resultSet[i].name!=null && data.resultSet[i].name!=undefined){
						$("#reportProjectFilter").append('<option value="'+data.resultSet[i].id+'">'+data.resultSet[i].name+'</option>');
					}
				}
			}
		}
	})
	
	clearStageList();
	
}

function clearStageList(){
		$("#reportStageFilter").html('');
		$("#reportStageFilter").append('<option value="">Seleccionar</option>');
}

function stageList(){
	var projectId = $("#reportProjectFilter").val();
	var type = $("#reportAreaFilter").val();
	var typeProject = $("#projectType").val();
	
	$.ajax({					
		url: '/share/page/dashlets/stageListReports.json',
		type: "get",
		dataType: "json", 
		async: false,
		data: { 
			type : type,
			id : projectId,
			typeProject : typeProject
		},
		success:function(data){
			$("#reportStageFilter").html('');
			$("#reportStageFilter").append('<option value="">Seleccionar</option>');
			var total=data.resultSet.length;
			if(total>0){
				for( var i=0;i<total;i++){
					if(data.resultSet[i].name!='' && data.resultSet[i].name!=null && data.resultSet[i].name!=undefined){
						$("#reportStageFilter").append('<option value="'+data.resultSet[i].id+'">'+data.resultSet[i].name+'</option>');
					}
				}
			}
		}
	})
}



function getMalls(){	
	$.ajax({					
		url: '/share/page/dashlets/getMalls',
		type: "get",
		dataType: "html", 
		async: false,
		success:function(data){
			$("#reportMallFilter").html(data);
		}  
	})
}



function showVersionTop15Report(){

	var mallId = $("#reportMallFilter").val();
	if(mallId=="0" || mallId==0) mallId="";
	var areaId = $("#reportAreaFilter").val();
	var projectId = $("#reportProjectFilter").val();
	var stage = $("#reportStageFilter").val();
	var typeProject = $("#projectType").val();

	$.ajax({
		url:'/share/page/dashlets/missingDocumentsReportResponse',
		type: "get",
		dataType: "html",  
		async: false,
		data : {
			area : areaId,
			mall : mallId,
			project : projectId,
			stage : stage,
			typeProject : typeProject
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
  <div class="title" id="dashletWolrd">Filtros: Proyectos con falta de documentos</div>
	  <div class="col-md-12 column bar">
		<div class="row clearfix">
			<div class="col-md-12 column" >
				<button id="searchVersionTopReport" onClick="showVersionTop15Report()" class="btn btn-second" value="Generar reporte">Generar reporte</button>
			</div>
		</div>
	</div>
		

		<div class="row clearfix">
			<div class="col-md-6 column">
				<label style="width: 150px" >Área:</label>
				<select id="reportAreaFilter"></select>
			</div>
			<div class="col-md-6 column">
				<label style="width: 150px" >Mall/Outlet:</label>
				<select id="reportMallFilter"></select>
			</div>
			<div class="col-md-6 column">
				<label style="width: 150px" >Tipo de Proyecto:</label>
				<select id="projectType" onChange="projectList();">
				<option value="0">Seleccione tipo</option>
				<option value="1">Proyecto Mall</option>
				<option value="2">Proyecto SUC</option>
				</select>
			</div>
			<div class="col-md-6 column">
				<label style="width: 150px" >Proyecto:</label>
				<select id="reportProjectFilter" onChange="stageList();"></select>
			</div>
			<div class="col-md-6 column">
				<label style="width: 150px" >Etapa:</label>
				<select id="reportStageFilter"></select>
			</div>
			<div class="col-md-6 column">
				<label style="width: 150px" >Responsable de carga:</label>
				<select id="reportResponsibleFilter"></select>
			</div>
		</div>
			
	</div>
</div>

<div class="dashlet">
  <div class="title" id="dashletWolrd">Resultados: Proyectos con falta de documentos</div>
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