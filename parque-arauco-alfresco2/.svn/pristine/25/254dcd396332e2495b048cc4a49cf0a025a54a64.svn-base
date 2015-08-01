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

	<#if node.description?exists>
	"description": "${node.description?replace("\"","'")?replace("\n"," ")?replace("\t"," ")}",
	<#else>
	"description" : "",
	</#if>

	<#if node.sucEntity.id?exists>
	"sucEntityId": "${node.sucEntity.id?string?replace(".", "")}",
	<#else>
	"sucEntityId" : "",
	</#if>
	
	<#if node.sucEntity.name?exists>
	"sucEntityName": "${node.sucEntity.name}",
	<#else>
	"sucEntityName" : "",
	</#if>
	
	<#if node.sucEntity.wareHouseM2?exists>
	"wareHouseM2": "${node.sucEntity.wareHouseM2}",
	<#else>
	"wareHouseM2" : "",
	</#if>
	
	<#if node.sucEntity.terraseM2?exists>
	"terraseM2": "${node.sucEntity.terraseM2}",
	<#else>
	"terraseM2" : "",
	</#if>
	
	<#if node.sucEntity.sucType?exists>
	"sucType": "${node.sucEntity.sucType?string?replace(".", "")}",
	<#else>
	"sucType" : "",
	</#if>
	
	<#if node.sucEntity.status?exists>
	"status": "${node.sucEntity.status?string?replace(".", "")}",
	<#else>
	"status" : "",
	</#if>
	
	
	<#if node.sucEntity.contractDate?exists>
	"contractDate": "${node.sucEntity.contractDate?string("dd/MM/yyyy")}",
	<#else>
	"contractDate" : "",
	</#if>
	
	<#if node.sucEntity.escaparateM?exists>
	"escaparateM": "${node.sucEntity.escaparateM}",
	<#else>
	"escaparateM" : "",
	</#if>

	
	<#if node.sucEntity.description?exists>
	"sucEntityDescription": "${node.sucEntity.description}",
	<#else>
	"sucEntityDescription" : "",
	</#if>

	<#if node.sucEntity.mall.id?exists>
	"idMall": "${node.sucEntity.mall.id?string?replace(".", "")}",
	<#else>
	"idMall" : "",
	</#if>
	
	<#if node.projectType.id?exists>
	"idProject": "${node.projectType.id?string?replace(".", "")}",
	<#else>
	"idProject" : "",
	</#if>
	
	<#if node.projectType.name?exists>
	"projectTypeName": "${node.projectType.name}",
	<#else>
	"projectTypeName" : "",
	</#if>
	
	<#if node.projectType.id?exists>
	"projectTypeId": "${node.projectType.id?string?replace(".", "")}",
	<#else>
	"projectTypeId" : "",
	</#if>
	
	
	<#if node.projectStatusEntity?exists>
			<#if node.projectStatusEntity.id?exists>
			"idStatus": "${node.projectStatusEntity.id?string?replace(".", "")}",
			<#else>
			"idStatus" : "",
			</#if>
			<#if node.projectStatusEntity.name?exists>
			"projectStatus": "${node.projectStatusEntity.name}",
			<#else>
			"projectStatus" : "",
			</#if>
	<#else>
		"idStatus" : "",
		"projectStatus" : "",
	</#if>
	
	<#if node.operator?exists>
	"operatorId": "${node.operator.id?string?replace(".", "")}",
	<#else>
	"operatorId" : "",
	</#if>
	
	<#if node.sucEntity.mall.name?exists>
	"nameMall": "${node.sucEntity.mall.name}",
	<#else>
	"nameMall" : "",
	</#if>
	
	<#if node.sucEntity.mall.idMallSap?exists>
	"idMallSap": "${node.sucEntity.mall.idMallSap}",
	<#else>
	"idMallSap" : "",
	</#if>
	
	<#if node.finishDate?exists>
	"finishDate": "${node.finishDate?string("dd/MM/yyyy")}",
    <#else>
	"finishDate" : "",
	</#if>
    
    <#if node.startDate?exists>
	"startDate": "${node.startDate?string("dd/MM/yyyy")}",
    <#else>
	"startDate" : "",
	</#if>
	
	<#if node.chiefArchitect?exists>
	"chiefArchitect": "${node.chiefArchitect}",
    <#else>
	"chiefArchitect" : "",
	</#if>	

	<#if node.professionalName?exists>
	"professionalName": "${node.professionalName}",
    <#else>
	"professionalName" : "",
	</#if>	
	
	<#if node.draftsmanName?exists>
	"draftsmanName": "${node.draftsmanName}"
    <#else>
	"draftsmanName" : ""
	</#if>	
}
<#if node_has_next>,</#if>
</#list>
]}
