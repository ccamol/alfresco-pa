<html>
<head>
</head>
<div class="modal-body">
<table cellpadding="0" cellspacing="0" border="0" class="dataTableClass table table-striped table-bordered dataTableFuntion" id="AnswersForConsult">
	<thead>
	<tr>
	<th></th>
	</tr>
	</thead>
	<#list resultSet as node> 	
	<tr>
	<td>
	<#if node.answer?exists>
		<div class="col-md-12 column">
				<div class="row clearfix">
					<div class="col-md-12 column">
						<div class="row clearfix">
							<div class="col-md-2 column">
								<label>Respuesta:</label>
							</div>
							<div class="col-md-10 column" style="word-wrap: break-word;">
								${node.answer}
							</div>
						</div>
			        	<div class="row clearfix">	
							<div class="col-md-4 column">
								${node.author} - ${node.answerDate}
							</div>
						</div>
					</div>	
				</div>
		</div>
	</#if>	
	 </td>
	</tr>
	</#list>
</table>
</div>		

<html>
