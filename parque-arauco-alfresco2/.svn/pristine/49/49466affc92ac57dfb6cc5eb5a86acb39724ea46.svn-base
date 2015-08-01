<head>
<script type="text/javascript" src="/share/arauco/ajax/operator/uploadOperator.js" charset="utf-8"></script>
</head>
<div class="row clearfix">

<div class="modal-header">
            <a data-dismiss="modal" class="close"></a>
			<h3 class="title-modal">Cargador de documentos</h3>
</div>

<div class="col-md-12 column">
	<br/>
	<div class="col-md-12 column">
		<div class="subtitle-modal">Cargar documentos <button class="btn btn-success" id="btnUpload" onclick="uploadMultiple('${nodeType}' , '${nodeId}', '${idProject}' , '${documentType}', '${documentName}')">Subir Documento</button></div>			
	</div>
	
		<form id="formMetadata" class="col-md-12 column">		
                          
			   <div class="col-md-12 column">
					<div class="row clearfix">
					
						<div class="col-md-8 column">
						<label><i>Documento</i></label>
						</div>
						
						<div style="text-align:right" class="col-md-4 column">
						<label><i>Documento a previsualizar</i></label>
						</div>
						
					</div>
				</div>

		</form>
		
		
			<table class="btnAddContainer col-md-1">
						<td>
						<a class="btn btn-primary" id="btnAddDocument" onclick="addDocument()">+</a>						
						</td>
						<td>
						<a class="btn btn-info" id="btnDeleteText" onclick="deleteInputext()">-</a>						
						</td>
			</table>   
		<table id="uploadDocumentContainer" class="col-md-11 column upload-document">
			<tr>						
						<td id="documentNameContainer">
							<input type="text" readonly="true" id="documentName1"/>							
						</td>
						
						<td id="searchContainer" class="btnSearchContainer">
								<input type="file" name="file" id="importFile1" style="display:none" onchange="return setDocNameInput(1)" />
								<a title="Marcar como importante" class="btn btn-primary" onclick="importDocument(1)" id="btnSearch1">Buscar</a>
						</td>
						
					    <td id="previewRadContainer" class="previewRadio">
					    <input type="radio" name="radPreview" id="radPreview1" value="0" checked />
						</td>
			</tr>
			
    	</table>
 	    	
 	    			
</div>
