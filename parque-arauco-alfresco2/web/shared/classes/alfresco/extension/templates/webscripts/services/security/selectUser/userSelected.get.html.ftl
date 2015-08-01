<table id="userSelectedTable" class="tablesorter" style="width: 100%">
	<#if resultSet?exists>
	<#list resultSet as node>
		<tr>
			<td class="nameUser bold">${node.username}</td>
			<td style="width: 50%;">
		    <#if rolList?exists >
		        <select id="documentalRol_${node.id}" onChange="updateACL(${node.id}, ${node.rol.id}, '${node.username}');">
					<#list rolList as rol>
						<#if node.rol.id==rol.id>
							<option value="${rol.id}" selected>${rol.name}</option>
						<#else>
							<option value="${rol.id}">${rol.name}</option>
						</#if>
					</#list>
		        </select>
			</#if>
			</td>
			<td style="width: 10%; text-align: center;"><img class="ico" style="padding-bottom:5px;" src="/share/bootstrap/img/ico-quitar.png" onClick="deleteACL(${node.id});" /></td>
		</tr>
	</#list>
	</#if>
<table>
