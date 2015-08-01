{
<#if resultSet?exists>
"status": "${resultSet?string?replace(".", "")}"
<#else>
"status" : ""
</#if>
}