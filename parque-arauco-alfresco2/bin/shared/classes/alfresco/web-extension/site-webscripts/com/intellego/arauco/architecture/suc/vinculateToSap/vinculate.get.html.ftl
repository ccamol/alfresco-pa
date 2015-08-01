<script>
$( document ).ready(function() {
                       $('#sucsForSelect').dataTable( {
                       
                       
       "bPaginate": false,
    
       "bInfo": false
                } );
               });
</script>
<head></head>
    <div class="modal-header">
          <a data-dismiss="modal" class="close"></a>
        <h3 class="title-modal">VINCULAR SUC VIRTUAL</h3>
     </div>   

<div style="height:380px;" class="col-md-6 column" id="listas">
<div class="row clearfix" style="width:100%; padding-left: 30px;">
  
	<table cellpadding="0" cellspacing="0" border="0" class="dataTableClass table table-striped table-bordered" id="sucsForSelect">
  		<thead> 	
  		<tr>	  
		<th style="width:100%;"> SUC real</th>
		</tr>
		</thead>
 			 <tbody style="display: inline-block; overflow-y: auto;height:200px;">
  
  		<#list resultSet as node>
 	    <#if node.sucCode?exists>
     
     
    	 <tr >
     
        <td id="td_${node.sucCode}" >Nombre: ${node.description}<br/>C&oacutedigo: ${node.sucCode}<br/>M2 Tienda: ${node.storeM2}<br/>Contrato vigente: ${node.currentContract} <a class="icosmall habilitado" title="Vincular SUC" onclick="vinculate('${id}', '${node.sucCode}');"></a> </td>

		</tr>

     		</#if>
   </#list>     
   
   </tbody>         
</table>

</div>
</div>
<div style="padding-top: 77px;" class="col-md-6 column">

	<table cellpadding="0" cellspacing="0" border="0" class="dataTableClass table table-striped table-bordered" id="sucsForSelect">
  		<thead> 	
  		<tr>	  
		<th style="width:100%;"> SUC virtual</th>
		</tr>
		</thead>
 			 <tbody >
    	 <tr >
     
        <td>Nombre: ${description}<br/>C&oacutedigo: ${sucName}<br/>M2 Tienda: ${storeM2}</td>

		</tr>
   </tbody>         
</table>
</div>
