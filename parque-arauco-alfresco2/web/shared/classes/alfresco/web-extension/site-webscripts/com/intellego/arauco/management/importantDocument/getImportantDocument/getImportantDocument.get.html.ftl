<#list resultSet as node> 	
<tr>
<td>${node.name}</td>
<td>${node.startDate}</td>
<td>${node.endDate}</td>



<td>


<a class="ico" onClick="downloadDocument('${node.uuid}','${node.name}')"><img src="/share/images/icons/download.png" border="0" title="Descargar"></a>
<a class="ico" onClick="previewDocument('${node.uuid}','${node.name}')"><img src="/share/images/icons/preview.png" border="0" title="Previsualizar"></a>
<a class="ico" onClick="removeImportantDocument('${node.uuid}')"><img src="/share/images/icons/remove-fav.png" border="0" title="Remover"></a>



</td>





</tr>
</#list>







