{
	<#if resultSet.id?exists>
	"id": "${resultSet.id}",
	<#else>
	"id" : "",
	</#if>
	<#if resultSet.organizationalAreaId?exists>
	"organizationalAreaId": "${resultSet.organizationalAreaId}",
	<#else>
	"organizationalAreaId" : "",
	</#if>
	<#if resultSet.nodeTypeId?exists>
	"nodeTypeId": "${resultSet.nodeTypeId}",
	<#else>
	"nodeTypeId" : "",
	</#if>

	<#if resultSet.projectId?exists>
	"projectId": "${resultSet.projectId}",
	<#else>
	"projectId" : "",
	</#if>
	
	<#if resultSet.projectName?exists>
	"projectName": "${resultSet.projectName}",
	<#else>
	"projectName" : "",
	</#if>

	<#if resultSet.name?exists>
	"name": "${resultSet.name}",
	<#else>
	"name" : "",
	</#if>

	<#if resultSet.initDate?exists>
	"initDate": "${resultSet.initDate}",
	<#else>
	"initDate" : "",
	</#if>
	
	<#if resultSet.endDate?exists>
	"endDate": "${resultSet.endDate}"
	<#else>
	"endDate" : ""
	</#if>
}