<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
<import resource="classpath:alfresco/extension/objectModel.js">
//logger.log("CTL -1 entro a alfresco");
var bodyContent = eval('(' + requestbody.content + ')');


var uuid= bodyContent.uuid ? bodyContent.uuid : null;
var idType= bodyContent.idType ? bodyContent.idType : null;
var nodeType= bodyContent.nodeType ? bodyContent.nodeType : null;


var importantDucument = new ImportantDucument();
var importantDocumentFilter = new ImportantDocumentFilter();
var termsName = new Terms();
//logger.log("=================================================");
//logger.log("===================CTL--UUID========================");
//logger.log("idtype es: "+ idType+" nodeType es: "+ nodeType);
termsName.add(uuid);


importantDocumentFilter.idType.exact(idType, EQUALS_TO);
importantDocumentFilter.nodeType.exact(nodeType, EQUALS_TO);
importantDocumentFilter.uuid.containsMultiple(termsName);
//logger.log("===================CTL--UUID  2========================");

var removeImportantDocument = ImportantDucumentsService.getListByFilter(importantDocumentFilter);

//logger.log("===================CTL--UUID  3========================");
model.resultSet = ImportantDucumentsService.remove(removeImportantDocument.result.get(0));



//model.resultSet="";



