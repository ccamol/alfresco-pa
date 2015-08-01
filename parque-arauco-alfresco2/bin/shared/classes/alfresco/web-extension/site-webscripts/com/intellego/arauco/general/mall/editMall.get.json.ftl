{
<#if resultSet.id?exists >
"id" : "${resultSet.id}",
<#else>
"id" : "",
</#if>
<#if resultSet.name?exists >
"name" : "${resultSet.name}",
<#else>
"name" : "",
</#if>
<#if resultSet.countryId?exists >
"countryId" : "${resultSet.countryId}",
<#else>
"countryId" : "",
</#if>
<#if resultSet.idMallSap?exists >
"idMallSap" : "${resultSet.idMallSap}",
<#else>
"idMallSap" : "",
</#if>
<#if resultSet.status?exists >
"status" : "${resultSet.status}",
<#else>
"status" : "",
</#if>
<#if resultSet.mallType?exists >
"mallType" : "${resultSet.mallType}",
<#else>
"mallType" : "",
</#if>
<#if resultSet.message?exists >
"message" : "${resultSet.message}",
<#else>
"message" : "",
</#if>
<#if resultSet.countryName?exists >
"countryName" : "${resultSet.countryName}"
<#else>
"countryName" : ""
</#if>


}
