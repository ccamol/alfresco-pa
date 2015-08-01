<script type="text/javascript" src="/share/arauco/ajax/management/promoteDocumentVersion.js" charset="utf-8"></script>

<div id="promoteDocumentVersionDialog">
	<div>
		
		<div class="modal-header">
			<a data-dismiss="modal" class="close"></a>
			<h3 class="title-modal">Promover documento</h3>
		</div>
	
		<div class="modal-body">
			<div>
				<div class="col-md-12 column">
					<div class="control-group">
						<input type="hidden" id="uuidHidden" value="${uuid}"/>
						<#if docinfo?exists>
<div class="row clearfix">						
							<label>Documento:</label>
							<span>${docinfo.name}</span>
							</div>
						</#if>
						<#if mall?exists>
<div class="row clearfix">						
							<label>${mall.title}:</label>
							<span>${mall.value}</span>
							</div>
						</#if>
						<#if sucNumber?exists>	
<div class="row clearfix">						
							<label>${sucNumber.title}:</label>
							<span>${sucNumber.value}</span>
							</div>
						</#if>
						<#if section?exists>
<div class="row clearfix">						
							<label>${section.title}:</label>
							<span>${section.value}</span>
							</div>
						</#if>
						<#if documentType?exists>
<div class="row clearfix">						
							<label>${documentType.title}:</label>
							<span>${documentType.value}</span>
							</div>
						</#if>
					</div>
					<form id="promoteDescriptionForm" method="POST" action="${url.context}/proxy/alfresco/api/revert"
					 forms-runtime="listening" onsubmit="return false;">
						<input type="hidden" id="uuid-hidden" name="uuid" value="${uuid}"/>
						<label>Tipo cambio:</label>
						<div class="row clearfix"><input type="radio" name="majorVersion" value="true" checked><span>Cambios Mayores</span></div>
						<div class="row clearfix"><input type="radio" name="majorVersion" value="false"><span>Cambios Menores<span></div>
						<label>Ingrese una observacion:</label>
						<textarea name="description" id="description" form="promoteCommentForm"></textarea>
					</form>
				</div>
			</div>
			<div class="row clearfix">
				<div class="col-md-12 column">
				
			    </div>	
			</div>
		</div>
		    <div class="modal-footerpopup">	
      			<input type="button" onclick="promoteDocumentVersion('${uuid}', '${label}');" class="btn btn-success" value="Aceptar" />
    		</div>
	
	</div>
</div>

<script type="text/javascript">
		
</script>

