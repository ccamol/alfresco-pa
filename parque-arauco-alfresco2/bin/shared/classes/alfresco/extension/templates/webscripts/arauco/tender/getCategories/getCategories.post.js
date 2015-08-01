<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');
var idTender= bodyContent.idTender ? bodyContent.idTender : null;
var EQUALS_TO = 0;
var resultCat = CategoriesSrv.getAll();
var categoryTenderFilter = new CategoryTenderFilter();
categoryTenderFilter.tender.exact(idTender, EQUALS_TO);
var flag=1;
var resultCatTend = CategoryTendersSrv.getListByFilter(categoryTenderFilter);
var categoryCol=[];


for (var a = 0; a < resultCat.result.size(); a++) {
	flag=1;
	
	for (var i = 0; i < resultCatTend.result.size(); i++) {
//		logger.log("categoria: "+resultCat.result.get(a).id +"catecoria tend"+resultCat.result.get(a).id);
		if (resultCat.result.get(a).id+"" == resultCatTend.result.get(i).category.id+"") {
			flag=0;
		}
	}
	if (flag==1){
		categoryCol.push(resultCat.result.get(a));
	}
}
model.resultSet = categoryCol;