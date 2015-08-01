<div id="tableGetProjectSuc" class="col-md-12 column">

 <table cellpadding="0" cellspacing="0" border="0" class="dataTableClass table table-striped table-bordered dataTableFuntionProjectSuc" id="getProjectSuc" >
<thead> 
			<tr>
			<th>Tipo de proyecto</th>
			<th>Etapa</th>
			<th>Nombre</th>
			<th></th>
			</tr>
			</thead>
			<tbody>

<#list resultSet as node> 	
<tr>
<td>${node.projectTypeName}</td>
<td>${node.stageName}</td>
<td>${node.name}</td>
<td>
<a class="ico preview" onclick="getSucProjectStageDocument(${node.stageId},${node.id},${node.stageStatus},this);" title = "Ver"></a>
	</td>
</tr>
</#list>
</tbody>
 </table>
