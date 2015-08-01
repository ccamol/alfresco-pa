<ul class="classificationUl">
		<#list resultSet as node>
			<#if node.type=="document"> 	
				<li id="${node.uuid}assocOld" onclick="paintLabelSelected('${node.uuid}assocOld');">
					<img src="/alfresco/images/icons/View_details.gif" class="element"/>
					<label id="namelabelOld_${node.uuid}" class="elementLabel element">${node.name}</label>
				</li>
			</#if>	
		</#list>
	<ul>