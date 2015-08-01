<option value="0">Seleccione un País...</option>	
<#list resultSet as node>
	 <#if country?exists>
	 	<#if country == node.idCountry>
	 	 	<option value="${node.idCountry}" selected>${node.nameCountry}</option>	
	 	<#else>
	 		<option value="${node.idCountry}" >${node.nameCountry}</option>
	 	</#if>
	 <#else>
	  <option value="${node.idCountry}">${node.nameCountry}</option>	
	 </#if>	
	
</#list>
