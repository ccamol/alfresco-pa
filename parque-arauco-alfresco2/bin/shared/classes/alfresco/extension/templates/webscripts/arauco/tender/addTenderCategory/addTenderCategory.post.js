<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');
var idTender= bodyContent.idTender ? bodyContent.idTender : null;
var idCategory= bodyContent.idCategory ? bodyContent.idCategory : null;
//logger.log("idCategory: "+ idCategory + "idTender: "+idTender);

var categoryTender = new CategoryTender();

var categoryObject = CategoriesSrv.getById(idCategory);
var TenderObject= TendersSrv.getById(idTender);


categoryTender.category = categoryObject.result;
categoryTender.tender = TenderObject.result;

var result = CategoryTendersSrv.add(categoryTender);
model.resultSet  = result;