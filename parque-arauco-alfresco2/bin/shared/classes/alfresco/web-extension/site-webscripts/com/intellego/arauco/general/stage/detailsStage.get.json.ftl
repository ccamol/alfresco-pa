{
<#if resultSet.id?exists >
"id" : "${resultSet.id}",
<#else>
"id" : "",
</#if>
<#if resultSet.idProject?exists >
"idProject" : "${resultSet.idProject}",
<#else>
"idProject" : "",
</#if>
<#if resultSet.status?exists >
"status" : "${resultSet.status}",
<#else>
"status" : "",
</#if>
<#if resultSet.stageStatus?exists >
"stageStatus" : "${resultSet.stageStatus}",
<#else>
"stageStatus" : "",
</#if>
<#if resultSet.stageName?exists >
"stageName" : "${resultSet.stageName}"
<#else>
"stageName" : ""
</#if>
}
