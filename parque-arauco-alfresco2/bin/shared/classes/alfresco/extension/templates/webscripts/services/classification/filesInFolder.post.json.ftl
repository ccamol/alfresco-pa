{"resultSet" :[
<#list resultSet as node>
{
<#if node.node.properties['pa:statusAssoc']?exists>
	<#if node.node.properties['pa:statusAssoc']>
		"uuid" :"${node.node.properties['pa:parentDocument']}",
	<#else>
		"uuid" :"${node.node.properties['sys:node-uuid']}",  
	</#if>
<#else>
	"uuid" :"${node.node.properties['sys:node-uuid']}",  	
</#if> 	
"name" : "${node.node.name}",
"modified" : "${node.node.properties['cm:modified']?string("dd/MM/yyyy")}",
"size" : "${node.node.size/1024/1024}",
"path" : <#if node.path?exists>"${node.path}"<#else>""</#if>,
"pathLink" : <#if node.pathLink?exists>"${node.pathLink}"<#else>""</#if>,
<#if node.node.isContainer>
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