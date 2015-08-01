{"resultSet" :[
<#list resultSet as node>
{ 	
"id" :"${node.id?string?replace(".", "")}",  
<#if node.idProject?exists>
"idProject" : "${node.idProject}",
<#else>
"idProject" : "",
</#if>
<#if node.stageStatus?exists>
"stageStatus" : "${node.stageStatus}",
<#else>
"stageStatus" : "",
</#if>
<#if node.stageType?exists>
"stageType" : "${node.stageType.id}"
<#else>
"stageType" : ""
</#if>
}
<#if node_has_next>,</#if>
</#list>
],
"status" :"${status}",  
"message" :"${message}"  
}