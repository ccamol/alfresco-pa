{"resultSet" :[
<#list resultSet as node>
{ 	
"id" :"${node.id?string?replace(".", "")}",  
<#if node.idMallSap?exists>
	"idMallSap" : "${node.idMallSap}",
<#else>
	"idMallSap" : "",
</#if>
<#if node.name?exists>
	"name" : "${node.name}",
<#else>
	"name" : "${node.name}",
</#if>
<#if node.mallType?exists>
	"mallType" : "${node.mallType.name}"
<#else>
	"mallType" : "${node.mallType.name}"
</#if>
}
<#if node_has_next>,</#if>
</#list>
],
"status" :"1",  
"message" :"Acción realizada con éxito"  
}