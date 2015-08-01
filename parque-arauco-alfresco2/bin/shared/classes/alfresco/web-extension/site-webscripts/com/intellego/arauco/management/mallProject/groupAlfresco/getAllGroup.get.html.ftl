<#if resultSet?exists>
	<#list resultSet as node>
		<#if node?exists>
			${node.displayName} <img style="padding-bottom:5px;" src="/share/bootstrap/img/ico-quitar.png" onClick="addGroup('${node.fullName}' , ${node.idProject});" /><br>
		</#if>  
	</#list>
</#if>
