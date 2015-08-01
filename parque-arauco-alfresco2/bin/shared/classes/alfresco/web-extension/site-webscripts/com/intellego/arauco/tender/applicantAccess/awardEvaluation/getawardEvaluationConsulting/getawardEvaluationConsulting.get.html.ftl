
<div class="accordion" id="accordion2">
	<#assign cont=1>
	<#list resultSet as node> 	
		 	<div class="accordion-group">
			    <div class="accordion-heading">
			      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseCategory${cont}" onclick="viewQuestions(${node.categoryId} , ${cont})">
						${cont}.- ${node.categoryName}
			      </a>
			    </div>
			    <div id="collapseCategory${cont}" class="accordion-body collapse">
			      <div class="accordion-inner">
			       		<div id="categoryAdmin${cont}"></div>
			      </div>
			    </div>
  			</div>
  		<#assign cont = cont + 1>
  	</#list>
</div>
