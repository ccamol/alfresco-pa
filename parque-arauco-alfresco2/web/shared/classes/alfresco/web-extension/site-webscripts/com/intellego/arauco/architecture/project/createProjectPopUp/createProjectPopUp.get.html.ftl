<head></head>
		    <div class="modal-header">
         <a data-dismiss="modal" class="close"></a>
        <h3 class="title-modal">Crear Proyecto Mall</h3>
     </div>
<div class="modal-body">
<div class="col-md-12 column"> 
   <div class="row clearfix">  
				<div class="col-md-6 column">
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label><img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;">Nombre</label>
						</div>
						<div class="col-md-8 column">
						<input id="name" type="text"/>
						</div>
					</div>
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label>Contratistas</label>
						</div>
						
						<div class="col-md-8 column">
						<select id="getOperator" multiple="multiple" class="multiselect">
                        </select>
						</div>
					</div>										
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label><img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;">Tipo</label>
						</div>
						<div class="col-md-8 column">
						<select id="getTypeProject">
                         </select>
						</div>
					</div>
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label>Jefe arquitectura a cargo</label>
						</div>
						<div class="col-md-8 column">
						<select id="nameManager">
                         </select>
						</div>
					</div>		
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label>Empresa Adjudicada</label>
						</div>
						<div class="col-md-8 column">
						<select id="nameCompany">
                         </select>
						</div>
					</div>												
				</div>				
				<div class="col-md-6 column">
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label>Fecha Creaci&oacute;n</label>
						</div>
						<div class="col-md-8 column">
						<input type="text" id="creationDate"/>
						</div>
					</div>
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label><img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;">Fecha Finalizaci&oacuten</label>
						</div>
						<div class="col-md-8 column">
						<input  type="text" id="finishDate" class="datePickers">
						</div>
					</div>
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label>Nro de OC asociada</label>
						</div>
						<div class="col-md-8 column">
						<input type="text" id="numberOC" />
						</div>
					</div>		
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label>Inspector técnico</label>
						</div>
						<div class="col-md-8 column">
						<select id="professionalName">
                         </select>
						</div>
					</div>	
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label>Dibujante a Cargo</label>
						</div>
						<div class="col-md-8 column">
						<select id="draftsmanName">
                         </select>
						</div>
					</div>
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label><img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;">Estado</label>
						</div>
						<div class="col-md-8 column">
						<select id="getStatusProject">
                        </select>
						</div>
					</div>
				</div>
			</div> 
			
			<div class="row clearfix">
				<div class="col-md-12 column">
					<div class="row clearfix">
							<div class="col-md-2 column">
								<label><img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;">Descripci&oacuten</label>
							</div>
							<div class="col-md-10 column">
								<textarea id="description" class="form-control" rows="2" maxlength="255"></textarea>
								* Ingresar como maximo 255 caracteres
							</div>
					</div>	
					
					<div>(<img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;"> Campos obligatorios)</div>	
				</div>
			</div>
			
	   
    <div class="modal-footerpopup">	
        <input type="button" onclick="addArchitectureProject()" value="Crear Proyecto" class="btn btn-success"/>
    </div>