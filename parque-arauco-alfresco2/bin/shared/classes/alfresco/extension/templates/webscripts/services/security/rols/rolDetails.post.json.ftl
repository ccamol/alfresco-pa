{
<#if response.result.id?exists>
"id" :"${response.result.id}",  
<#else>
"id" : "",
</#if>
<#if response.result.name?exists >
"name" : "${response.result.name?trim}",
<#else>
"name" : "",
</#if>
<#if response.result.description?exists >
"description" : "${response.result.description?trim}",
<#else>
"description" : "",
</#if>
<#if response.result.documentalRol?exists >
"documentalRol" : "${response.result.documentalRol?trim}",
<#else>
"documentalRol" : "",
</#if>
<#if response.status?exists >
"status" :"${response.status}",  
<#else>
"status" : "",
</#if>
<#if response.message?exists >
"message" :"${response.message}"  
<#else>
"message" : ""
</#if>
}
