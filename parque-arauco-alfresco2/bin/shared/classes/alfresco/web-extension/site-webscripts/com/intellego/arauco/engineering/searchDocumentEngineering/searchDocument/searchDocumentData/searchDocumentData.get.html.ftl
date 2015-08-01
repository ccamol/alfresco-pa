<table id="listFilter" class="dataTableClass table table-striped table-bordered">
<thead>
<tr>
<th>Centro Comercial</th>
<th>Tipo</th>
<th>Especialidad</th>
<th>Sub-Sección</th>
<th>Suc</th> 
<th>Operador</th>        
<th>Fecha</th>        
</tr>
</thead>

<#list resultSet as node> 	
<tr>
<td id="${node.uuid}" class="documentNode" name="${node.name?trim}">${node.mall?trim}</td>
<td id="${node.uuid}" class="documentNode" name="${node.name?trim}">${node.documentType?trim}</td>
<td id="${node.uuid}" class="documentNode" name="${node.name?trim}">${node.specialty?trim}</td>
<td id="${node.uuid}" class="documentNode" name="${node.name?trim}">${node.subsection?trim}</td>
<td id="${node.uuid}" class="documentNode" name="${node.name?trim}">${node.sucNumber?trim}</td>
<td id="${node.uuid}" class="documentNode" name="${node.name?trim}">${node.storeName?trim}</td>
<td id="${node.uuid}" class="documentNode" name="${node.name?trim}" data-order="${node.filterDate?replace("/","")?trim}">${node.documentDate?trim}</td>
</tr>
</#list>
</table>