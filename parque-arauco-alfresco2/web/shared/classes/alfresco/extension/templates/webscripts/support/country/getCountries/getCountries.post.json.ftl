{"resultSet" :[
<#list resultSet.result as node>
{
	<#if node.id?exists>
	"idCountry": "${node.id?string?replace(".", "")}",
	<#else>
	"idCountry" : "",
	</#if>
	<#if node.name?exists>
	"nameCountry": "${node.name}"
	<#else>
	"nameCountry" : ""
	</#if>

}
<#if node_has_next>,</#if>
</#list>
]}

