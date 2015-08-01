<table id="checkListTable" cellpadding="0" cellspacing="0" border="0" class="dataTableClass table table-striped table-bordered">
<thead> 
	<tr>
		<th width="2%">Check</th>
		<th width="58%">Titulo</th>
		<th width="20%" style="text-align:center;">Fecha de Carga</th>
		<th width="20%" style="text-align:center;">Acciones</th>
	</tr>
</thead>
	<tbody>
		<#if resultSet?exists>
		<#list resultSet as node>
			<tr>
			<#if node.check?exists>
				<#if node.check>
					<td style="text-align:center;"><input type="checkbox" checked disabled></td>
				<#else>
					<td style="text-align:center;"><input type="checkbox" disabled></td>
				</#if>
			<#else>
			
				<td><input type="checkbox"></td>
			</#if>
			<#if node.documentTypeName?exists>
				<td>${node.documentTypeName}</td>
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
				<td style="background:#FFFFFF">
				<a class="ico" onClick="downloadDocument('${node.uuid}','${node.documentTypeName}')"><img src="/share/images/icons/download_doc.gif" border="0"></a>
				<a class="ico" onClick="previewDocument('${node.uuid}','${node.documentType}')"><img src="/share/images/icons/preview.gif" border="0"></a>
				<a class="ico" onClick="updateDocument('${node.uuid}','${node.documentType}')"><img src="/share/images/icons/update.gif" border="0"></a>
				<a class="ico" onClick="commentPdf('${node.uuid}','${node.documentType}')"><img src="/share/images/icons/forum-16.gif" border="0"></a>
				</td>
			<#else>	
			
			<td style="background:#FFFFFF">
				<a class="ico" onClick="uploadDocumentOperator()"><img src="/share/bootstrap/img/ico-stage.png" border="0"></a>
				</td>
				</#if>
			<#else>
				<td style="background:#FFFFFF"></td>
				
			</#if>
			</tr>
			<tr>
		</#list>
		</#if>
	</tbody>
</table>