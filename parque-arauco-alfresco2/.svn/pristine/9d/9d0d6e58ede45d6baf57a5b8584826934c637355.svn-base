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
	<a class="ico enviarhistorico" onclick="showApplicantDocuments('${node.name}')"></a>
	<#if stageStatus = "0">
		<input type="button" class="ico vincular" onclick="tenderAward()" style="height: 30px; width: 30px; border: none;" disabled/>
	<#else>
		<#if node.awardApplicant == 'true'>
			<a class="ico vincular" onclick="tenderUnlink('${node.name}')"></a>
			<input type="button" class="icosmall habilitado" style="height: 30px; width: 30px; border: none;" disabled/>
		<#else>
			<#if awardStatus = "1">
				<input type="button" class="ico vincular" onclick="tenderAward('${node.name}')" style="height: 30px; width: 30px; border: none;" disabled/>
			<#else>
				<a class="ico vincular" onclick="tenderAward('${node.name}')"></a>
			</#if>
		</#if>	
	</#if>
	
</td>

</tr>
</#list>
</tbody>

</table>