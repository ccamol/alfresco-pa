<option value="0">Seleccione tipo...</option>	
<#list resultSet as node> 	
	 <option value="${node.id}">${node.name}</option>	
</#list>