<script>
$( document ).ready(function() {
                       $('#sucsForSelect').dataTable( {
                       
                       
       "bPaginate": false,
    
       "bInfo": false
                } );
               });
</script>
<div class="modal-header">
		   <a data-dismiss="modal" class="close"></a>
        <h3 class="title-modal">Enlazar mall de taller</h3>
     </div>
<div class="modal-body">

<div style="overflow-y:auto; height:380px;" class="col-md-12 column" id="listas">
<div class="row clearfix" style="width:300px; padding-left: 30px;">
  

<table cellpadding="0" cellspacing="0" border="0" class="dataTableClass table table-striped table-bordered" id="sucsForSelect">
  <thead> 		  
<th> Malls </th>
</thead>
  <tbody>
  
  <#list resultSet as node>
     <#if node.idMallSap?exists>
     
     
     <tr >
     
        <td id="td_${node.idMallSap}" > ${node.name} (${node.idMallSap}) <a class="icosmall habilitado" onclick="vinculateMall('${id}', '${node.idMallSap}');"></a> </td>

</tr>

     </#if>
   </#list>     
   
   </tbody>         
</table>

</div>
</div>
</div>
</div>