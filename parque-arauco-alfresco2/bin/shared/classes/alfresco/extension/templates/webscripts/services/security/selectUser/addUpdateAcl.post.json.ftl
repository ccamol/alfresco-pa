{
<#if status?exists>
"status" :"${status}",  
<#else>
"status" : "-1",
</#if>
<#if message?exists >
"message" :"${message}"  
<#else>
"message" : ""
</#if>
}