{"resultSet" :[
<#list resultSet.result as node>
{
	<#if node.id?exists>
	"id": "${node.id?string?replace(".", "")}",
	<#else>
	"id" : "",
	</#if>
	<#if node.author?exists>
	"author": "${node.author}",
	<#else>
	"author" : "",
	</#if>
	<#if node.answer?exists>
	"answer": "${node.answer?replace("\"","'")?replace("\n"," ")?replace("\t"," ")}",
	<#else>
	"answer" : "",
	</#if>
	<#if node.question.id?exists>
	"questionId": "${node.question.id?string?replace(".", "")}",
	<#else>
	"questionId" : "",
	</#if>
	<#if node.question.topicTitle?exists>
	"topicTitle": "${node.question.topicTitle}",
	<#else>
	"topicTitle" : "",
	</#if>
	<#if node.answerDate?exists>
	"answerDate": "${node.answerDate?string("dd/MM/yyyy HH:mm")}"
	<#else>
	"answerDate" : ""
	</#if>
	
}
<#if node_has_next>,</#if>
</#list>
]}
