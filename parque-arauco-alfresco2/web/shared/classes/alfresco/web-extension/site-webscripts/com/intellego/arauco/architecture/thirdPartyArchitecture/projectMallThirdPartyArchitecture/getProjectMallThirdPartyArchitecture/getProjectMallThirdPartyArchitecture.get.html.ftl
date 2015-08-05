<div id="tableGetProjectMall" class="col-md-12 column">

<table cellpadding="0" cellspacing="0" border="0" class="dataTableClass table table-striped table-bordered dataTableFuntionGetProjectMall" id="tableGetProjectMall" >
<thead> 
			<tr>
			<th>Nombre</th>
			<th>Etapa</th>
			<th>Descripción</th>
			<th>Mall</th>
			<th>Acciones</th>
			
			</tr>
			</thead>
			<tbody>

<#list resultSet as node> 	
<#if node.stageId != "ctl-1">
<tr>
<td>${node.name}</td>
<td>${node.stageName}</td>
<td>${node.description}</td>
<td>${node.MallEntityName}</td>
<td><a class="ico editProject" title="Editar" onclick="getAssociatedDocuments(${node.stageId},${node.id});"></a></td>

</tr>
</#if>
</#list>
</tbody>
  </table>