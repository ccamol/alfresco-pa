	[
	<#if resultset?exists> 
	<#list resultset as node>
		{
			<#if node.properties["paList:id"]?exists>
			"idList" :"${node.properties["paList:id"]}",
			<#else>
			"idList" : "",
			</#if>
			
			<#if node.properties["paList:description"]?exists>
			"description" :"${node.properties["paList:description"]?trim?replace("\"","'")?replace("\n","")?replace("\t"," ")}"
			<#else>
			"description" : ""
			</#if>
		}
		<#if node_has_next>,</#if>
	</#list>
	</#if>
	]
	