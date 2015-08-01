{
	<#if resultSet.result.id?exists>
	"id": "${resultSet.result.id?string?replace(".", "")}",
	<#else>
	"id" : "",
	</#if>
	<#if resultSet.result.organizationalArea.id?exists>
	"organizationalAreaId": "${resultSet.result.organizationalArea.id?string?replace(".", "")}",
	<#else>
	"organizationalAreaId" : "",
	</#if>
	<#if resultSet.result.projectNodeType.id?exists>
	"nodeTypeId": "${resultSet.result.projectNodeType.id?string?replace(".", "")}",
	<#else>
	"nodeTypeId" : "",
	</#if>

	<#if resultSet.result.projectId?exists>
	"projectId": "${resultSet.result.projectId?string?replace(".", "")}",
	<#else>
	"projectId" : "",
	</#if>
	
	<#if resultSet.result.projectName?exists>
	"projectName": "${resultSet.result.projectName}",
	<#else>
	"projectName" : "",
	</#if>

	<#if resultSet.result.name?exists>
	"name": "${resultSet.result.name}",
	<#else>
	"name" : "",
	</#if>
	
	<#if resultSet.result.awardStatus?exists>
	"awardStatus": "${resultSet.result.awardStatus}",
	<#else>
	"awardStatus" : "",
	</#if>
	<#if resultSet.result.awardApplicant?exists>
	"awardApplicant": "${resultSet.result.awardApplicant}",
	<#else>
	"awardApplicant" : "",
	</#if>
	
	<#if resultSet.result.participant?exists>
	"participant": "${resultSet.result.participant}",
	<#else>
	"participant" : "",
	</#if>
	
	<#if resultSet.result.tenderStatus?exists>
	"tenderStatus": "${resultSet.result.tenderStatus}",
	<#else>
	"tenderStatus" : "",
	</#if>

	<#if resultSet.result.initDate?exists>
	"initDate": "${resultSet.result.initDate?string("dd/MM/yyyy")}",
	<#else>
	"initDate" : "",
	</#if>
	
	<#if resultSet.result.endDate?exists>
	"endDate": "${resultSet.result.endDate?string("dd/MM/yyyy")}"
	<#else>
	"endDate" : ""
	</#if>
}