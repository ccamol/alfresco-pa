<head></head>

		    <div class="modal-header">
        <a data-dismiss="modal" class="close">�</a>
        <h3 class="title-modal">Reclasificar Documentos </h3>
     </div>
<div   class="modal-body">
<div  class="col-md-12 column"> 
   <div class="row clearfix">  
				<div class="col-md-6 column">
					<div class="row clearfix">
						<div class="col-md-4 column"> <label><img src="/alfresco/images/icons/required_field.gif" style="padding-right:5px;">Mall</label> </div>
						<div class="col-md-6 column">
						   <select  id="mall" onchange="getMallProjectReclasificate();"> 	
							 <#list resultSet as node> 
				 				<option value="" disabled selected style ="display:none; " >Seleccionar</option>
				 				<option value="${node.id}" >${node.name}</option>
							 </#list>	
		    				</select>		
						</div>
					</div>
														
					<div class="row clearfix">
						<div class="col-md-4 column">	<label>Proyectos de Mall</label> </div>
						
						<div class="col-md-6 column">
						   <select  id="proyecto" onchange="statusProject()">
						     <option value="" disabled selected style ="display:none; " >Seleccionar</option>
						   </select>
						</div>
					</div>	
									
					<div class="row clearfix">
						<div class="col-md-4 column">	<label >Etapas </label> </div>
						<div class="col-md-6 column">
						    <select id="etapasProyecto" >
								<option value="" disabled selected style ="display:none; " >Seleccionar</option>
							</select>
						</div>
					</div>					
				</div>		
						
	</div>				
	</div>			
			
			<br>
	   <di>Campos Obligarotios (*)</div>
    <div class="modal-footer">	
        <input type="button" id="reclasificar" onclick="reclassifyDocument('${uuid}','${classification}')" class="btn btn-primary" value="Mover Documento" />
       
    </div>

