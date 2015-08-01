{"resultSet" :[
<#if resultSet?exists>
<#list resultSet as node>
{ 	
<#if node.stageType?exists>
"id" :"${node.stageType.id}",  
<#else>
"id" :"",  
</#if>
<#if node.stageType?exists>
"name" : "${node.stageType.name}"
<#else>
"name" : ""
</#if>
}
<#if node_has_next>,</#if>
</#list>
</#if>
]
}