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
			<#assign filter = node.filterExpiration?number>
			<tr>
			
			<#if (filter = 0)>
				<#if (parseLong<=30)>
					<td>${node.name}</td>
					<td>${node.dateEnd}</td>
					<td><div class="expiration"></div></td>
					<td></td>
					<td></td>
					<#elseif (parseLong<=60)>
					<td>${node.name}</td>
					<td>${node.dateEnd}</td>
					<td></td>
					<td><div class="expiration"></div></td>
					<td></td>
					<#else>
					<td>${node.name}</td>
					<td>${node.dateEnd}</td>					
					<td></td>
					<td></td>
					<td><div class="expiration"></div></td>
				</#if>
			<#elseif (filter = 30)>
				<#if (parseLong >= 0) && (parseLong <= 30)>
					<td>${node.name}</td>
					<td>${node.dateEnd}</td>
					<td><div class="expiration"></div></td>
					<td></td>
					<td></td>
				<#else>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</#if>
			<#elseif (filter = 60)>
				<#if (parseLong >= 31) && (parseLong <= 60)>
					<td>${node.name}</td>
					<td>${node.dateEnd}</td>
					<td><div class="expiration"></div></td>
					<td></td>
					<td></td>
				<#else>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</#if>
			<#elseif (filter = 61)>
				<#if (parseLong >= 61)>
					<td>${node.name}</td>
					<td>${node.dateEnd}</td>
					<td><div class="expiration"></div></td>
					<td></td>
					<td></td>
				<#else>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</#if>
			<#else>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
			</#if>
			</#if>
			</tr>
			</#list>
			</tbody>
  </table>
