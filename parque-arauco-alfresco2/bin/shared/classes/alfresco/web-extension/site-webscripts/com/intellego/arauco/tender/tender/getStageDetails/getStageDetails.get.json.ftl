{
	<#if resultSet.id?exists>
	"id": "${resultSet.id}",
	<#else>
	"id" : "",
	</#if>
	<#if resultSet.idProjectType?exists>
	"idProjectType": "${resultSet.idProjectType}",
	<#else>
	"idProjectType" : "",
	</#if>
	<#if resultSet.questionsStatus?exists>
	"questionsStatus": "${resultSet.questionsStatus}",
	<#else>
	"questionsStatus" : "",
	</#if>
	<#if resultSet.stageType?exists>
	"stageType": "${resultSet.stageType}",
	<#else>
	"stageType" : "",
	</#if>

	<#if resultSet.stageStatus?exists>
	"stageStatus": "${resultSet.stageStatus}"
	<#else>
	"stageStatus" : ""
	</#if>
}