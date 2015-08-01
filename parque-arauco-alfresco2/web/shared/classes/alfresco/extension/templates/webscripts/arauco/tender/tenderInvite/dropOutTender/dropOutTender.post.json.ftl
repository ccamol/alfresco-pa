{
	<#if resultSet.status?exists>
		"status" : "${resultSet.status?string?replace(".", "")}"
	<#else>
		"status" : ""
	</#if>
}