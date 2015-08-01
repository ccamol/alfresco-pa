<table id="stagesCalendar" class="dataTableClass table table-striped table-bordered">
<thead>
<tr>
<th>Etapa</th>
<th>Fecha de inicio</th>
<th>Fecha de término</th>
</tr>
</thead>
<tbody>
<#list resultSet as node> 	

	 <td><label>${node.name}</label>   </td>
	 <td><input type="text" style="width:100% !important" class="datePickers" id="${node.id}Init"></td>
	 <td><input type="text" style="width:100% !important" class="datePickers" id="${node.id}finish"></td>
</tr>	 
</#list>
</tbody>
</table>