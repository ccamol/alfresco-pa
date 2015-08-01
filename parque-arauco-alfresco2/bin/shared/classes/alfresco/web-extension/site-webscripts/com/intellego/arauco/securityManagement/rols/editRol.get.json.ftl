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
<#if resultSet.description?exists >
"description" : "${resultSet.description}",
<#else>
"description" : "",
</#if>
<#if resultSet.documentalRol?exists >
"documentalRol" : "${resultSet.documentalRol}"
<#else>
"documentalRol" : ""
</#if>
}
