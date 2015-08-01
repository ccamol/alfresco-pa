<html>
<head>
<script type="text/javascript" src="/share/arauco/ajax/tender/createTender.js"></script>
</head>
<div class="modal-header">
    <a data-dismiss="modal" class="close"></a>
    <h3 class="title-modal">Crear Licitación</h3>
</div>
<div class="modal-body">
	<div class="col-md-12 column" style="overflow-y: scroll; height:400px;""> 
	    <div class="row clearfix">  
				<div class="col-md-11 column">
					<div class="row clearfix">
						<div class="col-md-4 column">
							<label><img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;"> Área:</label>
						</div>
						<div class="col-md-8 column">
							<select id="area"></select>
						</div>
					</div>									
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label><img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;"> Proyecto:</label>
						</div>
						<div class="col-md-8 column">
						<select id="projectName"></select>
						</div>
					</div>					
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label><img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;"> Nombre Licitación:</label>
						</div>
						<div class="col-md-8 column">
						<input type="text" id="TenderName"/>
						</div>
					</div>	
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label><img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;"> Fecha de Inicio:</label>
						</div>
						<div class="col-md-8 column">
						<input type="text" id="initDate" class="datePickers"/>
						</div>
					</div>	
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label><img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;"> Fecha de Término:</label>
						</div>
						<div class="col-md-8 column">
						<input type="text" id="FinishDate" class="datePickers"/>
						</div>
					</div>	
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label><img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;"> Calendario:</label>
						</div>
						<div class="col-md-8 column">
						<div id="calendar"></div>
						</div>
					</div>			
				</div>				
			</div> 
			
			<br>
	   <div>(<img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;">Campos obligatorios)</div>
    <div class="modal-footerpopup">	
        <input type="button" id="addTender" onclick="addTender()" class="btn btn-success" value="Crear Licitación" />
    </div>

</html>



