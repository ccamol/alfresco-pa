
<html>
	<head>
		<meta charset="utf-8"/>
	</head>
	<body>		
		<p>Estimado(a),</p>
		<p>El siguiente documento a sido compartido:</p>
				
		<#if notify.expiredList?has_content>
			<table style="font-size: 15px; width: 600px; border-collapse: collapse;">
				<tr style="background: #009a90; color: #fff; font-weight: bold;">         
					<th>Nombre Documento</th>
					<th>Url</th>
				</tr>
				<#list notify.expiredList as node>
					<#if (node_index%2) == 0>
						<tr style="background: #fff; text-align: center;">
					<#else>
						<tr style="background: #eee; text-align: center;">
					</#if>
						<#if node.documentName?exists>
						 	<td style="padding-top: .3em; padding-bottom: .3em;">${node.documentName}</td>
					 	<#else>
						 	<td style="padding-top: .3em; padding-bottom: .3em;"></td>
						</#if>
						<!--
						<#if node.link?exists>
							<td style="padding-top: .3em; padding-bottom: .3em;"><a href="${node.link}" target="_blank">Link</a></td>
						<#else>
						 	<td style="padding-top: .3em; padding-bottom: .3em;"></td>
						</#if>
						-->
						</tr>
				</#list>
			</table>
		</#if>
		
		Administración - Gestor Documental.		
	</body>
</html>