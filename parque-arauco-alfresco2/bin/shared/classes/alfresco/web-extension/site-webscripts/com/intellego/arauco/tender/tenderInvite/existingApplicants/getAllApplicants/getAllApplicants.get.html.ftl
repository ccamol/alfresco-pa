<thead>
<tr>
<th>Postulantes</th>
<th></th>
</tr>
</thead>
<tbody>
<#list resultSet as node>

<tr>
<td>${node.name}</td>
<td>
<#assign flag = false />
<#list resultSetApplicants as applicants> 	
	<#if node.id == applicants.id>
		<#assign flag = true />
	</#if>
</#list>
<#if flag = false>
	<a id="mas" onclick="addApplicantToTender('${node.id}')"></a>
</#if>
</td>
</tr>
</#list>
</tbody>