<head>

<script type="text/javascript" src="/share/arauco/ajax/management/documentHistoryPopup.js" charset="utf-8"></script>

<script type="text/javascript">  
    $(document).ready(function(){
        $("#report tr:odd").addClass("odd");
        $("#report tr:not(.odd)").hide();
        $("#report tr:first-child").show();
        
        $("#report tr.odd").click(function(){
            $(this).next("tr").toggle();
            $(this).find(".arrow").toggleClass("up");
        });
        //$("#report").jExpand();
    });
</script>

    <style type="text/css">
        #report div.arrow { background:transparent url(/share/images/icons/arrows.png) no-repeat scroll 0px -16px; width:16px; height:16px; display:block;}
		#report div.up { background-position:0px 0px;}
    </style>


</head>
<div id="documentHistoryDialog">
			
		<div class="modal-header">
			<a data-dismiss="modal" class="close"></a>
			<h3 class="title-modal">Histórico del documento</h3>
		</div>	
		<div class="modal-body">
			
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
				<#if versions?exists>
					<table id="report" class="dataTableClass table table-striped table-bordered dataTable">
						<tr>
						  <th></th>
						  <th>Version</th>
						  <th>Fecha Version</th> 
						  <th>Responsable</th>
						  <th>Observacion</th>
						  <th>Acciones</th>
						</tr>
						<#list versions as version>
						<tr id="${version.label}">
						  <td><div class="arrow"></div></td>
						  <td><a href="${version.downloadURL}">${version.label}</a></td>
						  <td>${version.createdDate}</td>
						  <td>${version.creator.firstName}</td>
						  <td>${version.description}</td>
						  <td>
						  <div class="btn btn-link promotelink" onClick="showPromoteDocumenVersionPopup('${uuid}', '${version.label}')">Promover</div>
						  </td>
						</tr>
						<tr>
				            <td colspan="6">
				                <h4>Documentos anexos</h4>
				                <ul>
									${version.htmlAssocs}
				                 </ul>   
				            </td>
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

