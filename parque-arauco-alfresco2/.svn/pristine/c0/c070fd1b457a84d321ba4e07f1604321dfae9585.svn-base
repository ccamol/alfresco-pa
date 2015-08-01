<html>
<head>
	<script>
		$(document).ready(function() {
			$("#fileTable").tablesorter();
		});	
	</script>
</head>

<body>
	<table id="fileTable" class="tablesorter table-bordered" style="white-space: nowrap;">
		<thead> 
		<tr> 
		    <th>Documento</th> 
		    <th>Fecha</th> 
		    <th>Tama&ntildeo</th> 
		    <th>Ruta</th> 
		    
		</tr> 
		</thead>
		<tbody>
		<#list resultSet as node>
			<#if node.type=="document">
	   		<tr>
				<td id="${node.uuid}" class="documentNode">${node.name}</td>
				<td>${node.modified}</td>
				<td>${node.size} Mb</td>
				<td><a href="${node.pathLink}">${node.path}</a></td>
				
			</tr>
			</#if>
		</#list>
		</tbody>
	</table>
</body>
</html>