<table cellpadding="0" cellspacing="0" border="0" class="dataTableClass table table-striped table-bordered " id="tableSharedDocument" >
<thead> 
			<tr>
			<th>Titulo Documento</th>
			<th>Tipo</th>
			<th>Fecha de carga</th>
			<th>Acciones</th>
			</tr>
			</thead>
			<tbody>
<#list resultSet as node>
    <tr>
    
     <#if node.properties["cm:name"]?exists >
	<td>${node.properties["cm:name"]} </td>
			<#else>
				<td></td>
			</#if>
			
			
			
     <#if node.properties["pa:documentType"]?exists >
	<td>${node.properties["pa:documentType"]} </td>
			<#else>
				<td></td>
			</#if>
    
     <#if node.properties["pa:inputAgreedDate"]?exists >
	<td>${node.properties["pa:inputAgreedDate"]} </td>
			<#else>
				<td></td>
			</#if>
    
    
     <#if node.properties["sys:node-uuid"]?exists >
	<td>
	
<a class="ico" onClick="downloadDocument('${node.properties["sys:node-uuid"]}','${node.properties["cm:name"]}')"><img src="/share/images/icons/download_doc.gif" border="0"></a>
<a class="ico" onClick="previewDocument('${node.properties["sys:node-uuid"]}','${node.properties["cm:name"]}')"><img src="/share/images/icons/preview.gif" border="0"></a>
<a class="ico" onClick="removeImportantDocument('${node.properties["sys:node-uuid"]}')"><img src="/share/images/icons/delete.gif" border="0"></a>
<a class="ico" onClick="downloadDocument('${node.properties["sys:node-uuid"]}','${node.properties["cm:name"]}')"><img src="/share/images/icons/download_doc.gif" border="0"></a>
<a class="ico" onClick="previewDocument('${node.properties["sys:node-uuid"]}','${node.properties["cm:name"]}')"><img src="/share/images/icons/preview.gif" border="0"></a>
<a class="ico" onClick="removeImportantDocument('${node.properties["sys:node-uuid"]}')"><img src="/share/images/icons/delete.gif" border="0"></a>
	
	 </td>
			<#else>
				<td></td>
			</#if>	
    </tr>
<#if node_has_next></#if>
</#list>
		</tbody>
  </table>





