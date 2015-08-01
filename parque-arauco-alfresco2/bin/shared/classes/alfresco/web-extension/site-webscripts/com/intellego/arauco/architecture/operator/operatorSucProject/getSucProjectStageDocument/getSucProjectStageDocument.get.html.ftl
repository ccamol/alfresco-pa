<div id="tableSharedDocumentOperator" class="col-md-12 column">

 <table cellpadding="0" cellspacing="0" border="0" class="dataTableClass table table-striped table-bordered dataTableFuntion" id="sharedDocumentOperator" >
<thead> 
			<tr>
			<th>Titulo Documento</th>
			<th>Tipo</th>
			<th>Fecha de entrega</th>
			<th>Acciones</th>
			</tr>
			</thead>
			<tbody>



<#list resultSet as node> 	
<tr>
<td>${node.name}</td>
<td>${node.documentType}</td>
<td>${node.inputAgreedDate}</td>



<td>


<a class="ico" title="Descargar" onClick="downloadDocument('${node.uuid}','${node.name}')"><img src="/share/images/icons/download_doc.gif" border="0"></a>
<a class="ico" title="Previsualizar" onClick="previewDocument('${node.uuid}','${node.name}')"><img src="/share/images/icons/preview.gif" border="0"></a>

</td>

</tr>
</#list>
</tbody>
  </table>