<#list resultVersion as node>
	<#if node?exists>
	<#if node.node?exists>
	<#assign extension1= "${node.node.name}"?last_index_of(".")+1>
	<#assign type_extension1="${'${node.node.name}'?substring(extension1)}">
	<#assign image><@formatImage extension=type_extension1/></#assign>	
		<li><a href="${node.node.downloadUrl?replace("/d/a", "/share/proxy/alfresco/api/node/content/")}?a=true"><img src="${image}" /></a></li>
	</#if>
	</#if>
</#list>


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