<html>
<head>
	<script>
		$(document).ready(function() {
			$("#searchTextfileTable").tablesorter();
		});	
	</script>
</head>

<body>
	<label>Resultados de la búsqueda</label>

	<table id="fileTable" class="tablesorter table-bordered">
		<thead> 
		<tr> 
		    <th>Documento</th> 
		    <th>Fecha</th> 
		    <th>Tama&ntildeo</th> 
		    
		</tr> 
		</thead>
		<tbody>
		<#if resultSet?exists>
		<#list resultSet as node>
	   		<tr>
				<td id="${node.properties['sys:node-uuid']}" class="documentNode">${node.name}</td>
				<td>${node.properties['cm:modified']?string("dd/MM/yyyy")}</td>
				<td>0 Mb</td>
				
			</tr>
		</#list>
		</#if>
		</tbody>
	</table>
</body>
</html>