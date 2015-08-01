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
<#if resultSet.sucCode?exists >
"sucCode" : "${resultSet.sucCode}",
<#else>
"sucCode" : "",
</#if>
<#if resultSet.sucEntityId?exists >
"sucEntityId" : "${resultSet.sucEntityId?replace('.','')}",
<#else>
"sucEntityId" : "",
</#if>
<#if resultSet.idMall?exists >
"mallId" : "${resultSet.idMall}",
<#else>
"mallId" : "",
</#if>
<#if resultSet.status?exists >
"status" : "${resultSet.status}",
<#else>
"status" : "",
</#if>
<#if resultSet.message?exists >
"message" : "${resultSet.message}"
<#else>
"message" : ""
</#if>
}
