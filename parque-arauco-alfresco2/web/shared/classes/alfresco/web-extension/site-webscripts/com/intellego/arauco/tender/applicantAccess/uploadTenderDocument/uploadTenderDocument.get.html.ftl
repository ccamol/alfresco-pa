<head>
<script type="text/javascript" src="/share/arauco/js/jquery.validate.js" charset="utf-8"></script>
<script type="text/javascript" src="/share/arauco/js/jquery.numeric.js" charset="utf-8"></script>
<script type="text/javascript" src="/share/arauco/ajax/tender/uploadTenderDocument.js" charset="utf-8"></script>
</head>

<div class="row clearfix">
	<div class="modal-header">
		<a data-dismiss="modal" class="close" data-handler="0"></a>
		<h3 class="title-modal">Cargador de documentos licitaciones</h3>
	</div>
	
	<!-- Flash Previewer -->
	<div class="col-md-12 column" id="documentContainer">
	<br/>
	<div class="col-md-12 column">
			<div class="subtitle-modal"> Cargar Documento
				<button class="btn btn-success" id="btnUpload" onclick="validateFile()">Subir Documento</button>
			</div>
	</div>
		
		<!-- Document Meta Data -->
		<div id="hiddenData" style="display: none;">
			<input type="hidden" id="tenderId" value="${tenderId}">
			<input type="hidden" id="documentTypeId" value="${documentTypeId}">
			<input type="hidden" id="targetName" value="${docName}">
			<input type="hidden" id="docRequiredId" value="${docRequiredId}">
		</div>
		
		
		<!-- File -->
		<table id="uploadDocumentContainer" class="col-md-11 column upload-document">
			<tr>
				<td id="documentNameContainer">
					<input type="text" readonly="true" id="documentName">							
				</td>
				<td id="searchContainer" class="btnSearchContainer">
					<input type="file" name="file" id="importFile" style="display:none" onchange="return setDocNameInput()" accept="${extension}"/>
					<a class="btn btn-primary" onclick="importDocument()" id="btnSearch">Buscar</a>
				</td>
			</tr>
    	</table>
	</div>
</div>