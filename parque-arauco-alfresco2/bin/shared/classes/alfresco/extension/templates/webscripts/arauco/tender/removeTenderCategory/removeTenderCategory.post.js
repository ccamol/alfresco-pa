<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');
var idTenderCategory= bodyContent.idTenderCategory ? bodyContent.idTenderCategory : null;
var categoryTenderObject = CategoryTendersSrv.getById(idTenderCategory);
model.resultSet  = CategoryTendersSrv.remove(categoryTenderObject.result);