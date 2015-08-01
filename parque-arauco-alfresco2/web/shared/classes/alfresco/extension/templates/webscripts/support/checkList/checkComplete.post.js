<import resource="classpath:alfresco/extension/objectModel.js">
var bodyContent = eval('(' + requestbody.content + ')');

var nodeType= bodyContent.nodeType ? bodyContent.nodeType : null;
var nodeId= bodyContent.nodeId ? bodyContent.nodeId : null;
model.resultSet=null;

if(nodeType!=null && nodeId!=null){
	var response = CheckListService.checkComplete(parseInt(nodeType), parseInt(nodeId));
//	logger.log("response: "+response.status);
	if(response.status>-1){
		model.resultSet=response.result;
	}else{
		model.resultSet == null;
	}
}





