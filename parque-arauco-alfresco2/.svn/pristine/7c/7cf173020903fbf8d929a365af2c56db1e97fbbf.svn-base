<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');
var idTender= bodyContent.idTender ? bodyContent.idTender : null;
var publicationStatus= bodyContent.publicationStatus ? bodyContent.publicationStatus : null;

var CONTAINS = 8;
var EQUALS_TO = 0;
var question = new Question();
var questionObject = new Question();
var questionFilter = QuestionFilter();
var resultSet = null;

if(idTender !== null){
	questionFilter.tender.exact(idTender,EQUALS_TO);
	var questions = QuestionSrv.getListByFilter(questionFilter);
	if(questions.status > -1){
		for ( var i = 0; i < questions.result.size(); i++) {
			question = questions.result.get(i);
			questionObject.id = question.id;
			questionObject.topicTitle = question.topicTitle;
			questionObject.category = question.category;
			questionObject.tender = question.tender;
			questionObject.author = question.author;
			questionObject.question = question.question;
			questionObject.description = question.description;
			questionObject.status = question.status;
			questionObject.publicationStatus = publicationStatus;
			questionObject.questionDate = question.questionDate;
			resultSet = QuestionSrv.addOrUpdate(questionObject);
			if(resultSet.status > -1){
				model.resultSet = resultSet.status;
			}else{
				model.resultSet = null;
			}
		}
	}else{
		model.resultSet = -1;
	}
}else{
	model.resutlSet = -1;
}

