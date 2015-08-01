{
	<#if response.result.id?exists>
	"id": "${response.result.id?string?replace(".", "")}",
	<#else>
	"id" : "",
	</#if>
	<#if response.result.name?exists>
	"name": "${response.result.name}",
	<#else>
	"name" : "",
	</#if>
	<#if response.result.description?exists>
	"description": "${response.result.description}",
	<#else>
	"description" : "",
	</#if>
	<#if response.result.sucEntity.id?exists>
	"sucEntityId": "${response.result.sucEntity.id?string?replace(".", "")}",
	<#else>
	"sucEntityId" : "",
	</#if>
	<#if response.result.sucEntity.name?exists>
	"sucEntityName": "${response.result.sucEntity.name}",
	<#else>
	"sucEntityName" : "",
	</#if>
	<#if response.result.sucEntity.wareHouseM2?exists>
	"wareHouseM2": "${response.result.sucEntity.wareHouseM2}",
	<#else>
	"wareHouseM2" : "",
	</#if>
	<#if response.result.sucEntity.terraseM2?exists>
	"terraseM2": "${response.result.sucEntity.terraseM2}",
	<#else>
	"terraseM2" : "",
	</#if>
	<#if response.result.sucEntity.sucType?exists>
	"sucType": "${response.result.sucEntity.sucType}",
	<#else>
	"sucType" : "",
	</#if>
	<#if response.result.sucEntity.sucCode?exists>
	"sucCode": "${response.result.sucEntity.sucCode}",
	<#else>
	"sucCode" : "",
	</#if>
	<#if response.result.sucEntity.status?exists>
	"status": "${response.result.sucEntity.status?string?replace(".", "")}",
	<#else>
	"status" : "",
	</#if>
	<#if response.result.sucEntity.contractDate?exists>
	"contractDate": "${response.result.sucEntity.contractDate?string("dd/MM/yyyy")}",
	<#else>
	"contractDate" : "",
	</#if>
	<#if response.result.sucEntity.escaparateM?exists>
	"escaparateM": "${response.result.sucEntity.escaparateM}",
	<#else>
	"escaparateM" : "",
	</#if>
	<#if response.result.sucEntity.description?exists>
	"sucEntityDescription": "${response.result.sucEntity.description}",
	<#else>
	"sucEntityDescription" : "",
	</#if>
	<#if response.result.sucEntity.mall.id?exists>
	"idMall": "${response.result.sucEntity.mall.id?string?replace(".", "")}",
	<#else>
	"idMall" : "",
	</#if>
	<#if response.result.projectType.name?exists>
	"projectTypeName": "${response.result.projectType.name}",
	<#else>
	"projectTypeName" : "",
	</#if>
	<#if response.result.projectType.id?exists>
	"projectTypeId": "${response.result.projectType.id?string?replace(".", "")}",
	<#else>
	"projectTypeId" : "",
	</#if>
	<#if response.result.projectStatusEntity.name?exists>
	"projectStatus": "${response.result.projectStatusEntity.name}",
	<#else>
	"projectStatus" : "",
	</#if>
	<#if response.result.sucEntity.mall.name?exists>
	"nameMall": "${response.result.sucEntity.mall.name}",
	<#else>
	"nameMall" : "",
	</#if>
	<#if response.result.sucEntity.mall.idMallSap?exists>
	"idMallSap": "${response.result.sucEntity.mall.idMallSap}"
	<#else>
	"idMallSap" : ""
	</#if>

}