{
	<#if status?exists>
		"status" : "${status?string?replace(".", "")}"
	<#else>
		"status" : "-1"
	</#if>
}