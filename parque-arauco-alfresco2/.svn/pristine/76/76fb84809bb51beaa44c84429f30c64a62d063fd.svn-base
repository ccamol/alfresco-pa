{"resultSet" :[
<#list resultSet as node>
{
      	   <#if node.properties["sys:node-uuid"]?exists >
		 		"uuid": "${node.properties["sys:node-uuid"]}",		
			<#else>
			"uuid":"",
			</#if>
				
   	 	<#if node.properties["cm:name"]?exists >
			"name":	"${node.properties["cm:name"]}", 
			<#else>
			"name":"",
			</#if>
			
   		  <#if node.properties["pa:documentType"]?exists >
			"documentType": 	"${node.properties["pa:documentType"]}", 
			<#else>
			"documentType": "",
			</#if>
     <#if node.properties["pa:mall"]?exists >
			"mall":	"${node.properties["pa:mall"]}",
			<#else>
			"mall":	"",
			</#if>
	<#if node.properties["pa:storeName"]?exists >
			"storeName":	"${node.properties["pa:storeName"]}",
			<#else>
			"storeName":"",
			</#if>
			
			<#if node.properties["pa:inputAgreedDate"]?exists >
			"inputAgreedDate":	"${node.properties["pa:inputAgreedDate"]?string("dd/MM/yyyy")}",
			<#else>
			"inputAgreedDate":"",
			</#if>
			
	<#if node.properties["pa:section"]?exists >
		"section":	"${node.properties["pa:section"]}", 
			<#else>
			"section":	"", 
			</#if>
	<#if node.properties["pa:stage"]?exists >
			"stage": "${node.properties["pa:stage"]}"
			<#else>
			"stage": ""
			</#if>
}
<#if node_has_next>,</#if>
</#list>
]}

	