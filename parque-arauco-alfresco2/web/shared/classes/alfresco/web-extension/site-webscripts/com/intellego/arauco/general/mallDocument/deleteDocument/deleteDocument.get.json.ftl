{
	<#if status?exists>
	"status": ${status?string}
	<#else>
	"status": false
	</#if>
}