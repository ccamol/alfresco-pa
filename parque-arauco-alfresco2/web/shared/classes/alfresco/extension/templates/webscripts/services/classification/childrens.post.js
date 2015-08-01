<import resource="classpath:alfresco/extension/objectModel.js">

var bodyContent = eval('(' + requestbody.content + ')');

var parent= bodyContent.parent ? bodyContent.parent : null;
var entryPointType= bodyContent.entryPointType ? bodyContent.entryPointType : null;
var entryPointId= bodyContent.entryPointId ? bodyContent.entryPointId : null;

entryPointId = entryPointId.replace(".","")
var childrens = null;

//logger.log("CTL 1: ");
if(parent!=null && entryPointType!=null && entryPointId!=null){
	
	var response = ClassificationService.getByUuid(parent);
	childrens = ClassificationService.children(response.result, false);
	for(var i=0;i<childrens.result.size();i++){
//		logger.log("Node uuid: " + childrens.status);
//		logger.log("Node uuid: " + childrens.result.uuid);
//		logger.log("Node name: " + childrens.result.name);
//		logger.log("Node description: " + childrens.result.description);
	}
}

//logger.log("CTL 3: ");
model.resultSet=childrens;







