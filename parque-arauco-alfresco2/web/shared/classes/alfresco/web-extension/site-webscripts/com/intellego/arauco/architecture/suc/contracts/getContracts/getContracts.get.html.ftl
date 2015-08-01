<#list resultSet as node> 	
<tr>
<td>${node.name}</td>
<td>${node.startDateShow}</td>
<td>${node.finishDateShow}</td>
<#if (currentDate?number >= node.startDate?replace("-","")?number) && (currentDate?number <= node.finishDate?replace("-","")?number)>
	<td><a class="icosmall habilitado"></a> </td>
<#else>
	<td></td>
</#if>
</tr>
</#list>






