<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');


var answer= bodyContent.answer ? bodyContent.answer : null;
var author= bodyContent.author ? bodyContent.author : null;
var consultId= bodyContent.consultId ? bodyContent.consultId : null;
var answerDate= bodyContent.answerDate ? bodyContent.answerDate : null;

var answerObj = new Answer();

if(answer !== null && author !== null && consultId !== null && answerDate !== null){

	answerObj.question = QuestionSrv.getById(consultId).result;
	answerObj.author = author;
	answerObj.answer = answer;
	answerObj.answerDate = formatDate(answerDate);
	var result = AnswerSrv.add(answerObj);
	if(result.status > -1){
		model.resultSet = result;
	}else{
		model.resultSet = null;
	}
}else{
	model.resultSet = null;
}


function formatDate(text){
	var dateValues = text.split("/");
	return new Date(dateValues[2],dateValues[1]-1,dateValues[0], dateValues[3],dateValues[4],dateValues[5]);
}