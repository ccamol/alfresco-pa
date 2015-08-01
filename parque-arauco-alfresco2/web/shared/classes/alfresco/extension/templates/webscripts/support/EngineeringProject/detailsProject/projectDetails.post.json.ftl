{
<#if response.result.id?exists>
"id" :"${response.result.id?string?replace(".", "")}",  
<#else>
"id" : "",
</#if>
<#if response.result.name?exists >
"name" : "${response.result.name?trim}",
<#else>
"name" : "",
</#if>
<#if response.result.mall.id?exists >
"mallId" : "${response.result.mall.id?trim}",
<#else>
"mallId" : "",
</#if>
<#if response.status?exists >
"status" :"${response.status?string?replace(".", "")}",  
<#else>
"status" : "",
</#if>
<#if response.message?exists >
"message" :"${response.message}"  
<#else>
"message" : ""
</#if>
}
