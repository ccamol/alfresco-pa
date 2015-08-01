<html>
<head>
</head>
<div class="modal-header">
	<a data-dismiss="modal" class="close"></a>
    <h3 class="title-modal">Responder a tema</h3>
</div>
<div class="modal-body">
	<div class="col-md-12 column">
		<div class="row clearfix">
			<div class="col-md-10 column">
				<div class="row clearfix">
					<div class="col-md-4 column">
						<label>Autor:</label>
					</div>
					<div class="col-md-8 column">
						<input id="author" type="text" value=${user.name} disabled></input>
					</div>
				</div>
	        	<div class="row clearfix">	
					<div class="col-md-4 column">
						<label><img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;">Respuesta:</label>
					</div>
					<div class="col-md-8 column">
						<textarea id="answer" class="form-control" rows="5" maxlength="500"/>
						* Ingresar como maximo 500 caracteres
					</div>
					<div>(<img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;"> Campos obligatorios)</div>
				</div>
			</div>	
		</div>
	</div> 
</div>		
<div class="modal-footerpopup">	
    <input type="button"  onclick="addAnswer('${consultId}')" id="addAnswer" class="btn btn-success" value="Responder" />
</div>

<html>
