{"resultSet" :[
<#if resultSet?exists>
<#list resultSet as node>
{

	<#if node.id?exists>
	"categoryId": "${node.id}",
	<#else>
	"categoryId" : "",
	</#if>	
	
	<#if node.name?exists>
	"categoryName": "${node.name}"
	<#else>
	"categoryName" : ""
	</#if>	
}
<#if node_has_next>,</#if>
</#list>
</#if>
]}
