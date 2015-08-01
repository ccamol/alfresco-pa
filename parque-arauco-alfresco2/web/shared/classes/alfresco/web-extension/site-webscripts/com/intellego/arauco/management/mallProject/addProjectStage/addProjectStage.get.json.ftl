{
<#if resultSet?exists>
	<#if resultSet.status?exists>
		"status": "${resultSet.status}"
	<#else>
		"status" : ""
	</#if>	
</#if>
}