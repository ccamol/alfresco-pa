[
<#if workflowTasks?exists>
<#list workflowTasks as t>
	{
	"id": "${t.id}",
	"title": "${t.title}",
	"state": "${t.state}",
	<#if t.created?exists && t.created?is_date>
	"created": "${t.created?datetime}",
	<#else>
	"created": "",
	</#if>
	<#if t.completionDate?exists && t.completionDate?is_date>
	"completionDate": "${t.completionDate?datetime}",
	<#else>
	"completionDate": "",
	</#if>
	<#if t.owner?exists>
	"owner": "${t.owner}",
	<#else>
	"owner": "",
	</#if>
	<#if t.comment?exists>
	"comment": "${t.comment}"
	<#else>
	"comment": ""
	</#if>
	}<#if t_has_next>, </#if>
</#list>
</#if>
]