[
<#list resultSet as node>
    [
         <#list node as list>
            "${list?replace("\"","'")?replace("\n","")?replace("\t"," ")}"                  
            <#if list_has_next>,</#if>
         </#list>     
    ]
    <#if node_has_next>,</#if>
</#list>
 ]