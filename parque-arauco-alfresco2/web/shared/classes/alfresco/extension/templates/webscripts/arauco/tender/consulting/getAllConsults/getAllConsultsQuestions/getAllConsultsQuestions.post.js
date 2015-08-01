<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var bodyContent = eval('(' + requestbody.content + ')');
var idCategory= bodyContent.idCategory ? bodyContent.idCategory : null;
var idTender= bodyContent.idTender ? bodyContent.idTender : null;
var status= bodyContent.status ? bodyContent.status : null;
var stageStatus= bodyContent.stageStatus ? bodyContent.stageStatus : null;
var questionFilter = QuestionFilter();
var EQUALS_TO = 0;
if(idTender !== null){
	var Categories = CategoriesSrv.getById(idCategory);
	questionFilter.tender.exact(idTender, EQUALS_TO);
//	questionFilter.status.exact(status, EQUALS_TO);
	questionFilter.category.exact(Categories.result.id, EQUALS_TO);
	var resultSet = QuestionSrv.getListByFilter(questionFilter, "id", true);
	if(resultSet.status > -1){
		model.resultSet = resultSet;
	}else{
		model.resultSet = null;
	}

}else{
	model.resultSet = null;
}

