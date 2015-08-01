<div class="dashlet logos">

<div id="selection">
 	<input type="hidden" id="siteId" value="${(page.url.templateArgs.site!"")?html}"></input>
 	
 <div class="row clearfix">	
<select id="mallCountry"></select> 	
</div>
<div class="row clearfix">
  	<label class="radio-inline">
  		<input type="radio" id="Mall" name="local" value="Mall" onclick="selectionMall('1')" /> Mall
		</label>
  		<label class="radio-inline">
  		<input type="radio" id="Mall" name="local" value="Outlet" onclick="selectionMall('2')" /> Outlet
		</label>
	</div>
</div>

<div class="row clearfix">
<div id="mallsList">


</div>
</div>

</div>