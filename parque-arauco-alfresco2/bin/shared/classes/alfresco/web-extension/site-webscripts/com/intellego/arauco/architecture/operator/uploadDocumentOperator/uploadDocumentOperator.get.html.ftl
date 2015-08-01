<head>
<script type="text/javascript" src="/share/arauco/ajax/operator/uploadOperator.js" charset="utf-8"></script>
</head>
<div class="row clearfix">
	<!-- HEADER -->
	<div class="modal-header">
		<a data-dismiss="modal" class="close"></a>
		<h3>Cargador de Documentos</h3>
	</div>
	<!-- BODY -->
	<div class="modal-body">
		<div class="row clearfix">
			<div class="col-md-12 column">
				<input type="hidden" name="hiddenUuid" id="hiddenUuid" value="hidden" />
					<div class='row' id="staticProperties">
						<div class="col-md-6 column">
							<div class="control-group">
							<h4 id="documentName">${documentName}</h4>
							</div>
						</div>
					</div>
					<table id="uploadDocumentContainer" class="col-md-12 column upload-document">
						<tr>						
							<td id="searchContainer" class="btnSearchContainer">
								<input type="file" name="file" id="fileOperator" />
							</td>
											
						</tr>
					</table>
			</div>
		</div>
	</div>
 	<div class="modal-footerpopup">	
      <input type="button" id="saveDocument" onclick="uploadDocument('${nodeType}' , '${nodeId}', '${idProject}' , '${documentType}', '${documentName}')" class="btn btn-success" value="Subir Documento" />
    </div>
</div>
