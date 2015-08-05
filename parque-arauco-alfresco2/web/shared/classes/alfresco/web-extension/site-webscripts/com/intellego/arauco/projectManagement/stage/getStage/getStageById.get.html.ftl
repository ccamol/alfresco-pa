<input type= "text" id="firstValue" value ="${resultSet[0].id}" style="display:none !important">
<#list resultSet as node>
	<#if node.stageStatus?exists>
		<#if node.stageStatus == "0">
		<#if node.subStages == "">
			<div class="StageList">
				<input type="button" id="stage${node.id}" name="name${node.id}" class="stageButton${node.stageStatus}" onclick="selectProject(${node.id});"/>
					<span title="Abrir Etapa">
						<img style="width:22px !important; height:22px !important;" src="/share/bootstrap/img/ico-habilitado.png" onclick="openStage(${node.id});" />
					</span>
				<label for="name${node.id}">${node.stageName} </label>
					<#list resultSet as nodeSub>
							<#if node.idStage == nodeSub.subStages>
							<div class="subStageList">
								<input type="button" id="stage${nodeSub.id}" name="name${nodeSub.id}" class="subStageButton${nodeSub.stageStatus}" onclick="selectProject(${nodeSub.id});"/>
									<span title="Abrir Etapa">
										<img style="width:22px !important; height:22px !important;" src="/share/bootstrap/img/ico-habilitado.png" onclick="openStage(${nodeSub.id});" />
									</span>
								<label for="name${nodeSub.id}">${nodeSub.stageName} </label>
							</div>	
						</#if>
					</#list>
				</div>				
			</#if>	
		</#if>
		
		<#if node.stageStatus == "1">
			<#if node.subStages == "">
				<div class="StageList">
					<input type="button" id="stage${node.id}" name="name${node.id}" class="stageButton${node.stageStatus}" onclick="selectProject(${node.id});"/>
						<span title="Cerrar Etapa">
							<img style="width:16px !important; height:16px !important;" src="/share/img/stage/close.png" onclick="closeStage(${node.id});" />
						</span>
					<label for="name${node.id}">${node.stageName} </label>
						<#list resultSet as nodeSub>
							<#if node.idStage == nodeSub.subStages>
								<div class="subStageList">
									<input type="button" id="stage${nodeSub.id}" name="name${nodeSub.id}" class="subStageButton${nodeSub.stageStatus}" onclick="selectProject(${nodeSub.id});"/>
										<span title="Cerrar Etapa">
											<img style="width:16px !important; height:16px !important;" src="/share/img/stage/close.png" onclick="closeStage(${nodeSub.id});" />
										</span>
									<br>
									<label for="name${nodeSub.id}">${nodeSub.stageName} </label>
								</div>	
							</#if>
						</#list>
				</div>
			</#if>	
		</#if>
		
		<#if node.stageStatus == "2">
				<#if node.subStages == "">
					<div class="StageList">
						<input type="button" id="stage${node.id}" name="name${node.id}" class="stageButton${node.stageStatus}" onclick="selectProject(${node.id});"/>
							<span title="Abrir Etapa">
								<img style="width:22px !important; height:22px !important;" src="/share/bootstrap/img/ico-habilitado.png" onclick="openStage(${node.id});" />
							</span>
						<label for="name${node.id}">${node.stageName} </label>
					<#list resultSet as nodeSub>
						<#if node.idStage == nodeSub.subStages>
							<div class="subStageList">
								<input type="button" id="stage${nodeSub.id}" name="name${nodeSub.id}" class="stageButton${nodeSub.stageStatus}" onclick="selectProject(${nodeSub.id});"/>
									<span title="Abrir Etapa">
										<img style="width:22px !important; height:22px !important;" src="/share/bootstrap/img/ico-habilitado.png" onclick="openStage(${nodeSub.id});" />
									</span>
								<br>
								<label for="name${nodeSub.id}">${nodeSub.stageName} </label>
							</div>	
						</#if>
					</#list>
				</div>
			</#if>
		</#if>
	</#if>
</#list>
