<html>
<head></head>
<div class="modal-header">
    <a data-dismiss="modal" class="close"></a>
    <h3 class="title-modal">Documento del postulante</h3>
</div>
<div class="modal-body">
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
	<#if stageStatus = "0">
		<a title="Descargar" onClick="downloadDocument('${node.uuidUploaded}','${node.documentToCarryUploadedName?trim}')"><img src="/share/images/icons/download_doc.gif" border="0"></a>
		<a title="Previsualizar" onClick="previewDocument('${node.uuidUploaded}','${node.documentToCarryUploadedName?trim}')"><img src="/share/images/icons/preview.gif" border="0"></a>
	<#else>
		<a class="ico" title="Descargar" onClick="downloadDocument('${node.uuidUploaded}','${node.documentToCarryUploadedName?trim}')"><img src="/share/images/icons/download_doc.gif" border="0"></a>
		<a class="ico" title="Previsualizar" onClick="previewDocument('${node.uuidUploaded}','${node.documentToCarryUploadedName?trim}')"><img src="/share/images/icons/preview.gif" border="0"></a>
		<a class="ico" title="Comentar" onClick="commentPdf('${node.uuidUploaded}','${node.documentToCarryUploadedName?trim}')"><img src="/share/images/icons/forum-16.gif" border="0"></a>
		<!--<a  onClick="editOnGoogleDocs('${node.uuidUploaded}','${node.documentToCarryUploadedName?trim}')"><img src="/share/images/icons/edit_icon.gif" border="0"></a>-->
		<a class="ico" title="Historial" onClick="documentHistory('${node.uuidUploaded}','${node.documentToCarryUploadedName?trim}')"><img src="/share/images/icons/versionHistory_icon.gif" border="0"></a>
		<a class="ico" title="Eliminar" onClick="deleteDocument('${node.uuidUploaded}','${node.documentToCarryUploadedName?trim}')"><img src="/share/images/icons/delete.gif" border="0"></a>
	</#if>
	</td>
	</tr>
	</#list>
	
	</tbody>
	</table>
</div>
</html>


