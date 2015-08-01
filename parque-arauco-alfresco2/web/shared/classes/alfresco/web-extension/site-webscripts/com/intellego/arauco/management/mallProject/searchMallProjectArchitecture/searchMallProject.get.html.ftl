<#assign cont=1>
<#list resultSet as node> 	
	<#if cont%2==0>
	<div id="${node.id}" class="projectMallStyle colorProject">
	<#else>
	<div id="${node.id}" class="projectMallStyle">
	   </#if> 
	<div class="detailProject" >
	Nombre: ${node.name}
	<br> Fecha Inicio: ${node.createDate}
	<br> Fecha Termino: ${node.finishdate}
	<br> Tipo: ${node.projectTypeName}
	
	</div  class="editProject">
	<a class="ico stageProject" onclick="createStage(${node.id},${node.idProjectType});" title="Etapas"></a>
	<a class="ico editProject" title="Editar" onclick="editProjectArchitecture( '${node.id}' , '${node.name}' , '${node.finishdate}' , '${node.createDate}' , '${node.idMall}' , '${node.idProjectType}' , '${node.idStatus}' , '${node.description}' , '${node.chiefArchitect}' , '${node.companyAwarded}' , '${node.professionalName}' , '${node.draftsmanName}' , '${node.numberOC}' , '${node.companyAwardedRut}' );"></a>	
	<img title="Seguridad" style="right:11.5%;position:absolute;cursor:pointer;" src="/share/bootstrap/img/ico-security.png" onclick="vinculateProject(${node.id})">
	</div>
<#assign cont = cont + 1>
</#list>
