{
	<#if resultSet.message?exists>
		"status" : "${resultSet.status?string?replace(".", "")}"
	<#else>
		"status" : ""
	</#if>
}