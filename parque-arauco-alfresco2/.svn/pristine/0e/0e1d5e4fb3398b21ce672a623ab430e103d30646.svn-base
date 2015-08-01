<head>
	<script type="text/javascript" src="/share/arauco/ajax/engineering/getMallList.js" charset="utf-8"></script>
</head>

<div id="dashletWolrd" class="title">Mall Selection</div>

<div class="containerMall">
	<div id="container">
		<div id="containerMallSelection">
			<#assign cont=0>
			<#assign flag=0>
			
			<#list resultSet as node>
				<#if SecurityService.checkSecurity(node.id, 1, 2, person.properties['cm:userName']) || people.isAdmin(person)> 	
					<#if cont%3==0 || cont==0 >
						<div id="columns"  class="rowsArauco">
					</#if>  
					<div id="${node.id}" class="mallList">
					<a href="#" class="mallImage" onClick="getManagement(${node.id});">
					<#if node.nameImage?exists><#if node.nameImage=="default.jpg">
						<h2 style="position: relative; top: 120px; text-align: center; height:0px; margin-top:-10px;font-size: 0.6vw;">${node.name}</h2>
					</#if></#if>
					<img class="mallImg" id="img${node.id}" alt="${node.name}" src="/share/proxy/alfresco/api/node/content/workspace/SpacesStore/${node.imageUuid}/${node.nameImage}">
					</a>
					</div>
					
					<#assign flag = flag + 1>
					<#if flag==0 >
						</div>
						<#assign flag = 0>
					</#if>
					<#assign cont = cont + 1>
				</#if>
			</#list>
			
			<#if flag < 3 >
			 </div>
			</#if>
		  
		</div>
	</div>
</div>
 
