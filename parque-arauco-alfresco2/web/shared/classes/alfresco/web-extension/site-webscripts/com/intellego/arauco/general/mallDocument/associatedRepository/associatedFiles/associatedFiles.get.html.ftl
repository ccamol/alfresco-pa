 <#if childrenStatus!="-1">
	<ul class="classificationUl">
	<#list childrens as node> 	
		<li class="associateElementOld associateFolderOld associateParentOld" id="${node.uuid}assocOld" >
			<td id="${node.uuid}" class="documentNode">${node.name}</td>
		</li>
	</#list>
	<ul>
 </#if>
		