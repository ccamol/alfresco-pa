<table cellpadding="0" cellspacing="0" border="0" class="dataTableClass table table-striped table-bordered " id="tableAssocDocument" >
<thead> 
			<tr>
			<th>Acciones</th>
			<th>Titulo</th>
			<th>Tipo</th>
			<th>Mall</th>
			<th>Suc</th>
			<th>Sección</th>
			<th>Etapa</th>
			</tr>
			</thead>
			<tbody>
<#list resultSet as node>
    <tr>
    
         <#if node.properties["sys:node-uuid"]?exists >
	<td>
<a class="ico" onClick="downloadDocument('${node.properties["sys:node-uuid"]}','${node.properties["cm:name"]}')"><img src="/share/images/icons/download_doc.gif" border="0"></a>
<a class="ico" onClick="previewDocument('${node.properties["sys:node-uuid"]}','${node.properties["cm:name"]}')"><img src="/share/images/icons/preview.gif" border="0"></a>
	 </td>
			<#else>
				<td></td>
			</#if>	
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
    
     <#if node.properties["pa:mall"]?exists >
	<td>${node.properties["pa:mall"]} </td>
			<#else>
				<td></td>
			</#if>
			
			    <#if node.properties["pa:storeName"]?exists >
	<td>${node.properties["pa:storeName"]} </td>
			<#else>
				<td></td>
			</#if>
			
				    <#if node.properties["pa:section"]?exists >
	<td>${node.properties["pa:section"]} </td>
			<#else>
				<td></td>
			</#if>
			
				    <#if node.properties["pa:stage"]?exists >
	<td>${node.properties["pa:stage"]} </td>
			<#else>
				<td></td>
			</#if>

    </tr>
<#if node_has_next></#if>
</#list>
		</tbody>
  </table>





