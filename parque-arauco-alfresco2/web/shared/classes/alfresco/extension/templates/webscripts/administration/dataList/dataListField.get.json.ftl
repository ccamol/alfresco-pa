[ 
 <#list resultSet as node>
 {      
     <#if node.id?exists >   
     "id" : "${node.id}",
     <#else>
     "id" : "",
     </#if>
     <#if node.description?exists >   
     "description" : "${node.description?replace("\"","'")?replace("\n"," ")?replace("\t"," ")}",
     <#else>
     "description" : "",
     </#if>
     <#if node.mandatory?exists >   
     "mandatory" : "${node.mandatory}",
     <#else>
     "mandatory" : "false",
     </#if>
     <#if node.dataType?exists >   
     "dataType" : "${node.dataType}",
     <#else>
     "dataType" : "",
     </#if>
     "data" : [
        <#list node.metadatas as data>
        {
             <#if data.id?exists >   
             "id" : "${data.id}",
             <#else>
             "id" : "",
             </#if>
             <#if data.description?exists >   
             "description" : "${data.description?trim}"
             <#else>
             "description" : ""
             </#if>
        }
        <#if data_has_next>,</#if>
        </#list>
     ]
     
 }
 <#if node_has_next>,</#if>
 </#list>
 ]