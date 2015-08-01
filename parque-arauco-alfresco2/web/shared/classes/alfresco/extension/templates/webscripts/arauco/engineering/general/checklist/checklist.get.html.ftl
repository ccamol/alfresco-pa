<table id="checkListTable" cellpadding="0" cellspacing="0" border="0" class="dataTableClass table table-striped table-bordered">
<thead> 
	<tr>
	<th width="20%">Documento</th>
	<th width="20%">Subido por</th>
	<th width="12%" style="text-align:center;">Fecha</th>
	<th width="4%" style="text-align:center;">Check</th>
	<th>Observaci&oacuten</th>
	</tr>
</thead>
	<tbody>
		<#if resultSet?exists>
		<#list resultSet as node>
			<tr>
			<#if node.documentTypeName?exists>
				<td>${node.documentTypeName}</td>
			<#else>
				<td></td>
			</#if>
			<#if node.owner?exists>
				<td>${node.owner}</td>
			<#else>
				<td></td>
			</#if>
			<#if node.loadDate?exists>
				<td style="text-align:center;">${node.loadDate?string("dd/MM/yyyy HH:mm:ss")}</td>
			<#else>
				<td></td>
			</#if>
			<#if node.check?exists>
				<#if node.check>
					<td style="text-align:center;"><input type="checkbox" checked disabled></td>
				<#else>
					<td style="text-align:center;"><input type="checkbox" disabled></td>
				</#if>
			<#else>
				<td><input type="checkbox"></td>
			</#if>
			<#if node.comments?exists>
				<td style="background:#FFFFFF"><a style="float:left;" class="ico editProject" title="editar" onclick="editComment('${node.uuid}', '${node.documentType}')"> </a> &nbsp;&nbsp;${node.comments}</td>
			<#else>
				<td style="background:#FFFFFF"><a style="float:left;" class="ico editProject" title="editar" onclick="editComment('${node.uuid}', '${node.documentType}')"> </a></td>
			</#if>
			</tr>
			<tr>
		</#list>
		</#if>
	</tbody>
</table>



