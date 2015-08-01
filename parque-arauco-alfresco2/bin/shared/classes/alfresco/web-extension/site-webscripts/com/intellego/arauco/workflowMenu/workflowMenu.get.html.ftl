<#--
      The included content will automatically have the same parameters as this template.
      In other words have access to the node and its content.

	<#include "${viewer}"/>

-->

<head>

<style>

.workflowHeader{
	color: rgb(255, 255, 255); 
	height: 35px; 
	line-height: 23px; 
	text-shadow: 1px 1px 0px rgb(51, 51, 51); 
	background-image: url("/share/bootstrap/img/bg-title-dashlet.png") !important;
}

</style>

</head>

<body>
	<input id="status" name="status" value="${status}" type="hidden" />
	<input id="userTicket" name="userTicket" value="${ticket}" type="hidden" />
	<div id="container">
		<div class="container-fluid">
			<div class="row-fluid">
				<div class="span3">
				<div class="well sidebar-nav">
            <ul class="nav nav-list">
              <li class="nav-header workflowHeader">Tareas</li>
              <a href="#"><li id="inbox" >Bandeja de entrada</li></a>
              <a href="#"><li id="sent">Enviadas</li></a>
              <li class="nav-header workflowHeader">Vencimiento:</li>
              <a href="#"><li id="expired">Vencidas</li></a>
              <a href="#"><li id="toExpired">Por vencer</li></a>
            </ul>
          </div><!--/.well -->
				
				</div>
				<div class="span9 back">
				<div id="workFlowContainer">
			</div>
			<div id="search_wait" style="display:none"></div>
				</div>
			</div>
		</div>	</div>
</body>	
</html>