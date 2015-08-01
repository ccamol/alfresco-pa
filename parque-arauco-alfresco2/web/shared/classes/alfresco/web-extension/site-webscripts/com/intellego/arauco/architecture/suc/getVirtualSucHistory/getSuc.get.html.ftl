<#assign cont=1>
<#list resultSet as node> 	
	<#if cont%2==0>
	<div id="${node.id}" class="projectMallStyle colorProject">
	<#else>
	<div id="${node.id}" class="projectMallStyle">
	   </#if> 
	<div class="detailProject" >
	
	${node.sucCode} - <#if node.historySend?exists>${node.historySend}</#if>   
	</div>
	<a class="ico editProject" title="Deshacer de historial" onclick="undoHistory(${node.id?replace(".","")});"></a>
	</div>
	</div>
	</div>
<#assign cont = cont + 1>
</#list>

