{
<#if status?exists >
"status" :"${status}",  
<#else>
"status" : "",
</#if>
<#if message?exists >
"message" :"${message}"  
<#else>
"message" : ""
</#if>
}