{"resultSet" :[
<#list resultSet as node>
		{   	
		    "uuid" :"${node.properties["sys:node-uuid"]}",  
			<#if node.properties["cm:name"]?exists >
			"name" : "${node.properties["cm:name"]}",
            <#else>
				"name" : "",
			</#if>
			<#if node.properties["pa:documentType"]?exists >
				"documentType" : "${node.properties["pa:documentType"]}",
            <#else>
				"documentType" : "",
			</#if>
			<#if node.properties["cm:created"]?exists >
				"created" : "${node.properties["cm:created"]?string("dd/MM/yyyy")}"
            <#else>
				"created" : ""
			</#if>
		}
		<#if node_has_next>,</#if>
	</#list>
]}