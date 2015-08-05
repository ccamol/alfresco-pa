<table id="documentToCarry" class="dataTableClass table table-striped table-bordered">
<thead>
<tr>
<th>Check</th>
<th>Título Documento</th>

<th>Fecha de Carga</th>
<th>Acciones</th>
</tr>
</thead>
<tbody>
<#list resulSetUploaded as node> 	
<tr>
<td><input type="checkbox" id="${node.idUploaded?trim}" value="${node.idUploaded?trim}" checked disabled></td>
<td>${node.documentToCarryUploadedName?trim}</td>
<td>${node.dateUploaded?trim}</td>
<td>
				<a class="ico" title="Descargar" onClick="downloadDocument('${node.uuidUploaded}','${node.documentToCarryUploadedName?trim}')"><img src="/share/images/icons/download_doc.gif" border="0"></a>
				<a class="ico" title="Previsualizar" onClick="previewDocument('${node.uuidUploaded}','${node.documentToCarryUploadedName?trim}')"><img src="/share/images/icons/preview.gif" border="0"></a>
				<a class="ico" title="Comentar documento" onClick="commentPdf('${node.uuidUploaded}','${node.documentToCarryUploadedName?trim}')"><img src="/share/images/icons/forum-16.gif" border="0"></a>
				<a class="ico" title="Editar en línea" onClick="editOnGoogleDocs('${node.uuidUploaded}','${node.documentToCarryUploadedName?trim}')"><img src="/share/images/icons/edit_icon.gif" border="0"></a>
				<a class="ico" title="Historial del documento" onClick="documentHistory('${node.uuidUploaded}','${node.documentToCarryUploadedName?trim}')"><img src="/share/images/icons/versionHistory_icon.gif" border="0"></a>
				<a class="ico" title="Eliminar" onClick="deleteDocument('${node.uuidUploaded}','${node.documentToCarryUploadedName?trim}')"><img src="/share/images/icons/delete.gif" border="0"></a></td>
</tr>
</#list>

<#list resulSettDocumentToCarry as node> 	
<tr>
<td><input type="checkbox" id="${node.toCarryId?trim}" value="${node.toCarryId?trim}" disabled></td>
<td>${node.toCarryName?trim}</td>
<td></td>
<td><a class="ico" title="Cargar documento" onClick="uploadDocument('${node.toCarryId?trim}','${node.toCarryIdTypeDocument?trim}','${node.toCarryFormat?trim}','${node.toCarryName?trim}')"><img src="/share/bootstrap/img/ico-stage.png" border="0"></a></td>
</tr>
</#list>


</tbody>
</table>


		