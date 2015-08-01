{"resultSet" :[
<#list resultSet as node>
{ 	
"id" :"${node.id?string?replace(".", "")}",  
<#if node.name?exists>
"name" : "${node.name}",
<#else>
"name" : "",
</#if>
<#if node.sucEntity?exists>
"sucEntity" : "${node.sucEntity.id}",
<#else>
"sucEntity" : "",
</#if>
<#if node.projectStatusEntity?exists>
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