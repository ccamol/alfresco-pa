<table cellpadding="0" cellspacing="0" border="0" class="dataTableClass table table-striped table-bordered dataTableFuntion" id="documentsTorequest">
<thead>
<tr>
<th>Nombre</th>
<th>Acciones</th>
</tr>
</thead>
<#list resultSet as node> 	
<tr>
<td>(${node.description}) ${node.name?trim}</td>
<td>
<#if stageStatus = "0">
	<input type="button" id="menos" onclick="deleteDocToCarry('${node.id}')" disabled/>
<#else>
	<a id="menos" onclick="deleteDocToCarry('${node.id}')" />
</#if>
<#if type = "0">
	<a class="ico" onClick="downloadDocument('${node.uuid}','${node.name}')"><img src="/share/images/icons/download_doc.gif" border="0"></a>
	<a class="ico" onClick="previewDocument('${node.uuid}','${node.name}')"><img src="/share/images/icons/preview.gif" border="0"></a>
</#if>

</td>
</tr>
</#list>
</table>