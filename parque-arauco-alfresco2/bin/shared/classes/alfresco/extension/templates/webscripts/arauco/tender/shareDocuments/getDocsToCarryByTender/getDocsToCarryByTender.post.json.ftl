{"resultSet" :[
<#if resultSet?exists>
<#list resultSet as node>
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
	<#if node.description?exists>
	"description": "${node.description?replace("\"","'")?replace("\n"," ")?replace("\t"," ")}",
	<#else>
	"description" : "",
	</#if>
	<#if node.format?exists>
	"format": "${node.format}",
	<#else>
	"format" : "",
	</#if>
	<#if node.documentType?exists>
	"documentType": "${node.documentType}",
	<#else>
	"documentType" : "",
	</#if>
	<#if node.createdDate?exists>
	"createdDate": "${node.createdDate?string("dd/MM/yyyy")}",
	<#else>
	"createdDate" : "",
	</#if>
	<#if node.uuid?exists>
	"uuid": "${node.uuid}"
	<#else>
	"uuid" : ""
	</#if>
	}
<#if node_has_next>,</#if>
</#list>
</#if>
]}
