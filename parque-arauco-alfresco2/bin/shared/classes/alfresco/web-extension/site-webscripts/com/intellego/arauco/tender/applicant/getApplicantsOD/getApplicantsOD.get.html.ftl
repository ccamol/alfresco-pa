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
		<input type="button" class="ico enviarhistorico" onclick="showApplicantDocuments()" style="height: 30px; width: 30px; border: none;" disabled/>
		<a class="ico preview" onclick="viewApplicant('${node.id?replace(".","")}', '${node.identificationNumber?replace(".","")}', '${node.name}', '${node.countryId}', '${node.mallId}', '${node.mail}', '${node.additionalInfo}')"></a>
	<#else>
		<a class="ico preview" onclick="viewApplicant('${node.id?replace(".","")}', '${node.identificationNumber?replace(".","")}', '${node.name}', '${node.countryId}', '${node.mallId}', '${node.mail}', '${node.additionalInfo}')"></a>
		<a class="ico enviarhistorico" onclick="showApplicantDocuments('${node.name}')"></a>
	</#if>
	
</td>

</tr>
</#list>
</tbody>

</table>