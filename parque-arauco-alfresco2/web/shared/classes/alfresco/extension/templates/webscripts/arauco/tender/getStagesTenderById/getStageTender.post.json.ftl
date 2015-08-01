{"resultSet" :[
<#list resultSet.result as node>
{
	<#if node.stageTypesTender.id?exists>
	"id": "${node.stageTypesTender.id?string?replace(".", "")}",
	<#else>
	"id" : "",
	</#if>
	<#if node.id?exists>
	"idStage": "${node.id?string?replace(".", "")}",
	<#else>
	"idStage" : "",
	</#if>
	<#if node.initDate?exists>
	"initDate": "${node.initDate?string("dd/MM/yyyy")}",
	<#else>
	"initDate" : "",
	</#if>
	<#if node.endDate?exists>
	"endDate": "${node.endDate?string("dd/MM/yyyy")}",
	<#else>
	"endDate" : "",
	</#if>
	<#if node.stageStatus?exists>
	"stageStatus": "${node.stageStatus}",
	<#else>
	"stageStatus" : "",
	</#if>
	<#if node.stageTypesTender.name?exists>
	"name": "${node.stageTypesTender.name}"
	<#else>
	"name" : ""
	</#if>
}
<#if node_has_next>,</#if>
</#list>
]}
