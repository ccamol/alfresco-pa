{"resultSet" :[
<#if resultSet?exists>
	<#list resultSet as node>
	{
		<#if node.thirdPartyName?exists>
		"thirdPartyName" : "${node.thirdPartyName}",
	    <#else>
		"thirdPartyName" : "",
	    </#if>
	    
	    
	    <#if node.architectureProjectEntity?exists>
		"architectureProjectEntity" : "${node.architectureProjectEntity}",
	    <#else>
		"architectureProjectEntity" : "",
	    </#if>
	    
	   	<#if uuid?exists>
		"uuid" : "${uuid}",
	    <#else>
		"uuid" : "",
	    </#if>
	    
	   	<#if node.id?exists>
		"id" : "${node.id?string?replace(".", "")}"
	    <#else>
		"id" : ""
	    </#if>
	    }
	    <#if node_has_next>,</#if>
	</#list>
</#if>
]}