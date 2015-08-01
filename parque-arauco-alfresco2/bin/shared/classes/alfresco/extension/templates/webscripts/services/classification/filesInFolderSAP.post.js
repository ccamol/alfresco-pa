<import resource="classpath:alfresco/extension/objectModel.js">

var bodyContent = eval('(' + requestbody.content + ')');

var parent= bodyContent.parent ? bodyContent.parent : null;
var nodeType= bodyContent.nodeType ? bodyContent.nodeType : null;
var nodeId= bodyContent.nodeId ? bodyContent.nodeId : null;
var arrayResultSet=new Array();

var counter =0;
var query = null;
var resultSet= null;

if(nodeType!=null && nodeId!=null){
	
	var entryPoint = new EntryPoint();
	entryPoint.nodeType = nodeType;
	entryPoint.nodeId = nodeId.replace(".", "");
//	logger.log("ENTRY POINT NODE ID" + entryPoint.nodeId);
	
	var childrens = ClassificationService.documentsInEntryPoint(entryPoint);

	
	for(var i=0;i<childrens.result.size();i++){
		query='@sys\\:node-uuid:' + childrens.result.get(i);
		resultSet= search.luceneSearch(query);
		if(resultSet.length>0){
			arrayResultSet[counter]=resultSet[0];
			counter++;
		}
	}
}

model.resultSet=arrayResultSet;







