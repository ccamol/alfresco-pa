
<div id="dashletWolrd" class="title">Mall Selection</div>
  
 <div class="containerMall">

  <div id="container">
  <div id="containerMallSelection">
<#assign cont=0>
<#assign flag=0>

<#list resultSet as node> 	

		<#if cont%3==0 || cont==0 >
 		<div id="columns"  class="rowsArauco">
		</#if>  

	<div id="${node.uuid}" class="mallList">
	<img src="${node.img}" />
	</div>

	<#assign flag = flag + 1>

	<#if flag==0 >
 	</div>
 	<#assign flag = 0>
 
	</#if>

	<#assign cont = cont + 1>

</#list>

	<#if flag < 3 >
	 </div>
 	</#if>
  
	</div>
   </div>
  </div>
 

