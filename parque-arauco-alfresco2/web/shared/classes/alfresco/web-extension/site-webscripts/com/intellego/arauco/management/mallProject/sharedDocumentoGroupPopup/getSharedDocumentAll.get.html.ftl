<#if resultSet?exists>
	<#list resultSet as node>
		<#if node?exists>
			${node.thirdPartyName} <img style="padding-bottom:5px;" src="/share/bootstrap/img/ico-quitar.png" onClick="addSharedDocument(${node.architectureProjectEntity} , '${node.uuid}' , ${node.id});" /><br>
		</#if>  
	</#list>
</#if>


