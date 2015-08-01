<import resource="classpath:alfresco/extension/objectModel.js">

var uuid= args.uuid ? args.uuid : null;
var nodeType= args.nodeType ? args.nodeType : null;
var nodeId= args.nodeId ? args.nodeId : null;
var count = 0;
var response = null;

if(uuid!=null && nodeType!=null && nodeId!=null){
	if(nodeType == 2){
		response = EngineeringProjectSrv.getById(nodeId);
		nodeId = response.result.mall.id;
	}
	if(nodeType == 3){
		response = SucSrv.getById(nodeId);
		nodeId = response.result.mall.id;
	}
	if(nodeType == 5 || nodeType == 6){
		logger.log(nodeId + "   ------------------");
		var idproject = ProjectStagesSrv.getById(nodeId);
		response = ArchitectureProjectSrv.getById(idproject.result.idProject);
		nodeId = response.result.mall.id;
	}
	if(nodeType == 7){
		var idprojectSuc = ProjectStagesSrv.getById(nodeId).result.idProject;
		var idsuc = SucProjectSrv.getById(idprojectSuc);
		response = SucSrv.getById(idsuc.result.sucEntity);
		nodeId = response.result.mall.id;
	}
	var classification = null;
	classification = ClassificationService.getByUuid(uuid);
	if(classification.status>-1){
		var entryPoint = new EntryPoint();
		entryPoint.nodeType=9;
		entryPoint.nodeId=nodeId;
		var response = ClassificationService.count(entryPoint, classification.result, true, false);
		if(response.status>-1){
			count = response.result;
		}
	}
}
model.count=count;







