<head></head>

		    <div class="modal-header">
        <h3 class="title-modal">Crear Mall</h3>
     </div>
<div class="modal-body">
<div class="col-md-12 column"> 
   <div class="row clearfix">  
				<div class="col-md-6 column">
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label>Nombre (*)</label>
						</div>
						<div class="col-md-8 column">
						<input id="countryName" type="text"/>
						</div>
					</div>									
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label>Pais (*)</label>
						</div>
						
						<div class="col-md-8 column">
						<select id="getCountries">
							 <option value="0">Seleccionar</option>	
							<#list resultSet as node>
								  <option value="${node.idCountry}">${node.nameCountry}</option>	
							</#list>                         
						</select>
						</div>
					</div>					
				</div>				
			</div> 
			
			<br>
	   <div>Campos Obligarotios (*)</div>
