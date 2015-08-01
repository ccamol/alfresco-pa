{"resultSet" :[
<#if resultSet?exists>
	<#list resultSet as node>
	{
		<#if node.displayName?exists>
		"displayName" : "${node.displayName}",
	    <#else>
		"displayName" : "",
	    </#if>
	    
	    
	    <#if node.fullName?exists>
		"fullName" : "${node.fullName}",
	    <#else>
		"fullName" : "",
	    </#if>
	    
	   	<#if idProject?exists>
		"idProject" : "${idProject?string?replace(".", "")}"
	    <#else>
		"idProject" : ""
	    </#if>
	    }
	    <#if node_has_next>,</#if>
	</#list>
</#if>
]}