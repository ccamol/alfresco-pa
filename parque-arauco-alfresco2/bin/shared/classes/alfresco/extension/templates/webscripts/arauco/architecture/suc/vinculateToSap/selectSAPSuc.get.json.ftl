{"resultSet" :[
<#list resultSet as node>
{ 	
"id" :"${node.id?string?replace(".", "")}",  
<#if node.sucCode?exists>
	"sucCode" : "${node.sucCode}",
<#else>
	"sucCode" : "",
</#if>
<#if node.description?exists>
	"description" : "${node.description?replace("\"","'")?replace("\n"," ")?replace("\t"," ")}",
<#else>
	"description" : "",
</#if>
<#if node.sucType?exists>
	"sucType" : "${node.sucType}",
<#else>
	"sucType" : "",
</#if>
<#if node.storeM2?exists>
	"storeM2" : "${node.storeM2}",
<#else>
	"storeM2" : "",
</#if>
<#if node.wareHouseM2?exists>
	"wareHouseM2" : "${node.wareHouseM2}",
<#else>
	"wareHouseM2" : "",
</#if>
<#if node.terraseM2?exists>
	"terraseM2" : "${node.terraseM2}",
<#else>
	"terraseM2" : "",
</#if>
<#if node.escaparateM?exists>
	"escaparateM" : "${node.escaparateM}",
<#else>
	"escaparateM" : "",
</#if>
<#if node.status?exists>
	"status" : "${node.status}",
<#else>
	"status" : "",
</#if>
<#if node.currentContract?exists>
	"currentContract" : "<#if node.currentContract.name?exists>${node.currentContract.name}</#if>",
<#else>
	"currentContract" : "",
</#if>
<#if node.sucType?exists>
	"sucType" : "${node.sucType}"
<#else>
	"sucType" : "${node.sucType}"
</#if>
}
<#if node_has_next>,</#if>
</#list>
],
"status" :"1",  
"message" :"Acción realizada con éxito"  
}