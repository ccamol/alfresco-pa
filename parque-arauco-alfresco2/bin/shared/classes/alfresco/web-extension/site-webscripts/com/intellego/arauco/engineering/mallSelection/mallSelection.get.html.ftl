<div class="dashlet logos">
<div id="selection">
 	<input type="hidden" id="siteId" value="${(page.url.templateArgs.site!"")?html}"></input>
  	<label class="radio-inline">
  		<input type="radio" id="local" name="local" value="Mall" onclick="selectionMall('1')" checked/> <label id="mallTitle">Mall</label>
		</label>
  		<label class="radio-inline">
  		<input type="radio" id="oulet" name="local" value="Outlet" onclick="selectionMall('2')" /> <label id="ouletTitle">Outlet</label>
		</label>
  		<label class="radio-inline">
  		<input type="radio" id="workShopArea" name="local" value="Zona de taller" onclick="selectionMall('3')" /> <label id="workShopAreaTitle">Zona de taller</label>
		</label>
		<select id="getCountry" onchange="countrySelected();">
			<option>Seleccione pais...</option>
			<#list resultSet as node> 
				<option value="${node.id}">${node.name}</option>
			</#list>
		<select>
	<button id="createMall" class="btn btn-second" style="float: right;" value="Crear Mall taller" onClick="createMall()">Crear Mall Taller</button>
	</div>
<div id="mallsList">
</div>

</div>