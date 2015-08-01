<html>
<head>
	<script>
		$(document).ready(function() {
			$("#fileTable").tablesorter();
		});	
	</script>
</head>

<body>
	<table id="fileTable" class="tablesorter table-bordered">
		<thead> 
		<tr> 
		    <th>Documento</th> 
		    <th>Fecha</th> 
		    <th>Tama&ntildeo</th> 
		    
		</tr> 
		</thead>
		<tbody>
		<#list resultSet as node>
			<#if node.type=="document">
	   		<tr>
				<td id="${node.uuid}" class="documentNode">${node.name}</td>
				<td>${node.modified}</td>
				<td>${node.size} Mb</td>
				
			</tr>
			</#if>
		</#list>
		</tbody>
	</table>
</body>
</html>