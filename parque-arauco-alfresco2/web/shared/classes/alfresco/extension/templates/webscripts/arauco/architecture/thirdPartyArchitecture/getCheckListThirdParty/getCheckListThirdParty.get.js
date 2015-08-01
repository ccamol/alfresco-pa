<import resource="classpath:alfresco/extension/objectModel.js">

var nodeType= args.nodeType ? args.nodeType : null;
var nodeId= args.nodeId ? args.nodeId : null;
var external="2";
//logger.log("NODETYPE: " + nodeType);
//logger.log("NODEID: " + nodeId);

model.resultSet=null;

if(nodeType!=null && nodeId!=null){
	var response = CheckListsOperatorService.checkDocuments(parseInt(nodeType), parseInt(nodeId),parseInt(external));
	if(response.status>-1){
		model.resultSet=response.result;
	}
}





