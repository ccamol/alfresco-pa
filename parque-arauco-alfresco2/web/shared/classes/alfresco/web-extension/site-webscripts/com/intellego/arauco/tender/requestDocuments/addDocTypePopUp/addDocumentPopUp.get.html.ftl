<html>
<head>
</head>
<div class="modal-header">
	<a data-dismiss="modal" class="close"></a>
    <h3 class="title-modal">Ingreso de documentos a requerir</h3>
</div>
<div class="modal-body">
	<div class="col-md-12 column">
		<div class="row clearfix">
			<div class="col-md-6 column">
				<div class="row clearfix">
					<div class="col-md-4 column">
						<label><img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;"> Nombre:</label>
					</div>
					<div class="col-md-8 column">
						<input id="name" type="text"/>
					</div>
				</div>
				<div class="row clearfix">
					<div class="col-md-4 column">
						<label>Formato</label>
					</div>
					<div class="col-md-8 column">
						<select id="formats">
							<option value="doc">doc</option>
							<option value="docx">docx</option>
							<option value="pdf">pdf</option>
							<option value="dwg">dwg</option>
							<option value="xls">xls</option>
							<option value="xlsx">xlsx</option>
							<option value="doc">doc</option>
							<option value="jpg">jpg</option>
							<option value="png">png</option>
							<option value="jpg">tiff</option>
			        	</select>
			        </div>	
	        	</div>
	        </div>
	        <div class="col-md-6 column">
	        	<div class="row clearfix">	
					<div class="col-md-4 column">
						<label><img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;">Descripci&oacute;n:</label>
					</div>
					<div class="col-md-8 column">
						<input id="description" type="text"/>
					</div>
				</div>
			</div>	
		</div>
	</div> 
</div>		
<div class="modal-footerpopup">	
    <input type="button"  onclick="addDocType('${uuid}')" id="addDocument" class="btn btn-success" value="Guardar" />
</div>

<html>
