{
<#if response.message?exists>
"message": "${response.message}"
<#else>
"message" : ""
</#if>
}