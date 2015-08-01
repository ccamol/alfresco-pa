<head>

<head>

<body>

<div id="editRolDialog">
<div class="modal-header">
    <a data-dismiss="modal" class="close"></a>
    <h3>Editar rol</h3>
 </div>

<div class="modal-body ">
	<div class="col-md-6 column">
	    <label>Id:
 		<input disabled type="text" name="id" id="id" maxlength="255" value="<#if resultSet.id?exists >${resultSet.id}</#if>"></input>
 		</label>
		
		 <label>Tipo:
	    <#if resultSet.documentalRol?exists >
	        <select id="documentalRol">
	        <#if resultSet.documentalRol=="consumer" >
	          <option value="consumer" selected>Consumidor</option>
	        <#else>
	          <option value="consumer">Consumidor</option>
	        </#if>
	        <#if resultSet.documentalRol=="editor" >
	          <option value="editor" selected>Editor</option>
	        <#else>
	          <option value="editor">Editor</option>
	        </#if>
	        <#if resultSet.documentalRol=="collaborator" >
	          <option value="collaborator" selected>Colaborador</option>
	        <#else>
	          <option value="collaborator">Colaborador</option>
	        </#if>
	        <#if resultSet.documentalRol=="coordinator" >
	          <option value="coordinator" selected>Coordinador</option>
	        <#else>
	          <option value="coordinator">Coordinador</option>
	        </#if>
	        </select>
        <#else>
	        <select id="documentalRol">
	          <option value="consumer" selected>Consumidor</option>
	          <option value="editor">Editor</option>
	          <option value="collaborator">Colaborador</option>
	          <option value="coordinator">Coordinador</option>
	        </select>
        </#if>
        </label>
	</div>	
		<div class="col-md-6 column">
		 <label>Nombre:
 		<input type="text" name="name" id="name" maxlength="20" value="<#if resultSet.name?exists >${resultSet.name}</#if>"></input>
 		</label>
	    <label>Descripci&oacuten:
 		<textarea type="text" name="description" id="description" maxlength="255" value="<#if resultSet.description?exists >${resultSet.description}</#if>"></textarea>
 		</label>	
		</div>
		    
</div>

<div class="modal-footerpopup">
    <a href="#" data-dismiss="modal" class="btn btn-primary" onclick="updateRol('<#if resultSet.id?exists >${resultSet.id}</#if>');">Guardar</a>
	<a href="#" data-dismiss ="modal" class="btn btn-primary">Cancelar</a>
</div>

</div>

</body>
