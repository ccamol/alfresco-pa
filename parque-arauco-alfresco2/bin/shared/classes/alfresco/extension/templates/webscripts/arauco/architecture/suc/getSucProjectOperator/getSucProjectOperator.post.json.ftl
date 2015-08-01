{"resultSet" :[
<#list resultSet.result as node>
{
	<#if node.id?exists>
	"id": "${node.id?string?replace(".", "")}",
	<#else>
	"id" : "",
	</#if>

	<#if node.name?exists>
	"name": "${node.name}"
	<#else>
	"name" : ""
	</#if>

}
<#if node_has_next>,</#if>
</#list>
]}
