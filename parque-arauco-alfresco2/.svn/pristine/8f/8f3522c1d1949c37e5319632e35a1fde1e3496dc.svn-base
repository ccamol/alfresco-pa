<thead>
<tr>
<th>Nombre</th>
<th>Tipo de documento</th>
<th>Fecha de creaci&oacute;n</th>
<th>Acciones</th>
</tr>
</thead>
<#list resultSet as node> 	
<tr>
<td id=${node.uuid} class="documentNode"> (${node.description}) ${node.name?trim}</td>
<td> ${node.documentType}</td>
<td> ${node.createdDate}</td>
<td> 

	<a class="ico" title="Descargar" onClick="downloadDocument('${node.uuid}','${node.name}')"><img src="/share/images/icons/download_doc.gif" border="0"></a>
	<a class="ico" title="Previsualizar" onClick="previewDocument('${node.uuid}','${node.documentType}')"><img src="/share/images/icons/preview.gif" border="0"></a>

</td>
</tr>
</#list>
