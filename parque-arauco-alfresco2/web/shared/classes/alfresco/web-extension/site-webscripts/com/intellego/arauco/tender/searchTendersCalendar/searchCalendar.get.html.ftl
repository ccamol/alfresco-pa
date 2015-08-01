<table id="stagesCalendarApplicant" class="dataTableClass table table-striped table-bordered">
<thead>
<tr>
<th>Nombre Etapa</th>       
<th>Fecha Inicio</th> 
<th>Fecha Fin</th>
</tr>
</thead>
<tbody>
<#list resultSet as node> 	
<tr>
<td>${node.stageName}</td>
<td>${node.initDate}</td>
<td>${node.endDate}</td>
</tr>
</#list>
</tbody>

</table>