{"resultSet" :[
<#list response.result as node>
{
	<#if node.id?exists>
	"id": "${node.id?string?replace(".", "")}",
	<#else>
	"id" : "",
	</#if>

	<#if node.name?exists>
	"name": "${node.name}",
	<#else>
	"name" : "",
	</#if>
	
	<#if node.startDate?exists>
	"startDate": "${node.startDate?string("yyyy-MM-dd")}",
	<#else>
	"startDate" : "",
	</#if>
	
	<#if node.finishDate?exists>
	"finishDate": "${node.finishDate?string("yyyy-MM-dd")}",
	<#else>
	"finishDate" : ""
	</#if>
	
	<#if node.startDate?exists>
	"startDateShow": "${node.startDate?string("dd-MM-yyyy")}",
	<#else>
	"startDateShow" : "",
	</#if>
	
	<#if node.finishDate?exists>
	"finishDateShow": "${node.finishDate?string("dd-MM-yyyy")}"
	<#else>
	"finishDateShow" : ""
	</#if>
}
<#if node_has_next>,</#if>
</#list>
]}