<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');

var idTender= bodyContent.idTender ? bodyContent.idTender : null;
var author= bodyContent.author ? bodyContent.author : null;
var question= bodyContent.question ? bodyContent.question : null;
var category= bodyContent.category ? bodyContent.category : null;
var questionDate= bodyContent.questionDate ? bodyContent.questionDate : null;
var status= bodyContent.status ? bodyContent.status : null;
var publicationStatus= bodyContent.publicationStatus ? bodyContent.publicationStatus : null;
var id= bodyContent.id ? bodyContent.id : null;

//logger.log(questionDate + "		----------------- Date");
var questionObj = new Question();
var questionObject = new Question();

if(id == null){
	if(idTender !== null && category !== null && author !== null
			&& question !== null && questionDate !== null && status !== null
			&& status !== null && publicationStatus !== null){

		questionObj.tender = TendersSrv.getById(idTender).result;
		questionObj.category = CategoriesSrv.getById(category).result;
		questionObj.author = author;
		questionObj.question = question;
		questionObj.status = status;
		questionObj.publicationStatus = publicationStatus;
		questionObj.questionDate = formatDate(questionDate);
		var result = QuestionSrv.add(questionObj);
		if(result.status > -1){
			model.resultSet = result;
		}else{
			model.resultSet = null;
		}
	}else{
		model.resultSet = null;
	}
}else{
	questionObject = QuestionSrv.getById(id).result;
	questionObj.id = questionObject.id;
	questionObj.tender = questionObject.tender;
	questionObj.category = CategoriesSrv.getById(category).result;
	questionObj.author = questionObject.author;
	questionObj.question = questionObject.question;
	questionObj.status = questionObject.status;
	questionObj.publicationStatus = questionObject.publicationStatus;
	questionObj.questionDate = questionObject.questionDate;
	var result = QuestionSrv.addOrUpdate(questionObj);
	if(result.status > -1){
		model.resultSet = result;
	}else{
		model.resultSet = null;
	}
}

function formatDate(text){
	var dateValues = text.split("/");
	return new Date(dateValues[2],dateValues[1]-1,dateValues[0], dateValues[3],dateValues[4],4,567);
}