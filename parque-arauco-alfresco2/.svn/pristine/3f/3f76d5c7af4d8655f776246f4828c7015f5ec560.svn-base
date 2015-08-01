{
	<#if resultSet.id?exists>
	"id": "${resultSet.id?string?replace(".", "")}",
	<#else>
	</#if>
	<#if resultSet.idProjectType?exists>
	"idProjectType": "${resultSet.idProjectType?string?replace(".", "")}",
	<#else>
	"idProjectType" : "",
	</#if>
	<#if resultSet.questionsStatus?exists>
	"questionsStatus": "${resultSet.questionsStatus}",
	<#else>
	"questionsStatus" : "",
	</#if>
	<#if resultSet.stageTypesTender.id?exists>
	"stageType": "${resultSet.stageTypesTender.id?string?replace(".", "")}",
	<#else>
	"stageType" : "",
	</#if>
	<#if resultSet.stageStatus?exists>
	"stageStatus": "${resultSet.stageStatus}"
	<#else>
	"stageStatus" : ""
	</#if>
}
