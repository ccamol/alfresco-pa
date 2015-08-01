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
		"id" : "${node.id}",
	    <#else>
		"id" : "",
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