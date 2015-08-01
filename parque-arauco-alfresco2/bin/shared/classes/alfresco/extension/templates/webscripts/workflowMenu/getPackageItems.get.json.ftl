	[
	<#list resultset as node>
		{
	        <#if node.properties["sys:node-uuid"]?exists>
				"uuid" :"${node.properties["sys:node-uuid"]}",
			<#else>
				"uuid" : "",
			</#if>
			"url" : "${url.serviceContext}/api/node/content/${node.nodeRef.storeRef.protocol}/${node.nodeRef.storeRef.identifier}/${node.nodeRef.id}/${node.name?url}",
	        <#if node.properties["cm:name"]?exists>
				"documentName" :"${node.properties["cm:name"]}",
			<#else>
				"documentName" : "",
			</#if>
	        <#if node.properties["cm:description"]?exists>
				"documentDescription" :"${node.properties["cm:description"]}",
			<#else>
				"documentDescription" : "",
			</#if>
		    <#if node.properties["pa:documentType"]?exists>
				"documentType" :"${node.properties["pa:documentType"]}",
			<#else>
				"documentType" : "Formato adjunto",
			</#if>
		    <#if node.properties["pa:documentType"]?exists>
				"type" :"principal",
			<#else>
				"type" : "attachment",
			</#if>
			<#if node.properties["pa:mall"]?exists>
				"mall" :"${node.properties["pa:mall"]}",
			<#else>
				"mall" : "",
			</#if>
			<#if node.properties["pa:country"]?exists>
				"country" :"${node.properties["pa:country"]}",
			<#else>
				"country" : "",
			</#if>
	        <#if node.properties["pa:storeName"]?exists>
				"SUC" :"${node.properties["pa:storeName"]}",
			<#else>
				"SUC" : "N/A",
			</#if>
	        <#if node.properties["pa:project"]?exists>
				"project" :"${node.properties["pa:project"]}"
			<#else>
				"project" : "N/A"
			</#if>
		}
		<#if node_has_next>,</#if>
	</#list>
	]