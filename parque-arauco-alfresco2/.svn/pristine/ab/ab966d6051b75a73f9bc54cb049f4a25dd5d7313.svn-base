{"resulSetUploaded" :[
<#if resulSetUploaded?exists>
<#list resulSetUploaded as node>
	{
	<#if node.id?exists>
	"idUploaded": "${node.id?string?replace(".", "")}",
	<#else>
	"idUploaded" : "",
	</#if>
	
	<#if node.uuidDocument?exists>
	"uuidUploaded": "${node.uuidDocument}",
	<#else>
	"uuidUploaded" : "",
	</#if>
	<#if node.fechaCarga?exists>
	"dateUploaded": "${node.fechaCarga?string("dd/MM/yyyy HH:mm:ss")}",
	<#else>
	"dateUploaded" : "",
	</#if>
	
	<#if node.documentToCarry.id?exists>
	"documentToCarryUploadedId": "${node.documentToCarry.id?string?replace(".", "")}",
	<#else>
	"documentToCarryUploadedId" : "",
	</#if>
	<#if node.documentToCarry.name?exists>
	"documentToCarryUploadedName": "${node.documentToCarry.name}",
	<#else>
	"documentToCarryUploadedName" : "",
	</#if>
	
	<#if node.documentToCarry.format?exists>
	"documentToCarryUploadedFormat": "${node.documentToCarry.format}",
	<#else>
	"documentToCarryUploadedFormat" : "",
	</#if>
	
	<#if node.documentToCarry.description?exists>
	"documentToCarryUploadedDescription": "${node.documentToCarry.description}"
	<#else>
	"documentToCarryUploadedDescription" : ""
	</#if>
	
	}
<#if node_has_next>,</#if>
</#list>
</#if>
],


"resulSettDocumentToCarry" :[
<#if resulSettDocumentToCarry?exists>
<#list resulSettDocumentToCarry as node>
	{
	<#if node.id?exists>
	"toCarryId": "${node.id?string?replace(".", "")}",
	<#else>
	"toCarryId" : "",
	</#if>
	
	<#if node.name?exists>
	"toCarryName": "${node.name}",
	<#else>
	"toCarryName" : "",
	</#if>
	
	<#if node.format?exists>
	"toCarryFormat": "${node.format}",
	<#else>
	"toCarryFormat" : "",
	</#if>
	
	<#if node.description?exists>
	"toCarryDescription": "${node.description?replace("\"","'")?replace("\n"," ")?replace("\t"," ")}"
	<#else>
	"toCarryDescription" : ""
	</#if>
	
	}
<#if node_has_next>,</#if>
</#list>
</#if>
]

}
