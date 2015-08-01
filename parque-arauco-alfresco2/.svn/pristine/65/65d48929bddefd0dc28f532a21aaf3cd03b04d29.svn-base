<import resource="classpath:alfresco/extension/objectModel.js">

var nodeType= args.nodeType ? args.nodeType : null;
var nodeId= args.nodeId ? args.nodeId : null;
var idProject= args.idProject ? args.idProject : null;
var stageStatus = args.stageStatus ? args.stageStatus : null;
var external="1";
//logger.log("NODETYPE: " + nodeType);
//logger.log("NODEID: " + nodeId);

model.typeNode=nodeType;
model.idnode=nodeId;
model.idProject = idProject;

if(nodeType!=null && nodeId!=null){
	var response = CheckListsOperatorService.checkDocuments(parseInt(nodeType), parseInt(nodeId),parseInt(external));
	if(response.status>-1){
		model.resultSet=response.result;
	}
}

if(stageStatus !== null && stageStatus !== '' && stageStatus !== undefined){
	model.stageStatus = parseInt(stageStatus);
}else{
	model.stageStatus = -1;
}




