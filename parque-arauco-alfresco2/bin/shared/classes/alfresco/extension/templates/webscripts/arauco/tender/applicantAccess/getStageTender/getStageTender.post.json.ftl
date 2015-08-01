{"resultSet" :[
<#if resultSet?exists>
<#list resultSet as node>
<#list node as stages>
{
	<#if stages.id?exists>
	"id": "${stages.id?string?replace(".", "")}",
	<#else>
	"id" : "",
	</#if>
	<#if stages.tender.projectName?exists>
	"projectName": "${stages.tender.projectName}",
	<#else>
	"projectName" : "",
	</#if>

	<#if stages.tender.name?exists>
	"tenderName": "${stages.tender.name}",
	<#else>
	"tenderName" : "",
	</#if>

	<#if stages.tender.id?exists>
	"tenderId": "${stages.tender.id?string?replace(".", "")}",
	<#else>
	"tenderId" : "",
	</#if>
	<#if stages.tender.tenderStatus?exists>
	"tenderStatus": "${stages.tender.tenderStatus}",
	<#else>
	"tenderStatus" : "",
	</#if>

	<#if stages.stageTypesTender.name?exists>
	"stageName": "${stages.stageTypesTender.name}",
	<#else>
	"stageName" : "",
	</#if>

	<#if stages.stageTypesTender.id?exists>
	"stageId": "${stages.stageTypesTender.id?string?replace(".", "")}",
	<#else>
	"stageId" : "",
	</#if>

	<#if stages.initDate?exists>
	"initDate": "${stages.initDate?string("dd/MM/yyyy")}",
	<#else>
	"initDate" : "",
	</#if>
	<#if stages.endDate?exists>
	"endDate": "${stages.endDate?string("dd/MM/yyyy")}"
	<#else>
	"endDate" : ""
		</#if>	
}
<#if stages_has_next>,</#if>
</#list>
<#if node_has_next>,</#if>
</#list>
</#if>
]}
