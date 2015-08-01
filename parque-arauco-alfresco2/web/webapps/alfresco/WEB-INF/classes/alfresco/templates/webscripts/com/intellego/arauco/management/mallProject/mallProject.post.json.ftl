{"resultSet" :[
<#list resultSet.result as node>
    {
    
     <#if node.id?exists>
			"id": "${node.id}",
            <#else>
				"id" : "",
			</#if>
    
     <#if node.name?exists>
			"name": "${node.name}",
            <#else>
				"name" : "",
			</#if>
    
    
     <#if node.finishDate?exists>
			"finishdate": "${node.finishDate?string("dd/MM/yyyy")}",
            <#else>
				"finishdate" : "",
			</#if>
    
        <#if node.createdDate?exists>
			"createdDate": "${node.createdDate?string("dd/MM/yyyy")}",
            <#else>
				"createdDate" : "",
			</#if>
    
      <#if node.mall.id?exists>
			"idMall": "${node.mall.id}",
            <#else>
				"idMall" : "",
			</#if>
    
      <#if node.mall.name?exists>
			"nameMall": "${node.mall.name}",
            <#else>
				"nameMall" : "",
			</#if>
       
          <#if node.projectType.id?exists>
			"idProjectType": "${node.projectType.id}",
            <#else>
				"idProjectType" : "",
			</#if>
			
			 <#if node.projectType.name?exists>
			"projectTypeName": "${node.projectType.name}",
            <#else>
				"projectTypeName" : "",
			</#if>
         
        
          <#if node.projectStatusEntity.id?exists>
			"idStatus": "${node.projectStatusEntity.id}",
            <#else>
				"idStatus" : "",
			</#if>
         		
        	 <#if node.projectStatusEntity.name?exists>
			"nameStatus": "${node.projectStatusEntity.name}",
            <#else>
				"nameStatus" : "",
			</#if>	
  
  			  <#if node.description?exists>
			"description": "${node.description?replace("\"","'")?replace("\n"," ")?replace("\t"," ")}"
            <#else>
			"description" : ""
			</#if>	
 
    }
<#if node_has_next>,</#if>
</#list>
]}
