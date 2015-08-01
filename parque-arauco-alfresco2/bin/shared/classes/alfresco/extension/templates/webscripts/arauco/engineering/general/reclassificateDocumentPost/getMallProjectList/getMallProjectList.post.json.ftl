{"resultSet" :[
<#list resultSet as node>
{ 	
"id" :"${node.id?string?replace(".", "")}",  
<#if node.name?exists>
"name" : "${node.name}",
<#else>
"name" : "",
</#if>
<#if node.mall?exists>
"mall" : "${node.mall.id}",
<#else>
"mall" : "",
</#if>
<#if node.id?exists>
"etapa_proyecto" : "${node.projectStatusEntity.id}"
<#else>
"etapa_proyecto" : ""
</#if>
}
<#if node_has_next>,</#if>
</#list>
],
"status" :"${status}",  
"message" :"${message}"  
}