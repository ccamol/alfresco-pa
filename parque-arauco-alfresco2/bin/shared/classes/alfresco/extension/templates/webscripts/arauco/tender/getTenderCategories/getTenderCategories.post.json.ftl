{"resultSet" :[
<#list resultSet as node>
{

<#if node.id?exists>
	"idTenderCategory": "${node.id?string?replace(".", "")}",
	<#else>
	"idTenderCategory" : "",
	</#if>

	<#if node.category.id?exists>
	"id": "${node.category.id?string?replace(".", "")}",
	<#else>
	"id" : "",
	</#if>

	
	<#if node.category.name?exists>
	"name": "${node.category.name}"
	<#else>
	"name" : ""
	</#if>
}
<#if node_has_next>,</#if>
</#list>
]}
