<body>
<table class="rol-list">
<#if status!="-1">
<#list resultSet as node> 	
	<tr>
		<td><#if node.name?exists>${node.name?trim}</#if></td>
	</tr>	
	<tr>
		<td><#if node.documentalRol?exists>${node.documentalRol?trim}</#if></td>
	</tr>	
			
	<tr>
		<td><#if node.description?exists>${node.description?trim}</#if></td>
		<td style="width:20%;">
			<a data-toggle="modal" href="#deleteRol"><img src="/alfresco/images/icons/ico-delete.png" onClick="deleteRol(${node.id})"/></a>
			<a data-toggle="modal" href="#editRol"><img src="/alfresco/images/icons/ico-edit.png" onClick="editRol(${node.id})"/></a>
		</td>
	</tr>
</#list>
<#else>
	${message}
</#if>
</table>

<body>
