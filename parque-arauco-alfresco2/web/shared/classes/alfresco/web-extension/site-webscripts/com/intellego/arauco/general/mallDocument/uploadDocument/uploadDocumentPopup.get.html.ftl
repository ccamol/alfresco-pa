
<head>
<script type="text/javascript" src="/share/arauco/js/jquery.validate.js" charset="utf-8"></script>
<script type="text/javascript" src="/share/arauco/js/jquery.numeric.js" charset="utf-8"></script>
<script type="text/javascript" src="/share/arauco/ajax/management/uploadDocument.js" charset="utf-8"></script>

</head>
<div class="row clearfix">

<div class="modal-header">
            <a data-dismiss="modal" class="close"></a>
			<h3 class="title-modal">Cargador de documentos</h3>
</div>

<div class="col-md-6 column">
	<div id="index">
		<embed style="height:420px;width:600px;" id="webPreviewer" type="application/x-shockwave-flash" src="/share/components/preview/WebPreviewer.swf" style="display:inline" quality="high" allowscriptaccess="always" allowfullscreen="true" wmode="transparent" flashvars="fileName=DocumentoDefaultPreview.docx&paging=true&url=/share/proxy/alfresco/api/node/content/workspace/SpacesStore/7714e003-91e5-4463-8a42-e6102edf6984/1392751100866_DocumentoDefaultPreview.docx?url&amp;jsCallback=Alfresco.util.ComponentManager.get('').plugin.onWebPreviewerEvent&amp;jsLogger=Alfresco.util.ComponentManager.get('').plugin.onWebPreviewerLogging&amp;i18n_actualSize=Tama%C3%B1o%20actual&amp;i18n_fitPage=Adaptar%20a%20la%20p%C3%A1gina&amp;i18n_fitWidth=Adaptar%20a%20lo%20ancho&amp;i18n_fitHeight=Adaptar%20a%20lo%20alto&amp;i18n_fullscreen=Pantalla%20completa&amp;i18n_fullwindow=Maximizar&amp;i18n_fullwindow_escape=Pulse%20la%20tecla%20Esc%20para%20salir%20del%20modo%20de%20pantalla%20completa&amp;i18n_page=P%C3%A1gina&amp;i18n_pageOf=de&amp;show_fullscreen_button=true&amp;show_fullwindow_button=true&amp;disable_i18n_input_fix=true">
    </div>
</div>


<div class="col-md-6 column scroll" id ="generalMetadata">
	<div class="col-md-12 column">
		<div class="subtitle-modal">Metadatos <button class="btn btn-success" id="btnUpload" onclick="uploadMultiple()">Subir Documento</button></div>			
	</div>
	
		<form id="formMetadata" class="col-md-12 column">		
		
		<div class="col-md-6 column">
		<div class="control-group">
			<label><img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;">Sub-secci&oacute;n</label>
			<select id="subsection"></select>	        
        </div>
		</div>
		
		<div class="col-md-6 column">
			<div class="control-group">
				<label><img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;">Serie</label>
				<select id="serie"></select>
			</div>
		</div>
		
		<div class="col-md-6 column">
			<div class="control-group">
				<label><img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;">Tipo Documento</label>
				<select id="documentType"></select>				
			</div>
		</div>	
		
		<div class="col-md-6 column">
			<div class="control-group">
				<label><img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;">Fecha Documento</label>
				<input type ="text" id="documentDate" class="datePickers">	        
			</div>
		</div>
		
			<div class="row clearfix" id="divMeta" >
			</div>
			
			<div class="col-md-12 column separate">
						   
                          
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
								<a class="btn btn-primary" onclick="importDocument(1)" id="btnSearch1">Buscar</a>
						</td>
						
					    <td id="previewRadContainer" class="previewRadio">
					    <input type="radio" name="radPreview" id="radPreview1" value="0" checked />
						</td>
			</tr>
			
    	</table>
 	    	
 	    	
			</div>
			
			
		
</div>
