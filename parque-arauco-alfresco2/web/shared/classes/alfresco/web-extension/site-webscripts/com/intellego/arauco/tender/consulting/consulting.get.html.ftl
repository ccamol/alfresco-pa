<html>
<head>
<style>
</style>
</head>
<div class="dashlet">
  	<div id="dashletWolrd" class="title">${msg("arauco.header")}</div>
	<div class="col-md-12 column bar">
  		<div class="row clearfix">
  			<div id="queriesContainer" class="col-md-12 column input-group small-search">  
				<button id="createConsult" class="btn btn-second" onclick="createConsult()" value="Crear consulta">Crear Consulta</button>
				<button id="publishingQueries" class="btn btn-second" onclick="publishingQueries(1)" value="Publicar Consultas">Publicar Consultas</button>
				<button id="closeQueries" class="btn btn-second" onclick="closeQueries()" value="Cerrar Consultas">Cerrar Consultas</button>
				<button id="openQueries" class="btn btn-second" onclick="openQueries()" value="Abrir Consultas">Abrir Consultas</button>
				<button id="exportExcel" class="btn btn-second" value="Exportar a Excel">Exportar a Excel</button>
				<div id="queries" class="column-md-12 column">
					<table cellpadding="0" cellspacing="0" border="0" class="dataTableClass table table-striped table-bordered dataTableFuntion" id="consultsTable">
	 				</table>
				</div>
			</div>	
		</div>	
	</div>	
</div>	
</html>