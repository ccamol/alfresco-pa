<div class="dashlet">
  <div id="dashletWolrd" class="title">Vencimientos</div>
  <div class="col-md-12 column bar">
  		<div class="row clearfix">
				<div class="col-md-6 column input-group small-search">
					<input id="textExpiration" type="text" class="form-control">	  
						<div class="input-group-btn more">
							<a data-toggle="dropdown"> <span class="caret"></span></a>
								<div class="dropdown-menu dropdown-menu-large">
									<div class="view">
										<div class="form-group">
											<p>Vigencia por dias:</p>
											<select id="amountDay">
												<option value="0">Seleccionar Rango...</option>
												<option value="30">30</option>
												<option value="60">60</option>
												<option value="61">Mayor a 60</option>
											</select>
										</div>
										<div class="form-group">
											<p>Vigencia por mes:</p>
											<select id="amountMonth">
												<option value="0">Seleccionar mes...</option>
												<option value="1">Enero</option>
												<option value="2">Febrero</option>
												<option value="3">Marzo</option>												
												<option value="4">Abril</option>
												<option value="5">Mayo</option>
												<option value="6">Junio</option>												
												<option value="7">Julio</option>
												<option value="8">Agosto</option>
												<option value="9">Septiembre</option>												
												<option value="10">Octubre</option>
												<option value="11">Noviembre</option>
												<option value="12">Diciembre</option>
											</select>
										</div>
										<div class="form-group">
										<label>Fecha fin vigencia  <input type="checkbox" name="advanceOption" id="advanceOption" onclick="filterAdvance()" ></label>		        	
										   <p>Desde: <input type="text" name="txDateFrom" value="" maxlength="255" id="txExpirationFrom" class="datePickers" disabled/></p>		   
										</div>
										<div class="form-group">	
										   <p>Hasta: <input type="text"  id="txExpirationTo" maxlength="255" value=""  class="datePickers" name="txDateTo" disabled/></p>
										</div>
									</div>
								</div><!-- /fin dropmenu -->
						</div><!-- /btn-group -->
					<div class="more wrapper-btn"><div class="btn-search-primary" onClick="filterExpiration();"></div></div>
				</div><!-- /input-group -->
		</div>
  </div>
	<div id="expiration" class="col-md-12 column">
  	</div>
  </div>