<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
<import resource="classpath:alfresco/extension/objectModel.js">
var  nodeRef="";
var node ="";
var termsName = new Terms();
var bodyContent = eval('(' + requestbody.content + ')');
var importantDocuments=null;
var userAlfresco=null;


var EQUALS_TO = 0;

var nodeType= bodyContent.nodeType ? bodyContent.nodeType : null;
var uuid= bodyContent.uuid ? bodyContent.uuid : null;
var idType= bodyContent.idType ? bodyContent.idType : null;



var ImportantDucument = new ImportantDucument();
var importantDocumentFilter = new ImportantDocumentFilter();
var nodeTypeObject = NodeTypesService.getById(nodeType);
userAlfresco= person.properties.userName;

if(uuid!=null && nodeType!=null && idType!=null){



	importantDocumentFilter.idType.exact(idType, EQUALS_TO);
	importantDocumentFilter.nodeType.exact(nodeType, EQUALS_TO);
	termsName.add(uuid);
	importantDocumentFilter.uuid.containsMultiple(termsName);
	importantDocuments = ImportantDucumentsService.getListByFilter(importantDocumentFilter);

}


if(importantDocuments.result.size()<1){
	ImportantDucument.idType = idType;
	ImportantDucument.nodeType = nodeTypeObject.result;
	ImportantDucument.uuid = uuid;
	if (userAlfresco!==null) {
		ImportantDucument.userAlfresco = userAlfresco;
	}
	model.resultSet = ImportantDucumentsService.addOrUpdate(ImportantDucument);
}else{
	model.resultSet = "0";
}
