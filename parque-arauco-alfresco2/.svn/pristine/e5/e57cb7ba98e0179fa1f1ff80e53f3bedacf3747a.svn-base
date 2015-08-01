<table id="searchTendersApplicant" class="dataTableClass table table-striped table-bordered">
<thead>
<tr>
<th>Acciones</th>
<th>ID Proyecto</th>
<th>Nombre</th>       
<th>Etapa</th>    
<th>Fecha Inicio</th> 
<th>Fecha Fin</th>
<th>Calendario</th>               
</tr>
</thead>
<tbody>
<#list resultSet as node> 	
<tr>
<td>


<#if node.tenderStatus == '0'>
	<a title="Abandonar" class="icosmall deshabilitado" onclick="leaveTender(${node.tenderId})" value="disable" disabled="disabled"></a> 
	<a title="Detalles" class="ico preview" onclick="showTender(${node.tenderId})"></a>
	<a title="Entrar" class="ico suc" onclick="biddingHandle(${node.tenderId})" value="disable" disabled="disabled"></a>
<#else>
<#if node.stageId == '1'>
	<a title="Detalles" class="ico preview" onclick="showTender(${node.tenderId})"></a>
</#if>
<#if node.stageId == '2'>
	<a title="Abandonar" class="icosmall deshabilitado" onclick="leaveTender(${node.tenderId})"></a> 
	<a title="Detalles" class="ico preview" onclick="showTender(${node.tenderId})"></a>
	<a title="Entrar" class="ico suc" onclick="biddingHandleType2(${node.tenderId},${node.stageId})"></a>
</#if>
<#if node.stageId == '3'>
	<a title="Abandonar" class="icosmall deshabilitado" onclick="leaveTender(${node.tenderId})"></a> 
	<a title="Detalles" class="ico preview" onclick="showTender(${node.tenderId})"></a>
	<a title="Entrar" class="ico suc" onclick="biddingHandleType3(${node.tenderId},${node.stageId})"></a>
</#if>
<#if node.stageId == '4'>
	<a title="Abandonar" class="icosmall deshabilitado" onclick="leaveTender(${node.tenderId})"></a> 
	<a title="Detalles" class="ico preview" onclick="showTender(${node.tenderId})"></a>
	<a title="Entrar" class="ico suc" onclick="biddingHandleType4(${node.tenderId},${node.stageId})"></a>
</#if>
<#if node.stageId == '5'>
	<a title="Abandonar" class="icosmall deshabilitado" onclick="leaveTender(${node.tenderId})"></a> 
	<a title="Detalles" class="ico preview" onclick="showTender(${node.tenderId})"></a>
	<a title="Entrar" class="ico suc" onclick="biddingHandleType5(${node.tenderId},${node.stageId})"></a>
</#if>
<#if node.stageId == '6'>
	<a title="Abandonar" class="icosmall deshabilitado" onclick="leaveTender(${node.tenderId})"></a> 
	<a title="Detalles" class="ico preview" onclick="showTender(${node.tenderId})"></a>
	<a title="Entrar" class="ico suc" onclick="biddingHandleType6(${node.tenderId},${node.stageId})"></a>
</#if>
</#if>	
	
	
</td>
<td>${node.projectName}</td>
<td>${node.tenderName}</td>
<td>${node.stageName}</td>
<td>${node.initDate}</td>
<td>${node.endDate}</td>
<td><a onclick="showCalendar('${node.tenderId}')" class="ico"><img src="/share/bootstrap/img/ico-calendar.png"></a></td>
</tr>
</#list>
</tbody>

</table>