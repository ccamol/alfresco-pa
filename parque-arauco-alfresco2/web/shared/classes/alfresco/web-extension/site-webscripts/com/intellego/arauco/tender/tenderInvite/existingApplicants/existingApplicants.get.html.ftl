<html>
<head>
<script type="text/javascript" src="/share/arauco/ajax/tender/existingApplicants.js"></script>
</head>
<div class="modal-header">
	<a data-dismiss="modal" class="close" data-handler="0"></a>
	<h3 class="title-modal">Postulantes Existentes</h3>
</div>
<div class="modal-body" style="height:500px; overflow: scroll;">
<table id="applicantsTable" class="dataTableClass table table-striped table-bordered" style="width: 450px ! important; float: left; padding-left: 40px; margin-left: 60px;">
</table>
<table id="applicantsByTenderTable" class="dataTableClass table table-striped table-bordered" style="width: 450px ! important; float: right; padding-right: 40px; margin-right: 60px;">
<thead>
<tr>
<th>Postulantes de Licitación</th>
</tr>
</thead>
<tbody>
<#list resultSet as node> 
<#if node.idTender == tender>
<tr>
<td>${node.name} </td>

</tr>
</#if>
</#list>
</tbody>
</table>
</div>
</html>