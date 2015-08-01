{"resultSet" :[
<#list resultSet.result as node>
{
	<#if node.id?exists>
	"idMall": "${node.id?string?replace(".", "")}",
	<#else>
	"idMall" : "",
	</#if>
	<#if node.name?exists>
	"nameMall": "${node.name}"
	<#else>
	"nameMall" : ""
	</#if>

}
<#if node_has_next>,</#if>
</#list>
]}

