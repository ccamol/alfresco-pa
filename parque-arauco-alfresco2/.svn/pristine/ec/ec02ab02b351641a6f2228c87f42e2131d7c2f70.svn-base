<option value="0">Seleccione un Mall...</option>	
<#list resultSet as node>
	 <#if mall?exists>
	 	<#if mall == node.idMall>
	 	 	<option value="${node.idMall}" selected>${node.nameMall}</option>	
	 	<#else>
	 		<option value="${node.idMall}" >${node.nameMall}</option>
	 	</#if>
	 <#else>
	  <option value="${node.idMall}">${node.nameMall}</option>	
	 </#if>	
	
</#list>
