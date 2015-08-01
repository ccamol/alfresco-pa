{"resultSet" :[
<#list resultSet.result as node>
    
    <#list node.stageTypes as stage>
     {
        "uuid": "23425fn7asds7a5dasds7da5d-asd5a",
        "name": "arauco",
        "img": "/share/img/stage/flecha.png",
        "id": "2342",
        "idMallSap": "23424",
        "financeCompany": "arauco",
        "subProjectManager": "${stage.name?trim}",
        "country": "chile",
        "vmallType": "${stage.id?trim}"
    
    }
    <#if stage_has_next>,</#if>
    </#list>
    
       ]}

</#list>




