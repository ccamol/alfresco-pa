<#assign cont=1>
<#list resultSet as node> 	
	<#if cont%2==0>
	<div id="${node.id}" class="projectMallStyle colorProject">
	<#else>
	<div id="${node.id}" class="projectMallStyle">
	   </#if> 
	<div class="detailProject" >
	${node.sucCode}
	</div  class="editProject">
	<#if remote.call("/arauco/checkPermissions?nodeType=3&id=" + node.id?replace(".", "") + "&funcionality=42")=="true">
		<a class="ico enviarhistorico" title="Enviar historial" onclick="sendToHistory('${node.id?string?replace(".", "")}', '${node.sucCode}', '${node.idMallSap}', '${node.storeM2}', '${node.terraseM2}', '${node.idMall}', '${node.wareHouseM2}', '${node.escaparateM}', '${node.description}', '${node.status}')"></a>
	</#if>
	<#if remote.call("/arauco/checkPermissions?nodeType=3&id=" + node.id?replace(".", "") + "&funcionality=28")=="true">
		<a class="ico vincular" title="Vincular" onclick="linkSap(${node.id?string?replace(".", "")}, '${node.sucCode}', '${node.description}', '${node.storeM2}')"></a>
	</#if>
	<#if remote.call("/arauco/checkPermissions?nodeType=3&id=" + node.id?replace(".", "") + "&funcionality=26")=="true">
	<a class="ico suc" title="Suc Virtual" onclick="sucManagement('${node.id?string?replace(".", "")}')"></a>
	</#if>
	</div>
<#assign cont = cont + 1>
</#list>
