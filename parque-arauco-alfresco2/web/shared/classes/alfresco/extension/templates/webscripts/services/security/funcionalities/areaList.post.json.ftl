{"resultSet" :[
<#list resultSet.result as node>{   	
<#if node.id?exists >
"id" :"${node.id}",  
<#else>
"id" : "",
</#if>
<#if node.site?exists >
"site" : "${node.site?trim}"
<#else>
"site" : ""
</#if>
}
<#if node_has_next>,</#if>
</#list>
],
<#if resultSet.status?exists >
"status" :"${resultSet.status}",  
<#else>
"status" : ""
</#if>
<#if resultSet.message?exists >
"message" :"${resultSet.message}"  
<#else>
"message" : ""
</#if>
}