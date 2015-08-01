<table id="stagesCalendarEdit" class="dataTableClass table table-striped table-bordered">
<thead>
<tr>
<th>Etapa</th>
<th>Fecha de inicio</th>
<th>Fecha de termino</th>
</tr>
</thead>
<tbody>
<#list resultSet as node> 	
<tr>
	  <td>${node.name}
	   <input type="hidden" id="${node.id}Stage" value="${node.idStage}"/>
	  </td>   
	  <td>
	  	<input type="text" style="width:100% !important" class="datePickers" id="${node.id}Init" value="${node.initDate}" />
	  </td>
	  <td><input type="text" style="width:100% !important" class="datePickers" id="${node.id}finish" value="${node.endDate}"></td>
</tr>
</#list>
</tbody>
</table>