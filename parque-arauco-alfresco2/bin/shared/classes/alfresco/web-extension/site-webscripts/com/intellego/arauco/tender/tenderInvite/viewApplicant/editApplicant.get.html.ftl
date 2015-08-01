<html>
<head>
<script type="text/javascript" src="/share/arauco/ajax/tender/createApplicant.js"></script>
</head>
<div class="modal-header">
	<a data-dismiss="modal" class="close" data-handler="0"></a>
	<h3 class="title-modal">Postulante</h3>
</div>
<div class="modal-body">
	<div id="applicantData" class="col-md-12 column"> 
		<div class="row clearfix">
			<div class="col-md-6 column">
				<div class="row clearfix">
					<div class="col-md-4 column">
						<label>N° Identificaci&oacute;n:</label>
					</div>
					<div class="col-md-8 column">
						<input type="text" class="form-control" id="identificationNumber" disabled=""/>
						<input type="hidden" class="form-control" id="idApplicant"/>
					</div>
				</div>
				<div class="row clearfix">
					<div class="col-md-4 column">
						<label>Pa&iacute;s:</label>
					</div>
					<div class="col-md-8 column">
						<select id="country" name="country" disabled=""></select>
					</div>
				</div>
				<div class="row clearfix">
					<div class="col-md-4 column">
						<label>E-mail:</label>
					</div>
					<div class="col-md-8 column">
						<input type="text" class="form-control" id="mail" disabled=""/>
					</div>
				</div>
			</div>	
			<div class="col-md-6 column">
				<div class="row clearfix">
					<div class="col-md-4 column">
						<label>Nombre:</label>
					</div>
					<div class="col-md-8 column">
						<input type="text" class="form-control" id="applicantName" disabled=""/>
					</div>
				</div>	
				<div class="row clearfix">
					<div class="col-md-4 column">
						<label>Mall:</label>
					</div>
					<div class="col-md-8 column">
						<select id="mall" name="mall" disabled=""></select>
					</div>
				</div>		
			</div>
	    </div>
	    <div class="row clearfix">
			<div class="col-md-2 column">
			<label>Informaci&oacute;n Adicional</label>
			</div>
			<div class="col-md-10 column">
			<textarea id="additionalInfo" class="form-control" rows="5" maxlength="255" disabled=""></textarea>
			</div>
   	</div>
</div>		
</html>