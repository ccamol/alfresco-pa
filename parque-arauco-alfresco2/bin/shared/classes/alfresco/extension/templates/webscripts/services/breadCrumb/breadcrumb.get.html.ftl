<html>

<div id="breadcrumbpa" style="background: #FFFFFF;">
<#list resultSet as node>
	<a href="${node.link}">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${node.value}</a>
</#list>
<#if people.isAdmin(person)> 	
	<img onclick="selectSecurity()" src="/share/bootstrap/img/ico-security.png" style="right:20px;position:absolute;cursor:pointer;">
</#if>
</div>
</html>