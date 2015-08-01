{"resultSet" :[
<#if resultSet?exists>
	<#list resultSet as node>
	{
		<#if node.thirdPartyName?exists>
		"thirdPartyName" : "${node.thirdPartyName}",
	    <#else>
		"thirdPartyName" : "",
	    </#if>
	    
	   	<#if node.id?exists>
		"id" : "${node.id?string?replace(".", "")}",
	    <#else>
		"id" : "",
	    </#if>
	    
	   	<#if node.uuidDocument?exists>
		"uuidDocument" : "${node.uuidDocument}"
	    <#else>
		"uuidDocument" : ""
	    </#if>
	    
	    }
	    <#if node_has_next>,</#if>
	</#list>
</#if>
]}