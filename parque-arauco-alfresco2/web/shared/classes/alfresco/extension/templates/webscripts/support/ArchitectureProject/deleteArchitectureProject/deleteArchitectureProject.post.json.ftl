{
	<#if response?exists>
		<#if response.message?exists>
			"messege" : "${response.message}",
		<#else>
			"messege" : "",
		</#if>
	<#else>
		"response" : "",
	</#if>
	
	<#if resultSet?exists>
		"resultSet" : "${resultSet}"
	<#else>
		"resultSet" : ""
	</#if>
}