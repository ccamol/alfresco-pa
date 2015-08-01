{
	<#if resultSet.status?exists>
		"status" : "${resultSet.status?string?replace(".", "")}",
	<#else>
		"status" : "",
	</#if>
	<#if resultSet.message?exists>
		"message" : "${resultSet.message}"
	<#else>
		"message" : ""
	</#if>
}