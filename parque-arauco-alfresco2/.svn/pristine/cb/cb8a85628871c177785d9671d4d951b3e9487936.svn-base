<head>

<script type="text/javascript" charset="utf-8" src="/share/arauco/js/excellentexport.min.js"></script>

<script>

$(document).ready(function(){
	getList("section", "reportAreaFilter");
	getMalls();
});

function loadArea(){
	projectList();
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
		},
		error:function (xhr, ajaxOptions, thrownError){
			popupAlert('Se produjo un problema al cargar la lista');
		}  
	});
}

function projectList(){
	var mallId = $("#reportMallFilter").val();
	var type = $("#reportAreaFilter").val();
	
	
	$.ajax({					
		url: '/share/page/dashlets/projectListReports.json',
		type: "get",
		dataType: "json", 
		async: false,
		data: { 
			type : type,
			id : mallId
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
		},
		error:function (xhr, ajaxOptions, thrownError){
			popupAlert('Se produjo un problema al cargar la lista');
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
	var areaId = $("#reportAreaFilter").val();
	var projectId = $("#reportProjectFilter").val();

	$.ajax({
		url:'/share/page/dashlets/versionTopReportResponse',
		type: "get",
		dataType: "html",  
		async: false,
		data : {
			area : areaId,
			mall : mallId,
			project : projectId
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
  <div class="title" id="dashletWolrd">Filtros: Top 15 documentos con más versiones</div>
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
				<select id="reportAreaFilter" onChange="loadArea()"></select>
			</div>
			<div class="col-md-6 column">
				<label style="width: 150px" >Mall/Outlet:</label>
				<select id="reportMallFilter" onChange="projectList();"></select>
			</div>
			<div class="col-md-6 column">
				<label style="width: 150px" >Proyecto:</label>
				<select id="reportProjectFilter"></select>
			</div>
		</div>
			
	</div>
</div>

<div class="dashlet">
  <div class="title" id="dashletWolrd">Resultados: Top 15 documentos con más versiones</div>
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