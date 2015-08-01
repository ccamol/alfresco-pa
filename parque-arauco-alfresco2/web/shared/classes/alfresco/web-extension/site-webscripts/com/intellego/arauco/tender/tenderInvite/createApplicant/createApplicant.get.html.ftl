<html>
<head>
<script type="text/javascript" src="/share/arauco/ajax/tender/createApplicant.js"></script>
</head>
<div class="modal-header">
	<a data-dismiss="modal" class="close" data-handler="0"></a>
	<h3 class="title-modal">Crear Postulante</h3>
</div>
<div class="modal-body">
	<div id="applicantData" class="col-md-12 column"> 
		<div class="row clearfix">
			<div class="col-md-6 column">
				<div class="row clearfix">
					<div class="col-md-4 column">
						<label><img style="padding-right:5px;" src="/alfresco/images/icons/required_field.gif">N° Identificaci&oacute;n</label>
					</div>
					<div class="col-md-8 column">
						<input type="text" class="form-control" id="idApplicant" onkeypress="return isNumber(event)" />
					</div>
				</div>
				<div class="row clearfix">
					<div class="col-md-4 column">
						<label><img style="padding-right:5px;" src="/alfresco/images/icons/required_field.gif">E-mail</label>
					</div>
					<div class="col-md-8 column">
						<input type="text" class="form-control" id="mail"/>
					</div>
				</div>
				<div class="row clearfix">
					<div class="col-md-4 column">
						<label><img style="padding-right:5px;" src="/alfresco/images/icons/required_field.gif">Pa&iacute;s</label>
					</div>
					<div class="col-md-8 column">
						<select id="country" name="country"></select>
					</div>
				</div>
			</div>	
			<div class="col-md-6 column">
				<div class="row clearfix">
					<div class="col-md-4 column">
						<label><img style="padding-right:5px;" src="/alfresco/images/icons/required_field.gif">Nombre de usuario:</label>
					</div>
					<div class="col-md-8 column">
						<input type="text" class="form-control" id="applicantName"/>
					</div>
				</div>	
				<div class="row clearfix">
					<div class="col-md-4 column">
						<label><img style="padding-right:5px;" src="/alfresco/images/icons/required_field.gif">Contrase&ntilde;a</label>
					</div>
					<div class="col-md-8 column">
						<input type="password" class="form-control" id="password"/>
					</div>
				</div>
				<div class="row clearfix">	
					<div class="col-md-4 column">
						<label><img style="padding-right:5px;" src="/alfresco/images/icons/required_field.gif">Confirmar contrase&ntilde;a</label>
					</div>
					<div class="col-md-8 column">
						<input type="password" class="form-control" id="confirmPass"/>
					</div>
				</div>
				<div class="row clearfix">
					<div class="col-md-4 column">
						<label><img style="padding-right:5px;" src="/alfresco/images/icons/required_field.gif">Mall:</label>
					</div>
					<div class="col-md-8 column">
						<select id="mall" name="mall"></select>
					</div>
				</div>
						
			</div>
			</div>
			<div class="col-md-12 column">
				<div class="row clearfix">
				<div class="col-md-2 column">
				<label>Informaci&oacute;n Adicional</label>
				</div>
				<div class="col-md-10 column">
				<textarea id="additionalInfo" class="form-control" rows="5" maxlength="255"></textarea>
				</div>
				</div>				
			</div>
   	<div>(Campos obligatorios <img style="padding-right:5px;" src="/alfresco/images/icons/required_field.gif">)
</div>
</div>		
  <div class="modal-footerpopup">	
        <input type="button" id="createApplicantButton" onclick="createAlfrescoUser()" class="btn btn-success" value="Crear" />
    </div>
</html>