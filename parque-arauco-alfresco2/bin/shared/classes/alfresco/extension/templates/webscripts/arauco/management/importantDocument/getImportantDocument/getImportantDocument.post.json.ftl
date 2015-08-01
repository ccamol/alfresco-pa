{"resultSet" :[
<#list resultSet as node>
    {
       <#if node.properties["sys:node-uuid"]?exists >
			"uuid" : "${node.properties["sys:node-uuid"]}",
            <#else>
				"uuid" : "",
			</#if>
    
        <#if node.properties["cm:name"]?exists >
			"name" : "${node.properties["cm:name"]}",
            <#else>
				"name" : "",
			</#if>
        
        
        <#if node.properties["pa:startDate"]?exists >
			"startDate" : "${node.properties["pa:startDate"]?string("dd/MM/yyyy")}",
            <#else>
				"startDate" : "",
			</#if>
        
       
         <#if node.properties["pa:endDate"]?exists >
			"endDate" : "${node.properties["pa:endDate"]?string("dd/MM/yyyy")}"
            <#else>
				"endDate" : ""
			</#if>
        
        
    }
<#if node_has_next>,</#if>
</#list>
]}