<div class="modal-header">
		   <a data-dismiss="modal" class="close"></a>
        <h3 class="title-modal">Crear SUC Virtual</h3>
     </div>
<div class="modal-body">
<div id="sucData" class="col-md-12 column"> 
   <div class="row clearfix">  
				<div class="col-md-6 column">
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label><img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;">C&oacute;digo SUC</label>
						</div>
						<div class="col-md-8 column">
						<input  type="text" id="codeSuc"/>
						</div>
					</div>					
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label>M&sup2; Local</label>
						</div>
						<div class="col-md-8 column">
						<input type="text" id="storeM2" class="form-control"/>
						</div>
					</div>	
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label>M&sup2; Bodega</label>
						</div>
						<div class="col-md-8 column">
						<input type="text" id="warehousem2" class="form-control"/>
						</div>
					</div>					
				</div>				
				<div class="col-md-6 column">
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label>C&oacute;digo Centro Comercial</label>
						</div>
						<div class="col-md-8 column">
						<input type="text" id="idMallSap" class="form-control"/>
						</div>
					</div>		
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label>M&sup2; Terraza</label>
						</div>
						<div class="col-md-8 column">
						<input type="text" id="terraseM2" class="form-control"/>
						</div>
					</div>	
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label>ML Vitrina</label>
						</div>
						<div class="col-md-8 column">
						<input type="text" id="escaparatem" class="form-control"/>
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
						* Ingresar como maximo 255 caracteres
						</div>
		    </div>
		    <div>(<img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;"> Campos obligatorios)</div>
		    
		    <div class="modal-footerpopup">	
        		<input type="button" onclick="addSucVirtual()" value="Crear Suc" class="btn btn-success"/>
        		
    		</div>