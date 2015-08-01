<head>
<script type="text/javascript" src="/share/arauco/ajax/management/uploadDocument.js" charset="utf-8"></script>
</head>
<div class="row clearfix">
	<!-- HEADER -->
	<div class="modal-header" style="margin-bottom: 0px;">
		<a data-dismiss="modal" class="close"></a>
		<h3>Actualizar contenido del documento</h3>
	</div>
	<!-- BODY -->
	<div class="modal-body">
		<div class="row clearfix">
				<div class="col-md-12 column">
					<h5>Datos de la versión</h5>
				</div>
				<div class="col-md-2" >
			    	<input type="radio" id="majorVersion" name="majorVersion" value="true" checked="" >
				</div>
			    <div >
					<label for="majorVersion">Cambios mayores (ej. 2.0)</label>
			    </div>
				<div class="col-md-2">
					<input type="radio" value="false" name="majorVersion" id="minorVersion">
				</div>
			    <div>
					<label for="minorVersion">Cambios menores (ej. 1.1)</label>
			    </div>
				</br>
				<div class="col-md-12" style="padding-left: 40px !important;padding-right: 40px;">
				<label>Ingrese una observacion:</label>
				<textarea form="promoteCommentForm" id="versionComments" name="versionComments"></textarea>
  			</div>
			<div class="col-md-12 column">
				<h5>Documento principal</h5>
			</div>
			<div class="col-md-12 column">
				<input type="hidden" name="hiddenUuid" id="hiddenUuid" value="${uuid}" />
					<div class='row' id="staticProperties">
						<div class="col-md-12 column">
						<div class="col-md-4 column">
							<#assign extension1= "${document.docinfo.name}"?last_index_of(".")+1>
							<#assign type_extension1="${'${document.docinfo.name}'?substring(extension1)}">
							<#assign image><@formatImage extension=type_extension1/></#assign>	
				   	 		<img src="${image}"  onclick="downloadDocumentFromPopup('/share/proxy/alfresco/api/node/content/workspace/SpacesStore/${uuid}/${document.docinfo.name}?a=true');" name="doc-download"  value="/share/proxy/alfresco/api/node/content/workspace/SpacesStore/${uuid}/${document.docinfo.name}?a=true"></td><td>${document.docinfo.name}<br>
						</div>
						<div>
							<table id="uploadDocumentContainer" class="col-md-7 column upload-document">
								<tr>						
									<td id="searchContainer" class="btnSearchContainer">
										<input type="file" name="file" id="fileUpdate">
									</td>				
								</tr>
							</table>
						</div>
						</div>
					</div>
				</div>
			



				</div>
	
 	<div class="modal-footerpopup">	
      <input type="button" id="updateDocument" onclick="uploadUpdateContentApplicant()" class="btn btn-success" value="Actualizar contenido" />
    </div>
</div>

<#macro formatImage extension>
	<#if (("${extension}"=="pdf")||("${extension}"=="PDF"))>
		/alfresco/images/filetypes32/pdf.gif
	<#else>
		<#if (("${extension}"=="docx")||("${extension}"=="DOCX"))>
			/alfresco/images/filetypes32/docx.gif
		<#else>
			<#if (("${extension}"=="xls")||("${extension}"=="XLS"))>
				/alfresco/images/filetypes32/xls.gif		
			<#else>
				<#if (("${extension}"=="doc")||("${extension}"=="DOC"))>
					/alfresco/images/filetypes32/doc.gif		
				<#else>
					<#if (("${extension}"=="ppt")||("${extension}"=="PPT"))>
						/alfresco/images/filetypes32/ppt.gif		
					<#else>
						<#if (("${extension}"=="pptx")||("${extension}"=="PPTX"))>
							/alfresco/images/filetypes32/pptx.gif		
						<#else>
							<#if (("${extension}"=="xlsx")||("${extension}"=="XLSX"))>
								/alfresco/images/filetypes32/xlsx.gif		
							<#else>
								<#if (("${extension}"=="zip")||("${extension}"=="ZIP"))>
									/alfresco/images/filetypes32/zip.gif		
								<#else>
									<#if (("${extension}"=="txt")||("${extension}"=="TXT"))>
										/alfresco/images/filetypes32/txt.gif		
									<#else>
										<#if (("${extension}"=="jpg")||("${extension}"=="JPG"))>
											/alfresco/images/filetypes32/jpg.gif		
										<#else>
											<#if (("${extension}"=="gif")||("${extension}"=="GIF"))>
												/alfresco/images/filetypes32/gif.gif		
											<#else>
												<#if (("${extension}"=="bmp")||("${extension}"=="BMP"))>
													/alfresco/images/filetypes32/bmp.gif		
												<#else>
													<#if (("${extension}"=="odt")||("${extension}"=="ODT"))>
														/alfresco/images/filetypes32/odt.gif		
													<#else>
														<#if (("${extension}"=="ods")||("${extension}"=="ODS"))>
															/alfresco/images/filetypes32/ods.gif		
														<#else>
															<#if (("${extension}"=="odp")||("${extension}"=="ODP"))>
																/alfresco/images/filetypes32/odp.gif		
															<#else>
																<#if (("${extension}"=="odg")||("${extension}"=="ODG"))>
																	/alfresco/images/filetypes32/odg.gif		
																<#else>
																	<#if (("${extension}"=="odf")||("${extension}"=="ODF"))>
																		/alfresco/images/filetypes32/odf.gif	
																	<#else>
																		<#if (("${extension}"=="avi")||("${extension}"=="AVI"))>
																			/alfresco/images/filetypes32/avi.gif	
																		<#else>
																			<#if (("${extension}"=="exe")||("${extension}"=="EXE"))>
																				/alfresco/images/filetypes32/exe.gif	
																			<#else>
																				<#if (("${extension}"=="html")||("${extension}"=="HTML"))>
																					/alfresco/images/filetypes32/html.gif	
																				<#else>
																					<#if (("${extension}"=="jpeg")||("${extension}"=="JPEG"))>
																						/alfresco/images/filetypes32/jpeg.gif	
																					<#else>
																						<#if (("${extension}"=="mp3")||("${extension}"=="MP3"))>
																							/alfresco/images/filetypes32/mp3.gif	
																						<#else>
																							<#if (("${extension}"=="mp4")||("${extension}"=="MP4"))>
																								/alfresco/images/filetypes32/mp4.gif	
																							<#else>
																								<#if (("${extension}"=="mpeg")||("${extension}"=="MPEG"))>
																									/alfresco/images/filetypes32/mpeg.gif	
																								<#else>
																									<#if (("${extension}"=="wmv")||("${extension}"=="WMV"))>
																										/alfresco/images/filetypes32/wmv.gif	
																									<#else>
																										<#if (("${extension}"=="png")||("${extension}"=="PNG"))>
																											/alfresco/images/filetypes32/png.gif
																										<#else>
																											<#if (("${extension}"=="dwg")||("${extension}"=="DWG"))||("${extension}"=="dxf")||("${extension}"=="DXF")||("${extension}"=="dwfx")||("${extension}"=="DWFX")>
																												/alfresco/images/icons/autocad.jpg
																											<#else>
																												/alfresco/images/filetypes32/_default.gif
																											</#if>
																										</#if>
																									</#if>
																								</#if>
																							</#if>
																						</#if>
																					</#if>
																				</#if>
																			</#if>
																		</#if>
																	</#if>
																</#if>
															</#if>
														</#if>
													</#if>
												</#if>
											</#if>
										</#if>
									</#if>
								</#if>
							</#if>
						</#if>
					</#if>
				</#if>
			</#if>
		</#if>
	</#if>
</#macro>