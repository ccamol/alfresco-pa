<#if document?exists>
{
"document": {
 "docinfo": {
	"name": "${document.name}",
	"nodeRef": "${document.nodeRef}",
	"type": "${document.type}",
	"mimetype": "${document.mimetype}",
	"dbid": "${document.properties["sys:node-dbid"]}",
	"content_url": "${url.context}${document.url}",
	<#if document.properties["versionLabel"]?exists>
	"versionLabel": "${document.properties["versionLabel"]}",</#if>
	"locked": <#if document.isLocked>"Yes"<#else>"No"</#if>
 },
 "aspects": [
 	<#list document.aspects as aspect>
         "${aspect}"<#if aspect_has_next>, </#if>
    </#list>
 ],
 "assocs": [
      <#list document.assocs?keys as key>
        { "name": "${key}", "value": [
         <#list document.assocs[key] as t>
            "${t.displayPath}/${t.name}"<#if t_has_next>, </#if>
         </#list>
         ] }<#if key_has_next>, </#if>
      </#list>
 ],
 <#-- custom properties -->
 <#if customproperties?exists>
 	"customproperties": [
 	<#list customproperties as cp> 		
 			<#-- Si la propiedad existe -->
         	<#-- if document.properties["${prefix}:${cp.name}"]?exists -->
         	{ "mandatory": "${cp.mandatory}",
               "dataType": "${cp.dataType}",
               "aspect": "${cp.aspect}",
               "titleAspect": "${cp.titleAspect}",
               "name": "${cp.name}",
               "title": "${cp.title}",
               "show": "${cp.create.show?string("true", "false")}",
               "isList": "${cp.create.list?string("true", "false")}",
			   <#if document.properties["${prefix}:${cp.name}"]?exists>
	               <#if cp.create.list?string("true", "false") == "true">
	               "propertyList": [
		               	<#list cp.getListToCombo(cp.create.properties['listName']?string) as listElement>
		               	{
			             	"name": "${listElement.name}",
			            	<#if document.properties["${prefix}:${cp.name}"]?is_date> 				
								"value": "${listElement.id?string("dd-MM-yyyy")}"
			            	<#elseif document.properties["${prefix}:${cp.name}"]?is_boolean>
								"value": "${listElement.id?string("true", "false")}"
			            	<#else>
			            		"value": "${listElement.id?html}"
			            	</#if>
		               	}<#if listElement_has_next>, </#if>
		               	</#list>
		           ],
		           </#if>
	 			<#-- Si es tipo date, formatea de acuerdo -->
	            	<#if document.properties["${prefix}:${cp.name}"]?is_date> 				
						"value": "${document.properties["${prefix}:${cp.name}"]?string("dd-MM-yyyy")}"
		      	<#-- Si es boolean formatea de acuerdo -->
	            	<#elseif document.properties["${prefix}:${cp.name}"]?is_boolean>
						"value": "${document.properties["${prefix}:${cp.name}"]?string("yes", "no")}"
	            <#-- Si es una coleccion, la enumera -->
	            	<#elseif document.properties["${prefix}:${cp.name}"]?is_enumerable>
						"value": [
		               		<#list document.properties["${prefix}:${cp.name}"] as i>
		               		<#if i?is_date>"${i?string("dd-MM-yyyy")}"<#else>"${i}"</#if><#if i_has_next>, </#if>
		               		</#list>
		               		]
	            <#-- De otra manera lo trata como string -->
	            	<#else>
	            		"value": "${document.properties["${prefix}:${cp.name}"]?html}"
	            	</#if>
			   <#else>
			   		"value" : ""
			   </#if>
        	}
         	<#-- #else -->
         	<#-- { "aspect": "${cp.aspect}", "titleAspect": "${cp.titleAspect}", "name": "${cp.name}", "title": "", "value": "" } -->
 			<#-- /#if -->
 			<#if cp_has_next>, </#if>
 	</#list>
 	],
 </#if>
 	<#-- metadatos con clave usando Template API -->
 	<#if document?exists>
 	"alfrescoproperties": [
      <#-- Obtiene una lista de todos los nombres de propiedades del documento -->
      <#assign props = document.properties?keys>
      <#list props as t>      		
         <#-- Si la propiedad existe -->
         <#if document.properties[t]?exists>
         	<#if t_index != 0>, </#if>
         	{ "name": "${t}",
            <#-- Si es tipo date, formatea de acuerdo -->
            <#if document.properties[t]?is_date> 				
            		"value": "${document.properties[t]?string("dd-MM-yyyy")}"
            <#-- Si es boolean formatea de acuerdo -->
            <#elseif document.properties[t]?is_boolean>
               		"value": "${document.properties[t]?string("yes", "no")}"
            <#-- Si es una coleccion, la enumera -->
            <#elseif document.properties[t]?is_enumerable>
	        	"value": [ 
	            	<#list document.properties[t] as i>
	            		<#if i?is_date>"${i?string("dd-MM-yyyy")}"<#else>"${i}"</#if><#if i_has_next>, </#if>
	            	</#list>
	            		]
            <#-- De otra manera lo trata como string -->
            <#else>
               		"value": "${document.properties[t]?html}"
            </#if>
            	}
         </#if>
      </#list>
      ]
	<#else>
	   	"not_found_message": "${message("templates.doc_info.no_document_found")}"
	</#if>
	
 }
}
</#if>
<#-- para extraer el hash de la propiedad
${t?substring(t?last_index_of("}")+1)}
-->