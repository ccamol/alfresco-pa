<html>
<head>
</head>
<div class="modal-header">
	<a data-dismiss="modal" class="close"></a>
    <h3 class="title-modal">Modificar consulta</h3>
</div>
<div class="modal-body">
		<div class="row clearfix">
			<div class="col-md-6 column">
				<div class="row clearfix">
					<div class="col-md-4 column">
						<label><img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;">Categor&iacute;a</label>
					</div>
					<div class="col-md-8 column">
					<input type="hidden" id="idConsult" value=${id}>
						<select id="category"></select>
			        </div>	
	        	</div>
	        </div>	
	        <div class="col-md-6 column">
	        	<div class="row clearfix">	
					<div class="col-md-4 column">
						<label>Nombre:</label>
					</div>
					<div class="col-md-8 column">
						<input id="author" type="text"/>
					</div>
				</div>
			</div>	
		</div>
		
		<div class="row clearfix">
				<div class="col-md-12 column">	
					<div class="row clearfix">
						<div class="col-md-2 column" rows="10">
							<label><img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;">Pregunta:</label>
						</div>
						<div class="col-md-10 column">
							<textarea id="question" type="text" maxlength="500"></textarea>
							</br>* Ingresar como maximo 500 caracteres
						</div>						
					</div>
				</div>
		</div>
	</div> 	
<div class="modal-footerpopup">	
    <input type="button"  onclick="addConsult()" id="addConsult" class="btn btn-success" value="Guardar" />
</div>
</html>