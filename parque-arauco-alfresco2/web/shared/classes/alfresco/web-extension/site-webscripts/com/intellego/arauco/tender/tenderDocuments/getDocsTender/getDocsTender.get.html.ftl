<thead>
<tr>
<th>Nombre</th>
<th>Tipo de documento</th>
<th>Fecha de creaci&oacute;n</th>
</tr>
</thead>
<#list resultSet as node> 	
<tr>
<td id=${node.uuid} class="documentNode"> (${node.description}) ${node.name?trim}</td>
<td> ${node.documentType}</td>
<td> ${node.createdDate}</td>
</tr>
</#list>
