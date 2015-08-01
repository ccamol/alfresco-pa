<div class="dashlet">
	<div id="dashletWolrd" class="title" style="overflow: hidden;">Documentos del Mall
	     <div align="right" style="position: relative; top: -25px; overflow: hidden;">
	        <a style="" value="Carga Externa" onclick="maximize_minimize()" class="ico-expand"></a>
	     </div>
	</div>
  <input type="hidden" id="siteId" value="${(page.url.templateArgs.site!"")?html}"></input>  
<div class="col-md-12 column bar">
	<div class="row clearfix">
    <div class="col-md-3 column input-group small-search">
      <input id="treeSearchText" type="text" class="form-control">	  
      <div class="input-group-btn more">
        <a data-toggle="dropdown"> <span class="caret"></span></a>
		
		<div class="dropdown-menu dropdown-menu-large">
		<div class="view">
			<div class="form-group">
			<label>Fecha</label>		        	
               <p>Desde: <input type="text" name="txDateFrom" value="" maxlength="255" id="txDateFrom" class="datePickers"/></p>
			   			   
            </div>
			
			<div class="form-group">	
			   <p>Hasta: <input type="text"  id="txDateTo" maxlength="255" value=""  class="datePickers" name="txDateTo"/></p>
            </div>
        </form>
		
		</div>
        </div><!-- /fin dropmenu -->
		
      </div><!-- /btn-group -->
	  <div class="more wrapper-btn"><div class="btn-search-primary" onClick="searchTree();"></div></div>
    </div><!-- /input-group -->
    
  	<div class="col-md-3 column"><#if remote.call("/arauco/checkDocumentalRol?nodeType=" + page.url.args.nodeType + "&id=" + page.url.args.id + "&documentalRol=collaborator")=="true"><button id="externanLoad" class="btn btn-second" onclick="uploadDocument()">Carga Externa</button></#if></div>	
	 <div class="col-md-3 column"><#if remote.call("/arauco/checkDocumentalRol?nodeType=" + page.url.args.nodeType + "&id=" + page.url.args.id + "&documentalRol=collaborator")=="true"><button id="externanLoad" class="btn btn-second" onclick="associatedRepositoryPopup()" >Asociar de Repositorio</button></#if></div>  
	
	</div>
  </div>
  
  
<div class="col-md-12 column tree">

<div id="documentMall" class="col-md-6 column">
  <#if status!="-1">
	<li class="element folder parent" id="${resultSet.uuid}" >
		<img src="/share/images/icons/close_folder.png" class="element" onClick="toggle('${resultSet.uuid}')" />
		<label id="label_${resultSet.uuid}" class="elementLabel element" onClick="selectNode('${resultSet.uuid}')">${resultSet.name} (calculando...)<label>
		
	</li>
  </#if>

</div>

 <div id="filesInFolder" class="col-md-6 column"></div>
  
<div id="editClassificationDialog">
</div>
</div>

</div>

  
