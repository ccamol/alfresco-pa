{
<#if response.status?exists>
"status" :"${response.status}",  
<#else>
"status" : "",
</#if>
<#if response.result?exists>
<#if response.result.uuid?exists>
"uuid" :"${response.result.uuid}",  
<#else>
"uuid" : "",
</#if>
<#if response.result.name?exists>
"name" :"${response.result.name}",  
<#else>
"name" : "",
</#if>
</#if>
<#if response.message?exists >
"message" :"${response.message}"  
<#else>
"message" : ""
</#if>
}