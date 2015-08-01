<script type="text/javascript" src="/share/arauco/ajax/management/documentWorkflowsPopup.js" charset="utf-8"></script>

<div id="documentWorkflowsDialog">
		<div class="modal-header">
			<a data-dismiss="modal" class="close"></a>
			<h3>Flujos de trabajo asociados al documento</h3>
		</div>
	
		<div class="modal-body"style="max-height:518px;overflow-y:auto;">
			
				<div class="col-md-12 column">
					<div class="control-group">
						<input type="hidden" id="uuidHidden" value="${uuid}"/>
						<#if docinfo?exists>
							<div class="row clearfix">
							<label class="bold">Documento:</label>
							<span>${docinfo.name}</span>
							</div>
						</#if>
						<#if mall?exists>
							<div class="row clearfix">						
							<label class="bold">${mall.title}:</label>
							<span>${mall.value}</span>
							</div>
						</#if>
						<#if sucNumber?exists>	
							<div class="row clearfix">						
							<label class="bold">${sucNumber.title}</label>
							<span>${sucNumber.value}</span>
							</div>
						</#if>
						<#if section?exists>
							<div class="row clearfix">						
							<label class="bold">${section.title}</label>
							<span>${section.value}</span>
							</div>
						</#if>
						<#if documentType?exists>
							<div class="row clearfix">						
							<label class="bold">${documentType.title}</label>
							<span>${documentType.value}</span>
							</div>
						</#if>
					</div>
				</div>
			
			<div class="row clearfix">
				<div class="col-md-12 column">
				<#if workflows?exists>
					<table class="dataTableClass table table-striped table-bordered dataTable">
						<tr>
						  <th>Tipo de Flujo</th>
						  <th>Iniciado por</th> 
						  <th>Fecha Inicio</th>
						  <th>Fecha Fin</th>
						  <th>Estado</th>
						  <th>Descripcion</th>
						  <th>Acciones</th>
						</tr>
						<#list workflows as wf>
						<tr id="${wf.id}">
						  <td>${wf.title}</td>
						  <td>${wf.initiator.firstName} ${wf.initiator.lastName}</td>
						  <td>${wf.startDate}</td>
						  <td>${wf.endDate}</td>
						  <#if wf.isActive == true>
						  <td>En progreso</td>
						  <#else>
						  <td>Finalizado</td>
						  </#if>
						  <td>${wf.description}</td>
						  <td><a href="#" class="detailslink" id="${wf.id}">Detalles</a></td>
						</tr>
						</#list>
					</table>
				</#if>
			    </div>	
			</div>
		</div>
</div>

<script type="text/javascript">
	
	
</script>

