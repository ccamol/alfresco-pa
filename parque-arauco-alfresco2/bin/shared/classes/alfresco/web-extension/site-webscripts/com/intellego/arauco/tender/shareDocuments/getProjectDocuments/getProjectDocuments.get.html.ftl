<h4>Documentos del proyecto</h4>
<table cellpadding="0" cellspacing="0" border="0" class="dataTableClass table table-striped table-bordered dataTableFuntion" id="projectDocuments">
<thead>
<tr>
<th>Nombre</th>
<th>Acciones</th>
</tr>
</thead>

<#list resultSet as node> 	
<tr>

<td style="padding: 12px;">${node.name?trim}</td>
<td>
	<#assign flag = false>
	<#list response as compare>
		<#if node.uuid == compare.uuid>
			<#assign flag = true>
		</#if>	
	</#list>
	<#if flag = false>
		<#if stageStatus = "0">
		<input type="button" id="mas" onclick="addDocumentPopUp('${node.uuid}', '${node.name}', '${node.documentType}', '${node.created}')" style="height: 15px; width: 15px; border: none;" disabled/>
		<#else>
		<a id="mas" onclick="addDocumentPopUp('${node.uuid}', '${node.name}', '${node.documentType}', '${node.created}')" />
		</#if>
	</#if>
	
</td>
</tr>
</#list>
</table>