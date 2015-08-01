<#if resultSet?exists>
	<#list resultSet as node>
		${node.thirdPartyName} <img style="padding-bottom:5px;" src="/share/bootstrap/img/ico-quitar.png" onClick="deleteSharedDocument('${node.id}' , '${node.uuidDocument}');"/><br>
	</#list>
</#if>
