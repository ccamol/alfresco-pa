{"resultSet" :[
<#list resultSet as node>
    {
        "id": "${node.properties["paList:id"]}",
        "name": "${node.name}",
    <#if node.properties["paList:sectionID"]?exists>
	"sectionID": "${node.properties["paList:sectionID"]}",
	<#else>
	"sectionID": "NULL",
	</#if>
	<#if node.properties["paList:documentType"]?exists>
	"documentType":[
	<#list node.properties["paList:documentType"] as node> 			   
   		{
	    	"Type": "${node}"
	   	}
	<#if node_has_next>,</#if>			   	
	</#list>
	]
	<#else>
	"documentType" :"NULL" 
	</#if>
	
       
    }
<#if node_has_next>,</#if>
</#list>
]}