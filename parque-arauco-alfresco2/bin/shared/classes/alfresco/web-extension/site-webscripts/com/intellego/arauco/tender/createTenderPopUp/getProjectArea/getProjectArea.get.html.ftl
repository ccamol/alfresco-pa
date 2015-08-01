<option value="0">Seleccione Proyecto...</option>	
<#list resultSetArch as node> 	
	 <#if idProject?exists>
	 	 <#if idProject = node.idProject>
		 	<option value="${node.idProject}" selected>${node.name}</option>
		 <#else>
			 <option value="${node.idProject}">${node.name}</option>
		 </#if>	
	 <#else>
	 	 <option value="${node.idProject}">${node.name}</option>
	 </#if>	
</#list>
<#list resultSetEng as node> 
	<#if idProject?exists>
	 	 <#if idProject = node.idProject>	
			<option value="${node.idProject}" selected>${node.name}</option>
		<#else>
			<option value="${node.idProject}">${node.name}</option>
		</#if>	
	 <#else>
		 <option value="${node.idProject}">${node.name}</option>
	 </#if>	
</#list>
<#list resultSetSucPro as node> 
	<#if idProject?exists>
	 	<#if idProject = node.idProject>	
	 		<option value="${node.idProject}" selected>${node.name}</option>	
	 	<#else>
	 		<option value="${node.idProject}">${node.name}</option>
	 	</#if>
	 <#else>
	 	<option value="${node.idProject}">${node.name}</option>
	 </#if>
</#list>