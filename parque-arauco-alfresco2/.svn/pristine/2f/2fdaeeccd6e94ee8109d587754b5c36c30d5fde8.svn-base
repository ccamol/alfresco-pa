[ 
 <#list resultSet as node>
 {      
     <#if node.id?exists >   
     "id" : "${node.id}",
     <#else>
     "id" : "",
     </#if>
     <#if node.title?exists >   
     "title" : "${node.title}",
     <#else>
     "title" : "",
     </#if>
     <#if node.type?exists >   
     "type" : "${node.type}"
     <#else>
     "type" : ""
     </#if>
     
 }
 <#if node_has_next>,</#if>
 </#list>
 ]