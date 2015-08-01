<thead>
<tr>
<th>Postulantes de Licitación</th>
</tr>
</thead>
<tbody>
<#list resultSet as node> 
<#if node.idTender == tender>
<tr>
<td>${node.name} </td>

</tr>
</#if>
</#list>
</tbody>