{"resultSet" :[
<#if resultSet?exists>
<#list resultSet as node>
	{

	
	<#if node.stageTypesTender.name?exists>
	"stageName": "${node.stageTypesTender.name}",
	<#else>
	"stageName" : "",
	</#if>
	
	<#if node.initDate?exists>
	"initDate": "${node.initDate?string("dd/MM/yyyy")}",
	<#else>
	"initDate" : "",
	</#if>
	<#if node.endDate?exists>
	"endDate": "${node.endDate?string("dd/MM/yyyy")}"
	<#else>
	"endDate" : ""
	</#if>
	
	}
<#if node_has_next>,</#if>
</#list>
</#if>
]}
