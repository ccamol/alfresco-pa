<#if resultSet?exists>
{
<#if resultSet.uuid?exists>
"uuid" :"${resultSet.uuid}",  
<#else>
"uuid" : "",
</#if>
<#if resultSet.name?exists>
"name" : "${resultSet.name?trim}",
<#else>
"name" : "",
</#if>
<#if resultSet.childrenNumber?exists >
"childrenNumber" : "${resultSet.childrenNumber}",
<#else>
"childrenNumber" : "",
</#if>
<#if resultSet.existSubcategory?exists >
"existSubcategory" : "${resultSet.existSubcategory?string("true","false")}"
<#else>
"existSubcategory" : "false"
</#if>
}
</#if>