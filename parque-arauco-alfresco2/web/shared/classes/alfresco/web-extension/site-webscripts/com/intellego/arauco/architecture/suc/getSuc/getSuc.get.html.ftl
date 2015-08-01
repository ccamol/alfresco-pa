<#assign cont=1>
<#list resultSet as node> 	
	<#if cont%2==0>
	<div id="${node.id}" class="projectMallStyle colorProject">
	<#else>
	<div id="${node.id}" class="projectMallStyle">
	   </#if> 
	<div class="detailProject" >
	${node.sucCode} <br>
	${node.contractDate}
	</div  class="editProject">
	<a class="ico editProject" title="Editar" onclick="editSuc('${node.id}','${node.sucCode}','${node.idMallSap}','${node.storeM2}','${node.terraseM2}','${node.wareHouseM2}','${node.escaparateM}','${node.description}', '${node.status}', '${node.sucType}')">
	</a>
	<#if remote.call("/arauco/checkPermissions?nodeType=3&id=" + node.id?replace(".", "") + "&funcionality=26")=="true">
		<a class="ico suc" title="Suc" onclick="getSucDetails('${node.id}')"></a> 
	</#if> 
	<#if node.status == "1"> 
	<a class="icosmall habilitado" title="Activo"></a> 
	<#else> 
	<a class="icosmall deshabilitado" title="Deshabilitar"></a> 
	</#if>
	
	</div>
<#assign cont = cont + 1>
</#list>

