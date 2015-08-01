{"resultSet" :[
<#list resultSet as node>
		{   	
		    "uuid" :"${node.properties["sys:node-uuid"]}",  
		    "path" : "${node.displayPath}",
		    "size" : "${node.size}",   
			"documento" : "/alfresco/d/a/workspace/SpacesStore/${node.id}/${node.name?url}",
			<#if node.properties["pa:documentDate"]?exists >
			"documentDate" :"${node.properties["pa:documentDate"]?string("dd/MM/yyyy")}",   
			"filterDate" :"${node.properties["pa:documentDate"]?string("yyyy/MM/dd")}",   
			<#else>
				"documentDate" : "",
				"filterDate" : "",
			</#if>	
						
			<#if node.properties["pa:documentType"]?exists >   
			"documentType" : "${node.properties["pa:documentType"]}",
			<#else>
				"documentType" : "",
			</#if>			
			<#if node.properties["pa:mall"]?exists >   
			"mall" : "${node.properties["pa:mall"]}",
			<#else>
				"mall" : "",
			</#if>
			
			<#if node.properties["pa:specialty"]?exists >   
			"specialty" : "${node.properties["pa:specialty"]}",
			<#else>
				"specialty" : "",
			</#if>

			<#if node.properties["pa:project"]?exists >   
			"project" : "${node.properties["pa:project"]}",
			<#else>
				"project" : "",
			</#if>
			
			<#if node.properties["pa:subsection"]?exists >   
			"subsection" : "${node.properties["pa:subsection"]}",
			<#else>
				"subsection" : "",
			</#if>	
			
			<#if node.properties["pa:sucNumber"]?exists >   
			"sucNumber" : "${node.properties["pa:sucNumber"]}",
			<#else>
				"sucNumber" : "",
			</#if>
			
			<#if node.properties["pa:storeName"]?exists >   
			"storeName" : "${node.properties["pa:storeName"]}",
			<#else>
				"storeName" : "",
			</#if>			
						
			<#if node.properties["cm:name"]?exists >
			"name" : "${node.properties["cm:name"]}"
            <#else>
				"name" : ""
			</#if>
						
		}
		<#if node_has_next>,</#if>
	</#list>
]}