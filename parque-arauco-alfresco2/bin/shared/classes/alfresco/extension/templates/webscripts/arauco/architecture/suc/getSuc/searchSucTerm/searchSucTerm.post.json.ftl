{"resultSet" :[
<#list resultSet.result as node>
{
	<#if node.id?exists>
	"id": "${node.id?string?replace(".", "")}",
	<#else>
	"id" : "",
	</#if>

	<#if node.name?exists>
	"name": "${node.name}",
	<#else>
	"name" : "",
	</#if>

	<#if node.sucCode?exists>
	"sucCode": "${node.sucCode}",
	<#else>
	"sucCode" : "",
	</#if>

	<#if node.storeM2?exists>
	"storeM2": "${node.storeM2}",
	<#else>
	"storeM2" : "",
	</#if>
	
	<#if node.wareHouseM2?exists>
	"wareHouseM2": "${node.wareHouseM2}",
	<#else>
	"wareHouseM2" : "",
	</#if>
	
	<#if node.terraseM2?exists>
	"terraseM2": "${node.terraseM2}",
	<#else>
	"terraseM2" : "",
	</#if>
	
	<#if node.sucType?exists>
	"sucType": "${node.sucType?string?replace(".", "")}",
	<#else>
	"sucType" : "",
	</#if>
	
	<#if node.status?exists>
	"status": "${node.status?string?replace(".", "")}",
	<#else>
	"status" : "",
	</#if>
	
	
	<#if node.contractDate?exists>
	"contractDate": "${node.contractDate?string("dd/MM/yyyy")}",
	<#else>
	"contractDate" : "",
	</#if>
	
	<#if node.historySend?exists>
	"historySend": "${node.historySend?string("dd/MM/yyyy")}",
	<#else>
	"historySend" : "",
	</#if>
	
	<#if node.escaparateM?exists>
	"escaparateM": "${node.escaparateM}",
	<#else>
	"escaparateM" : "",
	</#if>
	
	<#if node.escaparateM?exists>
	"escaparateM": "${node.escaparateM}",
	<#else>
	"escaparateM" : "",
	</#if>
	
	<#if node.description?exists>
	"description": "${node.description?replace("\"","'")?replace("\n"," ")?replace("\t"," ")}",
	<#else>
	"description" : "",
	</#if>

	<#if node.mall.id?exists>
	"idMall": "${node.mall.id?string?replace(".", "")}",
	<#else>
	"idMall" : "",
	</#if>

	<#if node.mall.name?exists>
	"nameMall": "${node.mall.name}",
	<#else>
	"nameMall" : "",
	</#if>
	
	<#if node.mall.idMallSap?exists>
	"idMallSap": "${node.mall.idMallSap}",
	<#else>
	"idMallSap" : "",
	</#if>

}
<#if node_has_next>,</#if>
</#list>
]}
