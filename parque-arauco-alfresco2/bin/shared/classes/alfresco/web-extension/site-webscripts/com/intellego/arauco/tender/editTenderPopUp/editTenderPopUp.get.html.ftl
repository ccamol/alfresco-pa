<html>
<head>
<script type="text/javascript" src="/share/arauco/ajax/tender/editTender.js"></script>
</head>
		  <div class="modal-header">
        <a data-dismiss="modal" class="close"></a>
        <h3 class="title-modal">Editar Licitación</h3>
     	</div>
     	
		<div class="modal-body">
		<div class="col-md-12 column" style="overflow-y: scroll; height:400px;"> 
	    <div class="row clearfix">  
					<div class="col-md-11 column">
						<div class="row clearfix">
							<div class="col-md-4 column">
							<label>Área(*):</label>
						</div>
						<div class="col-md-8 column">
						<input type="hidden" id="idArea" value="${resultSet.organizationalAreaId}" name="areaValue">
						<input type="hidden" id="tenderStatus" value="${resultSet.tenderStatus}" name="tenderStatus">
						<select id="area" name="area"></select>
						</div>
					</div>									
					<div class="row clearfix">
						<div class="col-md-4 column">
						<input type="hidden" id="idProject" value="${resultSet.projectId}" name="projectValue">
						<label>Proyecto(*):</label>
						</div>
						<div class="col-md-8 column">
						<select id="projectName"></select>
						</div>
					</div>					
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label>Nombre Licitación(*):</label>
						</div>
						<div class="col-md-8 column">
						<input type="text" id="TenderName" value="${resultSet.name}"/>
						</div>
					</div>	
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label>Fecha de Inicio(*):</label>
						</div>
						<div class="col-md-8 column">
						<input type="text" id="initDate" class="datePickers" value="${resultSet.initDate}" />
						</div>
					</div>	
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label>Fecha de Termino(*):</label>
						</div>
						<div class="col-md-8 column">
						<input type="text" id="FinishDate" class="datePickers" value="${resultSet.endDate}"/>
						</div>
					</div>	
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label>Calendario(*):</label>
						</div>
						<div class="col-md-8 column">
						<div id="calendar"></div>
						</div>
					</div>			
				</div>				
			</div> 
			
			<br>
	   <di>Campos Obligatorios(*)</div>
    <div class="modal-footerpopup">	
        <input type="button" id="editTender" onclick="editTender(${resultSet.id})" class="btn btn-success" value="Actualizar Licitación" />
    </div>

<html>
