{"resultSet" :[
<#list resultSet as node>
		{   	
		    "uuid" :"${node.properties["sys:node-uuid"]}",  
		    "path" : "${node.displayPath}",
		    "size" : "${node.size}",   
			"documento" : "/alfresco/d/a/workspace/SpacesStore/${node.id}/${node.name?url}",
			<#if node.properties["pa:endDate"]?exists >
			"dateEnd" :"${node.properties["pa:endDate"]?string("dd/MM/yyyy")}",   
			<#else>
			"dateEnd" : "",
			</#if>	
			<#if node.properties["pa:endDate"]?exists>
			<#assign endDate = '${((((node.properties["pa:endDate"]?long - date?long)/1000)/60)/60)/24}'>
			<#assign today = '${date?long}'>
			"today" : "${today}",
			"endDate" : "${endDate}",
			<#else>
			"endDate" : "",
			</#if>

			<#if node.properties["cm:name"]?exists >
			"name" : "${node.properties["cm:name"]}",
            <#else>
				"name" : "",
			</#if>
			<#if node.properties["pa:documentType"]?exists >
			"documentType" : "${node.properties["pa:documentType"]}"
            <#else>
				"documentType" : ""
			</#if>

		}
		<#if node_has_next>,</#if>
	</#list>
		
]}