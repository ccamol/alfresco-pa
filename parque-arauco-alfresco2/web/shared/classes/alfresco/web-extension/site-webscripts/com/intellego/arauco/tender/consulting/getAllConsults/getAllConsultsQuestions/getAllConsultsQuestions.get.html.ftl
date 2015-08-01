<div class="accordion" id="accordion2">
	<#assign cont=1>
	<#list resultSet as node> 	
		 	<div class="accordion-group">
			    <div class="accordion-heading">
			      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse${idCategory}${cont}" onclick="viewAnswers(${node.id} , ${cont} , ${idCategory})">
			     	<div class="row clearfix" style="padding: 3px;">
						<div style="word-wrap: break-word; width: 850px;">
							|<b>${cont}.- Pregunta:</b>&nbsp;${node.question}
						</div>
					</div>
			     	<div class="row clearfix" style="padding: 3px;">
						<div style="word-wrap: break-word; width: 85%;">
							|<b>Autor:</b>&nbsp;${node.author}<br>
						</div>
					</div>
					<div class="row clearfix" style="padding: 3px;">
						<div style="word-wrap: break-word; width: 85%;">
							|${node.questionDate}
						</div>
					</div>
			        	<#if statusQueries = "1">
							<#if node.publicationStatus = "1">
								<div class="ico publicar" style="margin-top: -28px;"/>
							<#else>
								<div class="ico publicar-disabled" style="margin-top: -28px;"/>
							</#if>	
						<#else>
							<#if stageStatus = "0">
								<input type="button" class="ico editProject" onclick="editConsultPopUp('${node.id}','${node.categoryId}', '${node.author}', '${node.question}')" style="height: 30px; width: 30px; border: none; margin-top: -28px;" disabled/>
								<#if node.publicationStatus = "1">
									<input type="button" class="ico publicar" style="height: 30px; width: 30px; border: none; margin-top: -28px;"/>
								<#else>
									<input type="button" class="ico publicar-disabled" style="height: 30px; width: 30px; border: none; margin-top: -28px;"/>
								</#if>	
								<input type="button" class="ico crearrespuesta-disabled" onclick="answerPopUp('${node.id}')" style="height: 30px; width: 30px; border: none; margin-top: -28px;" disabled/>
								<input type="button" class="ico verrespuesta-disabled" onclick="viewAnswers('${node.id}')" style="height: 30px; width: 30px; border: none; margin-top: -28px;" disabled/>
							<#else>
								<div class="ico editProject" style="margin-top: -28px;" onclick="editConsultPopUp('${node.id}', '${node.categoryId}', '${node.author}', '${node.question}')" />
								<#if node.publicationStatus = "1">
									<div class="ico publicar" style="margin-top: -28px;"/>
								<#else>
									<div class="ico publicar-disabled" style="margin-top: -28px;"/>
								</#if>	
								<div class="ico crearrespuesta" onclick="answerPopUp('${node.id}')" style="margin-top: -28px;" />
							</#if>
						</#if>
	
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
