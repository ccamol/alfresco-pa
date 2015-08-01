	[
	<#list resultset as node>
		{
			"id" :"${node.properties["${prefixList}:id"]}",
			"description" :"${node.properties["${prefixList}:description"]?trim?replace("\"","'")?replace("\n","")?replace("\t","")}"
		}
		<#if node_has_next>,</#if>
	</#list>
	]
