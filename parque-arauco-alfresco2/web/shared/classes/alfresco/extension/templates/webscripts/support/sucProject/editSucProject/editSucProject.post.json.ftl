{
	<#if resultSet.message?exists>
		"messege" : "${resultSet.message}"
	<#else>
		"messege" : ""
	</#if>
}