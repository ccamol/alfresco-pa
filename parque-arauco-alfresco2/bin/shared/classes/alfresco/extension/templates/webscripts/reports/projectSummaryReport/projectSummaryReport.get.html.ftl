<table id="versionTop15Result" class="dataTableClass table table-striped table-bordered">
	<thead>
		<tr>
		<th>&Aacuterea</th>
		<th>Mall/Outlet</th>
		<th>Tipo</th>
		<th>Proyecto</th>
		<th>Estado</th>
		</tr>
	</thead>
	<tbody>
	<#if resultSet?exists>
	<#list resultSet as node>
		<tr>
			<td><#if node.area?exists>${node.area}</#if></td>
			<td><#if node.mall?exists>${node.mall}</#if></td>
			<td><#if node.type?exists>${node.type}</#if></td>
			<td><#if node.project?exists>${node.project}</#if></td>
			<td><#if node.status?exists>${node.status}</#if></td>
		</tr>
	</#list>
	</#if>
	</tbody>
<table>
