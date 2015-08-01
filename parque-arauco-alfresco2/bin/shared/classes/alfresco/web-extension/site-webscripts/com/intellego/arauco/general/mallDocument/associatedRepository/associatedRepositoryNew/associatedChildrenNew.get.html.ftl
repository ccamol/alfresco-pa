  <#if childrenStatus!="-1">
	<ul class="classificationUl">
	<#list childrens as node> 	
		<li class="associateElementNew associateFolderNew associateParentNew" id="${node.uuid}assocNew" >
			<img src="/share/images/icons/close_folder.png" class="element" onClick="associateToggleNew('${node.uuid}assocNew')" />
			<label id="namelabelNew_${node.uuid}" class="elementLabel element" onClick="associateToggleNew('${node.uuid}assocNew')">${node.name} (cargando....)</label>
		</li>
	</#list>
	<ul>
  </#if>
