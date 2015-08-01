<#assign cont=1>
<#list resultSet?sort_by("name") as node> 	
	<#if cont%2==0>
	<div id="${node.id}" class="projectMallStyle colorProject">
	<#else>
	<div id="${node.id}" class="projectMallStyle">
	   </#if> 
	<div class="detailProject" >
	Nombre:${node.name} <br> 
	Año: ${node.finishDate}<br>
	Tipo:${node.projectTypeName}<br> 

	</div  class="editProject" >
	<a class="ico editProject" title="Editar" onclick="editSucProjectPopup('${node.id}','${node.name}','${node.finishDate}' , '${node.startDate}' , '${node.description}', '${node.idProject}','${node.chiefArchitect}','${node.professionalName}' , '${node.draftsmanName}','${node.idStatus}','${node.operatorId}')">
	<a class="ico stageProject" title="Etapas" onclick="createStage(${node.id},${node.projectTypeId});">
	<a class="ico delete" title="Eliminar" onclick="removeProjectSuc(${node.id});">
	</a>
	</div>
<#assign cont = cont + 1>
</#list>