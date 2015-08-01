<option value="0">Seleccione Área...</option>	
<#list resultSet as node>
	 <#if area?exists>
	 	<#if area == node.id>
	 	 	<option value="${node.id}" selected>${node.name}</option>	
	 	<#else>
	 		<option value="${node.id}" >${node.name}</option>
	 	</#if>
	 <#else>
	  <option value="${node.id}">${node.name}</option>	
	 </#if>	
	
</#list>