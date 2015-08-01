<#assign cont=1>
<#list resultSet as node> 	
	<#if cont%2==0>
	<div id="${node.id}" class="projectMallStyle colorProject">
	<#else>
	<div id="${node.id}" class="projectMallStyle">
	   </#if> 
	<div class="detailProject" >
	Nombre: ${node.name}<br/>
	Tipo: ${node.projectTypeName} <br/>
	Fecha de T&eacutermino:    ${node.finishdate}<br/>
	</div  class="editProject">
	<#if remote.call("/arauco/checkPermissions?nodeType=2&id=" + node.id + "&funcionality=7")=="true">
		<a class="ico editProject" title="Editar" onclick="editProject(${node.id},${node.idMall},'${node.nameMall}','${node.name}','${node.finishdate}','${node.description}',${node.idStatus},${node.idProjectType},'${node.createdDate}')"></a>
	</#if>
	
	<#if remote.call("/arauco/checkPermissions?nodeType=2&id=" + node.id + "&funcionality=5")=="true">
		<a class="ico stageProject" title="Etapas" onclick="createStage(${node.id},${node.idProjectType});" ></a> 
	</#if>

	<#if remote.call("/arauco/checkPermissions?nodeType=2&id=" + node.id + "&funcionality=1342")=="true">
		<img style="cursor:pointer;" src="/share/bootstrap/img/ico-security.png" onclick="selectProjectSecurity(2, ${node.id});" title="Seguridad"></img> 
	</#if>
	
	<#if remote.call("/arauco/checkPermissions?nodeType=2&id=" + node.id + "&funcionality=7")=="true">
		<a class="ico delete" title="Eliminar" onclick="deleteEngineeringProject('${node.id}')"></a>
	</#if>

	</div>
<#assign cont = cont + 1>
</#list>

