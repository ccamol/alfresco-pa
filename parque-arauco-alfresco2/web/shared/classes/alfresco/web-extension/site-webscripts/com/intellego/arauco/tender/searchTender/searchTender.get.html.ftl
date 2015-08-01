<table cellpadding="0" cellspacing="0" border="0" class="dataTableClass table table-striped table-bordered dataTableFuntion" id="searchTender" >
<thead> 
			<tr>
<th>Acciones</th>
<th>Proyecto</th>
<th>Nombre</th>       
<th>Área</th>    
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
		<input title="Cerrar" type="button" class="ico closeTenderDes deshabilitado" onclick="closeTender(${node.id})" disabled="disabled" style="height: 30px; width: 30px; border: none;" /> 
		<a title="Editar" class="ico editProject" onclick="showTender(${node.id})"></a>
		<input title="Etapas" type="button" class="ico stageProjectDes" onclick="biddingHandle(${node.id})" disabled="disabled" style="height: 30px; width: 30px; border: none;"/>
		<input title="Parámetros" type="button" class="ico parametersDes" onclick="managingParameters()" disabled="disabled" style="height: 30px; width: 30px; border: none;"/>
	<#else>
		<a title="Cerrar" class="ico closeTender deshabilitado" onclick="closeTender(${node.id})"></a> 
		<a title="Editar" class="ico editProject" onclick="showTender(${node.id})"></a>
		<a title="Etapas" class="ico stageProject" onclick="biddingHandle(${node.id})"></a>
		<a title="Parámetros" class="ico parameters" onclick="showManagingParameters(${node.id})"></a>
	</#if> 
</td>
<#if node.projectName?exists>
	<td>${node.projectName}</td>
<#else>
	<td></td>
</#if>
<#if node.name?exists>
	<td>${node.name}</td>
<#else>
	<td></td>
</#if>
<#if node.organizationalAreaName?exists>
	<td>${node.organizationalAreaName}</td>
<#else>
	<td></td>
</#if>
<#if node.initDate?exists>
	<td>${node.initDate}</td>
<#else>
	<td></td>
</#if>
<#if node.endDate?exists>
	<td>${node.endDate}</td>
<#else>
	<td></td>
</#if>
<td><a  class="ico" onclick="showCalendar('${node.id}')" class="ico"><img src="/share/bootstrap/img/ico-calendar.png"></a></td>
</tr>
</#list>
</tbody>
 </table>