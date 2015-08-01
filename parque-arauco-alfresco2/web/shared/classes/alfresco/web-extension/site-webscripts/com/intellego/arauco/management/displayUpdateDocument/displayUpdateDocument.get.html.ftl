<script type="text/javascript"
	src="/share/arauco/ajax/management/displayUpdateDocument.js"
	charset="utf-8"></script>

<div class="row clearfix">
	<!-- HEADER -->
	<div class="modal-header">
		<a data-dismiss="modal" class="close"></a>
		<h3>Actualizar documento</h3>
	</div>
	
	<!-- BODY -->
	<div class="modal-body">
		<div class="row clearfix">
			<!-- md-6 VIEWER column -->
			<div class="col-md-6 column">
				<div id="viewer">
					<embed style="height: 420px; width: 600px;" id="webPreviewer"
						type="application/x-shockwave-flash"
						src="/share/components/preview/WebPreviewer.swf"
						style="display:inline" quality="high" allowscriptaccess="always"
						allowfullscreen="true" wmode="transparent"
						flashvars="fileName=DocumentoDefaultPreview.docx&paging=true&url=/share/proxy/alfresco/api/node/content/workspace/SpacesStore/7714e003-91e5-4463-8a42-e6102edf6984/1392751100866_DocumentoDefaultPreview.docx?url&amp;jsCallback=Alfresco.util.ComponentManager.get('').plugin.onWebPreviewerEvent&amp;jsLogger=Alfresco.util.ComponentManager.get('').plugin.onWebPreviewerLogging&amp;i18n_actualSize=Tama%C3%B1o%20actual&amp;i18n_fitPage=Adaptar%20a%20la%20p%C3%A1gina&amp;i18n_fitWidth=Adaptar%20a%20lo%20ancho&amp;i18n_fitHeight=Adaptar%20a%20lo%20alto&amp;i18n_fullscreen=Pantalla%20completa&amp;i18n_fullwindow=Maximizar&amp;i18n_fullwindow_escape=Pulse%20la%20tecla%20Esc%20para%20salir%20del%20modo%20de%20pantalla%20completa&amp;i18n_page=P%C3%A1gina&amp;i18n_pageOf=de&amp;show_fullscreen_button=true&amp;show_fullwindow_button=true&amp;disable_i18n_input_fix=true">
				</div>
			</div>
			
			<!-- md-6 METADATA column -->
				<div class="col-md-6 column scroll">
					<!-- md-12 STATIC METADATA column -->
					<div class="col-md-12 column">
						<input type="hidden" name="hiddenUuid" id="hiddenUuid"
							value="${uuid}" />
						<!-- subtitle -->
						<div class="subtitle-modal">
							<p>Informaci&oacute;n del documento</p>
						</div>
						<!-- static metadata row -->
						<div class='row' id="staticProperties">
							<div class="col-md-6 column">
								<div class="control-group">
									<label for="documentName">Documento</label> <input
										id="documentName" value="${document.docinfo.name}" disabled></input>
								</div>
							</div>
						</div>
					</div>
					
					<!-- md-12 DYNAMIC METADATA column -->

						<div class="col-md-12 column">
							<#if document.customproperties?exists>
								<#assign lastAspect = "">
								<#list document.customproperties as p>
									<#if p.aspect != lastAspect && p.aspect != "projectData">
									<#if lastAspect != "">
									</div> </#if>
										<!-- subtitle -->
										<div class="subtitle-modal">
											<p>${p.titleAspect}</p>
										</div>
									<div class='row'>
									</#if>
										<#if p.title != '' && p.show == "true">
											<#if p.aspect == 'generalData'>
												<#if p.name?ends_with("ID") == false && p.name?ends_with("IDSAP") == false>
													<div class="col-md-6 column">
											  			<div id="generalData" class="control-group">
															<label for="${p.name}">${p.title}</label> <input type="text"
																id="${p.name}" value="${p.value}" disabled />
														</div>
													</div>
												</#if>
											<#else>
												<#if p.isList == "true" && p.propertyList?exists>
													<!-- LIST PROPERTY -->
													<div class="col-md-6 column">
														<div name="extraData" class="control-group">
															<label for="${p.title}">${p.title}</label>							
															<select id="${p.name}" name="${p.title}">
															
															<#if p.value?is_enumerable>
																<#list p.propertyList as listElement>
																	<#list p.value as pVal>
																		<#if pVal == listElement.value>
																			<option value='${listElement.value}' selected>${listElement.name}</option>
																		<#else>
																			<option value='${listElement.value}'>${listElement.name}</option>
																		</#if>
																	</#list>
																</#list>
															<#else>
																<#list p.propertyList as listElement>
																	<#if listElement_index == 0 && p.mandatory == "false">
																		<#-- Permitir al usuario seleccionar un vacio si el campo no es requerido -->
																		<option value='0'>Seleccione...</option>
																	</#if>
																	<#if p.value == listElement.value>
																		<option value='${listElement.value}' selected>${listElement.name}</option>
																	<#else>
																		<option value='${listElement.value}'>${listElement.name}</option>
																	</#if>
																</#list>
															</#if>
															</select>
														</div>
													</div>
												<#else>
													<!-- REGULAR PROPERTY -->
													<div class="col-md-6 column">
											  			<div name="extraData" class="control-group">										  				
											  				<label for="${p.name}">
											  				<#if p.mandatory == "true">
											  					<img id="imgMandatory" src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;"/>
											  				</#if>
											  				${p.title}</label> <input type= <#if p.dataType == "int">"numerical"<#else>"text"</#if>
											  						id="${p.name}" class="metadataInput-${p.dataType}"
											  						value=<#if p.dataType == "int">"${p.value?replace(".", "")?replace(",", "")}"<#else>"${p.value}"</#if> />
														</div>
													</div>
												</#if>
											</#if>
										</#if>
									<#assign lastAspect = p.aspect>
									<#if p_has_next == false>
									</div> </#if>
								</#list>
							</#if>
						</div>
					
					
					<!-- md-12 document versioning & buttons column -->
					
					<div class="col-md-12 column">
						<div name="version">
							<p>Tipo de Versionamiento:</p>
								<#if document.docinfo.versionLabel?exists>
									<#if document.docinfo.versionLabel?ends_with("9")>
										<#-- incrementar numero de version en .xx2 para asi pasar de .xx9 a .x(x+1)1 -->
										<#assign inc = 2>
									<#else>
										<#assign inc = 1> </#if>
										
									<#assign decimalPointIndex = document.docinfo.versionLabel?last_index_of(".")>
									<#assign decimalsLength = document.docinfo.versionLabel?substring
										(decimalPointIndex + 1)?length>
									
									<#list 0..decimalsLength - 1 as i>
										<#assign inc = inc / 10>
									</#list>
									
									<input type="radio" name="versioningType" id="nxtMinorVersion" value="minor" checked>
									Versionamiento menor ${document.docinfo.versionLabel?number + inc}</input><br>
								<input type="radio" name="versioningType" id="nxtMajorVersion" value="major">
									Versionamiento mayor ${document.docinfo.versionLabel?number?floor + 1}</input><br>
								<#else>
									<#-- Primera version -->
									<input type="radio" name="versioningType" id="nxtMinorVersion" value="minor" checked>
										Versionamiento menor 1.1</input><br>
									<input type="radio" name="versioningType" id="nxtMajorVersion" value="major">
										Versionamiento mayor 2.0</input><br>
								</#if>
						</div> <br>
						<div name="btns">
							<input type="button" id="btnAceptar" value="Aceptar"
								onclick="edit()" />
						</div>
					</div>
				</div>
		</div>
	</div>
	<!-- BODY FOOTER -->
	<div class="modal-footer">
		<a href="#" data-dismiss ="modal" class="close btn"></a>
	</div>
</div>

<script type="text/javascript">
	// cargar el preview al renderizar el popup
	getPreview('${uuid}');
</script>