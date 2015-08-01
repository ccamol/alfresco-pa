<#if status!="-1">
	<li class="associateElementNew associateFolderNew associateParentNew" id="${resultSet.uuid}assocNew">
		<img src="/share/images/icons/close_folder.png" class="element" onClick="associateToggleNew('${resultSet.uuid}assocNew')" />
		<label id="namelabelNew_${resultSet.uuid}" class="elementLabel element" onClick="associateToggleNew('${resultSet.uuid}assocNew')">${resultSet.name} (cargando....)<label>					
	</li>
</#if>
