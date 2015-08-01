  <#if childrenStatus!="-1">
	<ul class="classificationUl">
	<#list childrens as node> 	
		<li class="associateElementOld associateFolderOld associateParentOld" id="${node.uuid}assocOld" >
			<img src="/share/images/icons/close_folder.png" class="element" onClick="associateSelectNodeOld('${node.uuid}assocOld')" />
			<label id="namelabelOld_${node.uuid}" class="elementLabel element" onClick="associateSelectNodeOld('${node.uuid}assocOld')">${node.name} (calculando....)</label>
		</li>
	</#list>
	<ul>
  </#if>
