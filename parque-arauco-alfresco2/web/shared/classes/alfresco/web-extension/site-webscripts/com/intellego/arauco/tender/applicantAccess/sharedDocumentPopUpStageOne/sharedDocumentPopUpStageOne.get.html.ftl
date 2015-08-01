<table id="searchTendersApplicantTypeOne" class="dataTableClass table table-striped table-bordered">
<thead>
<tr>
<th>Nombre</th>
<th>Acciones</th>
</tr>
</thead>
<tbody>
<#list resultSet as node> 	
<tr>
<td>${node.name?trim} (${node.description})</td>
<td>
<a class="ico" title="Descargar" onClick="downloadDocument('${node.uuid}','${node.name}')"><img src="/share/images/icons/download_doc.gif" border="0"></a>
<a class="ico" title="Previsualizar" onClick="previewDocument('${node.uuid}','${node.name}')"><img src="/share/images/icons/preview.gif" border="0"></a>
</td>
</tr>
</#list>
</tbody>
</table>
