<thead>
<tr>
<th>Nombre</th>
<th>Acciones</th>
</tr>
</thead>
<#list resultSet as node> 	
<tr>
<td>${node.description?trim}</td>
<td>
	<#if stageStatus = "0">
		<input type="button" id="mas" onclick="addDocTypePopUp('${node.id}')" disabled/></td>
	<#else>
		<a id="mas" onclick="addDocTypePopUp('${node.id}')" /></td>
	</#if>
</tr>
</#list>
