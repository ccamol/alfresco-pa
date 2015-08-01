<head></head>
		    <div class="modal-header">
        <a data-dismiss="modal" class="close"></a>
        <h3 class="title-modal">Reclasificar Documentos </h3>
     </div>
<div class="modal-body">
<div class="col-md-12 column"> 
   <div class="row clearfix">  
				<div class="col-md-6 column">
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label><img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;">Mall Arquitectura</label>
						</div>
						<div class="col-md-6 column">
						   <select  id="mall"  > 	
							 <#list resultSet as node> 
				 				<option value="" disabled selected style ="display:none; " >Seleccionar</option>
				 				<option    value="${node.id}" >${node.name}</option>
							 </#list>	
		    				</select>		
						</div>
					</div>
														
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label>Seleccion</label>
						</div>
						
						<div class="col-md-6 column">
						   <select  id="elegir" onchange=" selectOption()">
				 				<option value="" disabled selected style ="display:none; " >Seleccionar</option>
				 				<option value="1">Proyectos Mall</option>
  				 				<option value="2"> Suc  </option>
			  				</select>  
						</div>
					</div>	
									
					<div class="row clearfix">
						<div class="col-md-4 column">	<label id="titulo"> </label> </div>
						<div class="col-md-6 column">
						    <select  id="proyecto"  >
			  				</select>
						</div>
					</div>					
				</div>		
						
				<div class="col-md-6 column">
					<div class="row clearfix">
						<div class="col-md-4 column">	<label>Proyectos Suc </label>	</div>
						<div class="col-md-6 column">
							<select  id="Sucproyecto" onchange="statusProject()" >
			  				</select>	
						</div>
					</div>
					<div class="row clearfix">
						<div class="col-md-4 column">
						<label>Etapas </label>
						</div>
						<div class="col-md-6 column">
						<select  id="etapasProyecto" >
			  			</select>
						</div>
					</div>
				</div>
			</div> 
			
			
			<br>
    <div class="modal-footerpopup">	
        <input type="button" id="reclasificar" onclick="reclassifyDocument('${uuid}','${classification}')" class="btn btn-success" value="Mover Documento" />
       
    </div>





