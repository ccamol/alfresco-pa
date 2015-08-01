<#assign cont=1>
<#list resultSet as node> 	
	<#if cont%2==0>
	<div id="${node.id}" class="projectMallStyle colorProject">
	<#else>
	<div id="${node.id}" class="projectMallStyle">
	   </#if> 
	<div class="detailProject" >
	Mall: ${node.nameMall}<br/>
	Proyecto: ${node.name}<br/>
	Fecha :    ${node.finishdate}  hasta ${node.createdDate}<br/>
	Estado: ${node.nameStatus}<br/>

	</div  class="editProject">
	<a class="ico preview" title="Previsualizar" onclick="searchDocumentModule(${node.id})">
	
	</a>
	
	
	<a class="ico upload" title="Cargar"  onclick="uploadDocumentModule(${node.id});" ></a> 


	</div>
<#assign cont = cont + 1>
</#list>

