{"resultSet" :[
<#list resultSet.result as node>{   	
<#if node.id?exists >
"id" :"${node.id}",  
<#else>
"id" : "",
</#if>
<#if node.name?exists >
"name" : "${node.name?trim}",
<#else>
"name" : "",
</#if>
<#if node.description?exists >
"description" : "${node.description?trim}",
<#else>
"description" : "",
</#if>
<#if node.name?exists >
"documentalRol" : "${node.documentalRol?trim}"
<#else>
"documentalRol" : ""
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