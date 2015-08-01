[
<#if documentWorkflows?exists>
<#list documentWorkflows as dwf>
	{
	"id": "${dwf.id}",
	"title": "${dwf.title}",
	"description": "${dwf.description}",
	"startDate": "${dwf.startDate?datetime}",
	<#if dwf.endDate?exists && dwf.endDate?is_date>
	"endDate": "${dwf.endDate?datetime}",
	<#else>
	"endDate": "",
	</#if>
	"isActive": ${dwf.isActive?string},
	"initiator": {"firstName": "${dwf.initiatorFirstName}", "lastName": "${dwf.initiatorLastName}"}
	}<#if dwf_has_next>, </#if>
</#list>
</#if>
]