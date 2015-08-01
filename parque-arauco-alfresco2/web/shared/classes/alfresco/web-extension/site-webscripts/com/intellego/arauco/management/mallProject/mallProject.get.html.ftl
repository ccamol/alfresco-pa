<div class="dashlet">
	<div id="dashletWolrd" class="title">Proyectos del Mall</div>
	<div class="col-md-12 column bar">
		<div class="row clearfix">
			<div class="col-md-6 column input-group small-search">
			  <input type="text" class="form-control" id="nameProject">
					<div class="input-group-btn more" id="containerDropdown">
							<a data-toggle="dropdown" id="dropdownProject"> <span class="caret"></span></a>
								<div class="dropdown-menu dropdown-menu-large">
									<div class="view">
										<div class="form-group">
											<label>Estado:</label>
											<br>		        	
											<select id="statusFilterProject">
												<option value="none">Seleccione...</option>
												<option value="0">Vigente</option>
												<option value="1">Finalizada</option>	
	 											<option value="2">En pausa</option>	
											</select>
										</div>
											<div class="form-group">
												<label>Fecha</label>		        	
	               								<p>Desde: <input type="text" class="datePickers" id="txDateFromProject" maxlength="255" value="" name="txDateFromProject"></p>
	     									</div>
	     									<div class="form-group">	
			   									<p>Hasta: <input type="text" name="txDateToProject" class="datePickers" value="" maxlength="255" id="txDateToProject"></p>
           									</div>			
									</div>
								</div><!-- /fin dropmenu -->
						</div>
			  <div class="more wrapper-btn"><div class="btn-search-primary" onclick="searchProject()"></div></div>
			</div><!-- /input-group -->
		<div class="col-md-6 column"><#if remote.call("/arauco/checkPermissions?nodeType=1&id=" + page.url.args.id + "&funcionality=6")=="true"><button id="createProject" class="btn btn-second"  value="Crear Proyecto" >Crear Proyecto</button></#if></div>	
		</div>
	</div>
	<div id="proyectMalls" class="col-md-12 column" style="overflow-y:scroll;  height:300px;">
		<div class="row clearfix"></div>
	</div> 
</div>
 