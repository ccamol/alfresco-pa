{"resultSet" :[
<#list resultSet as node>
{ 	
"id" :"${node.id?string?replace(".", "")}",  
<#if node.sucCode?exists>
"succode" : "${node.sucCode}",
<#else>
"succode" : "",
</#if>
<#if node.mall?exists>
"mall" : "${node.mall.id}",
<#else>
"mall" : "",
</#if>
<#if node.status?exists>
"status" : "${node.status}"
<#else>
"status" : ""
</#if>
}
<#if node_has_next>,</#if>
</#list>
],
"status" :"${status}",  
"message" :"${message}"  
}