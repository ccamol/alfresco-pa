{"resultSet" :[
<#list resultSet.result as node>
{
	<#if node.id?exists>
	"id": "${node.id?string?replace(".", "")}",
	<#else>
	"id" : "",
	</#if>
	<#if node.tenderStatus?exists>
	"tenderStatus": "${node.tenderStatus}",
	<#else>
	"tenderStatus" : "",
	</#if>
	<#if node.projectId?exists>
	"projectId": "${node.projectId?string?replace(".", "")}",
	<#else>
	"projectId" : "",
	</#if>
	<#if node.projectName?exists>
	"projectName": "${node.projectName}",
	<#else>
	"projectName" : "",
	</#if>
	<#if node.name?exists>
	"name": "${node.name}",
	<#else>
	"name" : "",
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
	
	<#if node.organizationalArea.id?exists>
	"organizationalAreaId": "${node.organizationalArea.id?string?replace(".", "")}",
	<#else>
	"organizationalAreaId" : "",
	</#if>
	
	
	<#if node.organizationalArea.name?exists>
	"organizationalAreaName": "${node.organizationalArea.name}",
	<#else>
	"organizationalAreaName" : "",
	</#if>
	
	
	<#if node.projectType.id?exists>
	"projectTypeId": "${node.projectType.id?string?replace(".", "")}",
	<#else>
	"projectTypeId" : "",
	</#if>
	
	
	<#if node.projectType.name?exists>
	"projectTypeName": "${node.projectType.name}"
	<#else>
	"projectTypeName" : ""
	</#if>
	
}
<#if node_has_next>,</#if>
</#list>
]}
