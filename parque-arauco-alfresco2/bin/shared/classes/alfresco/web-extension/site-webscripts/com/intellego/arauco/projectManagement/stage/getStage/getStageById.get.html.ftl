<input type= "text" id="firstValue" value ="${resultSet[0].id}" style="display:none !important">
<#list resultSet as node>
<#if node.stageStatus?exists>
	<#if node.stageStatus == "0">
	<div class="StageList">
		<input type="button" id="stage${node.id}" name="name${node.id}" class="stageButton${node.stageStatus}" onclick="selectProject(${node.id});"/>

		<span title="Abrir Etapa">
			<img style="width:22px !important; height:22px !important;" src="/share/bootstrap/img/ico-habilitado.png" onclick="openStage(${node.id});" />
		</span>
		<label for="name${node.id}">${node.stageName} </label>
	</div>
	<#else>
	</#if>
	<#if node.stageStatus == "1">
		<div class="StageList">
		<input type="button" id="stage${node.id}" name="name${node.id}" class="stageButton${node.stageStatus}" onclick="selectProject(${node.id});"/>
		<span title="Cerrar Etapa">
		<img style="width:16px !important; height:16px !important;" src="/share/img/stage/close.png" onclick="closeStage(${node.id});" />
		</span>
		<label for="name${node.id}">${node.stageName} </label>
		
	</div>
	<#else>
	</#if>
	<#if node.stageStatus == "2">
		<div class="StageList">
		<input type="button" id="stage${node.id}" name="name${node.id}" class="stageButton${node.stageStatus}" onclick="selectProject(${node.id});"/>
		<span title="Abrir Etapa">
		<img style="width:22px !important; height:22px !important;" src="/share/bootstrap/img/ico-habilitado.png" onclick="openStage(${node.id});" />
		</span>
		<label for="name${node.id}">${node.stageName} </label>
	</div>
	<#else>
	</#if>
<#else>
</#if>
</#list>
