<table id="versionTop15Result" class="dataTableClass table table-striped table-bordered">
	<thead>
		<tr>
		<th>Documento</th>
		<th>Versiones</th>
		<th>Mall/Outlet</th>
		<th>Nombre</th>
		<th>Etapa</th>
		<th>Categor&iacutea</th>
		<th>&Aacuterea</th>
		</tr>
	</thead>
	<tbody>
	<#if resultSet?exists>
	<#list resultSet?sort_by("versionCount")?reverse as node>
		<tr>
			<td><#if node.node.properties['pa:documentType']?exists>${node.node.properties['pa:documentType']}<#else></#if></td>
			<td>${node.versionCount}</td>
			<td><#if node.node.properties['pa:mall']?exists>${node.node.properties['pa:mall']}<#else></#if></td>
			<td><#if node.name?exists>${node.name}</#if></td>
			<td><#if node.stage?exists>${node.stage}</#if></td>
			<td><#if node.category?exists>${node.category}</#if></td>
			<td><#if node.node.properties['pa:sectionID']?exists><#if node.node.properties['pa:sectionID']==1>Arquitectura<#else>Ingenier&iacutea</#if><#else></#if></td>
		</tr>
	</#list>
	</#if>
	</tbody>
<table>
