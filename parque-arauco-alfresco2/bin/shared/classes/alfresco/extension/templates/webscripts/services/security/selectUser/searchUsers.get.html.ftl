<table id="userSearchTable" class="tablesorter" style="width: 100%">
	<#if resultSet?exists>
	<#list resultSet as person>
		<tr>
			<td style="width: 30%;"class="user bold">${person.properties['cm:userName']}</td>
			<td style="width: 60%;"><#if person.properties['cm:firstName']?exists>${person.properties['cm:firstName']}</#if><#if person.properties['cm:lastName']?exists>&nbsp&nbsp${person.properties['cm:lastName']}</#if></td>
			<td style="width: 10%; text-align: center;"><img  class="ico" src="/share/bootstrap/img/ico-agregar.png" onClick="addACL(0, '${person.properties['cm:userName']}');" /></td>
		<tr>
	</#list>
	</#if>
<table>