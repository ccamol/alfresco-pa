<div class="accordion" id="accordion2">
	<#assign cont=1>
	<#list resultSet as node> 	
		 	<div class="accordion-group">
			    <div class="accordion-heading">
			      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse${idCategory}${cont}" onclick="viewAnswers(${node.id} , ${cont}, ${idCategory})">
					<div class="row clearfix" style="padding: 3px;">
						<div style="word-wrap: break-word; width: 850px;">
							|<b>${cont}.- Pregunta:</b>&nbsp;${node.question}
						</div>
					</div>
					<div class="row clearfix" style="padding: 3px;">
						<div style="word-wrap: break-word;">
							|${node.questionDate}
						</div>
					</div>
			      </a>
			    </div>
			    <div id="collapse${idCategory}${cont}" class="accordion-body collapse">
			      <div class="accordion-inner">
			       		<div id="answersAdmin${idCategory}${cont}"></div>
			      </div>
			    </div>
  			</div>
  		<#assign cont = cont + 1>
  	</#list>
</div>