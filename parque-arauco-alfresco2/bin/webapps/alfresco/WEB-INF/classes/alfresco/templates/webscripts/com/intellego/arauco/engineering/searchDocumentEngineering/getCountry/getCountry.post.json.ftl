{"resultSet" :[
<#list resultSet.result as node>
    {
        "id": "${node.id}",
        "name": "${node.name}"
    }
<#if node_has_next>,</#if>
</#list>
]}