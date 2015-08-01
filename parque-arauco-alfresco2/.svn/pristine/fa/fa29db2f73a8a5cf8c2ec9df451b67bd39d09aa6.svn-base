<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');
var idSharedDocument= bodyContent.idSharedDocument ? bodyContent.idSharedDocument : null;

var thirdPartySharedDocument = ThirdPartySharedDocumentsService.getById(idSharedDocument);
ThirdPartySharedDocumentsService.remove(thirdPartySharedDocument.result);

