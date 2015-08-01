{"resultSet" :[
<#if document?exists>
<#if document.assocs["{http://www.parquearauco.cl/content/1.0}downlaodAssoc"]?exists>
<#list document.assocs["{http://www.parquearauco.cl/content/1.0}downlaodAssoc"] as t>
{
  "name" : "${t.name}",
  "uuid" : "${t.properties['sys:node-uuid']}"
}
<#if t_has_next>, </#if>
</#list>
</#if>
</#if>
]}
