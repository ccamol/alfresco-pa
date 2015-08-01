<table id="applicantsTender" class="dataTableClass table table-striped table-bordered">
<thead>
<tr>
<th>Postulante</th>
<th>Acciones</th>
</tr>
</thead>
<tbody>
<#list resultSet as node> 	
<tr>
<td>${node.name} <br> ${node.identificationNumber?replace(".","")} </td>
<td>
	<a title="Ver" class="ico preview" onclick="viewApplicant('${node.id?replace(".","")}', '${node.identificationNumber?replace(".","")}', '${node.name}', '${node.countryId}', '${node.mallId}', '${node.mail}', '${node.additionalInfo}')"></a>
	
</td>

</tr>
</#list>
</tbody>

</table>