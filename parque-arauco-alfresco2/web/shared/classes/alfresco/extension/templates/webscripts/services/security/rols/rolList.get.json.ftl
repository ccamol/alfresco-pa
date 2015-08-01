{"resultSet" :[
<#list resultSet as node>{   	
"id" :"${node.id}",  
<#if node.name?exists >
"name" : "${node.name?trim}",
<#else>
"name" : "",
</#if>
<#if node.name?exists >
"documentalRol" : "${node.documentalRol?trim}"
<#else>
"documentalRol" : ""
</#if>
}
<#if node_has_next>,</#if>
</#list>
]}