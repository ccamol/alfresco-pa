{"resultSet" :[
<#list resultSet.result as node>
    {
    
     <#if node.id?exists>
			"id": "${node.id?string?replace(".", "")}",
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
    
        <#if node.createDate?exists>
			"createDate": "${node.createDate?string("dd/MM/yyyy")}",
            <#else>
				"createDate" : "",
			</#if>
    
      <#if node.mall.id?exists>
			"idMall": "${node.mall.id?string?replace(".", "")}",
            <#else>
				"idMall" : "",
			</#if>
    
      <#if node.mall.name?exists>
			"nameMall": "${node.mall.name}",
            <#else>
				"nameMall" : "",
			</#if>
       
          <#if node.projectType.id?exists>
			"idProjectType": "${node.projectType.id?string?replace(".", "")}",
            <#else>
				"idProjectType" : "",
			</#if>
			
           <#if node.projectType.name?exists>
			"projectTypeName": "${node.projectType.name}",
            <#else>
				"projectTypeName" : "",
			</#if>
        
    		<#if node.projectStatusEntity?exists>
    			<#if node.projectStatusEntity.id?exists>
				"idStatus": "${node.projectStatusEntity.id?string?replace(".", "")}",
	            <#else>
					"idStatus" : "",
				</#if>
         		
	        	<#if node.projectStatusEntity.name?exists>
				"nameStatus": "${node.projectStatusEntity.name}",
	            <#else>
					"nameStatus" : "",
				</#if>	
    		<#else>
    			"nameStatus" : "",
    			"idStatus" : "",
    		</#if>    
          
  			<#if node.chiefArchitect?exists>
			"chiefArchitect": "${node.chiefArchitect}",
            <#else>
				"chiefArchitect" : "",
			</#if>	
			
			<#if node.companyAwarded?exists>
			"companyAwarded": "${node.companyAwarded}",
            <#else>
				"companyAwarded" : "",
			</#if>	
			
			<#if node.professionalName?exists>
			"professionalName": "${node.professionalName}",
            <#else>
				"professionalName" : "",
			</#if>	
			
			<#if node.draftsmanName?exists>
			"draftsmanName": "${node.draftsmanName}",
            <#else>
				"draftsmanName" : "",
			</#if>	
			
			<#if node.numberOC?exists>
			"numberOC": "${node.numberOC}",
            <#else>
				"numberOC" : "",
			</#if>	
			
			<#if node.companyAwardedRut?exists>
			"companyAwardedRut": "${node.companyAwardedRut}",
            <#else>
				"companyAwardedRut" : "",
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
