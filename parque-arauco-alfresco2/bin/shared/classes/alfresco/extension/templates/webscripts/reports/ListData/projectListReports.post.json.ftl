{"resultSet" :[
<#if resultSet?exists>
<#list resultSet as node>
{ 	
"id" :"${node.id}",  
<#if node.name?exists>
"name" : "${node.name}"
<#else>
"name" : ""
</#if>
}
<#if node_has_next>,</#if>
</#list>
</#if>
]}