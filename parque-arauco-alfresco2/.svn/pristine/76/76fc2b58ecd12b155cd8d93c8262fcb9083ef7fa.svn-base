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
	<#if stageStatus = "0">
	<input title="Eliminar" type="button" class="ico delete" onclick="deleteApplicant('${node.id?replace(".","")}', '${node.idTender?replace(".","")}')" style="height: 30px; width: 30px; border: none;" disabled></input>
	<input title="Editar" type="button" class="ico editProject" onclick="editApplicant('${node.id?replace(".","")}', '${node.identificationNumber?replace(".","")}', '${node.name}', '${node.countryId}', '${node.mallId}', '${node.mail}', '${node.additionalInfo}')" style="height: 30px; width: 30px; border: none;" disabled></input>
	<#else>
	<a title="Eliminar" class="ico delete" onclick="deleteApplicant('${node.id?replace(".","")}', '${node.idTender?replace(".","")}')"></a>
	<a title="Editar" class="ico editProject" onclick="editApplicant('${node.id?replace(".","")}', '${node.identificationNumber?replace(".","")}', '${node.name}', '${node.countryId}', '${node.mallId}', '${node.mail}', '${node.additionalInfo}')"></a>
	</#if>
</td>

</tr>
</#list>
</tbody>

</table>