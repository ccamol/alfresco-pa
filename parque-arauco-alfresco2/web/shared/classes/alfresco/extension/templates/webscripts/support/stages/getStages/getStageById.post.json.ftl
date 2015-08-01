{
<#if response.result.id?exists>
"id" :"${response.result.id?string?replace(".", "")}",  
<#else>
"id" : "",
</#if>
<#if response.result.idProject?exists>
"idProject" :"${response.result.idProject?string?replace(".", "")}",  
<#else>
"idProject" : "",
</#if>
<#if response.status?exists>
"status" :"${response.status?string?replace(".", "")}",  
<#else>
"status" : "",
</#if>
<#if response.result.stageStatus?exists>
"stageStatus" :"${response.result.stageStatus}",  
<#else>
"stageStatus" : "",
</#if>
<#if response.result.stageType.name?exists >
"stageName" :"${response.result.stageType.name}"
<#else>
"stageName" : ""
</#if>
}