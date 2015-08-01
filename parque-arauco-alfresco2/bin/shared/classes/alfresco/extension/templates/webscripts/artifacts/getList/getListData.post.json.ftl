	[
	<#if resultset?exists> 
	<#list resultset as node>
		{
			<#if node.properties["${prefixList}:id"]?exists>
			"idList" :"${node.properties["${prefixList}:id"]}",
			<#else>
			"idList" : "",
			</#if>
			
			<#if node.properties["${prefixList}:description"]?exists>
			"description" :"${node.properties["${prefixList}:description"]?trim?replace("\"","'")?replace("\n","")?replace("\t"," ")}"
			<#else>
			"description" : ""
			</#if>
		}
		<#if node_has_next>,</#if>
	</#list>
	</#if>
	]
	