<head><script type="text/javascript" src="/share/arauco/ajax/management/createProject.js" charset="utf-8"></script></head>
<div class="modal-header">
        <a data-dismiss="modal" class="close"></a>
        <h3 class="title-modal">Modificar Proyecto</h3>
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
						<input  type="text" id="name"/>
						</div>
					</div>					
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label><img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;">Mall</label>
						</div>
						<div class="col-md-8 column">
						<input type="text" id="mall" class="form-control"/>
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
						<label><img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;">Estado</label>
						</div>
						<div class="col-md-8 column">
						
						<select id="getStatusProject">
                         
                         </select>
						</div>
					</div>					
				</div>				
				<div class="col-md-6 column">
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label><img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;">Fecha Creaci&oacute;n</label>
						</div>
						<div class="col-md-8 column">
						<input type="text" id="creationDate" class="datePickers form-control"/>
						</div>
					</div>
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label><img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;">Fecha Finalizaci&oacuten</label>
						</div>
						<div class="col-md-8 column">
						<input  type="text" id="finishDate" class="datePickers form-control">
						</div>
					</div>
				</div>
			</div> 
			
			<div class="row clearfix">
						<div class="col-md-2 column">
						<label>Descripci&oacuten</label>
						</div>
						<div class="col-md-10 column">
						<textarea id="description" class="form-control" rows="5" maxlength="255"></textarea>
						Como maximo 255 caracteres
						</div>
		    </div>
			<br>
	    <div>(<img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;">Campos Obligatorios)</div>
    <div class="modal-footerpopup">	
      <input type="button" id="addProject" onclick="addProject()" class="btn btn-success" value="Editar Proyecto" />
    </div>