{"resultSet" :[
<#list resultSet as node>
    {
        "id": "${node.id}",
        "name": "${node.name}",
        "img": "http://10.13.27.214:8080/share/img/mall/arauco.jpg",
        "idMallSap": "23424",
        "financeCompany": "arauco",
        "subProjectManager": "el lobo",
        "country": "chile",
        "vmallType": "mall"
    }
<#if node_has_next>,</#if>
</#list>
]}