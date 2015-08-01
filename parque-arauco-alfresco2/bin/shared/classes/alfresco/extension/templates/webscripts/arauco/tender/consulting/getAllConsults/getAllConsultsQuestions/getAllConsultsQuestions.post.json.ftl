{"resultSet" :[
<#list resultSet.result as node>
{
	<#if node.id?exists>
	"id": "${node.id?string?replace(".", "")}",
	<#else>
	"id" : "",
	</#if>
	<#if node.topicTitle?exists>
	"topicTitle": "${node.topicTitle}",
	<#else>
	"topicTitle" : "",
	</#if>
	<#if node.category?exists>
	"categoryId": "${node.category.id?string?replace(".", "")}",
	<#else>
	"categoryId" : "",
	</#if>
	<#if node.category?exists>
	"categoryName": "${node.category.name}",
	<#else>
	"categoryName" : "",
	</#if>

	<#if node.tender?exists>
	"tenderId": "${node.tender.id?string?replace(".", "")}",
	<#else>
	"tenderId" : "",
	</#if>
	<#if node.tender?exists>
	"tenderName": "${node.tender.name}",
	<#else>
	"tenderName" : "",
	</#if>
	<#if node.author?exists>
	"author": "${node.author}",
	<#else>
	"author" : "",
	</#if>
	<#if node.question?exists>
	"question": "${node.question?replace("\"","'")?replace("\n"," ")?replace("\t"," ")}",
	<#else>
	"question" : "",
	</#if>
	<#if node.description?exists>
	"description": "${node.description?replace("\"","'")?replace("\n"," ")?replace("\t"," ")}",
	<#else>
	"description" : "",
	</#if>
	<#if node.status?exists>
	"status": "${node.status}",
	<#else>
	"status" : "",
	</#if>
	<#if node.publicationStatus?exists>
	"publicationStatus": "${node.publicationStatus}",
	<#else>
	"publicationStatus" : "",
	</#if>
	<#if node.questionDate?exists>
	"questionDate": "${node.questionDate?string("dd/MM/yyyy HH:mm")}"
	<#else>
	"questionDate" : ""
	</#if>
}
<#if node_has_next>,</#if>
</#list>
]}
