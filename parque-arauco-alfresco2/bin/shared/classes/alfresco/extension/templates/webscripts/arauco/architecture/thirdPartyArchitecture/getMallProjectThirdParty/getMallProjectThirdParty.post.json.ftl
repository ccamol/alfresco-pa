[
<#list resultSet as node>

				<#list resultSetStatus as nodeStage>
				
				<#if nodeStage.stageStatus == 1 || nodeStage.stageStatus == 0>
				<#if nodeStage.idProject == node.id && nodeStage.idProjectType == node.projectType.id>
	{
	<#if node.id?exists>
	"id": "${node.id?string?replace(".", "")}",
	<#else>
	"id" : "",
	</#if>

	<#if node.name?exists>
	"name": "${node.name}",
	<#else>
	"name" : "",
	</#if>

	<#if node.description?exists>
	"description": "${node.description?replace("\"","'")?replace("\n"," ")?replace("\t"," ")}",
	<#else>
	"description" : "",
	</#if>

	<#if node.mall.id?exists>
	"MallEntityId": "${node.mall.id?string?replace(".", "")}",
	<#else>
	"MallEntityId" : "",
	</#if>
	
	<#if node.mall.name?exists>
	"MallEntityName": "${node.mall.name}",
	<#else>
	"MallEntityName" : "",
	</#if>
	<#if node.mall.id?exists>
	"idMall": "${node.mall.id?string?replace(".", "")}",
	<#else>
	"idMall" : "",
	</#if>
	<#if node.projectType.name?exists>
	"projectTypeName": "${node.projectType.name}",
	<#else>
	"projectTypeName" : "",
	</#if>
	
	<#if node.projectStatusEntity.name?exists>
	"projectStatus": "${node.projectStatusEntity.name}",
	<#else>
	"projectStatus" : "",
	</#if>
	<#if node.mall.name?exists>
	"nameMall": "${node.mall.name}",
	<#else>
	"nameMall" : "",
	</#if>
				<#if nodeStage.id?exists>
				"stageId": "${nodeStage.id?string?replace(".", "")}",
				<#else>
				"stageId" : "",
				</#if>
				<#if nodeStage.stageStatus?exists>
				"stageStatus": "${nodeStage.stageStatus}",
				<#else>
				"stageStatus" : "",
				</#if>
				
					<#if nodeStage.stageType.name?exists>
				"stageName": "${nodeStage.stageType.name}",
				<#else>
				"stageName" : "",
				</#if>
				
				        
	<#if node.mall.idMallSap?exists>
	"idMallSap": "${node.mall.idMallSap}",
	<#else>
	"idMallSap" : "",
	</#if>
	},
			
				
				
				<#else>
				</#if>
				
				<#else>
				
				</#if>
				
		        </#list>



</#list>
{

	"id" : "",
	
	"name" : "",
	"description" : "",
	"sucEntityId" : "",
	
	"sucEntityName" : "",
	"wareHouseM2" : "",
	
	"terraseM2" : "",
	
	"sucType" : "",
	
	"status" : "",
	
	"contractDate" : "",

	"escaparateM" : "",
	
	"sucEntityDescription" : "",
	
	"idMall" : "",
	
	"projectTypeName" : "",
	
	"projectStatus" : "",
	
	"nameMall" : "",
				
				"stageId" : "ctl-1",
				"stageStatus" : "",
					
				"stageName" : "",
				        
	
	"idMallSap" : ""


}

]