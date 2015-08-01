<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var bodyContent = eval('(' + requestbody.content + ')');

var idCategory= bodyContent.idCategory ? bodyContent.idCategory : null;
var idTender= bodyContent.idTender ? bodyContent.idTender : null;
var idTypeStage = bodyContent.idTypeStage ? bodyContent.idTypeStage : null;

var userAlfresco = person.properties.userName;
var questionFilter = QuestionFilter();
var EQUALS_TO = 0;
var CONTAINS = 8;
var status=1;
var NO_EQUALS_TO = 9;
var consultsArray=[];
var resultSet =null;
if(idTender !== null){
	var Categories = CategoriesSrv.getById(idCategory);
	questionFilter.tender.exact(idTender, EQUALS_TO);
	questionFilter.author.exact(userAlfresco, EQUALS_TO);
//	questionFilter.status.exact(idTypeStage, EQUALS_TO);
	questionFilter.category.exact(Categories.result.id, EQUALS_TO);
	resultSet = QuestionSrv.getListByFilter(questionFilter);
	if(resultSet.status > -1){
		for (var i = 0; i < resultSet.result.size(); i++) {
//			logger.log(resultSet.result.get(i).author);
			consultsArray.push(resultSet.result.get(i));
		}


	}else{
		model.resultSet = null;
	}

	questionFilter.author.exact(userAlfresco, NO_EQUALS_TO);
	questionFilter.publicationStatus.exact(status, EQUALS_TO);
	resultSet = QuestionSrv.getListByFilter(questionFilter);
	if(resultSet.status > -1){

		for (var i = 0; i < resultSet.result.size(); i++) {
//			logger.log(resultSet.result.get(i).author);
			consultsArray.push(resultSet.result.get(i));
		}


	}else{
		model.resultSet = null;
	}


	model.resultSet = consultsArray;




}else{
	model.resultSet = null;
}
