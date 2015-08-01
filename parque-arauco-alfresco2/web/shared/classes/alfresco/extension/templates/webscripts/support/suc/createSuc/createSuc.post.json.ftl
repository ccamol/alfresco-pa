{
	<#if resultSet.message?exists>
		"message" : "${resultSet.message}"
	<#else>
		"message" : ""
	</#if>
}