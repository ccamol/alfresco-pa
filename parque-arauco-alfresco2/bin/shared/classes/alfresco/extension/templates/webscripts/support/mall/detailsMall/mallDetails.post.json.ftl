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
<#if response.result.idMallSap?exists >
"idMallSap" : "${response.result.idMallSap?trim}",
<#else>
"idMallSap" : "",
</#if>
<#if response.result.country.id?exists >
"countryId" : "${response.result.country.id?trim}",
<#else>
"countryId" : "",
</#if>
<#if response.result.country.name?exists >
"countryName" : "${response.result.country.name?trim}",
<#else>
"countryName" : "",
</#if>
<#if response.result.mallType.name?exists >
"mallType" : "${response.result.mallType.name?trim}",
<#else>
"mallType" : "",
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
