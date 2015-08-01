{

"resultSetEng" :[



<#list resultSetEng as node>
{
	<#if node.id?exists>
	"id": "${node.id?string?replace(".", "")}",
	<#else>
	"id" : "",
	</#if>
	
	<#if node.id?exists>
	"idProject": "proEng${node.id?string?replace(".", "")}",
	<#else>
	"idProject" : "",
	</#if>

	
	<#if node.name?exists>
	"name": "${node.name}"
	<#else>
	"name" : ""
	</#if>
}
<#if node_has_next>,</#if>
</#list>

],

"resultSetArch" :[



<#list resultSetArch as node>
{
	<#if node.id?exists>
	"id": "${node.id?string?replace(".", "")}",
	<#else>
	"id" : "",
	</#if>
	<#if node.id?exists>
	"idProject": "proArc${node.id?string?replace(".", "")}",
	<#else>
	"idProject" : "",
	</#if>

	
	<#if node.name?exists>
	"name": "${node.name}"
	<#else>
	"name" : ""
	</#if>
}
<#if node_has_next>,</#if>
</#list>

],


"resultSetSucPro" :[



<#list resultSetSucPro as node>
{
	<#if node.id?exists>
	"id": "${node.id?string?replace(".", "")}",
	<#else>
	"id" : "",
	</#if>
	<#if node.id?exists>
	"idProject": "ProSuc${node.id?string?replace(".", "")}",
	<#else>
	"idProject" : "",
	</#if>

	
	<#if node.name?exists>
	"name": "${node.name}"
	<#else>
	"name" : ""
	</#if>
}
<#if node_has_next>,</#if>
</#list>

]






}
