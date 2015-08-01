<table class="dataTableClass table table-striped table-bordered" id="listExpiration" >
	<thead> 
			<tr>
			<th>Documento</th>
			<th>Fecha vigencia</th>
			<th>A 30 d&iacute;as</th>
			<th>A 60 d&iacute;as</th>
			<th>Mayor a 60 d&iacute;as</th>
			</tr>
	</thead>
			<tbody>
			
			<#list resultSet as node> 	
			<#if node.endDate != ''>
			<#assign getLong = '${node.endDate?replace(".","")?replace(",",".")}'>
			<#assign parseLong = getLong?number>
			<tr>
			<td>${node.name}</td>
			<td>${node.dateEnd}</td>

			<#if (parseLong<=30)>
				<td><div class="expiration"></div></td>
				<td></td>
				<td></td>
				<#elseif (parseLong<=60)>
				<td></td>
				<td><div class="expiration"></div></td>
				<td></td>
				<#else>
				<td></td>
				<td></td>
				<td><div class="expiration"></div></td>
			</#if>
			</#if>
			</tr>
			</#list>
			</tbody>
  </table>
