{"resultSet" :[
<#list resultSet as node>
{ 	
"id" :"${node.id?string?replace(".", "")}",  
<#if node.name?exists>
"name" : "${node.name}",
<#else>
"name" : "",
</#if>
<#if node.idMallSap?exists>
"idSap" : "${node.idMallSap}"
<#else>
"idSap" : ""
</#if>
}
<#if node_has_next>,</#if>
</#list>
],
"status" :"${status}",  
"message" :"${message}"  
}