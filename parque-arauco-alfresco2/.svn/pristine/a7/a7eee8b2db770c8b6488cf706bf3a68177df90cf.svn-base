<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
<import resource="classpath:alfresco/extension/objectModel.js">

var query="";
var node="";
var importantDucument = new ImportantDucument();
var nodes = [];
var termsName = new Terms();
var userAlfresco = person.properties.userName;
//logger.log("Enter GetImportantDocument, user: "+userAlfresco);
termsName.add(userAlfresco);
var bodyContent = eval('(' + requestbody.content + ')');
var nodeType= bodyContent.nodeType ? bodyContent.nodeType : null;
var idType= bodyContent.idType ? bodyContent.idType : null;
var importantDocumentFilter = new ImportantDocumentFilter();
var EQUALS_TO = 0;

if(idType!=null && nodeType!=null){

	importantDocumentFilter.idType.exact(idType, EQUALS_TO);
	importantDocumentFilter.nodeType.exact(nodeType, EQUALS_TO);
	importantDocumentFilter.userAlfresco.containsMultiple(termsName);


}
var importantDocuments = ImportantDucumentsService.getListByFilter(importantDocumentFilter);
//logger.log("======================GetImportantDocument===========================");
//logger.log("===================CTL--UUID========================");

//for each (importantDucument in importantDocuments.result.get()) {

//logger.log(importantDucument.get(0));
//}


for (var i = 0; i < importantDocuments.result.size(); i++) {

//	logger.log(importantDocuments.result.get(i).uuid);
	nodeRef = "workspace://SpacesStore/"+importantDocuments.result.get(i).uuid;

	node = search.findNode(nodeRef);
	if(node!==null){
		nodes.push(node);
	}
}

model.resultSet = nodes;