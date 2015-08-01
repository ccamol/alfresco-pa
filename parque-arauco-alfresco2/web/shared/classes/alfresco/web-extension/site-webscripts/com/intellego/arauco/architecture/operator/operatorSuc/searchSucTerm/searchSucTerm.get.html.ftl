<#assign cont=1>
<#list resultSet as node> 	
	<#if cont%2==0>
	<div id="${node.id}" class="projectMallStyle colorProject">
	<#else>
	<div id="${node.id}" class="projectMallStyle">
	   </#if> 
	<div class="detailProject" >
	Nombre: ${node.name}
	${node.nameMall}
	Fecha Inicio Contrato: ${node.contractDate}
	</div  class="editProject">
	<a class="ico editProject"  onclick="getSucProject(${node.id})">
	</a>
	</div>
<#assign cont = cont + 1>
</#list>