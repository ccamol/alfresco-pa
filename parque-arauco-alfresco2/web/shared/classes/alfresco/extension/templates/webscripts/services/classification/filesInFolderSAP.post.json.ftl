{"resultSet" :[
<#list resultSet as node>
{ 	
"uuid" :"${node.properties['sys:node-uuid']}",  
"name" : "${node.name}",
"modified" : "${node.properties['cm:modified']?string("dd/MM/yyyy")}",
"size" : "${node.size/1024/1024}",
<#if node.isContainer>
"type" : "folder"
<#else>
"type" : "document"
</#if>
}
<#if node_has_next>,</#if>
</#list>
],
"status" :"1",  
"message" :"Acción realizada con éxito"  
}