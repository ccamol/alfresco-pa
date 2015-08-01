<div id="workflowTasksDialog">
	<div class="row clearfix">
		
		<div class="modal-header">
			<a data-dismiss="modal" class="close"></a>
			<h3>Tareas del flujo de trabajo</h3>
		</div>
	
		<div class="modal-body">
			<div class="row clearfix">
				<div class="col-md-12 column">
					<div class="control-group">
						<input type="hidden" id="workflowid" value="${workflowid}"/>						
					</div>
				</div>
			</div>
			
				<div class="col-md-12 column">
				<#if tasks?exists>
					<table class="dataTableClass table table-striped table-bordered dataTable">
						<tr>
						  <th>Etapa</th>
						  <th>Fecha Inicio</th>
						  <th>Fecha Fin</th>
						  <th>Asignado a</th> 
						  <th>Estado</th>
						  <th>Comentario</th>
						</tr>
						<#list tasks as t>
						<tr id="${t.id}">
						  <td>${t.title}</td>
						  <td>${t.created}</td>
						  <td>${t.completionDate}</td>
						  <td>${t.owner}</td>
						  <#if t.state == 'IN_PROGRESS'>
						  <td>En progreso</td>
						  <#elseif t.state == 'COMPLETED'>
						  <td>Finalizado</td>
						  </#if>
						  <td>${t.comment}</td>						  
						</tr>
						</#list>
					</table>
				</#if>
			    </div>	
			
		</div>
		<div class="modal-footer">
			<a href="#" data-dismiss ="modal" class="btn btn-primary">Aceptar</a>
		</div>
	
	</div>
</div>

<script type="text/javascript">
	
	
</script>

