<div id="tendersCategories">
<h4>Categor&iacute;as Licitaci&oacute;n</h4>
<#list resultSet.resultSet as node> 	
<div id="cat"${node.id}> ${node.name} <a id="menos" onclick="removeCategoryToTender(${node.idTenderCategory})"></a></div><br>
</#list>
</div>
