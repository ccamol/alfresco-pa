<#list resultSet as node>
<#if node.stageStatus?exists>
	<#if node.stageStatus == "0">
	<div class="StageList">
		<input type="button" id="stage${node.id}" name="name${node.id}" class="stageButton${node.stageStatus}" onclick="selectProject('${node.id}', '${node.idStage}');"/>
		<label for="name${node.id}">${node.name} </label>
	</div>
	<#else>
	</#if>
	<#if node.stageStatus == "1">
		<div class="StageList">
		<input type="button" id="stage${node.id}" name="name${node.id}" class="stageButton${node.stageStatus}" onclick="selectProject('${node.id}', '${node.idStage}');"/>
		<span title="Cerrar Etapa">
		<img style="width:16px !important; height:16px !important;" src="/share/img/stage/close.png" onclick="closeStageFinal('${node.id}', '${node.idStage}');" />
		</span>
		<label for="name${node.id}">${node.name} </label>
		
	</div>
	<#else>
	</#if>
	<#if node.stageStatus == "2">
		<div class="StageList">
		<input type="button" id="stage${node.id}" name="name${node.id}" class="stageButton${node.stageStatus}" onclick="selectProject('${node.id}', '${node.idStage}');"/>
		<label for="name${node.id}">${node.name} </label>
	</div>
	<#else>
	</#if>
<#else>
</#if>
</#list>