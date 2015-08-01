<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');
var idTender= bodyContent.idTender ? bodyContent.idTender : null;
var EQUALS_TO = 0;
var categoryTenderFilter = new CategoryTenderFilter();
categoryTenderFilter.tender.exact(idTender, EQUALS_TO);
var resultCatTend = CategoryTendersSrv.getListByFilter(categoryTenderFilter);
model.resultSet = resultCatTend.result;

