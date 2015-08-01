<div id="tablesuc" class="col-md-12 column" style="overflow-y: scroll; height: 280px;">

 <table cellpadding="0" cellspacing="0" border="0" class="dataTableClass table table-striped table-bordered dataTableFuntionSuc" id="getSuc" >
<thead> 
			<tr>
			<th>Nombre</th>
			<th>Mall</th>
			<th>Fecha Inicio Contrato</th>
			<th></th>
			</tr>
			</thead>
			<tbody>

<#list resultSet as node> 	
<tr>
<td>${node.name}</td>
<td>${node.nameMall}</td>
<td>${node.contractDate}</td>
<td><a title="Ver" class="ico preview"  onclick="getSucProject(${node.id?replace(".","")}, this)">
	</a></td>
</tr>
</#list>
</tbody>
  </table>























