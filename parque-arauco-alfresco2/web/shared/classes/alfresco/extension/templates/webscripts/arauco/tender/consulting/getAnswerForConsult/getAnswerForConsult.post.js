<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var bodyContent = eval('(' + requestbody.content + ')');

var idConsult= bodyContent.idConsult ? bodyContent.idConsult : null;
var answerFilter = AnswerFilter();
var EQUALS_TO = 0;

if(idConsult !== null){
	answerFilter.question.exact(idConsult, EQUALS_TO);
	var resultSet = AnswerSrv.getListByFilter(answerFilter);
	if(resultSet.status > -1){
		model.resultSet = resultSet;
	}else{
		model.resultSet = null;
	}

}else{
	model.resultSet = null;
}