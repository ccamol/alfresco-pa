{"resultSet" :[
<#if resultSet ?exists>
<#list resultSet as node>
{
  "uuid" : "${node.uuid}"
}
<#if node_has_next>,</#if>
</#list>
<#else>
"message" : "${message}"
</#if>
],
"status" : "${status}" 
}



