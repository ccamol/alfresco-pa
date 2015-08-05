[
<#list response.result as response>
     {
<#if response.id?exists>
"id" :"${response.id?string?replace(".", "")}",  
<#else>
"id" : "",
</#if>
<#if response.idProject?exists>
"idProject" :"${response.idProject?string?replace(".", "")}",  
<#else>
"idProject" : "",
</#if>
<#if response.idProjectType?exists>
"idProjectType" :"${response.idProjectType?string?replace(".", "")}",  
<#else>
"idProjectType" : "",
</#if>
<#if response.stageStatus?exists >
"stageStatus" :"${response.stageStatus}",  
<#else>
"stageStatus" : "",
</#if>
<#if response.stageType.id?exists >
"idStage" :"${response.stageType.id?string?replace(".", "")}",
<#else>
"idStage" : "",
</#if>
<#if response.subStages?exists >
"subStages" :"${response.subStages?string?replace(".", "")}",
<#else>
"subStages" : "",
</#if>
<#if response.stageType.name?exists >
"stageName" :"${response.stageType.name}"
<#else>
"stageName" : ""
</#if>
    }
    <#if response_has_next>,</#if>
    </#list>
]